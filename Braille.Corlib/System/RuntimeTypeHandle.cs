using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct RuntimeTypeHandle
    {
        internal object value;
        public object Value { get { return value; } }
    }
}
