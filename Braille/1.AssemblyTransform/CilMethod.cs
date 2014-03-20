using Braille.JSAst;
using Braille.MethodTransform;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Braille.AssemblyTransform
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
                .GetCustomAttributes(false);

            if (attribs.Length == 0)
                return null;

            var importAttrib = attribs
                .Where(a => a.GetType().Name == "JsImportAttribute")
                .LastOrDefault();

            if (importAttrib == null)
                return null;

            var replacement = importAttrib
                .GetType()
                .GetProperty("Function")
                .GetValue(importAttrib, null);

            return replacement as string;
        }

        public byte[] IlCode { get; set; }

        public MethodBase ReflectionMethod { get; set; }

        public JSFunctionDelcaration JsFunction { get; set; }
    }
}
