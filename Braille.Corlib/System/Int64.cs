using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct Int64
    {
        public override string ToString()
        {
            var a = this;
            var ten = 10L;

            var s = "";

            do
            {
                var r = a % ten;
                s = GetLowString(a);
                a = a / ten;
            } while (a > 0);

            return s;
        }

        [JsReplace("{0}[0].toString()")]
        private static extern string GetLowString(long a);

        [JsAssemblyStatic(Name = "XInt64_Addition")]
        [JsImport(@"
            function XInt64_Addition(lhs, rhs) 
            {
                var x = new Uint16Array(lhs.buffer);
                var y = new Uint16Array(rhs.buffer);                

                var a = (x[0] + y[0]) | 0;
                var o1 = (a & 0xff0000) >> 16;
                var b = (o1 + x[1] + y[1]) | 0;
                var o2 = (b & 0xff0000) >> 16;
                var c = (o2 + x[2] + y[2]) | 0;
                var o3 = (c & 0xff0000) >> 16;
                var d = (o3 + x[3] + y[3]) | 0;

                return new Uint32Array(new Uint16Array([a & 0xffff, b & 0xffff, c & 0xffff, d & 0xffff]).buffer);
            }")]
        public extern static long operator +(long lhs, long rhs);

        [JsAssemblyStatic(Name = "XInt64_Subtraction")]
        [JsImport(@"
            function XInt64_Subtraction(lhs, rhs) 
            {
                if (lhs[0] >= rhs[0] && rhs[1] == 0)
                    return new Uint32Array([lhs[0]-rhs[0], lhs[1]]);

                var x = new Uint16Array(lhs.buffer);
                var y = new Uint16Array(rhs.buffer);                

                var a = (x[0] - y[0]) | 0;
                var u = 0;
                if (a < 0) { a = 0x10000 + a; u = -1; }

                var b = (u + ((x[1] - y[1]) | 0)) | 0;
                u = 0;
                if (b < 0) { b = 0x10000 + b; u = -1; }

                var c = (u + ((x[2] - y[2]) | 0)) | 0;
                u = 0;
                if (c < 0) { c = 0x10000 + c; u = -1; }

                var d = (u + ((x[3] - y[3]) | 0)) | 0;
                if (d < 0) { d = 0x10000 + d; }
                
                return new Uint32Array(new Uint16Array([a & 0xffff, b & 0xffff, c & 0xffff, d & 0xffff]).buffer);
            }")]
        public extern static long operator -(long lhs, long rhs);

        [JsAssemblyStatic(Name = "XInt64_BitwiseOr")]
        [JsImport(@"
            function XInt64_BitwiseOr(lhs, rhs)
            {
                return new Uint32Array([lhs[0] | rhs[0], lhs[1] | rhs[1]]);
            }
            ")]
        public extern static long operator |(long lhs, long rhs);

        [JsAssemblyStatic(Name = "XInt64_BitwiseAnd")]
        [JsImport(@"
            function XInt64_BitwiseAnd(lhs, rhs) 
            {
                return new Uint32Array([lhs[0] & rhs[0], lhs[1] & rhs[1]]);
            }
            ")]
        public extern static long operator &(long lhs, long rhs);

        [JsAssemblyStatic(Name = "XInt64_ExclusiveOr")]
        [JsImport(@"
            function XInt64_ExclusiveOr(lhs, rhs)
            {
                return new Uint32Array([lhs[0] ^ rhs[0], lhs[1] ^ rhs[1]]);
            }
            ")]
        public extern static long operator ^(long lhs, long rhs);

        [JsAssemblyStatic(Name = "XInt64_OnesComplement")]
        [JsImport(@"
            function XInt64_OnesComplement(a)
            {
                return new Uint32Array([~a[0], ~a[1]]);
            }
            ")]
        public extern static long operator ~(long a);

        [JsAssemblyStatic(Name = "XInt64_LeftShift")]
        [JsImport(@"
            function XInt64_LeftShift(a, n)
            {
                n = n & 0x3f;

                var maxShift = 8;
                if (n > 8) {
                    return asm0.XInt64_LeftShift(
                        asm0.XInt64_LeftShift(a, maxShift), 
                        n - maxShift);
                }
          
                var bat = a[0] << n;
                var ba = bat & 0xffffffff;
                var ra = (bat >>> 24) & 0xffffffff;
                
                var bbt = (a[1] << n) | ra;
                var bb = bbt & 0xffffffff;

                return new Uint32Array([ba, bb]);
            }
            ")]
        public extern static long operator <<(long lhs, int rhs);

        [JsAssemblyStatic(Name = "XInt64_Equality")]
        [JsImport(@"
            function XInt64_Equality(lhs, rhs)
            {
                return lhs[0] === rhs[0] && lhs[1] === rhs[1];
            }
            ")]
        public extern static long operator ==(long lhs, long rhs);

        [JsAssemblyStatic(Name = "XInt64_Inequality")]
        [JsImport(@"
            function XInt64_Inequality(lhs, rhs)
            {
                return lhs[0] !== rhs[0] && lhs[1] !== rhs[1];
            }
            ")]
        public extern static long operator !=(long lhs, long rhs);

        [JsAssemblyStatic(Name = "XInt64_Decrement")]
        public static long operator --(long lhs)
        {
            return lhs - 1;
        }

        [JsAssemblyStatic(Name = "XInt64_Increment")]
        public static long operator ++(long lhs)
        {
            return lhs + 1;
        }

        [JsAssemblyStatic(Name = "Int64_RightShift")]
        [JsImport(@"
            function Int64_RightShift(lhs, n) {
                // Int64 (signed) uses arithmetic shift, UIn64 (unsigned) uses logical shift

                if (n === 0) {
                    var result2 = a;
                } else if (n > 32) {
                    result2 = asm0.UInt64_RightShift(asm0.UInt64_RightShift(a, 32), n - 32);
                } else {
                    var unsignedShift = asm0.UInt64.op_RightShift(a, n);

                    if (asm0.Int64_isNegative(a)) {
                        var outshift = asm0.UInt64_RightShift(new Uint32Array([0xffffff, 0xffffff]), n);
                        var inshift = asm0.XInt64_LeftShift(outshift, 64 - n);
                        var uresult = asm0.UInt64_BitwiseOr(unsignedShift, inshift);
                    } else {
                        uresult = unsignedShift;
                    }
                    result2 = uresult;
                }
                return result2;
            }")]
        public extern static long operator >>(long a, int n);

        //        [JsAssemblyStatic]
        //        [JsImport(@"
        //            function (lhs, rhs)
        //            {
        //            }
        //            ")]
        //        public extern static long operator -(long lhs, long rhs);
    }
}
