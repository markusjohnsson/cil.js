using System;

namespace Braille
{
    class Program
    {
        static void Main(string[] args)
        {
            var compiler = new Compiler();
            
            compiler.AddAssembly(Environment.CurrentDirectory + "\\References\\Braille.Test.exe");
            //compiler.AddAssembly(Environment.CurrentDirectory + "\\Braille.exe");

            compiler.OutputFileName = "Output.js";
            
            compiler.Compile();

        }

    }
}
