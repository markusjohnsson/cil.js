using System;
using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System.Collections
{
    public interface IEnumerable
    {
        IEnumerator GetEnumerator();
    }
}
