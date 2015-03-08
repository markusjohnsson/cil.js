using System;
using System.Runtime.InteropServices;

namespace System.Runtime.CompilerServices
{
    [AttributeUsage(AttributeTargets.Assembly, Inherited = false, AllowMultiple=true)]
    public sealed class InternalsVisibleToAttribute : Attribute
    {
        public InternalsVisibleToAttribute(string assemblyName)
        {
            this.assemblyName = assemblyName;
        }

        private string assemblyName;
        public string AssemblyName
        {
            get
            {
                return assemblyName;
            }
        }

        private bool allInternalsVisible = true;
        public bool AllInternalsVisible
        {
            get
            {
                return allInternalsVisible;
            }
            set
            {
                allInternalsVisible = value;
            }
        }
    }
}