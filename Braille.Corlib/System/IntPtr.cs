using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;

namespace System
{
    public struct IntPtr
    {
        public override string ToString()
        {
            return InternalFormatting.SignedPrimitiveToString(this);
        }
    }
}
