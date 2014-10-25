using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct Int16
    {
        public override string ToString()
        {
            return InternalFormatting.SignedPrimitiveToString(this);
        }

        public override bool Equals(object other)
        {
            if (!(other is short))
                return false;

            var a = this;
            var b = (short)other;
            return a == b;
        }

        public override int GetHashCode()
        {
            return (int)this;
        }
    }
}
