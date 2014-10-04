using Braille.Analysis;
using Braille.JsTranslation;
using Braille.Loading;
using System;
using System.IO;
using System.Linq;

namespace Braille
{
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
