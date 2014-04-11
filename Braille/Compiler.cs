using Braille.Loading;
using Braille.JsTranslation;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Braille.Ast;

namespace Braille
{
    public class CompileResult
    {
        public string OutputFileName { get; set; }

        public string EntryPointAssembly { get; set; }
    }

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

        public CompileResult Compile()
        {
            var asmTransform = new AssemblyLoader();

            foreach (var asm in assemblies)
                asmTransform.AddAssembly(asm);

            var ctx = asmTransform.Load();
            var asms = ctx.Assemblies;

            var asmTransform2 = new AssemblyTranslator(ctx);

            File.Delete(OutputFileName);

            foreach (var asm in asms)
            {
                var asmExpression = asmTransform2.Translate(asms, asm);
                File.AppendAllText(OutputFileName, 
                    "var " + asm.Identifier + "; (" + 
                        asmExpression.ToString() + ")(" + asm.Identifier + " || (" + asm.Identifier + " = {}));\n");
            }

            return new CompileResult
            {
                OutputFileName = OutputFileName,
                EntryPointAssembly = ctx.Assemblies.Where(a => a.EntryPoint != null).Select(a => a.Identifier).FirstOrDefault()
            };
        }
    }
}
