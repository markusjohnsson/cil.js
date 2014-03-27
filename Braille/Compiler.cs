using Braille.Loading;
using Braille.Translation;
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
            var asmTransform = new AssemblyLoader();

            foreach (var asm in assemblies)
                asmTransform.AddAssembly(asm);

            var asms = asmTransform.Load().ToList();

            var mtdTranform = new MethodTransformTask();
            mtdTranform.Process(asms);

            var asmTransform2 = new JsAssemblyBuilder();
            var asmExpression = asmTransform2.Build(asms.First());

            File.WriteAllText(OutputFileName, "var asm0; (" + asmExpression.ToString() + ")(asm0 || (asm0 = {}))");
        }
    }
}
