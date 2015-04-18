using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;

namespace System
{
    public class NotSupportedException : Exception
    {
        public NotSupportedException()
            : base("Operation not supported")
        {
        }

        public NotSupportedException(string message)
            : base(message)
        {

        }
    }
}
