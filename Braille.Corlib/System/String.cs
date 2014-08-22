using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public class String
    {
        internal object jsstr;

        [JsImport("function(o) { return o.jsstr.length; }")]
        private extern static int GetLengthImpl(object s);

        [JsImport("function(a, b) { return a.jsstr === b.jsstr; }")]
        private extern static bool EqualsImpl(string a, string b);

        [JsImport("function (args) { return new_string(String.prototype.concat.apply('', args.jsarr)); }")]
        private extern static string ConcatImpl(params string[] args);

        [JsImport("function (s, i) { return s.jsstr.charCodeAt(i); }")]
        private extern static char GetChar(string s, int i);

        [IndexerName("Chars")]
        public char this[int i] { get { return GetChar(this, i); } }

        [JsReplace("new_string({0})")]
        internal extern static string FromJsString(object other);

        public static readonly string Empty = "";

        public static string Concat(string a, string b)
        {
            return ConcatImpl(a, b);
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
            throw new Exception("Not implemented");
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
    }
}
