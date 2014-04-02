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
                compiler.AddAssembly(args[i]);
            }

            compiler.OutputFileName = args[args.Length - 1];

            compiler.Compile();
        }
    }
}
