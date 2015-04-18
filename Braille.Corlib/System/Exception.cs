using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;

namespace System
{
    public class Exception
    {
        public Exception()
        {
            init(this);
        }

        public Exception(string message)
            : this()
        {
            Message = message;
        }

        public Exception(string message, Exception innerException)
            : this()
        {
            Message = message;
            InnerException = innerException;
        }

        public int HResult
        {
            get;
            protected set;
        }

        public virtual string Message
        {
            get;
            set;
        }

        public override string ToString()
        {
            return Message;
        }

        public Exception InnerException { get; set; }

        [JsReplace("{0}.stack = new Error().stack")]
        private static extern void init(Exception self);
    }
}
