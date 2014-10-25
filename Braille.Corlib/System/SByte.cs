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

        public override bool Equals(object other)
        {
            if (!(other is sbyte))
                return false;

            var a = this;
            var b = (sbyte)other;
            return a == b;
        }

        public override int GetHashCode()
        {
            return (int)this;
        }
    }
}
