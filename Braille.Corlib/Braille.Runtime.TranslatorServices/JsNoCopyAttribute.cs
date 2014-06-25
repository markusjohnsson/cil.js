using System;
using System.Runtime.CompilerServices;

namespace Braille.Runtime.TranslatorServices
{
    [JsIgnore]
    [AttributeUsage(AttributeTargets.Struct)]
    internal class JsNoCopyAttribute : Attribute
    {
    }
}
