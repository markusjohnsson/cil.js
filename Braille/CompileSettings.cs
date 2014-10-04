using System.Collections.Generic;

namespace Braille
{
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

        public bool KeepFlatExpressions
        {
            get;
            set;
        }
    }
}
