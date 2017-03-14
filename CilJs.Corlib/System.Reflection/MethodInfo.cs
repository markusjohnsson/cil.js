using CilJs.Runtime.TranslatorServices;
using System.Reflection;
using System.Collections.Generic;

namespace System.Reflection
{
    public class MethodInfo : MemberInfo
    {
        private CilJs.JavaScript.Array methodData;

        private MethodInfo() { }

        internal static MethodInfo GetInstance(CilJs.JavaScript.Array m)
        {
            return new MethodInfo { methodData = m };
        }

        public override object[] GetCustomAttributes(bool inherit)
        {
            return GetCustomAttributesImpl(methodData[3]);
        }

        public override object[] GetCustomAttributes(Type attributeType, bool inherit)
        {
            throw new NotImplementedException();
        }

        public override bool IsDefined(Type attributeType, bool inherit)
        {
            throw new NotImplementedException();
        }

        public override IEnumerable<CustomAttributeData> CustomAttributes
        {
            get
            {
                var attributes = UnsafeCast<CilJs.JavaScript.Array>(methodData[3]);
                foreach (var rawAttribData in attributes)
                {
                    yield return new CustomAttributeData(UnsafeCast<CilJs.JavaScript.Array>(rawAttribData));
                }
            }
        }

        public override string Name
        {
            get
            {
                return (string)UnsafeCast<CilJs.JavaScript.String>(methodData[2]);
            }
        }

        public object Invoke(object obj, object[] parameters)
        {
            var assembly = methodData[0];
            var method = methodData[1];
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
