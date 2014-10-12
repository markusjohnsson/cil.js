using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public class Math
    {
        public const double PI = 3.14159265359;

        [JsReplace("Math.sqrt({0})")]
        public extern static double Sqrt(double v);
        
        [JsReplace("Math.floor({0})")]
        public extern static double Floor(double v);

        [JsReplace("Math.pow({0}, {1})")]
        public extern static double Pow(double v, double exponent);

        [JsReplace("Math.max({0}, {1})")]
        public extern static int Max(int a, int b);

        [JsReplace("Math.max({0}, {1})")]
        public extern static double Max(double a, double b);

    }
}
