using System;

namespace CilJs.TestRunner
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var runner = new TestRunner(@"..\Tests\ComparisonTests\");

            var result = runner.CompileAndRun("ArrayIteration.cs", false);

            if (result.Errors.Count > 0)
            {
                Console.WriteLine("ERRORS:");
                foreach (var error in result.Errors)
                {
                    Console.WriteLine(error);
                }
            }

            Console.WriteLine("DONE");
        }
    }
}
