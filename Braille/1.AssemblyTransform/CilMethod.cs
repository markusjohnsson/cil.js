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

        public IILReaderResolver Resolver { get; set; }

        public JSExpression GetMethodDeclaration()
        {
            return new JSObjectLiteral
            {
                Properties = new Dictionary<string, JSExpression> 
                { 
                    { "name", new JSStringLiteral { Value = Name } },
                    { "hideBySig", new JSBoolLiteral { Value = IsHideBySig } },
                    { "virtual", new JSBoolLiteral { Value = IsVirtual } },
                    { "body", JsFunction },
                    { "metadataToken", new JSStringLiteral { Value = string.Format("0x{0:x}", MetadataToken) } } 
                }
            };
        }

        public byte[] IlCode { get; set; }

        public MethodInfo ReflectionMethod { get; set; }

        public JSFunctionDelcaration JsFunction { get; set; }
    }
}
