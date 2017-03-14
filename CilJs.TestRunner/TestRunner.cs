using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Loader;
using Microsoft.Extensions.DependencyModel;

namespace CilJs.TestRunner
{
    public class TestRunner
    {
        private string workingDir;
        private IJavaScriptRunner scriptRunner;

        public TestRunner(string workingDir)
        {
            this.workingDir = workingDir;
            this.scriptRunner = new NodeScriptRunner();
        }

        class Ref
        {
            public string path;
            public bool translate = true;
        }

        private static string jsCorlib;

        private static readonly object corlibGate = new object();

        public TestResult CompileAndRun(string csFile, bool writeToFile)
        {
            var errors = new List<string>();

            var clrRefs = new List<Ref>();
            var ciljsRefs = new List<Ref>();

            var corlib = GetCorlibPath();
            var corlibOutput = Path.Combine(workingDir, "corlib.ciljs.js");

            var timings = new List<Timing>();
            var time = Stopwatch.StartNew();

            lock (corlibGate)
            {
                if (jsCorlib == null)
                {
                    // translate corlib only if it, or the compiler, has been built since last run
                    if (!File.Exists(corlibOutput) ||
                        File.GetLastWriteTime(corlib) > File.GetLastWriteTime(corlibOutput) ||
                        File.GetLastWriteTime(typeof(Compiler).GetTypeInfo().Assembly.Location) > File.GetLastWriteTime(corlibOutput))
                    {
                        CilToJavaScript(corlib, null, corlibOutput, null, ciljsRefs, errors, outputRuntimeJs: false);

                        if (errors.Any())
                        {
                            return new TestResult { Errors = errors };
                        }

                    }

                    jsCorlib = File.ReadAllText(corlibOutput);
                }
            }

            timings.Add(new Timing("Translate corlib: ", time.ElapsedMilliseconds));

            // clrRefs.Add(new Ref { path = typeof(Console).GetTypeInfo().Assembly.Location, translate = false });
            // clrRefs.Add(new Ref { path = typeof(IEnumerable<>).GetTypeInfo().Assembly.Location, translate = false });

            // clrRefs.Add(new Ref{ path = @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETCore\v4.5.1\System.Runtime.dll", translate = false});
            // clrRefs.Add(new Ref { path = typeof(Console).GetTypeInfo().Assembly.Location, translate = false });
            var dd = typeof(Enumerable).GetTypeInfo().Assembly.Location;
            var coreDir = Directory.GetParent(dd);

            clrRefs.Add(new Ref { path = Path.Combine(Directory.GetCurrentDirectory(), "System.Runtime.dll"), translate = false });
            clrRefs.Add(new Ref { path = Path.Combine(Directory.GetCurrentDirectory(), "System.Runtime.Extensions.dll"), translate = false });
            clrRefs.Add(new Ref { path = Path.Combine(Directory.GetCurrentDirectory(), "System.Console.dll"), translate = false });
            clrRefs.Add(new Ref { path = Path.Combine(Directory.GetCurrentDirectory(), "System.Reflection.dll"), translate = false });
            
            ciljsRefs.Add(new Ref { path = corlib, translate = false });

            string clrProgramOutputName = null;
            string ciljsProgramOutputName = null;
            string csProgramFile = null;

            var success = true;

            csProgramFile = Path.Combine(workingDir, csFile);
            ciljsProgramOutputName = csProgramFile + ".ciljs.exe";
            clrProgramOutputName = csProgramFile + ".clr.exe";

            string jsOutput = null;
            string exeOutput = null;

            time.Restart();

            // Compile CLR-version of exe
            var programStream = new MemoryStream();

            // using (var programOutput = File.OpenWrite(clrProgramOutputName))
            CSharpToCil(csProgramFile, clrProgramOutputName, clrRefs, programStream, errors);

            timings.Add(new Timing("Compile C# for CLR: ", time.ElapsedMilliseconds));

            if (errors.Any())
            {
                errors.Add("Failed to compile for CLR");
                success = false;
                goto DONE;
            }

            time.Restart();

            int exeExitCode;
            // exeOutput = ExecuteExe(clrProgramOutputName, out exeExitCode);
            exeOutput = ExecuteAssembly(programStream, out exeExitCode);

            timings.Add(new Timing("Run on CLR: ", time.ElapsedMilliseconds));

            time.Restart();

            // Compile CilJs-version of exe
            using (var programOutput = new MemoryStream())
            {
                CSharpToCil(csProgramFile, ciljsProgramOutputName, ciljsRefs, programOutput, errors);

                timings.Add(new Timing("Compile C# for ciljs: ", time.ElapsedMilliseconds));

                if (errors.Any())
                {
                    errors.Add("Failed to compile for ciljs");
                    success = false;
                    goto DONE;
                }

                programOutput.Seek(0, SeekOrigin.Begin);

                time.Restart();

                var stringWriter = new StringWriter();
                var entryPoint = CilToJavaScript(
                    ciljsProgramOutputName,
                    programOutput,
                    ciljsProgramOutputName + ".js",
                    stringWriter,
                    ciljsRefs,
                    errors);

                var ciljsProgram = stringWriter.ToString();

                timings.Add(new Timing("Translate to JS: ", time.ElapsedMilliseconds));

                if (errors.Any())
                {
                    success = false;
                    goto DONE;
                }

                if (writeToFile)
                    File.WriteAllText(ciljsProgramOutputName + ".js", ciljsProgram);

                time.Restart();

                int jsExitCode;
                jsOutput = scriptRunner.ExecuteJs(
                    jsCorlib,
                    ciljsProgram,
                    entryPoint,
                    out jsExitCode,
                    errors);

                timings.Add(new Timing("Run JS: ", time.ElapsedMilliseconds));

                if (exeExitCode != jsExitCode)
                {
                    success = false;
                    errors.Add(string.Format("ERROR: Exit codes not equal (clr: {0} js: {1})", exeExitCode, jsExitCode));
                }

                if (exeOutput != jsOutput)
                {
                    success = false;
                    //errors.Add(string.Format("ERROR: Outputs not equal\nCLR:\n{0}\nJS:\n{1}", exeOutput, jsOutput));
                    errors.Add("ERROR: Outputs not equal");
                }

            }

        DONE:
            return new TestResult
            {
                File = csProgramFile.Substring(workingDir.Length),
                Errors = errors,
                TestSuccess = success,
                JsOutput = !success ? jsOutput : "",
                ClrOutput = !success ? exeOutput : "",
                Timings = timings
            };
        }

        private string GetCorlibPath()
        {
            return Path.Combine(workingDir, @"..\..\CilJs.Corlib\bin\Debug\mscorlib.dll");
        }

        private string ExecuteAssembly(MemoryStream assembly, out int exitCode)
        {
            var original = Console.Out;

            var outWriter = new StringWriter();
            Console.SetOut(outWriter);

            assembly.Seek(0, SeekOrigin.Begin);

            try
            {

                var loader = new AssemblyLoader();
                var ourAssembly = loader.LoadFromStream(assembly);

                var type = ourAssembly.GetType("Program");
                var main = type.GetTypeInfo().GetDeclaredMethod("Main");

                exitCode = (int?)main.Invoke(null, new object[] { }) ?? 0;
                return outWriter.ToString();
            }
            catch (Exception e)
            {

                exitCode = 1;
                return e.ToString();
            }
            finally
            {
                Console.SetOut(original);
            }

        }

        public class AssemblyLoader : AssemblyLoadContext
        {
            // Not exactly sure about this
            protected override Assembly Load(AssemblyName assemblyName)
            {
                var deps = DependencyContext.Default;
                var res = deps.CompileLibraries.Where(d => d.Name.Contains(assemblyName.Name)).ToList();
                var assembly = Assembly.Load(new AssemblyName(res.First().Name));
                return assembly;
            }
        }

        private string CilToJavaScript(
            string mainAssemblyName,
            Stream mainAssembly,
            string outputName,
            TextWriter writer,
            List<Ref> refs,
            List<string> errors,
            bool outputRuntimeJs = false)
        {
            try
            {
                var settings = new CompileSettings();

                foreach (var r in refs)
                    settings.AddAssembly(r.path, translate: r.translate);

                settings.OutputRuntimeJs = outputRuntimeJs;

                if (mainAssembly != null)
                    settings.AddAssembly(stream: mainAssembly, assemblyPath: mainAssemblyName, translate: true);
                else
                    settings.AddAssembly(mainAssemblyName, translate: true);

                settings.OutputFileName = outputName;
                settings.TextWriter = writer;
                settings.OutputILComments = true;

                var compiler = new Compiler(settings);

                var result = compiler.Compile();
                return result.EntryPointAssembly;
            }
            catch (Exception e)
            {
                errors.Add(e.Message + "\n" + e.StackTrace);
            }

            return null;
        }

        private void CSharpToCil(string csFile, string outputName, List<Ref> refs, Stream output, List<string> errors)
        {
            var mrefs = refs.Select(r => MetadataReference.CreateFromFile(r.path));

            var compilation = CSharpCompilation.Create(
                Path.GetFileNameWithoutExtension(outputName),
                syntaxTrees: new[] { CSharpSyntaxTree.ParseText(File.ReadAllText(csFile)) },
                references: mrefs.ToArray(),
                options: new CSharpCompilationOptions(OutputKind.ConsoleApplication)
                    .WithAllowUnsafe(true));

            var results = compilation.Emit(output);

            if (results.Success == false)
            {
                errors.AddRange(
                    results
                        .Diagnostics
                        .Where(d => d.Severity == DiagnosticSeverity.Error)
                        .Select(
                            error => string.Format("Line number {0}, Error Number: {1}, '{2};",
                                error.Location.GetLineSpan().StartLinePosition.Line,
                                error.Id,
                                error.GetMessage())));
            }

        }
    }
}