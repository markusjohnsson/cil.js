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
                    { "Name", new JSStringLiteral { Value = Name } },
                    { "HideBySig", new JSBoolLiteral { Value = IsHideBySig } },
                    { "Virtual", new JSBoolLiteral { Value = IsVirtual } },
                    { "Body", new JSArrayLiteral { Values = IlCode.Select(b => new JSNumberLiteral { Value = b, IsHex = true }) } },
                    { "MetadataToken", new JSStringLiteral { Value = string.Format("0x{0:x}", MetadataToken) } } 
                }
            };
            //return new JSStringLiteral
            //{
            //    Value = (IsHideBySig ? "hidebysig " : string.Empty) +
            //            (IsVirtual ? "virtual " : string.Empty) +
            //            Name 
            //};
        }

        public byte[] IlCode { get; set; }

        public MethodInfo ReflectionMethod { get; set; }
    }
}
