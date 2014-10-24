using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct Single
    {
        public override string ToString()
        {
            return InternalFormatting.SignedPrimitiveToString(this);
        }
    }
}
