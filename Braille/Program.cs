using System;

namespace Braille
{
    class Program
    {
        static void Main(string[] args)
        {
            var compiler = new Compiler();

            for (int i = 0; i < args.Length - 1; i++)
            {
                Console.WriteLine("Adding assembly: " + args[i]);
                compiler.AddAssembly(args[i]);
            }

            Console.WriteLine("Output: " + args[args.Length - 1]);
            compiler.OutputFileName = args[args.Length - 1];

            compiler.Compile();
        }
    }
}
