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

    }
}
