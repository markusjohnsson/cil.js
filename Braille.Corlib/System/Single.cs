using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct Single : IComparable<float>, IComparable
    {
        public const float MinValue = (float)-3.40282346638528859e+38;
        public const float Epsilon = (float)1.4e-45;
        public const float MaxValue = (float)3.40282346638528859e+38;
        public const float PositiveInfinity = (float)1.0 / (float)0.0;
        public const float NegativeInfinity = (float)-1.0 / (float)0.0;
        public const float NaN = (float)0.0 / (float)0.0;
 
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
