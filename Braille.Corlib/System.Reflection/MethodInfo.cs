using Braille.Runtime.TranslatorServices;
using System.Reflection;

namespace System.Reflection
{
    public class MethodInfo : MemberInfo
    {
        private Braille.JavaScript.Array mtd;

        private MethodInfo() { }

        internal static MethodInfo GetInstance(Braille.JavaScript.Array m)
        {
            return new MethodInfo { mtd = m };
        }

        public override object[] GetCustomAttributes(bool inherit)
        {
            return GetCustomAttributesImpl(mtd[3]);
        }

        public override object[] GetCustomAttributes(Type attributeType, bool inherit)
        {
            throw new NotImplementedException();
        }

        public override bool IsDefined(Type attributeType, bool inherit)
        {
            throw new NotImplementedException();
        }

        public override string Name
        {
            get
            {
                return (string)UnsafeCast<Braille.JavaScript.String>(mtd[2]);
            }
        }

        public object Invoke(object obj, object[] parameters)
        {
            var assembly = mtd[0];
            var method = mtd[1];
            return InvokeImpl(assembly, method, obj, parameters);
        }

        [JsImport(@"
            function InvokeImpl(assembly, method, obj, parameters) {
                var args = [obj].concat(parameters.jsarr);
                return assembly[method].apply(null, args);
            }
            ")]
        private extern static object InvokeImpl(object assembly, object method, object obj, object[] parameters);
    }
}
