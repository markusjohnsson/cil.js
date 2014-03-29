using Braille.JSAst;
using Braille.Loading;
using Braille.JsTranslation;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.Ast
{
    class CilMethod
    {
        public string Name { get; set; }

        public bool IsHideBySig { get; set; }

        public bool IsVirtual { get; set; }

        public int MetadataToken { get; set; }

        public ModuleILResolver Resolver { get; set; }

        public string GetReplacement()
        {
            var mi = ReflectionMethod;

            return GetReplacement(mi);
        }

        public static string GetReplacement(MethodBase mi)
        {
            var attribs = mi
                .GetCustomAttributesData();

            if (attribs.Count == 0)
                return null;

            var importAttrib = attribs
                .Where(a => a.AttributeType.Name == "JsImportAttribute")
                .LastOrDefault();

            if (importAttrib == null)
                return null;

            var replacement = importAttrib.ConstructorArguments.Select(a => a.Value).FirstOrDefault();

            return replacement as string;
        }

        public byte[] IlCode { get; set; }

        public MethodBase ReflectionMethod { get; set; }
    }
}
