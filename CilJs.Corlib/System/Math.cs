using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;

namespace System
{
    public class Math
    {
        public const double E = 2.71828;
        public const double PI = 3.14159265359;

        [JsReplace("Math.sqrt({0})")]
        public extern static double Sqrt(double v);
        
        [JsReplace("Math.floor({0})")]
        public extern static double Floor(double v);

        [JsReplace("Math.pow({0}, {1})")]
        public extern static double Pow(double v, double exponent);

        [JsReplace("Math.max({0}, {1})")]
        public extern static int Max(int a, int b);

        // long and ulong does not use JavaScript's Number
        public static long Max(long a, long b) 
        {
            return a > b ? a : b;
        }

        [JsReplace("Math.max({0}, {1})")]
        public extern static float Max(float a, float b);

        [JsReplace("Math.max({0}, {1})")]
        public extern static double Max(double a, double b);

        [JsReplace("Math.min({0}, {1})")]
        public extern static int Min(int a, int b);

        // long and ulong does not use JavaScript's Number
        public static long Min(long a, long b)
        {
            return a < b ? a : b;
        }

        [JsReplace("Math.min({0}, {1})")]
        public extern static double Min(double a, double b);

        [JsReplace("Math.min({0}, {1})")]
        public extern static float Min(float a, float b);
    }
}
