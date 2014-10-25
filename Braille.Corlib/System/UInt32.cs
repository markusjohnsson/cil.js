using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct UInt32
    {
        public const uint MaxValue = 0xffffffff;
        public const uint MinValue = 0;

        public override string ToString()
        {
            return InternalFormatting.UnsignedPrimitiveToString(this, 32);
        }

        public override bool Equals(object other)
        {
            if (!(other is uint))
                return false;

            var a = this;
            var b = (uint)other;
            return a == b;
        }

        public override int GetHashCode()
        {
            return (int)this;
        }
    }
}
