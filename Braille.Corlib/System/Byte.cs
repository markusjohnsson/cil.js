using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct Byte : IComparable<byte>, IComparable, IEquatable<byte>
    {
        public const byte MinValue = 0;
        public const byte MaxValue = 255;

        public override string ToString()
        {
            return InternalFormatting.UnsignedPrimitiveToString(this, 8);
        }

        public int CompareTo(object p)
        {
            return CompareTo((byte)p);
        }

        public int CompareTo(byte p)
        {
            byte n = this;

            if (n < p)
                return -1;

            if (n > p)
                return 1;

            return 0;
        }

        public bool Equals(byte other)
        {
            var a = this;
            var b = other;
            return a == b;
        }

        public override bool Equals(object other)
        {
            if (!(other is byte))
                return false;
            return Equals((byte)other);
        }

        public override int GetHashCode()
        {
            return (int)this;
        }
    }
}
