using System.Collections.Generic;

namespace CilJs
{
    public class AssemblySettings
    {
        public string Path { get; set; }
        public bool Translate { get; set; }
    }

    public class CompileSettings
    {
        public List<AssemblySettings> Assemblies = new List<AssemblySettings>();

        public void AddAssembly(string assemblyPath, bool translate)
        {
            Assemblies.Add(new AssemblySettings { Path = assemblyPath, Translate = translate });
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
    }
}
