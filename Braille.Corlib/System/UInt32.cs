using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct UInt32
    {
        public override string ToString()
        {
            return InternalFormatting.NumberStructToString(this);
        }
    }
}
