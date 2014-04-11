using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public class String
    {
        internal object jsstr;

        [IndexerName("Chars")]
        public char this[int i] { get { throw new Exception("Direct call not supported."); } }

        public static string Concat(string a, string b)
        {
            throw new Exception("Not implemented.");
        }

        public static string Concat(object a, object b)
        {
            throw new Exception("Not implemented.");
        }

        public static string Concat(params string[] args)
        {
            throw new Exception("Not implemented.");
        }

        public static string Concat(params object[] args)
        {
            throw new Exception("Not implemented.");
        }

        public int Length
        {
            get
            {
                return GetLengthImpl(this);
            }
        }

        [JsImport("function(o) { return o.jsstr.length; }")]
        private extern static int GetLengthImpl(object s);

        public override string ToString()
        {
            return this;
        }
    }
}
