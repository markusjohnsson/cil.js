using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;
using System.Collections.Generic;
using System.Collections;

namespace System
{
    public abstract class Array : IEnumerable
    {
#pragma warning disable 649
        internal object type;
#pragma warning restore 649

#pragma warning disable 649
        internal object jsarr;
#pragma warning restore 649
        
        public int Length { get { return GetLengthImpl(this); } }

        [JsImport("function(o) { return o.jsarr.length; }")]
        private extern static int GetLengthImpl(object s);

        [JsImport("function(o, i) { return box(o.jsarr[i], o.type); }")]
        private extern static object GetValueImpl(object s, int i);

        public object GetValue(int index)
        {
            return GetValueImpl(this, index);
        }

        public IEnumerator GetEnumerator()
        {
            return GetEnumeratorImpl();
        }

        protected abstract IEnumerator GetEnumeratorImpl();
    }

    internal class Array<T> : Array, IEnumerable<T>
    {
        [JsReplace("{0}.jsarr[{1}]")]
        private extern T GetTypedValue(int index);

        class ArrayEnumerator : IEnumerator<T>
        {
            internal int index;
            internal int length;
            internal Array<T> source;
            
            public ArrayEnumerator(Array<T> arr)
            {
                source = arr;
                index = -1;
                length = arr.Length;
            }

            public T Current
            {
                get { return source.GetTypedValue(index); }
            }

            public bool MoveNext()
            {
                index++;
                return index < length;
            }

            object IEnumerator.Current
            {
                get { return Current; }
            }

            public void Reset()
            {
                index = -1;
            }

            public void Dispose()
            {   
            }
        }

        public new IEnumerator<T> GetEnumerator()
        {
            return new ArrayEnumerator(this);
        }

        protected override IEnumerator GetEnumeratorImpl()
        {
            return GetEnumerator();
        }
    }
}
