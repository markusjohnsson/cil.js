using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct Byte
    {
        public const byte MinValue = 0;
        public const byte MaxValue = 255;

        public override string ToString()
        {
            return InternalFormatting.UnsignedPrimitiveToString(this, 8);
        }
    }
}
