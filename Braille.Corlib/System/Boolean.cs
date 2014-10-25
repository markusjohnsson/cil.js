using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct Boolean
    {
        public override string ToString()
        {
            return this ? "True" : "False";
        }

        public override bool Equals(object other)
        {
            if (!(other is bool))
                return false;

            var a = this;
            var b = (bool)other;
            return a == b;
        }
    }
}
