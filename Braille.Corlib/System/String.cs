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

        [JsImport("function () { return new_string(String.prototype.concat.apply('', arguments)); }")]
        private extern static string ConcatImpl(params string[] args);

        [IndexerName("Chars")]
        public char this[int i] { get { throw new Exception("Not implemented."); } }

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
        
    }
}
