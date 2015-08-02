using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CilJs.JSAst;

using Type = IKVM.Reflection.Type;

namespace CilJs.Ast
{
    class CilType
    {
        public string Namespace { get; set; }
        public string Name { get; set; }
        public IEnumerable<CilMethod> Methods { get; set; }
        public string BaseType { get; set; }
        public Type ReflectionType { get; set; }


        public bool IsUserDelegate
        {
            get
            {
                return ReflectionType.BaseType != null && ReflectionType.BaseType.FullName == "System.MulticastDelegate";
            }
        }

        public bool IsIgnored
        {
            get
            {
                return ReflectionType.GetCustomAttributesData().Any(a => a.AttributeType.Name == "JsIgnoreAttribute");
            }
        }

        public bool IsInterface
        {
            get
            {
                return ReflectionType.IsInterface;
            }
        }
    }
}
