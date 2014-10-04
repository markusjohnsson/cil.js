using System;

namespace Braille
{
    class Program
    {
        static void Main(string[] args)
        {
            if (args.Length < 2)
            {
                PrintUsage(); 
                return;
            }

            var settings = new CompileSettings();

            for (int i = 0; i < args.Length - 1; i++)
            {
                if (args[i].StartsWith("--"))
                {
                    if (args[i] == "--output-il-comments")
                    {
                        settings.OutputILComments = true;
                    }
                    else if (args[i] == "--output-html-runner")
                    {
                        settings.OutputHtmlRunner = true;
                    }
                    else if (args[i] == "--keep-flat-expressions") 
                    {
                        settings.KeepFlatExpressions = true;
                    }
                    else
                    {
                        Console.WriteLine("Unknown option '" + args[i] + "'");
                        Console.WriteLine();
                        PrintUsage();
                        return;
                    }
                }
                else
                {
                    Console.WriteLine("Adding assembly: " + args[i]);
                    settings.AddAssembly(args[i]);
                }
            }

            Console.WriteLine("Output: " + args[args.Length - 1]);
            settings.OutputFileName = args[args.Length - 1];

            var compiler = new Compiler(settings);
            compiler.Compile();
        }

        private static void PrintUsage()
        {
            Console.WriteLine("Usage: Braille.exe [OPTIONS] INPUT_1 [INPUT_2 INPUT_3 ...] OUTPUT");
            Console.WriteLine();
            Console.WriteLine("Options: ");
            Console.WriteLine("  --output-il-comments");
            Console.WriteLine();
            Console.WriteLine("Example: Braille.exe InputAssembly01.dll InputAssembly02.dll Output.js");

        }
    }
}
