


// Contains some modified code from Mono's implementation of System.Array, licensed under MIT
//
// (C) 2001-2003 Ximian, Inc.  http://www.ximian.com
// Copyright (C) 2004-2011 Novell, Inc (http://www.novell.com)
// Copyright (C) 2011 Xamarin Inc (http://www.xamarin.com)

using Braille.Runtime.TranslatorServices;
using System.Collections;
using System.Collections.Generic;

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

        [JsImport("function(o, i) { return BLR.box(o.jsarr[i], o.etype); }")]
        private extern static object GetValueImpl(object s, int i);

        [JsImport(@"
            function (T) {
                return function FromJsArray(arr) {
                    var r = new (asm0['System.Array`1'](T))();
                    r.etype = T;
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
            if (count < 0 || startIndex < 0 || startIndex - 1 > (array.Length-1) - count)
                throw new /*ArgumentOutOfRange*/ Exception();

            var endIndex = startIndex + count;
            var cmp = GetDefaultEqualityComparer(typeof(T));

            for (int i = startIndex; i < endIndex; ++i)
            {
                if (cmp.Equals(Array.UnsafeLoad(array, i), value))
                    return i;
            }

            return -1;

        }

        [JsImport(@"
            function (classname) { 
                var t = asm1[classname]();
                return new t(); 
            }")]
        private extern static Exception GetException(string classname);

        public static void Copy<T>(T[] source, int startIndex, T[] target, int targetStartIndex, int length)
        {
            if (source == null)
                throw GetException("System.ArgumentNullException");

            if (target == null)
                throw GetException("System.ArgumentNullException");

            if (startIndex < 0)
                throw GetException("System.ArgumentOutOfRangeException");

            if (targetStartIndex < 0)
                throw GetException("System.ArgumentOutOfRangeException");

            // re-ordered to avoid possible integer overflow
            if (startIndex > source.Length - length)
                throw GetException("System.ArgumentException");

            if (targetStartIndex > target.Length - length)
            {
                //string msg = "Destination array was not long enough. Check " +
                //    "destIndex and length, and the array's lower bounds";
                throw GetException("System.ArgumentException");
            }

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

        internal static int LastIndexOf<T>(T[] array, T value, int startIndex, int count)
        {
            //return GetLastIndex(array, startIndex, count, t => Object.Equals(t, item));

            if (array == null)
                throw GetException("System.ArgumentNullException");
            
            if (count < 0 || startIndex < array.GetLowerBound(0) ||
                startIndex > array.Length-1 || startIndex - count + 1 < array.GetLowerBound(0))
                throw GetException("System.ArgumentOutOfRangeException");

            //EqualityComparer<T> equalityComparer = EqualityComparer<T>.Default;
            var equalityComparer = GetDefaultEqualityComparer(typeof(T));
            for (int i = startIndex; i >= startIndex - count + 1; i--)
            {
                if (equalityComparer.Equals(array[i], value))
                    return i;
            }

            return -1;
        }

        //[JsReplace("(Array.prototype.sort.apply({0}.jsarr, {1}))")]
        //private extern static void Sort<T>(T[] array, object comparison);


        [JsImport(
            @" function (T) {
            return function Sort(array, comparison) {
                function swap(items, firstIndex, secondIndex){
                    var temp = items[firstIndex];
                    items[firstIndex] = items[secondIndex];
                    items[secondIndex] = temp;
                }

                function partition(items, left, right) {

                    var pivot   = items[Math.floor((right + left) / 2)],
                        i       = left,
                        j       = right;

                    while (i <= j) {
                        
                        while (comparison(items[i], pivot) < 0)
                            i++;
                        while (comparison(items[j], pivot) > 0)
                            j--;

                        if (i <= j) {
                            swap(items, i, j);
                            i++;
                            j--;
                        }
                    }

                    return i;
                }

                function quickSort(items, left, right) {
                    var index;

                    if (items.length > 1) {
                        index = partition(items, left, right);

                        if (left < index - 1)
                            quickSort(items, left, index - 1);

                        if (index < right)
                            quickSort(items, index, right);
                    }

                    return items;
                }

                quickSort(array.jsarr, 0, array.jsarr.length - 1);
            } }
            ")]
        private extern static void Sort<T>(T[] array, object comparison);

        internal static void Sort<T>(T[] array, int start, int size)
        {
            try
            {
                var cmp = UnsafeCast<IComparer<T>>(GetComparer(typeof(T)));
                Sort(array, 0, size, cmp);
            }
            catch (Exception e) 
            {
                throw new InvalidOperationException("Failed to sort the array. ", e);
            }
        }

        internal static void SortImpl<T>(T[] array, int size, Comparison<T> comparison)
        {
            int originalLength = array.Length;

            if (size < originalLength) 
            {
                Splice(array, size, array.Length - size);
            }

            Sort(array, Delegate.GetJsFunction(comparison));


        }

        internal static void Sort<T>(T[] source, int start, int count, IComparer<T> comparer)
        {
            if (start != 0)
                throw new NotImplementedException();

            SortImpl(source, count, (a, b) => comparer.Compare(a, b));
        }

        [JsImport(
            @"
            function (a, b) {
                a.jsarr = a.jsarr.concat(b);
            }
            ")]
        private static extern void Combine(object managed_array, object js_array);

        [JsImport(
            @"
            function (array, index, howMany) {
                    array.jsarr.splice(index, howMany);
            }
            ")]
        private static extern void Splice(object array, int index, int howMany);

        [JsReplace("(Array.prototype.reverse.apply({0}.jsarr))")]
        private extern static void Reverse<T>(T[] array);

        internal static void Reverse<T>(T[] array, int start, int count)
        {
            if (start != 0 || count < array.Length)
            {
                var h = count / 2;
                var e = start + count - 1;
                for (var i = 0; i < h; i++) 
                {
                    var tmp = array[i];
                    array[i] = array[e - i];
                    array[e - i] = tmp;
                }
            }
            else
            {
                Reverse(array);
            }
        }

        // Used by mono's corlib
        [JsReplace("({0}.jsarr[{1}] = {2})")]
        internal extern static T UnsafeStore<T>(T[] array, int i, T value);

        // Used by mono's corlib
        [JsReplace("({0}.jsarr[{1}])")]
        internal extern static T UnsafeLoad<T>(T[] array, int i);

        // Used by mono's corlib
        [JsReplace("({0})")]
        internal extern static T2 UnsafeMov<T1, T2>(T1 x);

        internal static void Copy<T>(T[] source, T[] destination, int size)
        {
            for (int i = 0; i < size; i++)
            {
                destination[i] = source[i];
            }
        }

        internal int GetLowerBound(int p)
        {
            return 0;
        }

        internal int Rank
        {
            get { return 1; }
        }

        internal static void Resize<T>(ref T[] array, int newSize)
        {
            if (newSize < 0)
                throw new Exception("Argument out of range"); //ArgumentOutOfRangeException("newSize");

            if (array == null)
            {
                array = new T[newSize];
                return;
            }

            var arr = array;
            int length = arr.Length;
            if (length == newSize)
                return;

            T[] a = new T[newSize];
            int tocopy = Math.Min(newSize, length);

            for (int i = 0; i < tocopy; ++i)
                UnsafeStore(a, i, UnsafeLoad(arr, i));
            
            array = a;
        }

        [JsReplace("asm1.GetDefaultComparer({0}.ctor)()")]
        private extern static IComparer GetComparer(Type t);

        [JsReplace("asm1.GetDefaultEqualityComparer({0}.ctor)()")]
        private extern static IEqualityComparer GetDefaultEqualityComparer(Type t);

        public static int BinarySearch<T>(T[] items, int index, int length, T item)
        {
            return BinarySearch(items, index, length, item, null);
        }
        
        public static int BinarySearch<T>(T[] array, int index, int length, T value, IComparer<T> comparer)
        {
            if (array == null)
                throw new Exception("array");

            if (index < 0)
                throw new Exception("index is less than the lower bound of array.");

            if (length < 0)
                throw new Exception("Value has to be >= 0.");

            // re-ordered to avoid possible integer overflow
            if (index > array.Length - length)
                throw new Exception("index and length do not specify a valid range in array.");

            if (comparer == null)
                comparer = UnsafeCast<IComparer<T>>(GetComparer(typeof(T)));

            int iMin = index;
            int iMax = index + length - 1;
            int iCmp = 0;
            try
            {
                while (iMin <= iMax)
                {
                    // Be careful with overflows
                    int iMid = iMin + ((iMax - iMin) / 2);
                    iCmp = comparer.Compare(array[iMid], value);

                    if (iCmp == 0)
                        return iMid;

                    if (iCmp > 0)
                        iMax = iMid - 1;
                    else
                        iMin = iMid + 1; // compensate for the rounding down
                }
            }
            catch (Exception e)
            {
                throw new Exception("Comparer threw an exception.", e);
            }

            return ~iMin; 
        }

        [JsImport("function (elementType, length) { return BLR.new_array(elementType.ctor, length); }")]
        public extern static Array CreateInstance(Type elementType, int length);
    }

    internal class Array<T> : Array, IEnumerable<T>, ICollection<T>
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

        int ICollection<T>.Count
        {
            get { return Length; }
        }

        bool ICollection<T>.IsReadOnly
        {
            get { return true; }
        }

        void ICollection<T>.Add(T item)
        {
            throw new NotSupportedException();
        }

        void ICollection<T>.Clear()
        {
            throw new NotSupportedException();
        }

        bool ICollection<T>.Contains(T item)
        {
            return IndexOf((T[])(Array)this, item, 0, Length) != -1;
        }

        void ICollection<T>.CopyTo(T[] array, int arrayIndex)
        {
            Copy((T[])(Array)this, array, arrayIndex);
        }

        bool ICollection<T>.Remove(T item)
        {
            throw new NotSupportedException();
        }
    }
}
