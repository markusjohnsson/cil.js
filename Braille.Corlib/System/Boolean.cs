using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;

namespace System
{
    public struct Boolean : IComparable<bool>, IComparable, IEquatable<bool>
    {
        public override string ToString()
        {
            return this ? "True" : "False";
        }

        public override int GetHashCode()
        {
            return this ? 1 : 0;
        }

        public bool Equals(bool other)
        {
            var a = this;
            var b = other;
            return a == b;
        }

        public override bool Equals(object other)
        {
            if (!(other is bool))
                return false;
            return Equals((bool)other);
        }

        public int CompareTo(object p)
        {
            return CompareTo((bool)p);
        }

        public int CompareTo(bool p)
        {
            bool n = this;

            if (n == p)
                return 0;

            if (!n)
                return -1;
            else
                return 1;
        }

    }
}
