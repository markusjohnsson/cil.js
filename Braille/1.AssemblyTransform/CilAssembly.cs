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
        public MethodInfo EntryPoint { get; set; }

        public JSExpression GetAssemblyDeclaration()
        {
            return new JSFunctionDelcaration
            {
                Parameters = new[] { new JSFunctionParameter { Name = "asm" } },
                Body = GetBody().Select(s => new JSStatement { Expression = s })
            };
        }

        private IEnumerable<JSExpression> GetBody()
        {
            yield return new JSVariableDelcaration { Name = "self" };

            foreach (var t in Types)
            {
                yield return new JSBinaryExpression
                {
                    Left = new JSIdentifier { Name = "self" },
                    Operator = "=",
                    Right = new JSCallExpression
                    {
                        Function = new JSFunctionDelcaration
                        {
                            Body = GetClass(t).Select(s => new JSStatement { Expression = s })
                        }
                    }
                };

                yield return new JSBinaryExpression
                {
                    Left = new JSPropertyAccessExpression
                    {
                        Host = new JSIdentifier { Name = "asm" },
                        Property = t.ReflectionType.FullName
                    },
                    Operator = "=",
                    Right = new JSIdentifier { Name = "self" }
                };
            }


            foreach (var m in Types.SelectMany(t => t.Methods))
            {
                yield return new JSBinaryExpression
                {
                    Left = new JSPropertyAccessExpression
                    {
                        Host = new JSIdentifier { Name = "asm" },
                        Property = "x" + m.MetadataToken.ToString("x")
                    },
                    Operator = "=",
                    Right = m.JsFunction
                };
            }

            if (EntryPoint != null)
            {
                yield return new JSBinaryExpression
                {
                    Left = new JSPropertyAccessExpression
                    {
                        Host = new JSIdentifier { Name = "asm" },
                        Property = "entryPoint"
                    },
                    Operator = "=",
                    Right = new JSPropertyAccessExpression
                    {
                        Host = new JSIdentifier { Name = "asm" },
                        Property = "x" + EntryPoint.MetadataToken.ToString("x")
                    }
                };
            }
        }

        private IEnumerable<JSExpression> GetClass(CilType type)
        {
            var n = type.Name.Replace("<", "_").Replace(">", "_").Replace("`", "_").Replace("{", "_").Replace("}", "_").Replace("-", "_");

            yield return new JSFunctionDelcaration
            {
                Name = n
            };
            yield return new JSReturnExpression
            {
                Expression = new JSIdentifier { Name = n }
            };
        }
    }
}
