using Microsoft.CSharp;
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

        public TestResult CompileAndRun(string csFile)
        {
            csFile = Path.Combine(workingDir, csFile);
            var outputName = csFile + ".exe";

            // TODO: we will need to compile two exes since the one that should be converted
            // to JS will have a different mscorlib and won't run on the CLR

            CompileExe(csFile, outputName);

            CompileJs(outputName);

            int exeExitCode;
            var exeOutput = ExecuteExe(outputName, out exeExitCode);

            int jsExitCode;
            var jsOutput = ExecuteJs(outputName, out jsExitCode);

            var success = true;

            if (exeExitCode != jsExitCode)
            {
                success = false;
                Console.WriteLine("ERROR: Exit codes not equal (clr: {0} js: {1})", exeExitCode, jsExitCode);
            }

            if (exeOutput != jsOutput)
            {
                success = false;
                Console.WriteLine("ERROR: Outputs not equal\nCLR:\n{0}\nJS:\n{1}", exeOutput, jsOutput);
            }

            return new TestResult
            {
                File = csFile.Substring(workingDir.Length),
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

        private string ExecuteJs(string exeFilePath, out int exitCode)
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
                    object exitCodeObj = jsEngine.Evaluate("asm0.entryPoint()");

                    if (exitCodeObj == MsieJavaScriptEngine.Undefined.Value)
                        exitCode = 0;
                    else
                        exitCode = (int)(double)exitCodeObj;

                    jsOutput = (string)jsEngine.Evaluate("braille_testlib_output");
                }
            }
            catch (JsEngineLoadException e)
            {
                Console.WriteLine("During loading of JavaScript engine an error occurred.");
                Console.WriteLine();
                Console.WriteLine(JsErrorHelpers.Format(e));
            }
            catch (JsRuntimeException e)
            {
                Console.WriteLine("During execution of JavaScript code an error occurred.");
                Console.WriteLine();
                Console.WriteLine(JsErrorHelpers.Format(e));
            }
            return jsOutput;
        }

        private void CompileJs(string outputName)
        {
            var compiler = new Compiler();
            compiler.AddAssembly(outputName);
            compiler.OutputFileName = outputName + ".js";
            compiler.Compile();
        }

        private void CompileExe(string csFile, string outputName)
        {
            var codeProvider = new CSharpCodeProvider();
            var icc = codeProvider.CreateCompiler();

            var parameters = new CompilerParameters();
            parameters.GenerateExecutable = true;
            parameters.OutputAssembly = outputName;

            var results = icc.CompileAssemblyFromFileBatch(parameters, new[] { Path.Combine(workingDir, "TestInclude.cs"), csFile });

            if (results.Errors.Count > 0)
            {
                Console.WriteLine(string.Join("\n",
                    results
                        .Errors
                        .OfType<CompilerError>()
                        .Select(
                            error => string.Format("Line number {0}, Error Number: {1}, '{2};",
                                error.Line, error.ErrorNumber, error.ErrorText))));
            }
        }
    }
}