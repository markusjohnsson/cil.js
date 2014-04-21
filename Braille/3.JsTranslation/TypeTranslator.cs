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
    class TypeTranslator : AbstractTranslator
    {
        public TypeTranslator(Context context)
            : base(context)
        {
        }

        public JSExpression Translate(CilType type)
        {
            var isGeneric = type.ReflectionType.IsGenericTypeDefinition;

            var body = new List<JSStatement>();

            var cachedInstance = JSIdentifier.Create("c");
            var cache = JSIdentifier.Create("ct");

            var cacheKey = isGeneric ? GetGenericArgumentsArray(type) : null;

            body.Add(
                new JSVariableDelcaration
                {
                    Name = "c",
                    Value =
                        isGeneric ?
                            new JSCallExpression
                            {
                                Function = new JSIdentifier { Name = "tree_get" },
                                Arguments = new List<JSExpression> { cacheKey, cache }
                            } :
                            cache
                }.ToStatement());

            body.Add(
                new JSIfStatement
                {
                    Condition = cachedInstance,
                    Statements = { new JSReturnExpression { Expression = cachedInstance }.ToStatement() }
                });

            body.AddRange(GetTypeDeclaration(type).Select(s => s.ToStatement()));

            body.Add(
                new JSBinaryExpression
                {
                    Left = cachedInstance,
                    Operator = "=",
                    Right = new JSIdentifier { Name = GetSimpleName(type) }
                }.ToStatement());

            if (isGeneric)
            {
                body.Add(
                    new JSCallExpression
                    {
                        Function = JSIdentifier.Create("tree_set"),
                        Arguments = new List<JSExpression>
                        {
                            cacheKey,
                            cache,
                            cachedInstance
                        }
                    }.ToStatement());
            }
            else
            {
                body.Add(new JSBinaryExpression { Left = cache, Operator = "=", Right = cachedInstance }.ToStatement());
            }

            body.Add(new JSReturnExpression { Expression = JSIdentifier.Create("c") }.ToStatement());

            return new JSFunctionDelcaration
            {
                Body =
                    new List<JSStatement> 
                    {
                        new JSVariableDelcaration 
                        { 
                            Name = "ct", 
                            Value = isGeneric ? 
                                new JSObjectLiteral() as JSExpression : 
                                new JSNullLiteral() 
                        }.ToStatement(),

                        new JSReturnExpression 
                        { 
                            Expression = new JSFunctionDelcaration
                            {
                                Body = body,
                                Parameters = type.ReflectionType.GetGenericArguments()
                                    .Select(
                                        s => new JSFunctionParameter { Name = s.Name })
                                    .ToList()
                            }
                        }.ToStatement()
                    }
            };
        }

        private static JSArrayLiteral GetGenericArgumentsArray(CilType type)
        {
            if (type.ReflectionType.IsGenericTypeDefinition == false)
                return null;

            return new JSArrayLiteral
            {
                Values = type
                    .ReflectionType
                    .GetGenericArguments()
                    .Select(g => new JSIdentifier { Name = g.Name } as JSExpression)
                    .ToList()
            };
        }

        public IEnumerable<JSExpression> GetTypeDeclaration(CilType type)
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
                Body = {
                    new JSCallExpression { Function = JSIdentifier.Create(n, "init") }.ToStatement(),
                    new JSBinaryExpression 
                    {
                        Left = JSIdentifier.Create("this", "constructor"),
                        Operator = "=",
                        Right = JSIdentifier.Create(n)
                    }.ToStatement()
                }

            };

            yield return new JSBinaryExpression
            {
                Left = JSIdentifier.Create(n, "init"),
                Operator = "=",
                Right = new JSFunctionDelcaration
                {
                    Body =
                        GetInitialization(n, type)
                        .ToList()
                }
            };

            yield return new JSStatement
            {
                Expression = new JSBinaryExpression
                {
                    Left = JSIdentifier.Create(n, "prototype"),
                    Operator = "=",
                    Right = (type.ReflectionType.BaseType != null &&
                             type.ReflectionType.BaseType.FullName != "System.MulticastDelegate" &&
                             type.ReflectionType.BaseType.FullName != "System.ValueType") ?
                        new JSNewExpression
                        {
                            Constructor = GetTypeIdentifier(type.ReflectionType.BaseType, typeScope: type.ReflectionType)
                        } :
                        new JSObjectLiteral() as JSExpression
                }
            };

        }

        public IEnumerable<JSStatement> GetInitialization(string n, CilType type)
        {

            yield return new JSIfStatement
            {
                Condition = new JSIdentifier { Name = "initialized" },
                Statements =
                {
                    new JSReturnExpression().ToStatement()
                }
            };

            yield return new JSBinaryExpression
            {
                Left = new JSIdentifier { Name = "initialized" },
                Operator = "=",
                Right = new JSBoolLiteral { Value = true }
            }.ToStatement();

            var staticProperties = GetStaticFieldInitializers(type)
                .EndWith(new KeyValuePair<string, JSExpression>("Interfaces", GetInterfaces(type)))
                .EndWith(new KeyValuePair<string, JSExpression>("IsInst", GetIsInst(type)))
                .EndWith(new KeyValuePair<string, JSExpression>("IsValueType", new JSBoolLiteral { Value = type.ReflectionType.IsValueType }))
                .EndWith(new KeyValuePair<string, JSExpression>("IsPrimitive", new JSBoolLiteral { Value = type.ReflectionType.IsPrimitive }))
                .EndWith(new KeyValuePair<string, JSExpression>("IsNullable", new JSBoolLiteral { Value = type.ReflectionType.FullName.StartsWith("System.Nullable") }));

            var genericArguments = GetGenericArgumentsArray(type);
            if (genericArguments != null)
                staticProperties = staticProperties.EndWith(new KeyValuePair<string, JSExpression>("GenericArguments", genericArguments));

            foreach (var p in staticProperties)
            {
                yield return new JSBinaryExpression
                {
                    Left = JSIdentifier.Create(n, p.Key),
                    Operator = "=",
                    Right = p.Value
                }.ToStatement();
            }

            var cctors = type.ReflectionType.GetConstructors(BindingFlags.Static | BindingFlags.Public | BindingFlags.NonPublic);
            if (cctors.Any())
            {
                yield return new JSCallExpression
                {
                    Function = GetMethodAccessor(cctors[0])
                }
                .ToStatement();
            }

            var prototypeProperties = GetFieldInitializers(type)
                .EndWith(new KeyValuePair<string, JSExpression>("vtable", GetVtable(type)))
                .Concat(GetPrototypeMethods(type));

            foreach (var f in prototypeProperties)
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

            foreach (var iface in GetInterfaceMaps(type))
            {
                yield return new JSStatement
                {
                    Expression = new JSBinaryExpression
                    {
                        Left = new JSArrayLookupExpression
                        {
                            Array = JSIdentifier.Create(n, "prototype"),
                            Indexer = iface.Key
                        },
                        Operator = "=",
                        Right = iface.Value
                    }
                };
            }
        }

        private IEnumerable<KeyValuePair<string, JSExpression>> GetPrototypeMethods(CilType type)
        {
            foreach (var m in type.Methods)
            {
                if (m.IsPrototypeAccessible == false)
                    continue;

                if (m.IsVirtual || type.IsInterface)
                    throw new NotSupportedException("Interface or virtual methods cannot be accessible from prototype");

                yield return new KeyValuePair<string, JSExpression>(m.Name, GetMethodAccessor(m.ReflectionMethod));
            }
        }

        private JSExpression GetInterfaces(CilType type)
        {
            return new JSArrayLiteral { Values = type.ReflectionType.GetInterfaces().Select(t => GetTypeIdentifier(t, typeScope: type.ReflectionType)) };
        }

        private JSExpression GetIsInst(CilType type)
        {
            if (type.IsInterface)
            {
                return new JSIdentifier { Name = "function (t) { return t.constructor.Interfaces.indexOf(" + GetSimpleName(type) + ") != -1; }" };
            }
            else
            {
                return new JSIdentifier { Name = "function (t) { return t instanceof " + GetSimpleName(type) + "; }" };
            }
        }

        private IEnumerable<KeyValuePair<JSExpression, JSExpression>> GetInterfaceMaps(CilType type)
        {
            if (type.ReflectionType.IsInterface)
                return Enumerable.Empty<KeyValuePair<JSExpression, JSExpression>>();

            return type.ReflectionType
                .GetInterfaces()
                .Select(
                    iface => new KeyValuePair<JSExpression, JSExpression>(
                        GetTypeIdentifier(iface, typeScope: type.ReflectionType),
                        GetInterfaceMap(type, iface)));
        }

        private JSExpression GetVtable(CilType type)
        {
            return new JSObjectLiteral
            {
                Properties = type
                    .ReflectionType
                    .GetMethods(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Static)
                    .Where(m => m.IsVirtual)
                    .ToDictionary(
                        m => GetMethodIdentifier(m.GetBaseDefinition()),
                        m => GetMethodAccessor(m))
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
                        m => GetMethodIdentifier(m.ifaceMethod),
                        m => GetMethodAccessor(m.targetMethod))
            };
        }

        private IEnumerable<KeyValuePair<string, JSExpression>> GetFieldInitializers(CilType type)
        {
            return type
                .ReflectionType
                .GetFields(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic)
                .Select(
                    f => GetFieldInitializer(f, type));
        }

        private IEnumerable<KeyValuePair<string, JSExpression>> GetStaticFieldInitializers(CilType type)
        {
            return type
                .ReflectionType
                .GetFields(BindingFlags.Static | BindingFlags.Public | BindingFlags.NonPublic)
                .Select(
                    f => GetFieldInitializer(f, type));
        }

        private KeyValuePair<string, JSExpression> GetFieldInitializer(FieldInfo f, CilType type)
        {
            return new KeyValuePair<string, JSExpression>(
                GetTranslatedFieldName(type, f),
                GetDefaultValue(f.FieldType, typeScope: type.ReflectionType));
        }
    }
}
