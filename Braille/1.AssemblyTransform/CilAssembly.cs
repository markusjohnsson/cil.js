using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Reflection;
using Braille.JSAst;

namespace Braille.AssemblyTransform
{
    class CilAssembly
    {
        public string Name { get; set; }
        public IEnumerable<CilType> Types { get; set; }

        public JSExpression GetAssemblyDeclaration()
        {
            return new JSObjectLiteral
            {
                Properties = new Dictionary<string, JSExpression>
                {
                    { "Name", new JSStringLiteral { Value = Name } },
                    { "Types", new JSArrayLiteral { Values = Types.Select(t => t.GetTypeDeclaration()) } }
                }
            };
        }
    }
}
