using System;
using System.Runtime.CompilerServices;

namespace Braille.Runtime.TranslatorServices
{
    [JsIgnore]
    [AttributeUsage(AttributeTargets.Method)]
    internal class JsReplaceAttribute : Attribute
    {
        public JsReplaceAttribute(string replacement)
        {
            Replacement = replacement;
        }

        public string Replacement { get; set; }
    }
}
