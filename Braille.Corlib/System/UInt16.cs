using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct UInt16
    {
        public const uint MaxValue = 0xffff;
        public const uint MinValue = 0;

        public override string ToString()
        {
            return InternalFormatting.UnsignedPrimitiveToString(this, 16);
        }
    }
}
