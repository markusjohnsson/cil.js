using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct SByte : IComparable<sbyte>, IComparable, IEquatable<sbyte>
    {
        public const sbyte MinValue = -128;
        public const sbyte MaxValue = 127;

        public override string ToString()
        {
            return InternalFormatting.SignedPrimitiveToString(this);
        }

        public int CompareTo(object p)
        {
            return CompareTo((sbyte)p);
        }

        public int CompareTo(sbyte p)
        {
            sbyte n = this;

            if (n < p)
                return -1;

            if (n > p)
                return 1;

            return 0;
        }

        public bool Equals(sbyte other)
        {
            var a = this;
            var b = other;
            return a == b;
        }

        public override bool Equals(object other)
        {
            if (!(other is sbyte))
                return false;
            return Equals((sbyte)other);
        }

        public override int GetHashCode()
        {
            return (int)this;
        }
    }
}
