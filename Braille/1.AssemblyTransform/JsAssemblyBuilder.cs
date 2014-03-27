using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Braille.JSAst;
using Braille.MethodTransform;
using IKVM.Reflection;

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
            yield return new JSIdentifier
            {
                // Helper funcions to manage a multi-key dictionary.
                // Used to cache constructed generic types.
                // A constructed generic type should always have the same constructor instace (for the same type arguments)
                Name =
                    @"
function tree_get(a, s) {
    if (a.length == 0) return s;
    var c = s[a[0]];
    return c && tree_get(a.slice(1), c);
}

function tree_set(a, s, v) {
    if (a.length == 1) {
        s[a[0]] = v;
    }
    else {
        var c = s[a[0]];
        if (!c) s[a[0]] = c = {};
        tree_set(a.slice(1), c, v);
    }
}
"
            };

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
                    Right = m.JsFunction ?? new JSFunctionDelcaration()
                };
            }

            foreach (var t in asm.Types)
            {
                if (t.IsIgnored)
                    continue;

                yield return new JSBinaryExpression
                {
                    Left = new JSIdentifier { Name = "self" },
                    Operator = "=",
                    Right = new JSCallExpression
                    {
                        Function = GetClass(t)
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

        private JSExpression GetClass(CilType type)
        {
            if (type.ReflectionType.IsGenericTypeDefinition)
            {
                var cacheKey =
                    new JSArrayLiteral
                    {
                        Values = type
                            .ReflectionType
                            .GetGenericArguments()
                            .Select(g => new JSIdentifier { Name = g.Name } as JSExpression)
                            .ToList()
                    };

                var body =
                    new List<JSStatement> 
                    {
                        new JSVariableDelcaration 
                        { 
                            Name = "c", 
                            Value = new JSCallExpression 
                            { 
                                Function = new JSIdentifier { Name = "tree_get" }, 
                                Arguments = new List<JSExpression> 
                                {
                                    cacheKey,
                                    JSIdentifier.Create("ct") 
                                }
                            }
                        }.ToStatement(),
                        new JSIfStatement
                        {
                            Condition = JSIdentifier.Create("c"),
                            Statements = 
                            {
                                new JSReturnExpression { Expression = JSIdentifier.Create("c") }.ToStatement()
                            }
                        }
                    };

                body.AddRange(GetConstructorAndPrototype(type).Select(s => s.ToStatement()));

                body.AddRange(
                    new[] 
                    { 
                        new JSBinaryExpression 
                        {
                            Left = JSIdentifier.Create("c"),
                            Operator = "=",
                            Right = new JSIdentifier { Name = GetSimpleName(type) }
                        }.ToStatement(),
                        new JSCallExpression
                        {
                            Function = JSIdentifier.Create("tree_set"),
                            Arguments = new List<JSExpression>
                            {
                                cacheKey,
                                JSIdentifier.Create("ct"),
                                JSIdentifier.Create("c")
                            }
                        }.ToStatement(),
                        new JSReturnExpression { Expression = JSIdentifier.Create("c") }.ToStatement()
                    });

                return new JSFunctionDelcaration
                {
                    Body =
                        new List<JSStatement> 
                        {
                            new JSVariableDelcaration { Name = "ct", Value = new JSObjectLiteral() }.ToStatement(),
                            new JSReturnExpression 
                            { 
                                Expression = new JSFunctionDelcaration
                                {
                                    Body = body,
                                    Parameters = type.ReflectionType.GetGenericArguments().Select(s => new JSFunctionParameter { Name = s.Name }).ToList()
                                }
                            }.ToStatement()
                        }
                };
            }
            else
            {
                return new JSFunctionDelcaration
                {
                    Body = GetConstructorAndPrototype(type)
                        .EndWith(new JSReturnExpression { Expression = new JSIdentifier { Name = GetSimpleName(type) } })
                        .Select(s => new JSStatement { Expression = s })
                        .ToList()
                };
            }
        }

        public IEnumerable<JSExpression> GetConstructorAndPrototype(CilType type)
        {
            var n = GetSimpleName(type);

            yield return new JSFunctionDelcaration
            {
                Name = n
            };

            yield return new JSStatement
            {
                Expression = new JSBinaryExpression
                {
                    Left = JSIdentifier.Create(n, "prototype"),
                    Operator = "=",
                    Right = (type.ReflectionType.BaseType != null &&
                             type.ReflectionType.BaseType.FullName != "System.Object" &&
                             type.ReflectionType.BaseType.FullName != "System.MulticastDelegate" &&
                             type.ReflectionType.BaseType.FullName != "System.ValueType") ?
                        new JSNewExpression
                        {
                            Constructor = JSIdentifier.Create("asm", type.ReflectionType.BaseType.FullName)
                        } :
                        new JSObjectLiteral() as JSExpression
                }
            };

            yield return new JSBinaryExpression
            {
                Left = JSIdentifier.Create(n, "IsValueType"),
                Operator = "=",
                Right = new JSBoolLiteral { Value = type.ReflectionType.IsValueType }
            };

            var properties = GetFieldInitializers(type)
                .EndWith(new KeyValuePair<string, JSExpression>("vtable", GetVtable(type)))
                .Concat(GetInterfaceMaps(type));

            foreach (var f in properties)
            {
                yield return new JSStatement
                {
                    Expression = new JSBinaryExpression
                    {
                        Left = JSIdentifier.Create(n, "prototype", f.Key),
                        Operator = "=",
                        Right = f.Value
                    }
                };
            }
        }

        private static string GetSimpleName(CilType type)
        {
            return type.Name.Replace("<", "_").Replace(">", "_").Replace("`", "_").Replace("{", "_").Replace("}", "_").Replace("-", "_");
        }

        private IEnumerable<KeyValuePair<string, JSExpression>> GetInterfaceMaps(CilType type)
        {
            if (type.ReflectionType.IsInterface)
                return Enumerable.Empty<KeyValuePair<string, JSExpression>>();

            return type.ReflectionType
                .GetInterfaces()
                .Select(
                    iface => new KeyValuePair<string, JSExpression>(iface.FullName, GetInterfaceMap(type, iface)));
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

        private JSExpression GetInterfaceMap(CilType type, IKVM.Reflection.Type iface)
        {
            var map = type
                .ReflectionType
                .GetInterfaceMap(iface)
                ;

            return new JSObjectLiteral
            {
                Properties = Enumerable
                    .Zip(
                        map.InterfaceMethods,
                        map.TargetMethods,
                        (ifaceMethod, targetMethod) => new { ifaceMethod, targetMethod })
                    .ToDictionary(
                        m => "x" + m.ifaceMethod.MetadataToken.ToString("x"),
                        m => JSIdentifier.Create("asm", "x" + m.targetMethod.MetadataToken.ToString("x")))
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
                        f.FieldType.FullName == "System.Boolean" ?
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
