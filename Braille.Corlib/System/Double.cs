using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct Double : IComparable<double>, IComparable
    {
        public const double Epsilon = 4.9406564584124650e-324;
        public const double MaxValue = 1.7976931348623157e308;
        public const double MinValue = -1.7976931348623157e308;
        public const double NaN = 0.0d / 0.0d;
        public const double NegativeInfinity = -1.0d / 0.0d;
        public const double PositiveInfinity = 1.0d / 0.0d;

        public override string ToString()
        {
            return InternalFormatting.SignedPrimitiveToString(this);
        }

        public int CompareTo(object p)
        {
            return CompareTo((double)p);
        }

        public int CompareTo(double p)
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
