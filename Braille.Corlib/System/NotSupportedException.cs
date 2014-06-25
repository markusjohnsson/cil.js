using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

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
