using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using MsieJavaScriptEngine;
using MsieJavaScriptEngine.Helpers;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reactive.Linq;

namespace CilJs.TestRunner.Models
{
    public class Tests
    {
        private string workingDir;

        public Tests(string workingDir)
        {
            this.workingDir = workingDir;
        }

        class Ref
        {
            public string path;
            public bool translate = true;
        }

        private static string jsCorlib;

        private static readonly object corlibGate = new object();

        public TestResult CompileAndRun(string csFile, bool writeToFile)
        {
            var errors = new List<string>();

            var clrRefs = new List<Ref>();
            var ciljsRefs = new List<Ref>();

            var corlib = GetCorlibPath();
            var corlibOutput = Path.Combine(workingDir, "corlib.ciljs.js");

            var timings = new List<Timing>();
            var time = Stopwatch.StartNew();

            lock (corlibGate)
            {
                // translate corlib only if it, or the compiler, has been built since last run
                if (!File.Exists(corlibOutput) ||
                     File.GetLastWriteTime(corlib) > File.GetLastWriteTime(corlibOutput) ||
                     File.GetLastWriteTime(typeof(Compiler).Assembly.Location) > File.GetLastWriteTime(corlibOutput))
                {
                    CilToJavaScript(corlib, null, corlibOutput, null, ciljsRefs, errors, outputRuntimeJs: true);
                    
                    jsCorlib = File.ReadAllText(corlibOutput);
                }
                else if (jsCorlib == null)
                {
                    jsCorlib = File.ReadAllText(corlibOutput);
                }
            }

            timings.Add(new Timing("Translate corlib: ", time.ElapsedMilliseconds));

            clrRefs.Add(new Ref { path = typeof(object).Assembly.Location, translate = false });
            ciljsRefs.Add(new Ref { path = corlib, translate = false });

            string clrProgramOutputName = null;
            string ciljsProgramOutputName = null;
            string csProgramFile = null;

            csProgramFile = Path.Combine(workingDir, csFile);
            ciljsProgramOutputName = csProgramFile + ".ciljs.exe";
            clrProgramOutputName = csProgramFile + ".clr.exe";

            var success = true;

            string jsOutput = null;
            string exeOutput = null;

            time.Restart();

            // Compile CLR-version of exe
            using (var programOutput = File.OpenWrite(clrProgramOutputName))
                CSharpToCil(csProgramFile, clrProgramOutputName, clrRefs, programOutput, errors);

            timings.Add(new Timing("Compile C# for CLR: ", time.ElapsedMilliseconds));

            if (errors.Any())
            {
                success = false;
                goto DONE;
            }

            time.Restart();

            int exeExitCode;
            exeOutput = ExecuteExe(clrProgramOutputName, out exeExitCode);

            timings.Add(new Timing("Run on CLR: ", time.ElapsedMilliseconds));

            time.Restart();

            // Compile CilJs-version of exe
            using (var programOutput = new MemoryStream())
            {
                CSharpToCil(csProgramFile, ciljsProgramOutputName, ciljsRefs, programOutput, errors);

                timings.Add(new Timing("Compile C# for ciljs: ", time.ElapsedMilliseconds));

                if (errors.Any())
                {
                    success = false;
                    goto DONE;
                }

                programOutput.Seek(0, SeekOrigin.Begin);

                time.Restart();

                var stringWriter = new StringWriter();
                var entryPoint = CilToJavaScript(
                    ciljsProgramOutputName, 
                    programOutput, 
                    ciljsProgramOutputName + ".js", 
                    stringWriter, 
                    ciljsRefs, 
                    errors);

                var ciljsProgram = stringWriter.ToString();

                timings.Add(new Timing("Translate to JS: ",  time.ElapsedMilliseconds));

                if (errors.Any())
                {
                    success = false;
                    goto DONE;
                }

                if (writeToFile)
                    File.WriteAllText(ciljsProgramOutputName + ".js", ciljsProgram);

                time.Restart();
                
                int jsExitCode;
                jsOutput = ExecuteJs(
                    ciljsProgram,
                    entryPoint,
                    out jsExitCode,
                    errors);

                timings.Add(new Timing("Run JS: ", time.ElapsedMilliseconds));
                
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

            }

        DONE:
            return new TestResult
            {
                File = csProgramFile.Substring(workingDir.Length),
                Errors = errors,
                TestSuccess = success,
                JsOutput = !success ? jsOutput : "",
                ClrOutput = !success ? exeOutput : "",
                Timings = timings
            };
        }

        private string GetCorlibPath()
        {
            return Path.Combine(workingDir, @"..\CilJs.Corlib\bin\Debug\mscorlib.dll");
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
            if (false == process.WaitForExit(2000))
                Debug.WriteLine("FAILED");
            var output = process.StandardOutput.ReadToEnd();
            exitCode = process.ExitCode;
            return output;
        }

        private string ExecuteJs(string jsProgram, string entryPoint, out int exitCode, List<string> errors)
        {
            string jsOutput = null;
            exitCode = -1;
            using (var jsEngine = new MsieJsEngine(
                engineMode: JsEngineMode.Auto,
                useEcmaScript5Polyfill: false, 
                useJson2Library: false))
            {
                object exitCodeObj = null;
                try
                {
                    jsEngine.Execute(@"var ciljs_testlib_output = """";");
                    jsEngine.Execute(@"
                        var console = { 
                            log: function ciljs_test_log(message) { 
                                ciljs_testlib_output += message + ""\r\n""; 
                            } 
                        }");

                    jsEngine.Execute(jsCorlib);
                    jsEngine.Execute(jsProgram);

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

                if (exitCodeObj == null || exitCodeObj == Undefined.Value)
                    exitCode = 0;
                else
                    exitCode = (int)(double)exitCodeObj;

                try
                {
                    jsOutput = (string)jsEngine.Evaluate("ciljs_testlib_output");
                }
                catch
                {
                    errors.Add("Exception while evaluating script output");
                }
            }
            return jsOutput;
        }

        private string CilToJavaScript(
            string mainAssemblyName, 
            Stream mainAssembly, 
            string outputName, 
            TextWriter writer,
            List<Ref> refs, 
            List<string> errors, 
            bool outputRuntimeJs = false)
        {
            try
            {
                var settings = new CompileSettings();

                foreach (var r in refs)
                    settings.AddAssembly(r.path, translate: r.translate);

                settings.OutputRuntimeJs = outputRuntimeJs;

                if (mainAssembly != null)
                    settings.AddAssembly(stream: mainAssembly, assemblyPath: mainAssemblyName, translate: true);
                else
                    settings.AddAssembly(mainAssemblyName, translate: true);

                settings.OutputFileName = outputName;

                settings.TextWriter = writer;

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

        private void CSharpToCil(string csFile, string outputName, List<Ref> refs, Stream output, List<string> errors)
        {
            var mrefs = refs.Select(r => MetadataReference.CreateFromFile(r.path));

            var compilation = CSharpCompilation.Create(
                Path.GetFileNameWithoutExtension(outputName),
                syntaxTrees: new[] { CSharpSyntaxTree.ParseText(File.ReadAllText(csFile)) },
                references: mrefs.ToArray(),
                options: new CSharpCompilationOptions(OutputKind.ConsoleApplication)
                    .WithAllowUnsafe(true));

            var results = compilation.Emit(output);

            if (results.Success == false)
            {
                errors.AddRange(
                    results
                        .Diagnostics
                        .Where(d => d.Severity == DiagnosticSeverity.Error)
                        .Select(
                            error => string.Format("Line number {0}, Error Number: {1}, '{2};",
                                error.Location.GetLineSpan().StartLinePosition.Line,
                                error.Id,
                                error.GetMessage())));
            }

        }
    }
}