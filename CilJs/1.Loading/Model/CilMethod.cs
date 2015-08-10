using CilJs.JSAst;
using CilJs.Loading;
using CilJs.JsTranslation;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Type = IKVM.Reflection.Type;
using System.Diagnostics;
using CilJs.Ast;
using CilJs.Loading.Model;

namespace CilJs.Ast
{
    enum ReplacementKind
    {
        Raw, Function
    }

    class CilMethodReplacement
    {
        public string Replacement { get; set; }
        public ReplacementKind Kind { get; set; } 
    }

    class CilMethod
    {
        public string Name { get; set; }

        public bool IsHideBySig { get; set; }

        public bool IsVirtual { get; set; }

        public int MetadataToken { get; set; }

        public ModuleILResolver Resolver { get; set; }

        public MethodBase ReflectionMethod { get; set; }

        public Type[] ReferencedTypes { get; set; }

        public CilType DeclaringType { get; set; }

        public bool IsPrototypeAccessible
        {
            get
            {
                var attrib = GetAttribute(ReflectionMethod, "JsPrototypeAccessibleAttribute");
                return attrib != null;
            }
        }

        public bool IsAssemblyStatic
        {
            get
            {
                var attrib = GetAttribute(ReflectionMethod, "JsAssemblyStaticAttribute");
                return attrib != null;
            }
        }

        public string AssemblyStaticName
        {
            get
            {
                return GetAttribute(ReflectionMethod, "JsAssemblyStaticAttribute")
                    .NamedArguments
                    .Where(n => n.MemberName == "Name")
                    .Select(n => (string)n.TypedValue.Value)
                    .FirstOrDefault();
            }
        }

        public MethodBody MethodBody { get; internal set; }

        public CilMethodReplacement GetReplacement()
        {
            return GetReplacement(ReflectionMethod);
        }

        public static CilMethodReplacement GetReplacement(MethodBase mi)
        {
            var replaceAttribute = GetAttribute(mi, "JsReplaceAttribute");
            var importAttribute = GetAttribute(mi, "JsImportAttribute");

            if (replaceAttribute == null && importAttribute == null)
                return null;

            Debug.Assert(mi.IsVirtual == false);
            
            if (replaceAttribute != null && importAttribute != null)
                throw new InvalidOperationException("Cannot set both replacement and import on single attribute");

            if (replaceAttribute != null)
            {
                var replacement = replaceAttribute.ConstructorArguments.Select(a => a.Value).FirstOrDefault();

                return new CilMethodReplacement
                {
                    Replacement = (string)replacement,
                    Kind = ReplacementKind.Raw
                };
            }
            else
            {
                var replacement = importAttribute.ConstructorArguments.Select(a => a.Value).FirstOrDefault();

                return new CilMethodReplacement
                {
                    Replacement = (string)replacement,
                    Kind = ReplacementKind.Function
                };
            }
        }

        private static CustomAttributeData GetAttribute(MethodBase mi, string attribName)
        {
            var attribs = mi
                .GetCustomAttributesData();

            if (attribs.Count == 0)
                return null;

            return attribs
                .Where(a => a.AttributeType.Name == attribName)
                .LastOrDefault();
        }


        public bool NeedInitializer
        {
            get
            {
                if (GetReplacement() != null || DeclaringType.IsInterface || ReflectionMethod.IsAbstract)
                {
                    return false;
                }

                if (DeclaringType.IsUserDelegate)
                {
                    return false;
                }

                var typesThatNeedInitialization = ReferencedTypes
                    // Generic parameters should already have been initialized when the call to this method is made
                    .Unless(t => t.IsGenericParameter)
                    // Base types (int, string, object etc) are initialized in the runtime
                    .Unless(t => SystemTypes.BaseTypes.Contains(t.FullName))
                    .Unless(t => IsInitializedByType(t))
                    ;

                if (typesThatNeedInitialization.IsEmpty())
                {
                    return false;
                }

                return true;
            }
        }

        private bool IsInitializedByType(Type t)
        {
            if (ReflectionMethod.IsConstructor || ReflectionMethod.IsStatic)
                return false;

            var ctorReferences = DeclaringType
                .Methods
                .Where(m => m.ReflectionMethod.IsConstructor)
                .Take(1)
                .SelectMany(m => m.ReferencedTypes);

            foreach (var ctor in  DeclaringType.Methods.Skip(1).Where(m => m.ReflectionMethod.IsConstructor))
            {
                ctorReferences = ctorReferences.Intersect(ctor.ReferencedTypes);
            }

            return DeclaringType.ReflectionType.GetInterfaces().Any(iface => iface == t) ||
                ctorReferences.Any(r => r == t);
        }

        public bool NeedTranslation
        {
            get
            {
                var r = GetReplacement();
                if (r != null)
                {
                    if (r.Kind == ReplacementKind.Function)
                        return true;
                    else
                        return false;
                }

                return (!(DeclaringType.IsInterface || ReflectionMethod.IsAbstract));
            }
        }

        public Analysis.LocalInfo[] Locals { get; set; }

        public IList<OpExpression> OpTree { get; set; }

        public Block Block { get; set; }
    }
}
