using Braille.JSAst;
using Braille.Loading;
using Braille.JsTranslation;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Type = IKVM.Reflection.Type;
using System.Diagnostics;
using Braille.Ast;

namespace Braille.Ast
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

        public byte[] IlCode { get; set; }

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

                if (ReferencedTypes.Where(t => !t.IsGenericParameter).IsEmpty())
                {
                    return false;
                }

                return true;
            }
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
    }
}
