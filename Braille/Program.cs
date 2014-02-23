using Braille.AssemblyTransform;
using Braille.MethodTransform;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
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
            //asmTransform.AddAssembly(Environment.CurrentDirectory + "\\Braille.exe");

            var asm = asmTransform.Process().ToList();

            var mtdTranform = new MethodTransformTask();
            mtdTranform.Process(asm);

            File.WriteAllText("Output.js", "var asm = " + asm.First().GetAssemblyDeclaration().ToString());

            
            //if (Debugger.IsAttached)
            //    Console.ReadLine();
        }

    }
}
