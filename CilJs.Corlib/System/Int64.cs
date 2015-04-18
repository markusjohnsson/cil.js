using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;

using JsString = CilJs.JavaScript.String;

namespace System
{
    public struct Int64 : IComparable<long>, IComparable, IEquatable<long>
    {
        public const long MaxValue = 0x7fffffffffffffff;
        public const long MinValue = -9223372036854775808;

        public override string ToString()
        {
            var a = this;
            var ten = 10L;

            var s = JsString.Emtpy;
            var n = JsString.Emtpy;

            if (a < 0)
            {
                n = JsString.FromCharCode('-');
            }

            do
            {
                var r = a % ten;
                if (r < 0) r = -r;
                s = GetLowString(r) + s;
                a = a / ten;
            } while (a != 0);

            return (string)(n + s);
        }

        public override int GetHashCode()
        {
            return GetLow(this);
        }

        [JsReplace("{0}[0]")]
        private static extern int GetLow(long s);

        [JsReplace("{0}[0].toString()")]
        private static extern JsString GetLowString(long a);    

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
            function XInt64_LeftShift(lhs, n)
            {
                n = n & 0x3f;

                var maxShift = 8;
                if (n > maxShift) {
                    return asm0.XInt64_LeftShift(
                           asm0.XInt64_LeftShift(lhs, maxShift), n - maxShift);
                }
          
                var x = new Uint16Array(lhs.buffer);

                var a = (x[0] << n);
                var b = (x[1] << n) | ((a >>> 16) & 0xffff);
                var c = (x[2] << n) | ((b >>> 16) & 0xffff);
                var d = (x[3] << n) | ((c >>> 16) & 0xffff);

                return new Uint32Array(new Uint16Array([a & 0xffff, b & 0xffff, c & 0xffff, d & 0xffff]).buffer);
            }
            ")]
        public extern static long operator <<(long lhs, int rhs);

        [JsAssemblyStatic(Name = "XInt64_Equality")]
        [JsImport(@"
            function XInt64_Equality(lhs, rhs)
            {
                return (lhs[0] === rhs[0] && lhs[1] === rhs[1]) ? 1 : 0;
            }
            ")]
        public extern static long operator ==(long lhs, long rhs);

        [JsAssemblyStatic(Name = "XInt64_Inequality")]
        [JsImport(@"
            function XInt64_Inequality(lhs, rhs)
            {
                return (lhs[0] !== rhs[0] && lhs[1] !== rhs[1]) ? 1 : 0;
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
            function Int64_RightShift(a, n) {
                // Int64 (signed) uses arithmetic shift, UIn64 (unsigned) uses logical shift

                if (n === 0) {
                    var result2 = a;
                } else if (n > 32) {
                    result2 = asm0.Int64_RightShift(asm0.Int64_RightShift(a, 32), n - 32);
                } else {
                    var unsignedShift = asm0.UInt64_RightShift(a, n);

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

        [JsAssemblyStatic(Name = "Int64_Division")]
        [JsImport(@"
            function Int64_Division(n, d) {
                if (d[0] === 0 && d[1] === 0)
                    throw new Error(""System.DivideByZeroException"");

                if (asm0.Int64_isNegative(d))
                    return asm0.Int64_Division(
                      asm0.Int64_UnaryNegation(n), asm0.Int64_UnaryNegation(d));

                else if (asm0.Int64_isNegative(n)) {
                    if (asm0.XInt64_Equality(asm0.Int64_UnaryNegation(n), n)) { " + /* fix for long.MinValue overflow */ @"
                        n = asm0.XInt64_Addition(n, d);
                        return asm0.XInt64_Subtraction(
                            asm0.Int64_UnaryNegation(asm0.Int64_Division(asm0.Int64_UnaryNegation(n), d)),
                            new Uint32Array([1, 0]));
                    }
                    else {
                        return asm0.Int64_UnaryNegation(asm0.Int64_Division(asm0.Int64_UnaryNegation(n), d));
                    }
                }
                else
                    return asm0.UInt64_Division(n, d);
            }")]
        public extern static long operator /(long n, int d);

        [JsAssemblyStatic(Name = "Int64_Modulus")]
        [JsImport(@"
            function Int64_Modulus(n, d) {
                if (d[0] === 0 && d[1] === 0)
                    throw new Error(""System.DivideByZeroException"");

                if (asm0.Int64_isNegative(d)) {
                    return asm0.Int64_Modulus(
                      n, asm0.Int64_UnaryNegation(d));
                }
                else if (asm0.Int64_isNegative(n)) {
                    if (asm0.XInt64_Equality(asm0.Int64_UnaryNegation(n), n)) { " + /* fix for long.MinValue overflow */ @"
                        n = asm0.XInt64_Addition(n, d);
                    }
                    return asm0.Int64_UnaryNegation(asm0.Int64_Modulus(asm0.Int64_UnaryNegation(n), d));
                }
                else
                    return asm0.UInt64_Modulus(n, d);
            }")]
        public extern static long operator %(long n, int d);

        [JsAssemblyStatic(Name = "Int64_GreaterThan")]
        [JsImport(@"
            function Int64_GreaterThan (a, b) {
                var an = asm0.Int64_isNegative(a);
                var bn = asm0.Int64_isNegative(b);

                if (an === bn)
                    return asm0.UInt64_GreaterThan(a, b);
                else
                    return bn ? 1 : 0;
            }")]
        public extern static bool operator >(long a, long b);

        [JsAssemblyStatic(Name = "Int64_LessThan")]
        [JsImport(@"
            function Int64_LessThan (a, b) {
                var an = asm0.Int64_isNegative(a);
                var bn = asm0.Int64_isNegative(b);

                if (an === bn)
                    return asm0.UInt64_LessThan(a, b);
                else
                    return an ? 1 : 0;
            }")]
        public extern static bool operator <(long a, long b);

        [JsAssemblyStatic(Name = "Int64_UnaryNegation")]
        [JsImport(@"
            function Int64_UnaryNegation (a) {
                var complement = asm0.XInt64_Subtraction(new Uint32Array([0xffffffff, 0xffffffff]), a);
                return asm0.XInt64_Addition(complement, new Uint32Array([1, 0]));
            }")]
        public extern static long operator -(long a);

        [JsAssemblyStatic(Name = "Int64_isNegative")]
        [JsImport(@"
            function isNegative(n) {
                return asm0.UInt64_GreaterThan(n, [0xffffffff, 0x7fffffff]);
            }")]
        internal extern static bool isNegative(long n);

        public int CompareTo(object p)
        {
            return CompareTo((long)p);
        }

        public int CompareTo(long p)
        {
            long n = this;

            if (n < p)
                return -1;

            if (n > p)
                return 1;

            return 0;
        }

        public override bool Equals(object other)
        {
            if (!(other is long))
                return false;
            return Equals((long)other);
        }

        public bool Equals(long other)
        {
            var a = this;
            var b = other;
            return a == b;
        }

    }
}
