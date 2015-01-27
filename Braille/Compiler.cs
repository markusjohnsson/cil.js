using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Braille.Analysis;
using Braille.JsTranslation;
using Braille.Loading;

namespace Braille
{
    public sealed class Compiler
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

                var outputNames = new List<string>();

                if (settings.OutputFileName != null)
                {
                    outputNames.Add(settings.OutputFileName);

                    // SINGLE FILE MODE

                    File.Delete(settings.OutputFileName);

                    if (settings.OutputRuntimeJs)
                    {
                        File.AppendAllText(settings.OutputFileName, GetRuntimeJs());
                    }
                }
                else if (settings.OutputRuntimeJs)
                {
                    WriteRuntimeJs();
                }

                var staticAnalyzer = new StaticAnalyzer(ctx);

                foreach (var asm in asms)
                {
                    if (!asm.Settings.Translate)
                        continue;

                    staticAnalyzer.Analyze(asm);
                }

                var translator = new AssemblyTranslator(ctx);

                foreach (var asm in asms)
                {
                    if (!asm.Settings.Translate)
                        continue;

                    var asmExpression = translator.Translate(asms, asm);

                    string outputFileName;

                    if (settings.OutputFileName != null)
                        outputFileName = settings.OutputFileName;
                    else
                    {
                        outputFileName = asm.ReflectionAssembly.GetName().Name + ".js";
                        File.Delete(outputFileName);

                        outputNames.Add(outputFileName);
                    }

                    File.AppendAllText(outputFileName,
                        "var " + asm.Identifier + "; (" +
                            asmExpression.ToString() + ")(" + asm.Identifier + " || (" +
                            asm.Identifier + " = {}));" + Environment.NewLine);
                }

                var entrypointAssembly = ctx
                    .Assemblies
                    .FirstOrDefault(a => a.EntryPoint != null);

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
        " + string.Join(@"
        ", outputNames.Select(o => @"<script src=""" + o + @"""></script>")) + @"
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

        private void WriteRuntimeJs()
        {
            using (var resourceStream = GetRuntimeJsResource())
            using (var fileStream = File.Create("Braille.js"))
            {
                resourceStream.CopyTo(fileStream);
            }
        }

        private string GetRuntimeJs()
        {
            using (var resourceStream = GetRuntimeJsResource())
            using (var reader = new StreamReader(resourceStream))
            {
                return reader.ReadToEnd();
            }
        }

        private static Stream GetRuntimeJsResource()
        {
            return typeof(Compiler).Assembly.GetManifestResourceStream("Braille.Runtime.Runtime.js");
        }
    }
}
