using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct Boolean : IComparable<bool>, IComparable
    {
        public override string ToString()
        {
            return this ? "True" : "False";
        }

        public override bool Equals(object other)
        {
            if (!(other is bool))
                return false;

            var a = this;
            var b = (bool)other;
            return a == b;
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
