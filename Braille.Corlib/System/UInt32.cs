using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct UInt32
    {
        public const uint MaxValue = 0xffffffff;
        public const uint MinValue = 0;

        public override string ToString()
        {
            return InternalFormatting.NumberStructToString(this);
        }
    }
}
