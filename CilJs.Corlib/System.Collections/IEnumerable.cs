using System;
using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;

namespace System.Collections
{
    public interface IEnumerable
    {
        IEnumerator GetEnumerator();
    }
}
