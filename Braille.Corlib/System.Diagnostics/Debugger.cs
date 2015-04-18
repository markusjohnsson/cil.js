using System;
using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;

namespace System.Diagnostics
{
    public class Debugger
    {
        [JsReplace("debugger")]
        public extern static void Break();
    }
}
