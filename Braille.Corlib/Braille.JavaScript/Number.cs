using System;
using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace Braille.JavaScript
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
        public extern static explicit operator Number(double d);

        [JsReplace("{0}|0")]
        public extern static explicit operator int(Number d);
    }
}
