using Braille.Loading;
using Braille.JsTranslation;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Braille.Ast;
using Braille.Analysis;
using Braille.JSAst;
using System;

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
            var loader = new AssemblyLoader();

            foreach (var asm in assemblies)
                loader.AddAssembly(asm);

            var ctx = loader.Load();
            var asms = ctx.Assemblies;

            File.Delete(OutputFileName);

            var staticAnalyzer = new StaticAnalyzer();
            staticAnalyzer.Analyze(ctx);

            var translator = new AssemblyTranslator(ctx);
            
            foreach (var asm in asms)
            {
                var asmExpression = translator.Translate(asms, asm);
                File.AppendAllText(OutputFileName, 
                    "var " + asm.Identifier + "; (" + 
                        asmExpression.ToString() + ")(" + asm.Identifier + " || (" + asm.Identifier + " = {}));" + Environment.NewLine);
            }

            return new CompileResult
            {
                OutputFileName = OutputFileName,
                EntryPointAssembly = ctx.Assemblies.Where(a => a.EntryPoint != null).Select(a => a.Identifier).FirstOrDefault()
            };
        }
    }
}
