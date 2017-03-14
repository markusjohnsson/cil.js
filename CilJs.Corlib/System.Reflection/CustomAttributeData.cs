using JsArray = CilJs.JavaScript.Array;

namespace System.Reflection
{
    public class CustomAttributeData
    {
        private JsArray raw;

        internal CustomAttributeData(JsArray raw)
        {
            this.raw = raw;
        }

        public Type AttributeType
        {
            get
            {
                return TypeInfo.GetInstance(UnsafeCast<TypeInfo.constructor>(raw[0]));
            }
        }
    }
}