using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct IntPtr
    {
        public override string ToString()
        {
            return InternalFormatting.NumberStructToString(this);
        }
    }
}
