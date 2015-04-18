using System;
using System.Runtime.CompilerServices;

namespace CilJs.Runtime.TranslatorServices
{
    [JsIgnore]
    [AttributeUsage(AttributeTargets.Method)]
    internal class JsAssemblyStaticAttribute : Attribute
    {
        public string Name { get; set; }
    }
}
