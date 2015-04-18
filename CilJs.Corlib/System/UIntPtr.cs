using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;

namespace System
{
    public struct UIntPtr
    {
        public override string ToString()
        {
            return InternalFormatting.SignedPrimitiveToString(this);
        }
    }
}
