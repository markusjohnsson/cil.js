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

        public Exception(string message, Exception innerException)
        {
            Message = message;
            InnerException = innerException;
        }

        public int HResult { get; protected set; }

        public virtual string Message { get; set; }

        public override string ToString()
        {
            return Message;
        }

        public Exception InnerException { get; set; }
    }
}
