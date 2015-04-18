using System;
using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;

namespace System.Collections.Generic
{
    public interface IEnumerable<T> : IEnumerable
    {
        new IEnumerator<T> GetEnumerator();
    }
}
