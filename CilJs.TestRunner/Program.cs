using System;
using System.Linq;
using System.IO;

namespace CilJs.TestRunner
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var workingDir = @"../Tests/ComparisonTests/";
            var runner = new TestRunner(workingDir);
            
            var started = 0;
            var succeeded = 0;

            var files = args.Length > 0 ? args :
                Directory
                    .EnumerateFiles(workingDir, "*.cs")
                    ;

            foreach (var file in files)
            {
                started++;
                Console.Write(file + " ... ");
                var result = runner.CompileAndRun(Path.GetFileName(file), true);

                if (result.Errors.Count > 0)
                {
                    Console.WriteLine("ERRORS:");
                    foreach (var error in result.Errors)
                    {
                        Console.WriteLine(error);
                    }

                    Console.WriteLine(result.ClrOutput);
                    Console.WriteLine(result.JsOutput);
                }
                else
                {
                    succeeded++;
                    Console.WriteLine("OK");
                }
            }

            Console.WriteLine("{0}/{1} succeeded", succeeded, started);
        }
    }
}
