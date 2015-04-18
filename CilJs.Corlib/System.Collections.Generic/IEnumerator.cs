using System;
using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;

namespace System.Collections.Generic
{
    public interface IEnumerator<T> : IEnumerator, IDisposable
    {
        new T Current { get; }
    }
}
