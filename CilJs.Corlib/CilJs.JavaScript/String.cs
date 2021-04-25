using System;
using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;

namespace CilJs.JavaScript
{
    public sealed class String
    {
        public readonly static String Emtpy = GetEmpty();

        private String() { }

        [JsReplace(@"""""")]
        private extern static String GetEmpty();

        [JsReplace("String.fromCharCode({0})")]
        public extern static String FromCharCode(char c);

        [JsReplace("{0} + {1}")]
        public extern static String operator +(String a, String b);

        [JsReplace("CILJS.newString({0})")]
        public extern static explicit operator string(String s);
    }
}
