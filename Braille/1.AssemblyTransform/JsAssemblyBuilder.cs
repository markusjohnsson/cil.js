using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Reflection;
using Braille.JSAst;
using Braille.MethodTransform;

namespace Braille.AssemblyTransform
{
    class JsAssemblyBuilder
    {

        public JSExpression Build(CilAssembly asm)
        {
            return new JSFunctionDelcaration
            {
                Parameters = new[] { new JSFunctionParameter { Name = "asm" } },
                Body = GetBody(asm).Select(s => new JSStatement { Expression = s })
            };
        }

        private IEnumerable<JSExpression> GetBody(CilAssembly asm)
        {
            yield return new JSVariableDelcaration { Name = "self" };

            foreach (var m in asm.Types.SelectMany(t => t.Methods))
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

            foreach (var t in asm.Types)
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

            if (asm.EntryPoint != null)
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
                        Property = "x" + asm.EntryPoint.MetadataToken.ToString("x")
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

            yield return new JSBinaryExpression
            {
                Left = JSIdentifier.Create(n, "prototype"),
                Operator = "=",
                Right = new JSObjectLiteral
                {
                    Properties = GetFieldInitializers(type)
                        .EndWith(new KeyValuePair<string,JSExpression>("vtable", GetVtable(type)))
                        .ToDictionary(a => a.Key, a => a.Value)
                }
            };
            
            yield return new JSReturnExpression
            {
                Expression = new JSIdentifier { Name = n }
            };
        }

        private JSExpression GetVtable(CilType type)
        {
            return new JSObjectLiteral
            {
                Properties = type
                    .ReflectionType
                    .GetMethods()
                    .Where(m => m.IsVirtual)
                    .ToDictionary(
                    m => "x" + m.GetBaseDefinition().MetadataToken.ToString("x"),
                    m => JSIdentifier.Create("asm", "x" + m.MetadataToken.ToString("x")))
            };
        }

        private static IEnumerable<KeyValuePair<string, JSExpression>> GetFieldInitializers(CilType type)
        {
            return type
                .ReflectionType
                .GetFields(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic)
                .Select(
                    f => new KeyValuePair<string, JSExpression>(
                        f.Name,
                        f.FieldType == typeof(bool) ?
                            new JSBoolLiteral { Value = default(bool) } :
                        f.FieldType.IsPrimitive ?
                            new JSNumberLiteral { Value = 0 } as JSExpression :
                        f.FieldType.IsValueType ?
                            new JSNewExpression
                            {
                                Constructor = new JSPropertyAccessExpression
                                {
                                    Host = new JSIdentifier { Name = "asm" },
                                    Property = type.Namespace + "." + type.Name
                                }
                            } as JSExpression :
                            new JSNullLiteral()
                    ));
        }
    }
}
