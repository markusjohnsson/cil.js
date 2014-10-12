using Braille.Runtime.TranslatorServices;

namespace System.Braille.JavaScript
{
    [JsNoCopy]
    public struct Boolean
    {
        [JsReplace("({0} ? 1 : 0)")]
        public static extern explicit operator bool(Boolean b);
    }
}
