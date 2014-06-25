using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct UInt16
    {
        public override string ToString()
        {
            return InternalFormatting.NumberStructToString(this);
        }
    }
}
