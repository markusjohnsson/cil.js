﻿using Microsoft.CSharp;
using MsieJavaScriptEngine;
using MsieJavaScriptEngine.Helpers;
using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;

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

        public TestResult CompileAndRun(params string[] csFiles)
        {
            List<string> refs = new List<string>();
            refs.Add(@"C:\Users\marku_000\Documents\GitHub\Braille\Braille.Corlib\bin\Debug\mscorlib.dll");

            string programOutputName = null;
            string csProgramFile = null;

            var errors = new List<string>();

            if (csFiles.Length == 1)
            {
                csProgramFile = Path.Combine(workingDir, csFiles[0]);
                programOutputName = csProgramFile + ".exe";
                CompileAssembly(csProgramFile, programOutputName, refs, errors);
            }
            else
            {
                foreach (var csFile in csFiles)
                {
                    if (Path.GetFileName(csFile) == "Program.cs")
                    {
                        csProgramFile = Path.Combine(workingDir, csFile);
                        programOutputName = csProgramFile + ".exe";
                        CompileAssembly(csProgramFile, programOutputName, refs, errors);
                    }
                    else
                    {
                        var file = Path.Combine(workingDir, csFile);
                        var outputName = file + ".dll";
                        CompileAssembly(file, outputName, refs, errors);
                        refs.Add(outputName);
                    }
                }
            }

            Debug.Assert(programOutputName != null);
            Debug.Assert(csProgramFile != null);

            // TODO: we will need to compile two exes since the one that should be converted
            // to JS will have a different mscorlib and won't run on the CLR
            
            var success = true;

            if (errors.Any())
            {
                success = false;
                goto DONE;
            }

            var entryPoint = CompileJs(programOutputName, refs, errors);

            if (errors.Any())
            {
                success = false;
                goto DONE;
            }

            int exeExitCode;
            var exeOutput = ExecuteExe(programOutputName, out exeExitCode);

            int jsExitCode;
            var jsOutput = ExecuteJs(programOutputName, entryPoint, out jsExitCode, errors);

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
                errors.Add(string.Format("ERROR: Outputs not equal\nCLR:\n{0}\nJS:\n{1}", exeOutput, jsOutput));
            }

        DONE:
            return new TestResult
            {
                File = csProgramFile.Substring(workingDir.Length),
                Errors = errors,
                TestSuccess = success
            };
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

        private string ExecuteJs(string exeFilePath, string entryPoint, out int exitCode, List<string> errors)
        {
            string jsOutput = null;
            exitCode = -1;
            try
            {
                using (var jsEngine = new MsieJsEngine(engineMode: JsEngineMode.Auto,
                    useEcmaScript5Polyfill: false, useJson2Library: false))
                {
                    jsEngine.Execute(@"var braille_testlib_output = """";");
                    jsEngine.Execute(@"function braille_test_log(message) { braille_testlib_output += message.toString() + ""\r\n""; }");
                    jsEngine.ExecuteFile(exeFilePath + ".js");
                    object exitCodeObj = jsEngine.Evaluate(entryPoint + ".entryPoint()");

                    if (exitCodeObj == MsieJavaScriptEngine.Undefined.Value)
                        exitCode = 0;
                    else
                        exitCode = (int)(double)exitCodeObj;

                    jsOutput = (string)jsEngine.Evaluate("braille_testlib_output");
                }
            }
            catch (JsEngineLoadException e)
            {
                errors.Add("During loading of JavaScript engine an error occurred.\n" + JsErrorHelpers.Format(e));
            }
            catch (JsRuntimeException e)
            {
                errors.Add("During execution of JavaScript code an error occurred.\n" + JsErrorHelpers.Format(e));
            }
            return jsOutput;
        }

        private string CompileJs(string outputName, List<string> refs, List<string> errors)
        {
            try
            {
                var compiler = new Compiler();
                foreach (var r in refs)
                    compiler.AddAssembly(r);
                compiler.AddAssembly(outputName);
                compiler.OutputFileName = outputName + ".js";
                var result = compiler.Compile();
                return result.EntryPointAssembly;
            }
            catch (Exception e)
            {
                errors.Add(e.Message + "\n" + e.StackTrace);
            }

            return null;
        }

        private void CompileAssembly(string csFile, string outputName, List<string> refs, List<string> errors)
        {
            var codeProvider = new CSharpCodeProvider();
            var icc = codeProvider.CreateCompiler();

            var parameters = new CompilerParameters();
            parameters.GenerateExecutable = outputName.EndsWith("exe");
            parameters.OutputAssembly = outputName;
            parameters.CoreAssemblyFileName = @"C:\Users\marku_000\Documents\GitHub\Braille\Braille.Corlib\bin\Debug\mscorlib.dll";

            if (refs != null)
            {
                parameters.ReferencedAssemblies.AddRange(refs.ToArray());
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