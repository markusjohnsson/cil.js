using System.Collections;
using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public class String: IEquatable<string>
    {
        internal object jsstr;

        [JsImport("function(o) { return o.jsstr.length; }")]
        private extern static int GetLengthImpl(object s);

        [JsImport("function(a, b) { return a.jsstr === b.jsstr ? 1 : 0; }")]
        private extern static bool EqualsImpl(string a, string b);

        [JsImport("function (args) { return BLR.new_string(String.prototype.concat.apply('', args.jsarr)); }")]
        private extern static string ConcatImpl(params string[] args);

        [JsImport("function (s, i) { return s.jsstr.charCodeAt(i); }")]
        private extern static char GetChar(string s, int i);

        [JsImport(@"function replaceAll(s, find, replace) {
                        function escapeRegExp(s2) {
                            return s2.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, ""\\$1"");
                        }
                      return BLR.new_string(s.jsstr.replace(new RegExp(escapeRegExp(find.jsstr), 'g'), replace.jsstr));
                    }")]
        private extern static string ReplaceImpl(string s, string find, string replace);

        [IndexerName("Chars")]
        public char this[int i] { get { return GetChar(this, i); } }

        [JsReplace("BLR.new_string({0})")]
        internal extern static string FromJsString(object other);

        public static readonly string Empty = "";

        public static string Concat(string a, string b)
        {
            return ConcatImpl(a, b);
        }

        public static string Concat(object a, object b, object c)
        {
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
                strings[i] = args[i].ToString();
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
            return !EqualsImpl(lhs, rhs);
        }

        public static bool operator ==(string lhs, string rhs)
        {
            return EqualsImpl(lhs, rhs);
        }

        public bool Equals(string other)
        {
            return EqualsImpl(this, other);
        }

        public override bool Equals(object other)
        {
            return Equals((string)other);
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
        public extern static int Compare(string s1, string s2);
    }
}
