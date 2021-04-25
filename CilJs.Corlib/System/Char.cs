using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;

namespace System
{
    public struct Char
    {
        public const char MinValue = (char)0;
        public const char MaxValue = (char)65535;

        public override string ToString()
        {
            return ToStringImpl(this);
        }

        [JsImport("function(o) { return CILJS.newString(String.fromCharCode(o.boxed)); }")]
        private extern static string ToStringImpl(object o);

        [JsImport("function(o) { return (48 <= o.boxed && o.boxed <= 57) ? 1 : 0; }")]
        public extern static bool IsDigit(char p);
    }
}
