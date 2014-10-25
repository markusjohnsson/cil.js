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

        public override bool Equals(object other)
        {
            if (!(other is ushort))
                return false;

            var a = this;
            var b = (ushort)other;
            return a == b;
        }

        public override int GetHashCode()
        {
            return (int)this;
        }
    }
}
