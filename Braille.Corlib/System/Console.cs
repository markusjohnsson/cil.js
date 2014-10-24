using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public class Console
    {
        [JsImport("(function (o) { console.log(o.jsstr); })")]
        internal extern static void WriteLineImpl(string s);

        public static void WriteLine(object s)
        {
            if (s == null)
                WriteLineImpl(string.Empty);
            else
                WriteLineImpl(s.ToString());
        }
    }
}
