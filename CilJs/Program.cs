using System;
using System.Linq;

namespace CilJs
{
    class Program
    {
        static void Main(string[] args)
        {
            if (args.Length < 1)
            {
                PrintUsage(); 
                return;
            }

            var settings = new CompileSettings();

            for (int i = 0; i < args.Length; i++)
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
                    else if (args[i] == "--out")
                    {
                        i++;

                        Console.WriteLine("Output: " + args[i]);
                        settings.OutputFileName = args[i];
                    }
                    else if (args[i] == "--refs")
                    {
                        int j = i + 1;
                        for (; j < args.Length; j++)
                        {
                            if (args[j].StartsWith("--"))
                            {
                                break;   
                            }

                            Console.WriteLine("Adding reference assembly: " + args[j]);
                            settings.AddAssembly(args[j], translate: false);
                        }

                        i = j - 1;
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
                    settings.AddAssembly(args[i], translate: true);
                }
            }

            settings.OutputRuntimeJs = true;

            settings.Assemblies = settings.Assemblies.OrderBy(a => a.Translate).ToList();

            var compiler = new Compiler(settings);
            compiler.Compile();
        }

        private static void PrintUsage()
        {
            Console.WriteLine("Usage: CilJs.exe [OPTIONS] INPUT_1 [INPUT_2 INPUT_3 ...] [--refs REF_1 [REF_2]]");
            Console.WriteLine();
            Console.WriteLine("Options: ");
            Console.WriteLine("  --output-il-comments");
            Console.WriteLine("  --output-html-runner");
            Console.WriteLine("  --keep-flat-expressions");
            Console.WriteLine();
            Console.WriteLine("Example: CilJs.exe InputAssembly01.dll InputAssembly02.dll --out Output.js");

        }
    }
}
