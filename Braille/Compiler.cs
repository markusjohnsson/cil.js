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

        public bool OutputHtmlRunner
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

                var entrypointAssembly = ctx
                    .Assemblies
                    .Where(a => a.EntryPoint != null)
                    .FirstOrDefault();

                if (settings.OutputHtmlRunner)
                {
                    if (entrypointAssembly == null)
                    {
                        Console.WriteLine("No entry point found for HTML runner");
                    }
                    else
                    {
                        File.Delete(settings.OutputFileName + ".html");

                        File.AppendAllText(
                            settings.OutputFileName + ".html",
                            @"
<html>
    <head>
        <title>" + entrypointAssembly.Name + @"</title>
        <script src=""" + settings.OutputFileName + @"""></script>
        <script>
            " + entrypointAssembly.Identifier + @".entryPoint();
        </script>
    </head>
    <body>
    </body>
</html>
".Trim());
                    }
                }

                return new CompileResult
                {
                    OutputFileName = settings.OutputFileName,
                    EntryPointAssembly = entrypointAssembly == null ? null : entrypointAssembly.Identifier
                };
            }
        }
    }
}
