using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct UInt16 : IComparable<ushort>, IComparable, IEquatable<ushort>
    {
        public const ushort MaxValue = 0xffff;
        public const ushort MinValue = 0;

        public override string ToString()
        {
            return InternalFormatting.UnsignedPrimitiveToString(this, 16);
        }

        public int CompareTo(object p)
        {
            return CompareTo((ushort)p);
        }

        public int CompareTo(ushort p)
        {
            ushort n = this;

            if (n < p)
                return -1;

            if (n > p)
                return 1;

            return 0;
        }

        public bool Equals(ushort other)
        {
            var a = this;
            var b = other;
            return a == b;
        }

        public override bool Equals(object other)
        {
            if (!(other is ushort))
                return false;
            return Equals(other);
        }

        public override int GetHashCode()
        {
            return (int)this;
        }
    }
}
