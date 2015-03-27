using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct Int16 : IEquatable<short>, IComparable, IComparable<short>
    {
        public override string ToString()
        {
            return InternalFormatting.SignedPrimitiveToString(this);
        }

        public int CompareTo(object p)
        {
            return CompareTo((short)p);
        }

        public int CompareTo(short p)
        {
            short n = this;

            if (n < p)
                return -1;

            if (n > p)
                return 1;

            return 0;
        }

        public bool Equals(short other)
        {
            var a = this;
            var b = other;
            return a == b;
        }

        public override bool Equals(object other)
        {
            if (!(other is short))
                return false;
            return Equals((short)other);
        }

        public override int GetHashCode()
        {
            return (int)this;
        }

    }
}
