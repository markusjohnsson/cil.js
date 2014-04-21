using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;
using System.Collections.Generic;
using System.Collections;

namespace System
{
    public abstract class Array : IEnumerable
    {
        internal object type;
        internal object jsarr;
        
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
        public new IEnumerator<T> GetEnumerator()
        {
            for (var i = 0; i < Length; i++)
                yield return (T)GetValue(i);
        }

        protected override IEnumerator GetEnumeratorImpl()
        {
            return GetEnumerator();
        }
    }
}
