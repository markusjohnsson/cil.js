using Microsoft.CSharp;
using MsieJavaScriptEngine;
using MsieJavaScriptEngine.Helpers;
using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Runtime.CompilerServices;

namespace Braille.TestRunner.Models
{
    public class Tests
    {
        private string workingDir;

        public Tests(string workingDir)
        {
            this.workingDir = workingDir;
        }

        public IEnumerable<TestResult> RunAll()
        {
            foreach (var file in Directory.GetFiles(Path.Combine(workingDir, "Tests"), "*.cs"))
                yield return CompileAndRun(file);
            foreach (var file in Directory.GetFiles(Path.Combine(workingDir, "MonoTests"), "*.cs"))
                yield return CompileAndRun(file);
        }

        public TestResult CompileAndRun(string csFile, bool translateCorlib = true)
        {
            return CompileAndRun(new[] { csFile }, translateCorlib);
        }

        class Ref
        {
            public string path;
            public bool translate = true;
        }

        private object corlibGate = new object();

        public TestResult CompileAndRun(string[] csFiles, bool translateCorlib = true)
        {
            var errors = new List<string>();

            var clrRefs = new List<Ref>();
            var brlRefs = new List<Ref>();

            var corlib = GetCorlibPath();
            var corlibOutput = Path.Combine(workingDir, "corlib.brl.js");

            if (false == translateCorlib)
            {
                lock (corlibGate)
                {
                    // translate corlib only if needed and do it to a separate file
                    if (File.GetLastWriteTime(corlib) > File.GetLastWriteTime(corlibOutput))
                    {
                        CompileJs(corlib, corlibOutput, brlRefs, errors);
                    }
                }
            }

            brlRefs.Add(new Ref { path = corlib, translate = translateCorlib });

            string clrProgramOutputName = null;
            string brlProgramOutputName = null;
            string csProgramFile = null;

            if (csFiles.Length == 1)
            {
                csProgramFile = Path.Combine(workingDir, csFiles[0]);
                brlProgramOutputName = csProgramFile + ".brl.exe";
                clrProgramOutputName = csProgramFile + ".clr.exe";
                CompileAssembly(csProgramFile, brlProgramOutputName, true, clrRefs, errors);
                CompileAssembly(csProgramFile, clrProgramOutputName, false, clrRefs, errors);
            }
            else
            {
                foreach (var csFile in csFiles)
                {
                    if (Path.GetFileName(csFile) == "Program.cs")
                    {
                        csProgramFile = Path.Combine(workingDir, csFile);
                        brlProgramOutputName = csProgramFile + ".brl.exe";
                        clrProgramOutputName = csProgramFile + ".clr.exe";
                        CompileAssembly(csProgramFile, brlProgramOutputName, true, clrRefs, errors);
                        CompileAssembly(csProgramFile, clrProgramOutputName, false, clrRefs, errors);
                    }
                    else
                    {
                        var file = Path.Combine(workingDir, csFile);
                        var brlOutputName = file + ".brl.dll";
                        var clrOutputName = file + ".clr.dll";
                        CompileAssembly(file, brlOutputName, true, clrRefs, errors);
                        CompileAssembly(file, clrOutputName, false, clrRefs, errors);
                        brlRefs.Add(new Ref { path = brlOutputName });
                        clrRefs.Add(new Ref { path = clrOutputName });
                    }
                }
            }

            Debug.Assert(clrProgramOutputName != null);
            Debug.Assert(csProgramFile != null);

            string jsOutput = null, exeOutput = null;

            var success = true;

            if (errors.Any())
            {
                success = false;
                goto DONE;
            }

            var entryPoint = CompileJs(brlProgramOutputName, brlProgramOutputName + ".js", brlRefs, errors);

            if (errors.Any())
            {
                success = false;
                goto DONE;
            }

            int exeExitCode;
            exeOutput = ExecuteExe(clrProgramOutputName, out exeExitCode);

            int jsExitCode;
            jsOutput = ExecuteJs(brlProgramOutputName, translateCorlib ? null : corlibOutput, entryPoint, out jsExitCode, errors);

            if (errors.Any())
            {
                success = false;
                goto DONE;
            }

            if (exeExitCode != jsExitCode)
            {
                success = false;
                errors.Add(string.Format("ERROR: Exit codes not equal (clr: {0} js: {1})", exeExitCode, jsExitCode));
            }

            if (exeOutput != jsOutput)
            {
                success = false;
                //errors.Add(string.Format("ERROR: Outputs not equal\nCLR:\n{0}\nJS:\n{1}", exeOutput, jsOutput));
                errors.Add("ERROR: Outputs not equal");
            }

        DONE:
            return new TestResult
            {
                File = csProgramFile.Substring(workingDir.Length),
                Errors = errors,
                TestSuccess = success,
                JsOutput = !success ? jsOutput : "",
                ClrOutput = !success ? exeOutput : ""
            };
        }

        private string GetCorlibPath()
        {
            return Path.Combine(workingDir, @"..\Braille.Corlib\bin\Debug\mscorlib.dll");
        }

        private string ExecuteExe(string outputName, out int exitCode)
        {
            var process = Process.Start(
                new ProcessStartInfo
                {
                    FileName = outputName,
                    RedirectStandardOutput = true,
                    UseShellExecute = false
                });
            process.WaitForExit(10000);
            var output = process.StandardOutput.ReadToEnd();
            exitCode = process.ExitCode;
            return output;
        }

        private string ExecuteJs(string exeFilePath, string corlibPath, string entryPoint, out int exitCode, List<string> errors)
        {
            string jsOutput = null;
            exitCode = -1;
            using (var jsEngine = new MsieJsEngine(engineMode: JsEngineMode.Auto,
                useEcmaScript5Polyfill: false, useJson2Library: false))
            {
                object exitCodeObj = null;
                try
                {
                    jsEngine.Execute(@"var braille_testlib_output = """";");
                    jsEngine.Execute(@"function braille_test_log(message) { braille_testlib_output += asm0.ToJavaScriptString(message) + ""\r\n""; }");

                    if (corlibPath != null)
                        jsEngine.ExecuteFile(corlibPath);

                    jsEngine.ExecuteFile(exeFilePath + ".js");
                    exitCodeObj = jsEngine.Evaluate(entryPoint + ".entryPoint()");
                }
                catch (JsEngineLoadException e)
                {
                    errors.Add("During loading of JavaScript engine an error occurred.\n" + JsErrorHelpers.Format(e));
                }
                catch (JsRuntimeException e)
                {
                    errors.Add("During execution of JavaScript code an error occurred.\n" + JsErrorHelpers.Format(e));
                }

                if (exitCodeObj == null || exitCodeObj == MsieJavaScriptEngine.Undefined.Value)
                    exitCode = 0;
                else
                    exitCode = (int)(double)exitCodeObj;

                try
                {
                    jsOutput = (string)jsEngine.Evaluate("braille_testlib_output");
                }
                catch
                {
                    errors.Add("Exception while evaluating script output");
                }
            }
            return jsOutput;
        }

        private string CompileJs(string mainAssemblyName, string outputName, List<Ref> refs, List<string> errors)
        {
            try
            {
                var settings = new CompileSettings();

                foreach (var r in refs)
                    settings.AddAssembly(r.path, translate: r.translate);

                settings.AddAssembly(mainAssemblyName, translate: true);

                settings.OutputFileName = outputName;

                settings.OutputILComments = true;

                var compiler = new Compiler(settings);

                var result = compiler.Compile();
                return result.EntryPointAssembly;
            }
            catch (Exception e)
            {
                errors.Add(e.Message + "\n" + e.StackTrace);
            }

            return null;
        }

        private void CompileAssembly(string csFile, string outputName, bool forBraille, List<Ref> refs, List<string> errors)
        {
            var codeProvider = new CSharpCodeProvider();
            var icc = codeProvider.CreateCompiler();

            var parameters = new CompilerParameters();
            parameters.GenerateExecutable = outputName.EndsWith("exe");
            parameters.OutputAssembly = outputName;

            if (forBraille)
                parameters.CoreAssemblyFileName = GetCorlibPath();

            if (refs != null)
            {
                parameters.ReferencedAssemblies.AddRange(refs.Select(r => r.path).ToArray());
            }

            var results = icc.CompileAssemblyFromFileBatch(parameters, new[] { Path.Combine(workingDir, "TestInclude.cs"), csFile });

            if (results.Errors.Count > 0)
            {
                errors.AddRange(
                    results
                        .Errors
                        .OfType<CompilerError>()
                        .Select(
                            error => string.Format("Line number {0}, Error Number: {1}, '{2};",
                                error.Line, error.ErrorNumber, error.ErrorText)));
            }
        }
    }
}