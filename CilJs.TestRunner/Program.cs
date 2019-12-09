using System;
using System.Linq;
using System.IO;
using System.Collections.Generic;

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

            var files = args.Length > 0
                ? args.Where(a => a.EndsWith(".cs"))
                : Directory.EnumerateFiles(workingDir, "*.cs")
                ;

            var displayStats = args.Contains("--stats");
            var bench = args.Contains("--bench-js");
            var count = bench ? 100 : 1;
            var times = new List<double>();

            for (var i = 0; i < count; i++)
            {
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

                        Console.WriteLine("CLR output");
                        Console.WriteLine(result.ClrOutput);
                        Console.WriteLine("JS output");
                        Console.WriteLine(result.JsOutput);
                    }
                    else
                    {
                        succeeded++;
                        Console.WriteLine("OK");
                    }

                    if (displayStats)
                    {
                        foreach (var time in result.Timings)
                        {
                            Console.WriteLine("{0} {1}", time.Key, time.Time);
                        }
                    }

                    times.Add(result.Timings.First(t => t.Key == "Run JS: ").Time);
                }
            }

            if (bench)
            {
                var min = times.Min();
                var max = times.Max();
                var cleaned = times.Where(t => t != min && t != max);
                var mean = cleaned.Sum() / cleaned.Count();
                var stddev = Math.Sqrt(cleaned.Select(t => Math.Pow(t - mean, 2)).Sum() / cleaned.Count());
                Console.WriteLine(min);
                Console.WriteLine(max);
                Console.WriteLine(mean);
                Console.WriteLine(stddev);
            }

            Console.WriteLine("{0}/{1} succeeded", succeeded, started);
        }
    }
}
