using Braille.AssemblyTransform;
using Braille.MethodTransform;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Braille
{
    class Program
    {
        static void Main(string[] args)
        {
            var asmTransform = new AssemblyTransformTask();
            asmTransform.AddAssembly(Environment.CurrentDirectory + "\\References\\Braille.Test.exe");

            var asm = asmTransform.Process().ToList();

            var mtdTranform = new MethodTransformTask();
            mtdTranform.Process(asm);

            Console.WriteLine(asm.First().GetAssemblyDeclaration().ToString().FormatJson());

            if (Debugger.IsAttached)
                Console.ReadLine();
        }

    }
}
