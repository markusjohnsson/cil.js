using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct Single : IComparable<float>, IComparable
    {
        public override string ToString()
        {
            return InternalFormatting.SignedPrimitiveToString(this);
        }

        public int CompareTo(object p)
        {
            return CompareTo((float)p);
        }

        public int CompareTo(float p)
        {
            var n = this;

            if (n < p)
                return -1;

            if (n > p)
                return 1;

            return 0;
        }
    }
}
