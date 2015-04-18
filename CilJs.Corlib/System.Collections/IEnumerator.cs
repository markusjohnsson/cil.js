using System;
using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;

namespace System.Collections
{
    public interface IEnumerator 
    {
        object Current { get; }
        bool MoveNext();
        void Reset();
    }
}
