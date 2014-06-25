using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public class Exception
    {
        public Exception()
        {
        }

        public Exception(string message)
        {
            Message = message;
        }

        public string Message { get; set; }

        public override string ToString()
        {
            return Message;
        }
    }
}
