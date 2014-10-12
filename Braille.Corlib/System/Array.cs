using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;
using System.Collections.Generic;
using System.Collections;

namespace System
{
    public delegate bool Predicate<T>(T obj);

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

        [JsImport(@"
            function (T) {
                return function FromJsArray(arr) {
                    var r = new (asm0['System.Array`1'](T))();
                    r.type = T;
                    r.jsarr = arr;
                    return r;
                };
            }")]
        internal extern static T[] FromJsArray<T>(object array);

        public object GetValue(int index)
        {
            return GetValueImpl(this, index);
        }

        public IEnumerator GetEnumerator()
        {
            return GetEnumeratorImpl();
        }

        protected abstract IEnumerator GetEnumeratorImpl();

        public static void Clear<T>(T[] array, int index, int length)
        {
            var d = default(T);
            for (var i = index; i < array.Length; i++)
                array[i] = d;
        }

        public static int IndexOf<T>(T[] array, T value, int startIndex, int count)
        {
            if (array == null)
                throw new /*ArgumentNull*/ Exception("array");

            // re-ordered to avoid possible integer overflow
            if (count < 0 || startIndex < 0 || startIndex - 1 > - count)
                throw new /*ArgumentOutOfRange*/ Exception();

            int max = startIndex + count;
            for (int i = startIndex; i < max; i++)
            {
                if (Object.Equals(GetValueImpl(array, i), value))
                    return i;
            }

            return -1;
        }

        public static void Copy<T>(T[] source, int startIndex, T[] target, int targetStartIndex, int length)
        {
            for (int s = startIndex, t = targetStartIndex, i = 0; i < length && s < source.Length; s++, t++, i++)
            {
                target[t] = source[s];
            }
        }

        internal static int GetIndex<T>(T[] source, int startIndex, int length, Predicate<T> match)
        {
            var max = startIndex + length;
            for (var i = startIndex; i < max; i++)
            {
                if (match(source[i]))
                    return i;
            }

            return -1;
        }

        internal static int GetLastIndex<T>(T[] array, int startIndex, int count, Predicate<T> match)
        {
            // unlike FindLastIndex, takes regular params for search range
            for (int i = startIndex + count; i != startIndex; )
            {
                if (match(array[--i]))
                    return i;
            }

            return -1;
        }

        internal static T UnsafeLoad<T>(T[] array, int i)
        {
            return array[i];
        }
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
