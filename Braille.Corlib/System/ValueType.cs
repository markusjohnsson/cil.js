using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public class ValueType
    {
        public override bool Equals(object other)
        {
            return ValueTypeEquals(this, other);
        }

        [JsReplace("value_equals({0}.r(), {1}.boxed)")]
        private static extern bool ValueTypeEquals(object a, object b);
    }
}
