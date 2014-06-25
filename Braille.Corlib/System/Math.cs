using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public class Math
    {
        public const double PI = 3.14159265359;

        public static double Sqrt(double v)
        {
            return SqrtImpl(v);
        }

        public static double Floor(double v)
        {
            return FloorImpl(v);
        }

        public static double Pow(double v, double exponent)
        {
            return PowImpl(v, exponent);
        }

        [JsImport("function(o) { return Math.sqrt(o.boxed); }")]
        internal extern static double SqrtImpl(object v);

        [JsImport("function(o) { return Math.floor(o.boxed); }")]
        internal extern static double FloorImpl(object v);

        [JsImport("function(a, b) { return Math.pow(a.boxed, b.boxed); }")]
        internal extern static double PowImpl(object a, object b);

    }
}
