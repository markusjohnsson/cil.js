using Braille.Loading;
using Braille.JsTranslation;
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

            var ctx = asmTransform.Load();
            var asms = ctx.Assemblies;

            var asmTransform2 = new AssemblyTranslator(new TypeTranslator(ctx), new MethodTranslator(ctx));
            var asmExpression = asmTransform2.Translate(asms, asms.First());

            File.WriteAllText(OutputFileName, "var asm0; (" + asmExpression.ToString() + ")(asm0 || (asm0 = {}))");
        }
    }
}
