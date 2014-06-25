using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public struct Boolean
    {
        public override string ToString()
        {
            return this ? "True" : "False";
        }
    }
}
