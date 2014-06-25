using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct RuntimeFieldHandle
    {
        internal object value;
        public object Value { get { return value; } }
    }
}
