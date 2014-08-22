using Braille.Ast;
using Braille.JSAst;
using Braille.Loading.Model;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace Braille.JsTranslation
{
    /// <summary>
    /// Translates CilTypes into JavaScript AST. 
    /// 
    /// Type methods are not translated here, only type initialization, vtables, interface maps and default field values.
    /// </summary>
    class TypeTranslator : AbstractTranslator
    {
        public TypeTranslator(Context context)
            : base(context)
        {
        }

        // The structure of the type initializer is approximately as follows:
        // 
        //     asm[fullname] = (function () {
        // 
        //         var ct = ... // keeps cached instances of constructor(s) (one for each unique generic arguments setup)
        //         
        //         return function (generic_parameters) {
        //             
        //             // early return if there is a cached instance of the constructor
        //
        //             // object constructor in the JavaScript sense
        //             function escaped_simple_name() {}  
        //
        //             // cache constructor instance 
        //
        //             // type initializer (not needed to create type hierarchy, but needed to create object instances)
        //             escaped_simple_name.init = function() {
        //
        //                 // set field default values
        //                 escaped_simple_name.prototype.myField = 0;
        //
        //                 // create vtable and interface maps
        //                 escaped_simple_name.prototype.vtable = ...
        //
        //                 escaped_simple_name.prototype[interface_type] = ...
        //             }
        //             
        //             escaped_simple_name.prototype = new asm0['basetype']();
        //
        //             return escaped_simple_name;
        //         })();
        //     }

        public JSExpression Translate(CilType type)
        {
            var isGeneric = type.ReflectionType.IsGenericTypeDefinition;

            var body = new List<JSStatement>();

            var cachedInstance = JSFactory.Identifier("c");
            var cache = JSFactory.Identifier("ct");

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

            body.AddRange(GetTypeDeclaration(type, cache, cacheKey, cachedInstance, isGeneric).Select(s => s.ToStatement()));

            body.Add(new JSReturnExpression { Expression = JSFactory.Identifier("c") }.ToStatement());

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

        public IEnumerable<JSExpression> GetTypeDeclaration(CilType type, JSExpression cache, JSExpression cacheKey, JSExpression cachedInstance, bool isGeneric)
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
                Body = 
                {
                    new JSCallExpression { Function = JSFactory.Identifier(n, "init") }.ToStatement(),
                    JSFactory
                        .Assignment(
                            JSFactory.Identifier("this", "constructor"),
                            JSFactory.Identifier(n))
                        .ToStatement()
                }

            };

            yield return JSFactory
                .Assignment(
                    cachedInstance,
                    new JSIdentifier { Name = GetSimpleName(type) });

            if (isGeneric)
            {
                yield return new JSCallExpression
                {
                    Function = JSFactory.Identifier("tree_set"),
                    Arguments = new List<JSExpression>
                    {
                        cacheKey,
                        cache,
                        cachedInstance
                    }
                };
            }
            else
            {
                yield return JSFactory.Assignment(cache, cachedInstance);
            }

            yield return JSFactory
                .Assignment(
                    JSFactory.Identifier(n, "init"),
                    new JSFunctionDelcaration
                    {
                        Body =
                            GetInitialization(n, type)
                            .ToList()
                    });

            yield return JSFactory
                .Assignment(
                    JSFactory.Identifier(n, "prototype"),
                    (type.ReflectionType.BaseType != null &&
                     type.ReflectionType.BaseType.FullName != "System.MulticastDelegate" &&
                     type.ReflectionType.BaseType.FullName != "System.ValueType") ?
                        new JSNewExpression
                        {
                            Constructor = GetTypeIdentifier(type.ReflectionType.BaseType, typeScope: type.ReflectionType)
                        } :
                        new JSObjectLiteral() as JSExpression);
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

            yield return JSFactory
                .Assignment(
                    new JSIdentifier { Name = "initialized" },
                    new JSBoolLiteral { Value = true })
                .ToStatement();

            var staticProperties = GetStaticFieldInitializers(type)
                .EndWith(new KeyValuePair<string, JSExpression>("FullName", JSFactory.String(type.ReflectionType.FullName)))
                .EndWith(new KeyValuePair<string, JSExpression>("Interfaces", GetInterfaces(type)))
                .EndWith(new KeyValuePair<string, JSExpression>("IsInst", GetIsInst(type)))
                .EndWith(new KeyValuePair<string, JSExpression>("IsValueType", new JSBoolLiteral { Value = type.ReflectionType.IsValueType }))
                .EndWith(new KeyValuePair<string, JSExpression>("IsPrimitive", new JSBoolLiteral { Value = type.ReflectionType.IsPrimitive }))
                .EndWith(new KeyValuePair<string, JSExpression>("IsNullable", new JSBoolLiteral { Value = type.ReflectionType.FullName.StartsWith("System.Nullable") }))
                .EndWith(new KeyValuePair<string, JSExpression>("ArrayType", GetArrayType(type)));

            var genericArguments = GetGenericArgumentsArray(type);
            if (genericArguments != null)
                staticProperties = staticProperties.EndWith(new KeyValuePair<string, JSExpression>("GenericArguments", genericArguments));

            foreach (var p in staticProperties)
            {
                yield return JSFactory
                    .Assignment(
                        JSFactory.Identifier(n, p.Key),
                        p.Value)
                    .ToStatement();
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
                yield return JSFactory
                    .Assignment(
                        JSFactory.Identifier(n, "prototype", f.Key),
                        f.Value)
                    .ToStatement();
            }

            foreach (var iface in GetInterfaceMaps(type))
            {
                yield return JSFactory
                    .Assignment(
                        new JSArrayLookupExpression
                        {
                            Array = JSFactory.Identifier(n, "prototype"),
                            Indexer = iface.Key
                        },
                        iface.Value)
                    .ToStatement();
            }
        }

        private JSExpression GetArrayType(CilType type)
        {
            if (type.ReflectionType.FullName == "System.Byte")
                return new JSIdentifier { Name = "Uint8Array" };

            if (type.ReflectionType.FullName == "System.SByte")
                return new JSIdentifier { Name = "Int8Array" };

            if (type.ReflectionType.FullName == "System.Int16")
                return new JSIdentifier { Name = "Int16Array" };

            if (type.ReflectionType.FullName == "System.UInt16")
                return new JSIdentifier { Name = "Uint16Array" };

            if (type.ReflectionType.FullName == "System.Int32")
                return new JSIdentifier { Name = "Int32Array" };

            if (type.ReflectionType.FullName == "System.UInt32")
                return new JSIdentifier { Name = "Uint32Array" };

            if (type.ReflectionType.FullName == "System.Single")
                return new JSIdentifier { Name = "Float32Array" };

            if (type.ReflectionType.FullName == "System.Double")
                return new JSIdentifier { Name = "Float64Array" };

            if (type.ReflectionType.FullName == "System.Char")
                return new JSIdentifier { Name = "Uint16Array" };

            return new JSIdentifier { Name = "Array" };
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
                return JSFactory.RawExpression("function (t) { return t.constructor.Interfaces.indexOf(" + GetSimpleName(type) + ") != -1 ? t : null; }");
            }
            else if (type.ReflectionType.IsPrimitive)
            {
                return JSFactory.RawExpression("function (t) { return typeof t == 'number'; }");
            }
            else if (type.ReflectionType.FullName == "System.Array`1")
            {
                return JSFactory.RawExpression("function (t) { return t instanceof asm0['System.Array']() && t.type.prototype instanceof T ? t : null; }");
            }
            else
            {
                return JSFactory.RawExpression("function (t) { return t instanceof " + GetSimpleName(type) + " ? t : null; }");
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
                        m => GetVirtualMethodIdentifier(m),
                        m => new JSFunctionDelcaration { Body = { new JSReturnExpression { Expression = GetMethodAccessor(m) }.ToStatement() } } as JSExpression)
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
                        m => new JSFunctionDelcaration { Body = { new JSReturnExpression { Expression = GetMethodAccessor(m.targetMethod) }.ToStatement() } } as JSExpression)
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

        static Regex regex = new Regex("Size=([0-9]*)");

        private KeyValuePair<string, JSExpression> GetFieldInitializer(FieldInfo f, CilType type)
        {
            if (regex.IsMatch(f.FieldType.Name))
            {
                var size = int.Parse(regex.Match(f.FieldType.Name).Groups[1].Value);
                var array = new byte[size];
                f.__GetDataFromRVA(array, 0, size);

                return new KeyValuePair<string, JSExpression>(
                    GetTranslatedFieldName(type, f),
                    new JSArrayLiteral { Values = array.Select(b => new JSNumberLiteral { Value = b }) });
            }
            else
            {
                return new KeyValuePair<string, JSExpression>(
                    GetTranslatedFieldName(type, f),
                    GetDefaultValue(f.FieldType, typeScope: type.ReflectionType));
            }
        }
    }
}
