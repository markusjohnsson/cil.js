using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public class InvalidOperationException : Exception
    {
        public InvalidOperationException()
            : base("Operation is not valid due to the current state of the object")
        {
        }

        public InvalidOperationException(Exception e)
            : base("Operation is not valid due to the current state of the object", e)
        {
        }

        public InvalidOperationException(string message, Exception inner)
            : base(message, inner)
        {
        }

        public InvalidOperationException(string message)
            : base(message)
        {
        }
    }
}
