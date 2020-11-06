using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using CilJs.Analysis;
using CilJs.JsTranslation;
using CilJs.Loading;
using CilJs.JSAst;

namespace CilJs
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

                var absPath = Path.GetFullPath(settings.OutputFileName);
                var filename = Path.GetFileName(absPath);
                var sourceMapBuilder = new SourceMapBuilder(filename, Path.GetDirectoryName(absPath) + Path.DirectorySeparatorChar);
                var translator = new AssemblyTranslator(ctx, sourceMapBuilder);

                foreach (var asm in asms)
                {
                    if (!asm.Settings.Translate)
                        continue;

                    using (var writer = GetTextWriter(outputNames, asm))
                    {
                        var emitter = new Emitter(new Formatting(), writer);
                        foreach (var statement in translator.Translate(asms, asm))
                            statement.Emit(emitter);

                        writer.WriteLine();
                        if (asm.Settings.SourceMap)
                        {
                            writer.WriteLine($"//# sourceMappingURL={filename}.map");
                        }
                    }

                    if (asm.Settings.SourceMap)
                    {
                        using (var writer = GetTextWriter(outputNames, asm, sourceMap: true))
                        {
                            sourceMapBuilder.Write(writer);
                        }
                    }

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
            CILJS.entry_point();
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

        private TextWriter GetTextWriter(List<string> outputNames, Ast.CilAssembly asm, bool sourceMap = false)
        {
            if (settings.TextWriter != null && !sourceMap)
                return settings.TextWriter;

            if (settings.SourceMapTextWriter != null && sourceMap)
                return settings.SourceMapTextWriter;

            string outputFileName;

            if (settings.OutputFileName != null)
            {
                outputFileName = settings.OutputFileName + (sourceMap ? ".map" : "");
                if (sourceMap)
                    File.Delete(outputFileName);
            }
            else
            {
                outputFileName = asm.ReflectionAssembly.GetName().Name + ".js" + (sourceMap ? ".map" : "");
                File.Delete(outputFileName);

                outputNames.Add(outputFileName);
            }

            var stream = File.Open(outputFileName, FileMode.OpenOrCreate, FileAccess.Write);

            stream.Seek(0, SeekOrigin.End);

            return new StreamWriter(stream);
        }

        private void WriteRuntimeJs()
        {
            using (var resourceStream = GetRuntimeJsResource())
            using (var fileStream = File.Create("CilJs.js"))
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

        private Stream GetRuntimeJsResource()
        {
            return File.OpenRead("../CilJs.Runtime/Runtime.js");
        }
    }
}
