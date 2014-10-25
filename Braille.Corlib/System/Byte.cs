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

        public override bool Equals(object other)
        {
            if (!(other is byte))
                return false;

            var a = this;
            var b = (byte)other;
            return a == b;
        }

        public override int GetHashCode()
        {
            return (int)this;
        }
    }
}
