using System;
using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;

namespace CilJs.JavaScript
{
    [JsNoCopy]
    public struct Number
    {
        [JsReplace("{0} + {1}")]
        public extern static Number operator +(Number a, Number b);

        [JsReplace("{0} - {1}")]
        public extern static Number operator -(Number a, Number b);

        [JsReplace("{0} * {1}")]
        public extern static Number operator *(Number a, Number b);

        [JsReplace("{0} / {1}")]
        public extern static Number operator /(Number a, Number b);

        [JsReplace("{0} << {1}")]
        public extern static Number operator <<(Number a, int b);

        [JsReplace("{0} << {1}")]
        public extern static Number operator >>(Number a, int b);

        [JsReplace("{0} | {1}")]
        public extern static Number operator |(Number a, Number b);

        [JsReplace("{0} & {1}")]
        public extern static Number operator &(Number a, Number b);

        [JsReplace("{0}")]
        public extern static implicit operator Number(double d);

        [JsReplace("{0}|0")]
        public extern static explicit operator int(Number d);
    }
}
