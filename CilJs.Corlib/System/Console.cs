using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;

namespace System
{
    public class Console
    {
        [JsReplace("CILJS.consoleWriteLine({0})")]
        internal extern static void WriteLineImpl(string s);

        public static void WriteLine(object s)
        {
            if (s == null)
                WriteLineImpl(string.Empty);
            else
                WriteLineImpl(s.ToString());
        }

        public static void WriteLine(string format, params object[] parameters)
        {
            if (format == null)
                WriteLineImpl(string.Empty);
            else
                WriteLineImpl(string.Format(format, parameters));
        }
    }
}
