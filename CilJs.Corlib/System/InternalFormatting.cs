using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;

namespace System
{
    internal static class InternalFormatting
    {
        [JsImport("function(o) { return CILJS.newString(o.boxed.toString()); }")]
        internal extern static string SignedPrimitiveToString(object o);

        [JsImport(@"
            function(o, size) {
                var b = o.boxed;
                if (b < 0) {
                    var max = 0xffffffff >>> (32 - size);
                    b = max + (b + 1);
                }
                return CILJS.newString(b.toString());
            }")]
        internal extern static string UnsignedPrimitiveToString(object o, int size);
    }
}
