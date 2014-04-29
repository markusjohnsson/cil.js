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

        protected virtual JSExpression GetTypeIdentifier(Type type, MethodBase methodScope = null, Type typeScope = null, JSExpression thisScope = null)
        {
            if (type.IsGenericParameter)
            {
                if (type.DeclaringType == null &&
                    type.DeclaringMethod == null)
                {
                    throw new InvalidOperationException();
                }

                if (type.DeclaringMethod != null ||

                    // For static methods on generic classes, the type arguments are passed to 
                    // the method at the call site rather than wired through the generic class type.
                    // So, the type argument is available as an argument in the closure of the 
                    // javascript function, which is why we emit an identifier.

                    (methodScope != null && methodScope.IsStatic && type.DeclaringType.GetGenericTypeDefinition() == methodScope.DeclaringType))
                {
                    return new JSIdentifier { Name = type.Name };
                }
                else
                {
                    return
                        // TODO: this is for when T is used inside the type initializer - this method should be overridden in TypeTranslator instead of having this case here
                        (typeScope == type.DeclaringType && thisScope == null) ?
                        JSIdentifier.Create(type.Name) :
                        new JSArrayLookupExpression
                        {
                            Array = JSIdentifier.Create(thisScope, "constructor", "GenericArguments"),
                            Indexer = new JSNumberLiteral { Value = typeScope.GetGenericArguments().IndexOf(type) }
                        };
                }
            }
            else if (type.IsGenericType)
            {
                return new JSCallExpression
                {
                    Function = JSIdentifier.Create(
                        GetAssemblyIdentifier(type), ConstructFullName(type)),
                    Arguments = type
                        .GetGenericArguments()
                        .Select(
                            g => GetTypeIdentifier(g, methodScope, typeScope, thisScope))
                        .ToList()
                };
            }
            else
            {
                return new JSCallExpression
                {
                    Function = JSIdentifier.Create(GetAssemblyIdentifier(type), type.FullName)
                };
            }
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

        protected static string GetSimpleName(CilType type)
        {
            var n = type.Name.Replace("<", "_").Replace(">", "_").Replace("`", "_").Replace("{", "_").Replace("}", "_").Replace("-", "_");
            if (n == "String" || n == "Number" || n == "Boolean" || n == "Object" || n == "function")
                return "$$" + n;
            return n;
        }

        protected string GetTranslatedFieldName(CilType type, FieldInfo f)
        {
            if (f.IsStatic == false && f.IsPrivate && f.DeclaringType.IsValueType == false)
            {
                var ns = (f.DeclaringType.Namespace ?? "").Replace('.', '_');
                return ns + GetSimpleName(type) + f.Name;
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

        protected JSExpression GetMethodAccessor(MethodBase mi, MethodBase callingScope = null, Type typeScope = null, JSExpression thisScope = null)
        {
            var function = new JSPropertyAccessExpression
            {
                Host = GetAssemblyIdentifier(mi.DeclaringType),
                Property = GetMethodIdentifier(mi)
            };

            if (mi.IsGenericMethod || (mi.IsStatic && mi.DeclaringType.IsGenericType))
            {
                // For static methods on generic classes, the type arguments are passed to 
                // the method at the call site rather than wired through the generic class type.

                // This is the same behavior as generic static methods (on nongeneric class), so both are handled here.

                // Of course, this also extends to generic static methods on generic classes.

                var classGenArgs = mi.DeclaringType.IsGenericType ? mi.DeclaringType.GetGenericArguments() : new Type[0];
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

        protected string GetMethodIdentifier(MethodBase m)
        {
            return "x" + m.MetadataToken.ToString("x");
        }

        protected JSExpression GetDefaultValue(Type fieldType, MethodBase methodScope = null, Type typeScope = null, JSExpression thisScope = null)
        {
            return
                fieldType.IsGenericParameter ?
                    GetGenericFieldInitializer(fieldType, methodScope, typeScope, thisScope) :
                fieldType.FullName == "System.Boolean" ?
                    new JSBoolLiteral { Value = default(bool) } :
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
                Condition = JSIdentifier.Create(t, "IsValueType"),
                TrueValue = new JSConditionalExpression
                {
                    Condition = JSIdentifier.Create(t, "IsPrimitive"),
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
                    Array = JSIdentifier.Create("arguments"),
                    Indexer = new JSNumberLiteral { Value = 0 }
                } as JSExpression;

            if (thisScope != null && typeScope.IsValueType)
                thisScope = new JSCallExpression { Function = JSIdentifier.Create(thisScope, "r") };

            return thisScope;
        }
    }
}
