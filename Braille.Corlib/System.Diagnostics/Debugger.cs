using System;
using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System.Diagnostics
{
    using Braille.Runtime.TranslatorServices;

    public class Debugger
    {
        [JsReplace("debugger")]
        public extern static void Break();
    }
}
