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
            //asmTransform.AddAssembly(Environment.CurrentDirectory + "\\Braille.exe");

            //Console.WriteLine(asmTransform.Process().First().GetAssemblyDeclaration().ToString().FormatJson());

            var methodTransform = new MethodTransformTask();
            methodTransform.AddAssemblies(asmTransform.Process());
            methodTransform.Process();

            if (Debugger.IsAttached)
                Console.ReadLine();
        }
    }
}
