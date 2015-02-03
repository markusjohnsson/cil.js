using Braille.Ast;
using Braille.JSAst;
using Braille.Loading.Model;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using Type = IKVM.Reflection.Type;

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

        // This comment is old. Now the initialization is a bit more complex and is partially generated with eval.
        //
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
        //         }
        //     })();

        public JSExpression Translate(CilType type)
        {
            return JSFactory.Call(JSFactory.Identifier("BLR", "declare_type"),
                GetTypeDeclarationArguments(type).ToArray());
            //var isGeneric = type.ReflectionType.IsGenericTypeDefinition;

            //var body = new List<JSStatement>();

            //var cachedInstance = JSFactory.Identifier("c");
            //var cache = JSFactory.Identifier("ct");

            //var cacheKey = isGeneric ? GetGenericArgumentsArray(type.ReflectionType, type.ReflectionType) : null;

            //body.Add(
            //    new JSVariableDelcaration
            //    {
            //        Name = "c",
            //        Value =
            //            isGeneric ?
            //                new JSCallExpression
            //                {
            //                    Function = JSFactory.Identifier("BLR", "tree_get"),
            //                    Arguments = new List<JSExpression> { cacheKey, cache }
            //                } :
            //                cache
            //    }.ToStatement());

            //body.Add(
            //    new JSIfStatement
            //    {
            //        Condition = cachedInstance,
            //        Statements = { new JSReturnExpression { Expression = cachedInstance }.ToStatement() }
            //    });

            //body.AddRange(GetTypeDeclaration(type, cache, cacheKey, cachedInstance, isGeneric).Select(s => s.ToStatement()));

            //body.Add(new JSReturnExpression { Expression = JSFactory.Identifier("c") }.ToStatement());

            //return new JSFunctionDelcaration
            //{
            //    Body =
            //        new List<JSStatement> 
            //        {
            //            new JSVariableDelcaration 
            //            { 
            //                Name = "ct", 
            //                Value = isGeneric ? 
            //                    new JSObjectLiteral() as JSExpression : 
            //                    new JSNullLiteral() 
            //            }.ToStatement(),

            //            new JSReturnExpression 
            //            { 
            //                Expression = new JSFunctionDelcaration
            //                {
            //                    Body = body,
            //                    Parameters = type.ReflectionType.GetGenericArguments()
            //                        .Select(
            //                            s => new JSFunctionParameter { Name = s.Name })
            //                        .ToList()
            //                }
            //            }.ToStatement()
            //        }
            //};
        }

        private IEnumerable<JSExpression> GetTypeDeclarationArguments(CilType type)
        {
            // name
            // init
            // baseType
            // genericArguments (names, for generic types only)

            yield return JSFactory.Literal(GetSimpleName(type.ReflectionType));

            var genericParameters = type
                .ReflectionType
                .GetGenericArguments()
                .Select(g => new JSFunctionParameter {Name = g.Name})
                .ToList();

            yield return new JSFunctionDelcaration
            {
                Body = GetInitialization("this", type).ToList(),
                Parameters = genericParameters
            };

            yield return new JSFunctionDelcaration
            {
                Body = { new JSReturnExpression { Expression = GetPrototype(type) }.ToStatement() },
                Parameters = genericParameters
            };

            yield return new JSArrayLiteral
            {
                Values = type.ReflectionType.GetGenericArguments().Select(g => JSFactory.Literal(g.Name)).ToList()
            };
        }

        private JSArrayLiteral GetGenericArgumentsArray(Type type, Type typeScope)
        {
            return new JSArrayLiteral
            {
                Values = type
                    .GetGenericArguments()
                    .Select(t => GetTypeIdentifier(t, typeScope: typeScope))
                    .ToList()
            };
        }

        //public IEnumerable<JSExpression> GetTypeDeclaration(CilType type, JSExpression cache, JSExpression cacheKey, JSExpression cachedInstance, bool isGeneric)
        //{
        //    var n = GetSimpleName(type.ReflectionType);

        //    yield return new JSVariableDelcaration
        //    {
        //        Name = "initialized",
        //        Value = new JSBoolLiteral { Value = false }
        //    }.ToStatement();

        //    yield return new JSFunctionDelcaration
        //    {
        //        Name = n,
        //        Body = 
        //        {
        //            new JSCallExpression { Function = JSFactory.Identifier(n, "init") }.ToStatement(),
        //            JSFactory
        //                .Assignment(
        //                    JSFactory.Identifier("this", "constructor"),
        //                    JSFactory.Identifier(n))
        //                .ToStatement()
        //        }

        //    };

        //    yield return JSFactory
        //        .Assignment(
        //            cachedInstance,
        //            new JSIdentifier { Name = GetSimpleName(type.ReflectionType) });

        //    if (isGeneric)
        //    {
        //        yield return new JSCallExpression
        //        {
        //            Function = JSFactory.Identifier("BLR.tree_set"),
        //            Arguments = new List<JSExpression>
        //            {
        //                cacheKey,
        //                cache,
        //                cachedInstance
        //            }
        //        };
        //    }
        //    else
        //    {
        //        yield return JSFactory.Assignment(cache, cachedInstance);
        //    }

        //    yield return JSFactory
        //        .Assignment(
        //            JSFactory.Identifier(n, "init"),
        //            new JSFunctionDelcaration
        //            {
        //                Body =
        //                    GetInitialization(n, type)
        //                    .ToList()
        //            });

        //    var basePrototype = GetPrototype(type);

        //    yield return JSFactory
        //        .Assignment(
        //            JSFactory.Identifier(n, "prototype"),
        //            basePrototype);

        //    if (type.ReflectionType.IsValueType)
        //    {
        //        yield return JSFactory.Call(
        //            JSFactory.Identifier(
        //                GetTypeIdentifier(type.ReflectionType.BaseType, typeScope: type.ReflectionType), "init"));
        //    }
        //}

        private JSExpression GetPrototype(CilType type)
        {
            var shouldHaveBasePrototype =
                type.ReflectionType.BaseType != null &&
                type.ReflectionType.BaseType.FullName != "System.MulticastDelegate" &&
                type.ReflectionType.BaseType.FullName != "System.ValueType";

            var basePrototype = shouldHaveBasePrototype
                ? new JSNewExpression
                {
                    Constructor = GetTypeIdentifier(type.ReflectionType.BaseType, typeScope: type.ReflectionType)
                }
                : new JSObjectLiteral() as JSExpression;
            return basePrototype;
        }

        public IEnumerable<JSStatement> GetInitialization(string n, CilType type)
        {
            yield return JSFactory
                .Assignment(
                    JSFactory.Identifier(n, "init"), 
                    JSFactory.Identifier("BLR", "nop"))
                .ToStatement();

            yield return JSFactory
                .Call(
                    JSFactory.Identifier("BLR", "init_type"),

                    JSFactory.Identifier(n),
                    JSFactory.String(type.ReflectionType.FullName),
                    JSFactory.Identifier("asm"),
                    new JSBoolLiteral { Value = type.ReflectionType.IsValueType },
                    new JSBoolLiteral { Value = type.ReflectionType.IsPrimitive },
                    new JSBoolLiteral { Value = type.ReflectionType.IsInterface },
                    new JSBoolLiteral { Value = type.ReflectionType.IsGenericTypeDefinition },
                    new JSBoolLiteral { Value = type.ReflectionType.FullName.StartsWith("System.Nullable") },

                    GetAttributes(type.ReflectionType, type.ReflectionType),
                    GetMethods(type),
                    GetBaseType(type),
                    GetIsInst(type),
                    GetArrayType(type),
                    JSFactory.Literal(GetTypeMetadataName(type.ReflectionType))
                    )
                .ToStatement();

            var staticProperties = GetStaticFieldInitializers(type)
                //.EndWith(new KeyValuePair<string, JSExpression>("CustomAttributes", GetAttributes(type.ReflectionType, type.ReflectionType)))
                //.EndWith(new KeyValuePair<string, JSExpression>("Methods", GetMethods(type)))
                //.EndWith(new KeyValuePair<string, JSExpression>("BaseType", GetBaseType(type)))
                .EndWith(new KeyValuePair<string, JSExpression>("Interfaces", GetInterfaces(type)))
                //.EndWith(new KeyValuePair<string, JSExpression>("IsInst", GetIsInst(type)))
                //.EndWith(new KeyValuePair<string, JSExpression>("ArrayType", GetArrayType(type)))
                //.EndWith(new KeyValuePair<string, JSExpression>("MetadataName", JSFactory.Literal(GetTypeMetadataName(type.ReflectionType))))
                //.EndWith(new KeyValuePair<string, JSExpression>("GenericArguments", JSFactory.Object(new object())))
                ;

            foreach (var p in staticProperties)
            {
                yield return JSFactory
                    .Assignment(
                        JSFactory.Identifier(n, p.Key),
                        p.Value)
                    .ToStatement();
            }

            for (var current = type.ReflectionType; current != null; current = current.BaseType)
            {
                var genericArguments = GetGenericArgumentsArray(current, type.ReflectionType);
                if (genericArguments != null && genericArguments.Values.Any())
                {
                    yield return JSFactory
                        .Assignment(
                            JSFactory.Identifier(n, "GenericArguments", GetTypeMetadataName(current)),
                            genericArguments)
                        .ToStatement();
                }
            }

            //var cctors = type.ReflectionType.GetConstructors(BindingFlags.Static | BindingFlags.Public | BindingFlags.NonPublic);
            //if (cctors.Any())
            //{
            //    yield return new JSCallExpression
            //    {
            //        Function = GetMethodAccessor(cctors[0], typeScope: type.ReflectionType)
            //    }
            //    .ToStatement();
            //}

            foreach (var f in GetVtable(type))
            {
                yield return JSFactory.Call(
                        JSFactory.Identifier("BLR", "declare_virtual"),
                        JSFactory.Identifier(n),
                        JSFactory.Literal(f.Key),
                        JSFactory.Literal(f.Value))
                    .ToStatement();
            }

            var prototypeProperties = GetFieldInitializers(type)
                //.EndWith(new KeyValuePair<string, JSExpression>("vtable", GetVtable(type)))
                //.EndWith(new KeyValuePair<string, JSExpression>("ifacemap", JSFactory.Object(new object())))
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
                    .Call(
                        JSFactory.Identifier("BLR", "tree_set"),
                        JSFactory.Array(iface.Key),
                        JSFactory.Identifier(n, "prototype", "ifacemap"),
                        iface.Value)
                    .ToStatement();
            }
        }

        private JSExpression GetMethods(CilType type)
        {
            var ms = type.ReflectionType.GetMethods(
                BindingFlags.DeclaredOnly |
                BindingFlags.Public | //BindingFlags.NonPublic |
                BindingFlags.Instance // | BindingFlags.Static
                );

            return JSFactory.Array(
                ms.Select(m => GetMethodInfo(type, m))
                  .ToArray()
            );
        }

        private JSExpression GetMethodInfo(CilType type, MethodInfo m)
        {
            var parts = new List<JSExpression> 
            { 
                GetAssemblyIdentifier(type.ReflectionType),
                JSFactory.Literal(GetMethodIdentifier(m)),
                JSFactory.Literal(m.Name)
            };

            if (m.CustomAttributes.Any())
            {
                parts.Add(GetAttributes(type.ReflectionType, m));
            }

            return JSFactory.Array(parts.ToArray());
        }

        private JSExpression GetAttributes(Type type, MemberInfo member)
        {
            return JSFactory
                .Array(
                    member
                        .CustomAttributes
                        .Where(
                            attribute => false == IsIgnoredType(attribute.AttributeType))
                        .Select(
                            attribute => GetAttribute(type, attribute))
                        .ToArray());
        }

        private JSExpression GetAttribute(Type type, CustomAttributeData attribute)
        {
            var parts = new List<JSExpression> {
                GetTypeIdentifier(attribute.AttributeType),
                GetMethodAccessor(attribute.Constructor)
            };

            if (attribute.ConstructorArguments.Any() || attribute.NamedArguments.Any())
            {
                parts.Add(JSFactory
                    .Array(
                        attribute
                            .ConstructorArguments
                            .Select(
                                arg =>
                                    arg.ArgumentType == context.SystemTypes.String ?
                                        JSFactory.Call(JSFactory.Identifier("BLR", "new_string"), JSFactory.String((string)arg.Value)) :
                                    arg.ArgumentType == context.SystemTypes.Type ?
                                        GetTypeIdentifier((Type)arg.Value, typeScope: type) :
                                    JSFactory.Literal(arg.Value))
                            .ToArray()));
            }

            if (attribute.NamedArguments.Any())
            {
                parts.Add(
                    new JSObjectLiteral
                    {
                        Properties = attribute
                            .NamedArguments
                            .ToDictionary(
                                n => n.MemberName,
                                n => JSFactory
                                    .Array(
                                        GetTypeIdentifier(n.TypedValue.ArgumentType),
                                        JSFactory.Literal(n.TypedValue.Value)))
                    });
            }

            return JSFactory.Array(parts.ToArray());
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

        private JSExpression GetBaseType(CilType type)
        {
            return
                type.ReflectionType.BaseType == null ?
                JSFactory.Null() :
                GetTypeIdentifier(type.ReflectionType.BaseType, typeScope: type.ReflectionType);
        }

        private JSExpression GetInterfaces(CilType type)
        {
            return new JSArrayLiteral
            {
                Values = type.ReflectionType.GetInterfaces().Select(t => GetTypeIdentifier(t, typeScope: type.ReflectionType))
            };
        }

        private JSExpression GetIsInst(CilType type)
        {
            // TODO: this could be done at runtime, in typeInit for example. Only thing needed is to pass T for arrays

            var simpleName = JSFactory.Identifier("this");

            if (type.IsInterface)
            {
                return JSFactory.Call(JSFactory.Identifier("BLR", "is_inst_interface"), simpleName);
            }
            else if (type.ReflectionType.IsPrimitive)
            {
                return JSFactory.Call(JSFactory.Identifier("BLR", "is_inst_primitive"), simpleName);
            }
            else if (type.ReflectionType.FullName == "System.Array`1")
            {
                return JSFactory.Call(JSFactory.Identifier("BLR", "is_inst_array"), JSFactory.Identifier("T"));
            }
            else
            {
                return JSFactory.Call(JSFactory.Identifier("BLR", "is_inst_default"), simpleName);
            }
        }

        private IEnumerable<KeyValuePair<JSExpression[], JSExpression>> GetInterfaceMaps(CilType type)
        {
            if (type.ReflectionType.IsInterface)
                return Enumerable.Empty<KeyValuePair<JSExpression[], JSExpression>>();

            return type.ReflectionType
                .GetInterfaces()
                .Select(
                    iface => new KeyValuePair<JSExpression[], JSExpression>(
                        new[] { GetTypeIdentifier(iface, typeScope: type.ReflectionType) }
                            .Concat(iface.GenericTypeArguments.Select(g => GetTypeIdentifier(g, typeScope: type.ReflectionType)))
                            .ToArray(),
                        GetInterfaceMap(type, iface)));
        }

        private Dictionary<string, string> GetVtable(CilType type)
        {
            return type
                    .ReflectionType
                    .GetMethods(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Static)
                    .Where(m => m.IsVirtual)
                    .ToDictionary(
                        m => GetVirtualMethodIdentifier(m),
                        m => GetMethodAccessor(m).ToString()) //new JSFunctionDelcaration { Body = { new JSReturnExpression { Expression = GetMethodAccessor(m) }.ToStatement() } } as JSExpression)
            ;
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
