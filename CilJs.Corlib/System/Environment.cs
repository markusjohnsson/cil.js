using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;

namespace System
{
    public static class Environment
    {
        public static int CurrentManagedThreadId { get { return 0; } }

        public static string NewLine { get { return "\n"; } }
    }
}
