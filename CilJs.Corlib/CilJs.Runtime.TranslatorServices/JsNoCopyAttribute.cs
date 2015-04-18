using System;
using System.Runtime.CompilerServices;

namespace CilJs.Runtime.TranslatorServices
{
    [JsIgnore]
    [AttributeUsage(AttributeTargets.Struct)]
    internal class JsNoCopyAttribute : Attribute
    {
    }
}
