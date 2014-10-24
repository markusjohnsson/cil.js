using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct SByte
    {
        public const sbyte MinValue = -128;
        public const sbyte MaxValue = 127;

        public override string ToString()
        {
            return InternalFormatting.SignedPrimitiveToString(this);
        }
    }
}
