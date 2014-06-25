using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct Byte
    {
        public override string ToString()
        {
            return InternalFormatting.NumberStructToString(this);
        }
    }
}
