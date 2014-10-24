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
    }
}
