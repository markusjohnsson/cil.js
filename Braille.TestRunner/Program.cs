using Microsoft.CSharp;
using MsieJavaScriptEngine;
using MsieJavaScriptEngine.Helpers;
using System;
using System.CodeDom.Compiler;
using System.Diagnostics;
using System.IO;
using System.Linq;

namespace Braille.TestRunner
{
    class Program
    {
        static void Main(string[] args)
        {
            foreach (var file in Directory.GetFiles("Tests", "*.cs"))
                CompileAndRunTest(Path.GetFullPath(file));
        }

        private static void CompileAndRunTest(string csFile)
        {
            Console.WriteLine(Path.GetFileName(csFile));

            var outputName = csFile + ".exe";

            // TODO: we will need to compile two exes since the one that should be converted
            // to JS will have a different mscorlib and won't run on the CLR

            CompileExe(csFile, outputName);

            CompileJs(outputName);

            var exeOutput = ExecuteExe(outputName);

            var jsOutput = ExecuteJs(outputName);

            if (exeOutput != jsOutput)
            {
                Console.WriteLine("Outputs not equal");
            }
        }

        private static string ExecuteExe(string outputName)
        {
            var process = Process.Start(
                new ProcessStartInfo
                {
                    FileName = outputName,
                    RedirectStandardOutput = true,
                    UseShellExecute = false
                });
            process.WaitForExit(10000);
            return process.StandardOutput.ReadToEnd();
        }

        private static string ExecuteJs(string outputName)
        {
            string jsOutput = null;

            try
            {
                using (var jsEngine = new MsieJsEngine(engineMode: JsEngineMode.Auto,
                    useEcmaScript5Polyfill: false, useJson2Library: false))
                {
                    jsEngine.Execute(@"var braille_testlib_output = """";");
                    jsEngine.Execute(@"function braille_test_log(message) { braille_testlib_output += message + ""\r\n""; }");
                    jsEngine.ExecuteFile(outputName + ".js");
                    jsEngine.Execute("asm.entryPoint();");
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

        private static void CompileJs(string outputName)
        {
            var compiler = new Compiler();
            compiler.AddAssembly(outputName);
            compiler.OutputFileName = outputName + ".js";
            compiler.Compile();
        }

        private static void CompileExe(string csFile, string outputName)
        {
            var codeProvider = new CSharpCodeProvider();
            var icc = codeProvider.CreateCompiler();

            var parameters = new CompilerParameters();
            parameters.GenerateExecutable = true;
            parameters.OutputAssembly = outputName;

            var results = icc.CompileAssemblyFromFileBatch(parameters, new [] { "TestInclude.cs", csFile });

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
