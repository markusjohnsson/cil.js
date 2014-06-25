using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public class InvalidCastException : Exception
    {
        public InvalidCastException()
            : base("Cannot cast from source type to destination type.")
        {

        }
    }
}
