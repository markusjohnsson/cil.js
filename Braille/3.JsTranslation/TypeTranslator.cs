using Braille.Ast;
using Braille.JSAst;
using Braille.Loading.Model;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;
using Type = IKVM.Reflection.Type;

namespace Braille.JsTranslation
{
    class TypeTranslator
    {
        private Context context;

        public TypeTranslator(Context context)
        {
            this.context = context;
        }

        public JSExpression Translate(CilType type)
        {
            // TODO: use this wether type is generic or not.. but skip the advanced caching

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

            yield return new JSVariableDelcaration 
            { 
                Name = "initialized", 
                Value = new JSBoolLiteral { Value = false } 
            }.ToStatement();

            yield return new JSFunctionDelcaration
            {
                Name = n,
                Body = new[] {
                    new JSIfStatement 
                    {
                        Condition = new JSIdentifier { Name = "!initialized" },
                        Statements =  
                            GetPrototype(n, type)
                            .StartWith(new JSBinaryExpression { 
                                Left = new JSIdentifier { Name = "initialized" }, 
                                Operator = "=", 
                                Right = new JSBoolLiteral { Value = true } }.ToStatement())
                            .ToList()
                    }

                }
                
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
                            Constructor = JSIdentifier.Create(GetAssemblyIdentifier(type.ReflectionType.BaseType), type.ReflectionType.BaseType.FullName)
                        } :
                        new JSObjectLiteral() as JSExpression
                }
            };

        }

        public IEnumerable<JSStatement> GetPrototype(string n, CilType type)
        {

            var staticProperties = GetStaticFieldInitializers(type)
                .EndWith(new KeyValuePair<string, JSExpression>("IsValueType", new JSBoolLiteral { Value = type.ReflectionType.IsValueType }));

            foreach (var p in staticProperties)
            {
                yield return new JSBinaryExpression
                {
                    Left = JSIdentifier.Create(n, p.Key),
                    Operator = "=",
                    Right = p.Value
                }.ToStatement();
            }

            var instanceProperties = GetFieldInitializers(type)
                .EndWith(new KeyValuePair<string, JSExpression>("vtable", GetVtable(type)))
                .Concat(GetInterfaceMaps(type));

            foreach (var f in instanceProperties)
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

        private IEnumerable<KeyValuePair<string, JSExpression>> GetFieldInitializers(CilType type)
        {
            return type
                .ReflectionType
                .GetFields(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic)
                .Select(
                    f => GetFieldInitializer(f));
        }

        private IEnumerable<KeyValuePair<string, JSExpression>> GetStaticFieldInitializers(CilType type)
        {
            return type
                .ReflectionType
                .GetFields(BindingFlags.Static | BindingFlags.Public | BindingFlags.NonPublic)
                .Select(
                    f => GetFieldInitializer(f));
        }

        private KeyValuePair<string, JSExpression> GetFieldInitializer(FieldInfo f)
        {
            return new KeyValuePair<string, JSExpression>(
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
                            Host = GetAssemblyIdentifier(f.FieldType),
                            Property = f.FieldType.Namespace == null ? f.FieldType.Name : f.FieldType.Namespace + "." + f.FieldType.Name
                        }
                    } as JSExpression :
                    new JSNullLiteral());
        }

        private JSIdentifier GetAssemblyIdentifier(Type type)
        {
            var asm = context.Assemblies.FirstOrDefault(c => c.ReflectionAssembly == type.Assembly);

            if (asm == null)
            {
                throw new Exception("Cannot resolve assembly of type " + type);
            }

            return new JSIdentifier { Name = asm.Identifier };
        }

    }
}