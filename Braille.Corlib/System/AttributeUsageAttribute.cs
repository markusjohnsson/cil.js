using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    [AttributeUsageAttribute(AttributeTargets.Class, Inherited = true)]
    public sealed class AttributeUsageAttribute : Attribute
    {
        public AttributeUsageAttribute(AttributeTargets targets)
        {
            ValidOn = targets;
        }

        public AttributeTargets ValidOn { get; private set; }

        public bool Inherited { get; set; }

        public bool AllowMultiple { get; set; }
    }
}
