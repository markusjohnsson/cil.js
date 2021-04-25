using System.Collections;
using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;
using CilJs.JavaScript;

namespace System
{
    public class String: IEquatable<string>, IComparable<string>
    {
        internal CilJs.JavaScript.String jsstr;

        [JsImport("function(o) { return o.jsstr.length; }")]
        private extern static int GetLengthImpl(object s);

        [JsImport("function(a, b) { return a.jsstr === b.jsstr ? 1 : 0; }")]
        private extern static bool EqualsImpl(string a, string b);

        [JsImport("function (args) { return CILJS.newString(String.prototype.concat.apply('', args.jsarr)); }")]
        private extern static string ConcatImpl(params string[] args);

        [JsImport("function (s, i) { return s.jsstr.charCodeAt(i); }")]
        private extern static char GetChar(string s, int i);

        [JsImport(@"function replaceAll(s, find, replace) {
                        function escapeRegExp(s2) {
                            return s2.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, ""\\$1"");
                        }
                      return CILJS.newString(s.jsstr.replace(new RegExp(escapeRegExp(find.jsstr), 'g'), replace.jsstr));
                    }")]
        private extern static string ReplaceImpl(string s, string find, string replace);

        [IndexerName("Chars")]
        public char this[int i] { get { return GetChar(this, i); } }

        [JsReplace("CILJS.newString({0})")]
        internal extern static string FromJsString(object other);

        public static readonly string Empty = "";

        public static string Concat(string a, string b)
        {
            return ConcatImpl(a, b);
        }

        public static string Concat(object a, object b, object c)
        {
            a = a ?? string.Empty;
            b = b ?? string.Empty;
            c = c ?? string.Empty;
            return ConcatImpl(a.ToString(), b.ToString(), c.ToString());
        }

        public static string Concat(string a, string b, string c)
        {
            return ConcatImpl(a, b, c);
        }

        public static string Concat(string a, string b, string c, string d)
        {
            return ConcatImpl(a, b, c, d);
        }

        public static string Concat(object a, object b)
        {
            a = a ?? string.Empty;
            b = b ?? string.Empty;
            return ConcatImpl(a.ToString(), b.ToString());
        }

        public static string Concat(params string[] args)
        {
            return ConcatImpl(args);
        }

        public static string Concat(params object[] args)
        {
            var strings = new string[args.Length];
            for (int i = 0; i < args.Length; i++)
            {
                var arg = args[i] ?? string.Empty;
                strings[i] = arg.ToString();
            }

            return Concat(strings);
        }

        public string Replace(string oldValue, string newValue)
        {
            return ReplaceImpl(this, oldValue, newValue);
        }

        public int Length
        {
            get
            {
                return GetLengthImpl(this);
            }
        }

        public override string ToString()
        {
            return this;
        }

        public static bool operator !=(string lhs, string rhs)
        {
            return !(lhs == rhs);
        }

        public static bool operator ==(string lhs, string rhs)
        {
            if (lhs == null)
                return rhs == null;
            if (rhs == null)
                return false;
            return EqualsImpl(lhs, rhs);
        }

        public bool Equals(string other)
        {
            if (other == null)
                return false;
            return EqualsImpl(this, other);
        }

        public override bool Equals(object other)
        {
            return Equals(other as string);
        }

        [JsImport(@"
            function (o) {
                var str = o.jsstr;
                var length = str.length;
                var h = 0;
                for (var i = 0; i < length; i += 1)
                    h = (h << 5) - h + str.charCodeAt(i);
                return h;
            }")]
        private extern static int GetHashCodeImpl(string s);

        public override int GetHashCode()
        {
            return GetHashCodeImpl(this);
        }

        [JsImport(@"
            function (a, b) {
                if (a.jsstr < b.jsstr)
                    return -1;

                if (a.jsstr > b.jsstr)
                    return 1;

                return 0;
            }
            ")]
        public extern static int CompareOrdinal(string s1, string s2);

        public static int Compare(string s1, string s2)
        {
            return CompareOrdinal(s1, s2);
        }

        public static string Format(string formatString, params object []values)
        {
            // poor man's implementation. 

            for (var i = 0; i < values.Length; i++)
            {
                var v = values[i];
                if (v == null)
                    v = string.Empty;
                formatString = formatString.Replace("{" + i + "}", v.ToString());
            }

            return formatString;
        }

        [JsImport("function(v) { return CILJS.newString(v.jsstr.toLowerCase()); } ")]
        internal static extern string ToLowerImpl(string v);

        public string ToLower()
        {
            return ToLowerImpl(this);
        }

        [JsImport("function(v) { return CILJS.newString(v.jsstr.toUpperCase()); } ")]
        internal static extern string ToUpperImpl(string v);

        public string ToUpper()
        {
            return ToUpperImpl(this);
        }

        [JsReplace("({0}.jsstr.localeCompare({1}.jsstr))")]
        private extern static int CompareToImpl(string a, string b);

        public int CompareTo(string other)
        {
            if (other == null)
                return 1;

            return CompareToImpl(this, other);
        }

        public static bool IsNullOrEmpty(string s)
        {
            return s == null || s == Empty;
        }
    }
}
