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

        public InvalidOperationException(string message)
            : base(message)
        {

        }
    }
}
