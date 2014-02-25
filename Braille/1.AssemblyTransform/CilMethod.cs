using Braille.JSAst;
using Braille.MethodTransform;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Braille.AssemblyTransform
{
    class CilMethod
    {
        public string Name { get; set; }

        public bool IsHideBySig { get; set; }

        public bool IsVirtual { get; set; }

        public int MetadataToken { get; set; }

        public ModuleILResolver Resolver { get; set; }

        public JSExpression GetMethodDeclaration()
        {
            return new JSObjectLiteral
            {
                Properties = new Dictionary<string, JSExpression> 
                { 
                    { "name", new JSStringLiteral { Value = Name } },
                    { "hideBySig", new JSBoolLiteral { Value = IsHideBySig } },
                    { "isVirtual", new JSBoolLiteral { Value = IsVirtual } },
                    { "isStatic", new JSBoolLiteral { Value = ReflectionMethod.IsStatic } },
                    { "metadataToken", new JSStringLiteral { Value = string.Format("0x{0:x}", MetadataToken) } },
                    //{ "body", JsFunction }
                }
            };
        }

        public byte[] IlCode { get; set; }

        public MethodBase ReflectionMethod { get; set; }

        public JSFunctionDelcaration JsFunction { get; set; }
    }
}
