using System.Collections.Generic;
using System.IO;

namespace CilJs
{
    public class AssemblySettings
    {
        public Stream Stream { get; set; }
        public string Path { get; set; }
        public bool Translate { get; set; }

        internal AssemblySettings() { }
    }

    public class CompileSettings
    {
        public List<AssemblySettings> Assemblies = new List<AssemblySettings>();

        public void AddAssembly(string assemblyPath, bool translate)
        {
            Assemblies.Add(new AssemblySettings { Path = assemblyPath, Translate = translate });
        }

        public void AddAssembly(string assemblyPath, Stream stream, bool translate)
        {
            Assemblies.Add(new AssemblySettings { Path = assemblyPath, Stream = stream, Translate = translate });
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

        public bool KeepFlatExpressions
        {
            get;
            set;
        }

        public bool OutputRuntimeJs
        {
            get;
            set;
        }

        public TextWriter TextWriter
        {
            get;
            set;
        }
    }
}
