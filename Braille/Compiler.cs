using Braille.AssemblyTransform;
using Braille.MethodTransform;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Braille
{
    public class Compiler
    {
        private List<string> assemblies = new List<string>();

        public void AddAssembly(string assemblyPath)
        {
            assemblies.Add(assemblyPath);
        }

        public string OutputFileName
        {
            get;
            set;
        }

        public void Compile()
        {
            var asmTransform = new AssemblyTransformTask();

            foreach (var asm in assemblies)
                asmTransform.AddAssembly(asm);

            var asms = asmTransform.Process().ToList();

            var mtdTranform = new MethodTransformTask();
            mtdTranform.Process(asms);

            File.WriteAllText(OutputFileName, "var asm; (" + asms.First().GetAssemblyDeclaration().ToString() + ")(asm || (asm = {}))");
        }
    }
}
