using System;
using System.Runtime.CompilerServices;

namespace Braille.Runtime.TranslatorServices
{
    [JsIgnore]
    [AttributeUsage(AttributeTargets.Method)]
    public class JsImportAttribute : Attribute
    {
        public JsImportAttribute(string function)
        {
            Function = function;
        }

        public string Function { get; set; }
    }
}
