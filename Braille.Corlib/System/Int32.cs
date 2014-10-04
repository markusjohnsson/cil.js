using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct Int32
    {
        public override string ToString()
        {
            return InternalFormatting.NumberStructToString(this);
        }

        [JsReplace("new_string({0}.toString(16))")]
        private static extern string toHex(int n);

        public string ToString(string p)
        {
            int n = this;

            if (p == "X")
                return toHex(n);

            throw new NotSupportedException();
        }
    }
}
