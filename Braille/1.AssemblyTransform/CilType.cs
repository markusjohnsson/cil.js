using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Reflection;
using Braille.JSAst;

namespace Braille.AssemblyTransform
{
    class CilType
    {
        public string Namespace { get; set; }
        public string Name { get; set; }

        public JSExpression GetTypeDeclaration()
        {
            return new JSObjectLiteral
            {
                Properties = new Dictionary<string, JSExpression> 
                {
                    { "Namespace", new JSStringLiteral { Value = Namespace } },
                    { "Name", new JSStringLiteral { Value = Name } },
                    { "BaseType", new JSStringLiteral { Value = BaseType } },
                    { "Methods", new JSArrayLiteral { Values = Methods.Select(m => m.GetMethodDeclaration()) } }
                }
            };
        }

        public IEnumerable<CilMethod> Methods { get; set; }

        public string BaseType { get; set; }
    }
}
