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

    public class CompileSettings
    {
        internal List<string> assemblies = new List<string>();

        public void AddAssembly(string assemblyPath)
        {
            assemblies.Add(assemblyPath);
        }

        public string OutputFileName
        {
            get;
            set;
        }

        public bool OutputILComments
        {
            get;
            set;
        }
    }

    public class Compiler
    {
        private CompileSettings settings;
        
        public Compiler(CompileSettings settings)
        {
            this.settings = settings;
        }
        
        public CompileResult Compile()
        {
            var loader = new AssemblyLoader(settings);

            using (var ctx = loader.Load())
            {
                var asms = ctx.Assemblies;

                File.Delete(settings.OutputFileName);

                var staticAnalyzer = new StaticAnalyzer();
                staticAnalyzer.Analyze(ctx);

                var translator = new AssemblyTranslator(ctx);

                foreach (var asm in asms)
                {
                    var asmExpression = translator.Translate(asms, asm);
                    File.AppendAllText(settings.OutputFileName,
                        "var " + asm.Identifier + "; (" +
                            asmExpression.ToString() + ")(" + asm.Identifier + " || (" + asm.Identifier + " = {}));" + Environment.NewLine);
                }

                return new CompileResult
                {
                    OutputFileName = settings.OutputFileName,
                    EntryPointAssembly = ctx.Assemblies.Where(a => a.EntryPoint != null).Select(a => a.Identifier).FirstOrDefault()
                };
            }
        }
    }
}
