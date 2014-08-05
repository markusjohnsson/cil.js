using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct RuntimeTypeHandle
    {
#pragma warning disable 649
        internal object value;
#pragma warning restore 649

        public object Value { get { return value; } }
    }
}
