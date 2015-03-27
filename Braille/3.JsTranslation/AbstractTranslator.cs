using Braille.Analysis;
using Braille.Ast;
using Braille.JSAst;
using Braille.Loading.Model;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Type = IKVM.Reflection.Type;

namespace Braille.JsTranslation
{
    abstract class AbstractTranslator
    {
        protected readonly Context context;

        public AbstractTranslator(Context context)
        {
            this.context = context;
        }

        protected JSIdentifier GetAssemblyIdentifier(Type type)
        {
            var asm = context.Assemblies.FirstOrDefault(c => c.ReflectionAssembly == type.Assembly);

            if (asm == null)
            {
                throw new Exception("Cannot resolve assembly of type " + type);
            }

            return new JSIdentifier { Name = asm.Identifier };
        }

        protected virtual JSExpression GetTypeIdentifier(Type type, MethodBase methodScope = null, Type typeScope = null, JSExpression thisScope = null, ICollection<Type> typesInScope = null)
        {
            if (IsIgnoredType(type))
                throw new InvalidOperationException("type is marked as ignored and cannot be referenced");

            if (typesInScope != null)
            {
                var idx = typesInScope.IndexOf(type);
                if (idx != -1)
                    return JSFactory.Identifier("t" + idx);
            }

            if (type.IsArray)
            {
                var genericArray = context.ReflectionUniverse.GetType("System.Array`1");
                return GetTypeIdentifier(
                    genericArray.MakeGenericType(type.GetElementType()),
                    methodScope,
                    typeScope,
                    thisScope,
                    typesInScope);
            }
            else if (type.IsGenericParameter)
            {
                if (type.DeclaringMethod != null ||

                    // For static methods on generic classes, the type arguments are passed to 
                    // the method at the call site rather than wired through the generic class type.
                    // So, the type argument is available as an argument in the closure of the 
                    // javascript function, which is why we emit an identifier.

                    (methodScope != null && methodScope.IsStatic && type.DeclaringType.GetGenericTypeDefinition() == methodScope.DeclaringType))
                {
                    return new JSIdentifier { Name = type.Name };
                }
                else if (thisScope == null)
                {
                    return
                        (IsInScope(type.DeclaringType, typeScope)) ?
                            JSFactory.Identifier(GetSimpleName(type)) :

                            // to my awareness, this only happens when you do "typeof(C<>)", ie not specifying any args
                            GetTypeIdentifier(context.SystemTypes.UnboundGenericParameter);
                }
                else
                {
                    var metadataName = GetTypeMetadataName(typeScope);
                    return new JSArrayLookupExpression
                    {
                        Array = JSFactory.Identifier(thisScope, "constructor", "GenericArguments", metadataName),
                        Indexer = new JSNumberLiteral { Value = typeScope.GetGenericArguments().IndexOf(type) }
                    };
                }
            }
            else if (type.IsGenericType)
            {
                return new JSCallExpression
                {
                    Function = JSFactory.Identifier(
                        GetAssemblyIdentifier(type), type.GetGenericTypeDefinition().FullName),
                    Arguments = type
                        .GetGenericArguments()
                        .Select(
                            g => GetTypeIdentifier(g, methodScope, typeScope, thisScope, typesInScope))
                        .ToList()
                };
            }
            else
            {
                return new JSCallExpression
                {
                    Function = JSFactory.Identifier(GetAssemblyIdentifier(type), type.FullName)
                };
            }
        }

        protected string GetTypeMetadataName(Type current)
        {
            current = (current.IsGenericType && !current.IsGenericTypeDefinition) ?
                current.GetGenericTypeDefinition() : current;

            return GetAssemblyIdentifier(current).Name + ".t" + current.MetadataToken.ToString("x");
        }

        protected bool IsIgnoredType(Type type)
        {
            return type.GetCustomAttributesData().Any(a => a.AttributeType.Name == "JsIgnoreAttribute");
        }

        private static bool IsInScope(Type type, Type typeScope)
        {
            if (typeScope == null)
                return false;

            return typeScope == type || IsInScope(type, typeScope.DeclaringType) || IsInScope(type, typeScope.BaseType);
        }

        private static string ConstructFullName(Type type)
        {
            var name = "";

            if (type.Namespace != null)
                name = type.Namespace + ".";

            if (type.DeclaringType != null)
                name += type.DeclaringType.Name + "+";

            name += type.Name;

            return name;
        }

        protected static string GetSimpleName(Type type)
        {
            var n = type.Name.Replace("<", "_").Replace(">", "_").Replace("`", "_").Replace("{", "_").Replace("}", "_").Replace("-", "_").Replace("=", "_");
            if (n == "String" || n == "Number" || n == "Boolean" || n == "Object" || n == "function")
                return "$$" + n;
            return n;
        }

        protected static string GetSimpleName(MethodBase method)
        {
            return method.Name.Replace("<", "_").Replace(">", "_").Replace("`", "_").Replace(".", "_").Replace(",", "_");
        }

        protected string GetTranslatedFieldName(CilType type, FieldInfo f)
        {
            if (f.IsStatic == false && f.IsPrivate && f.DeclaringType.IsValueType == false)
            {
                var ns = (f.DeclaringType.Namespace ?? "").Replace('.', '_');
                return ns + GetSimpleName(f.DeclaringType) + f.Name;
            }
            else
            {
                return f.Name;
            }
        }

        protected string GetVirtualMethodIdentifier(MethodInfo m)
        {
            return String.Format("{0}.{1}",
                GetAssemblyIdentifier(m.GetBaseDefinition().DeclaringType),
                GetMethodIdentifier(m.GetBaseDefinition()));
        }

        /// <summary>
        /// Gets an expression that accesses the JavaScript function which is the implementation of the method
        /// </summary>
        /// <param name="mi">Method to be accessed</param>
        /// <param name="callingScope">The method making a call to <paramref name="mi"/>. Used to make generic argument lookup. </param>
        /// <param name="typeScope">The declaring type of the method making a call to <paramref name="mi"/>. Used to make generic argument lookup. </param>
        /// <param name="thisScope">The this object of the call to <paramref name="mi"/>. Used to make generic argument lookup. Null for static methods.</param>
        /// <returns></returns>
        protected JSExpression GetMethodAccessor(MethodBase mi, MethodBase callingScope = null, Type typeScope = null, JSExpression thisScope = null)
        {
            var function = GetUnboundMethodAccessor(mi);

            return BindGenericMethodArguments(function, mi, callingScope, typeScope, thisScope);
        }

        protected JSExpression BindGenericMethodArguments(JSExpression function, MethodBase mi, MethodBase callingScope, Type typeScope, JSExpression thisScope)
        {
            if (mi.IsGenericMethod || (mi.IsStatic && mi.DeclaringType.IsGenericType))
            {
                // For static methods on generic classes, the type arguments are passed to 
                // the method at the call site rather than wired through the generic class type.

                // This is the same behavior as generic static methods (on nongeneric class), so both are handled here.

                // Of course, this also extends to generic static methods on generic classes.

                var classGenArgs = (mi.IsStatic && mi.DeclaringType.IsGenericType) ? mi.DeclaringType.GetGenericArguments() : new Type[0];
                var methodGenArgs = mi.IsGenericMethod ? mi.GetGenericArguments() : new Type[0];

                return new JSCallExpression
                {
                    Function = function,
                    Arguments = Enumerable
                        .Concat(
                            classGenArgs,
                            methodGenArgs)
                        .Select(t => GetTypeIdentifier(t, methodScope: callingScope, typeScope: typeScope, thisScope: thisScope))
                        .ToList()
                };
            }
            else
            {
                return function;
            }
        }

        protected JSExpression GetUnboundMethodAccessor(MethodBase mi)
        {
            return new JSPropertyAccessExpression
            {
                Host = GetAssemblyIdentifier(mi.DeclaringType),
                Property = GetMethodIdentifier(mi)
            };
        }

        protected string GetMethodIdentifier(MethodBase m)
        {
            return "x" + m.MetadataToken.ToString("x");
        }

        protected JSExpression GetDefaultValue(Type fieldType, MethodBase methodScope = null, Type typeScope = null, JSExpression thisScope = null)
        {
            return
                fieldType.IsGenericParameter ?
                    GetGenericFieldInitializer(fieldType, methodScope, typeScope, thisScope) :
                fieldType.IsPrimitive ?
                    new JSNumberLiteral { Value = 0 } as JSExpression :
                fieldType.IsValueType ?
                    new JSNewExpression
                    {
                        Constructor = GetTypeIdentifier(fieldType, methodScope, typeScope, thisScope)
                    } as JSExpression :
                    new JSNullLiteral();
        }

        private JSExpression GetGenericFieldInitializer(Type fieldType, MethodBase methodScope = null, Type typeScope = null, JSExpression thisScope = null)
        {
            var t = GetTypeIdentifier(fieldType, methodScope, typeScope, thisScope);
            return new JSConditionalExpression
            {
                Condition = JSFactory.Identifier(t, "IsValueType"),
                TrueValue = new JSConditionalExpression
                {
                    Condition = JSFactory.Identifier(t, "IsPrimitive"),
                    TrueValue = new JSNumberLiteral { Value = 0 },
                    FalseValue = new JSNewExpression { Constructor = t }
                },
                FalseValue = new JSNullLiteral()
            };
        }

        protected JSExpression GetThisScope(MethodBase methodScope, Type typeScope)
        {
            var thisScope = methodScope.IsStatic
                ? null
                : new JSArrayLookupExpression
                {
                    Array = JSFactory.Identifier("arguments"),
                    Indexer = new JSNumberLiteral { Value = 0 }
                } as JSExpression;

            if (thisScope != null && typeScope.IsValueType)
                thisScope = new JSCallExpression { Function = JSFactory.Identifier(thisScope, "r") };

            return thisScope;
        }
    }
}
