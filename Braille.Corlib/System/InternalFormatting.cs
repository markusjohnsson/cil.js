using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    internal static class InternalFormatting
    {
        [JsImport("function(o) { return new_string(o.boxed.toString()); }")]
        internal extern static string NumberStructToString(object o);
    }
}
