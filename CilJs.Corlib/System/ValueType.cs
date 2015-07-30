//using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;

namespace System
{
    public class ValueType
    {
        public override bool Equals(object other)
        {
            return ValueTypeEquals(this, other);
        }

        [JsReplace("CILJS.value_equals({0}.r(), {1}.boxed)")]
        private static extern bool ValueTypeEquals(object a, object b);
    }
}
