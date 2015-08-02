using CilJs.Ast;
using CilJs.JSAst;
using CilJs.Loading.Model;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using Type = IKVM.Reflection.Type;

namespace CilJs.JsTranslation
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

        public JSExpression Translate(CilType type)
        {
            var call = JSFactory.Call(JSFactory.Identifier("CILJS", "declare_type"),
                GetTypeDeclarationArguments(type).ToArray());
            call.Indent = true;
            return call;
        }

        /// <summary>
        /// Returns the arguments for the call to declare_type
        /// </summary>
        private IEnumerable<JSExpression> GetTypeDeclarationArguments(CilType type)
        {
            yield return JSFactory.Literal(GetSimpleName(type.ReflectionType));

            var genericParameters = type
                .ReflectionType
                .GetGenericArguments()
                .Select(g => new JSFunctionParameter { Name = GetSimpleName(g) })
                .ToList()
                ;

            yield return new JSArrayLiteral
            {
                Inline = true,
                Values = type.ReflectionType.GetGenericArguments().Select(g => JSFactory.Literal(GetSimpleName(g))).ToList()
            };

            yield return new JSFunctionDelcaration
            {
                Body = GetPrototype(type),
                Parameters = genericParameters
            };

            yield return new JSFunctionDelcaration
            {
                Body = GetInitialization("this", type).ToList(),
                Parameters = genericParameters
            };
        }

        private JSArrayLiteral GetGenericArgumentsArray(Type type, Type typeScope)
        {
            return new JSArrayLiteral
            {
                Inline = true,
                Values = type
                    .GetGenericArguments()
                    .Select(t => GetTypeIdentifier(t, typeScope: typeScope))
                    .ToList()
            };
        }

        private List<JSStatement> GetPrototype(CilType type)
        {
            var baseType = type.ReflectionType.BaseType;

            var shouldHaveBasePrototype =
                baseType != null &&
                baseType.FullName != "System.MulticastDelegate" &&
                baseType.FullName != "System.ValueType";

            JSExpression basePrototype;
            var body = new List<JSStatement>();

            if (shouldHaveBasePrototype)
            {
                basePrototype = GetTypeIdentifier(baseType, typeScope: type.ReflectionType);

                if (baseType.IsGenericType)
                {
                    body.AddRange(baseType
                        .GetGenericArguments()
                        .Where(g => g.IsGenericParameter == false)
                        .Select(g => GetTypeIdentifier(g, typeScope: type.ReflectionType))
                        .Select(g => JSFactory.Call(JSFactory.Identifier(g, "init")).ToStatement()));
                }
            }
            else 
            {
                basePrototype = new JSObjectLiteral();
            }

            body.Add(new JSReturnExpression { Expression = basePrototype }.ToStatement());
            return body;
        }

        public IEnumerable<JSStatement> GetInitialization(string n, CilType type)
        {
            yield return JSFactory
                .Assignment(
                    JSFactory.Identifier(n, "init"),
                    JSFactory.Identifier("CILJS", "nop"))
                .ToStatement();

            yield return JSFactory
                .Call(
                    JSFactory.Identifier("CILJS", "init_type"),

                    JSFactory.Identifier(n),
                    JSFactory.Identifier("asm"),
                    JSFactory.String(type.ReflectionType.FullName),

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

            var staticProperties = GetStaticFieldInitializers(type);

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

            yield return JSFactory
                .Assignment(
                    JSFactory.Identifier(n, "GenericTypeMetadataName"),
                    GetGenericTypeMetadataName(type.ReflectionType))
                .ToStatement();

            foreach (var f in GetVtable(type))
            {
                yield return JSFactory.Call(
                        JSFactory.Identifier("CILJS", "declare_virtual"),
                        JSFactory.Identifier(n),
                        JSFactory.Literal(f.Key),
                        JSFactory.Literal(f.Value))
                    .ToStatement();
            }

            foreach (var iface in GetInterfaceMaps(type))
            {
                var call = JSFactory
                    .Call(
                        JSFactory.Identifier("CILJS", "implement_interface"),
                        JSFactory.Identifier(n),
                        JSFactory.Array(inline: true, exprs: iface.Key),
                        iface.Value);

                call.Indent = true;

                yield return call.ToStatement();
            }

            var prototypeProperties = GetFieldInitializers(type)
                .Concat(GetPrototypeMethods(type));

            foreach (var f in prototypeProperties)
            {
                yield return JSFactory
                    .Assignment(
                        JSFactory.Identifier(n, "prototype", f.Key),
                        f.Value)
                    .ToStatement();
            }

        }

        private JSExpression GetGenericTypeMetadataName(Type type)
        {
            var n = GetTypeMetadataName(type);

            if (!type.IsGenericTypeDefinition)
                return JSFactory.Literal(n);

            var ga = type.GetGenericArguments().Select(a => JSFactory.Identifier(GetSimpleName(a), "GenericTypeMetadataName"));
            var gaStr = ga.Aggregate((a, b) => new JSBinaryExpression { Left = a, Right = b, Operator = "+" });
            return new JSBinaryExpression
            {
                Left = JSFactory.Literal(n + "<"),
                Operator = "+",
                Right = new JSBinaryExpression
                {
                    Left = gaStr,
                    Operator = "+",
                    Right = JSFactory.Literal(">")
                }
            };
        }

        private JSExpression GetMethods(CilType type)
        {
            var ms = type.ReflectionType.GetMethods(
                BindingFlags.DeclaredOnly |
                BindingFlags.Public | //BindingFlags.NonPublic |
                BindingFlags.Instance // | BindingFlags.Static
                );

            return JSFactory.Array(
                ms.Select(m => GetMethodInfo(type, m)).ToArray()
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

            return JSFactory.Array(true, parts.ToArray());
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
                                        JSFactory.Call(JSFactory.Identifier("CILJS", "new_string"), JSFactory.String((string)arg.Value)) :
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
                return JSFactory.Call(JSFactory.Identifier("CILJS", "is_inst_interface"), simpleName);

            if (type.ReflectionType.IsPrimitive)
                return JSFactory.Call(JSFactory.Identifier("CILJS", "is_inst_primitive"), simpleName);

            if (type.ReflectionType.FullName == "System.Array`1")
                return JSFactory.Call(JSFactory.Identifier("CILJS", "is_inst_array"), JSFactory.Identifier("T"));

            if (type.ReflectionType.IsValueType)
                return JSFactory.Call(JSFactory.Identifier("CILJS", "is_inst_value_type"), simpleName);

            if (type.ReflectionType == context.SystemTypes.Delegate ||
                type.ReflectionType.BaseType == context.SystemTypes.Delegate)
                return JSFactory.Call(JSFactory.Identifier("CILJS", "is_inst_delegate"), simpleName);

            return JSFactory.Call(JSFactory.Identifier("CILJS", "is_inst_default"), simpleName);
        }

        private IEnumerable<KeyValuePair<JSExpression[], JSExpression>> GetInterfaceMaps(CilType type)
        {
            return type.ReflectionType
                       .GetInterfaces()
                       .Select(
                           iface => new KeyValuePair<JSExpression[], JSExpression>(
                               new[] { GetTypeIdentifier(iface, typeScope: type.ReflectionType) }
                                   .Concat(
                                       iface.GenericTypeArguments.Select(
                                           g => GetTypeIdentifier(g, typeScope: type.ReflectionType)))
                                   .ToArray(),
                               type.ReflectionType.IsInterface
                                   ? JSFactory.Null()
                                   : GetInterfaceMap(type, iface)));
        }

        private Dictionary<string, string> GetVtable(CilType type)
        {
            return type
                    .ReflectionType
                    .GetMethods(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Static)
                    .Where(m => m.IsVirtual)
                    .ToDictionary(
                        m => GetVirtualMethodIdentifier(m),
                        m => GetUnboundMethodAccessor(m).ToString()) 
            ;
        }

        private JSExpression GetInterfaceMap(CilType type, Type iface)
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
                        m => new JSFunctionDelcaration
                        {
                            Inline = true,
                            Body =
                            {
                                //JSFactory.Return(GetMethodAccessor(m.targetMethod)).ToStatement()
                                JSFactory.Return(GetUnboundMethodAccessor(m.targetMethod)).ToStatement()
                            }
                        } as JSExpression)
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
                    new JSArrayLiteral { Inline = true, Values = array.Select(b => new JSNumberLiteral { Value = b }) });
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
