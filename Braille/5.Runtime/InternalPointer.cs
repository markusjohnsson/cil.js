using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.Runtime
{
    struct InternalPointer<T>
    {
        private T[] bytes;
        private int offset;

        public InternalPointer(T[] bytes)
        {
            this.bytes = bytes;
            this.offset = 0;
        }

        public InternalPointer(T[] bytes, int offset)
        {
            this.bytes = bytes;
            this.offset = offset;
        }

        public T this[int i]
        {
            get
            {
                return bytes[offset + i];
            }
        }

        public static explicit operator T(InternalPointer<T> source)
        {
            return source.bytes[source.offset];
        }

        public static InternalPointer<T> operator +(InternalPointer<T> lhs, int rhs)
        {
            return new InternalPointer<T>(lhs.bytes, lhs.offset + rhs);
        }

        public static InternalPointer<T> operator ++(InternalPointer<T> lhs)
        {
            return new InternalPointer<T>(lhs.bytes, lhs.offset + 1);
        }
    }
}
