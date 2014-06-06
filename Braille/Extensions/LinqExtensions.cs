using System;
using System.Collections.Generic;
using System.Linq;

namespace Braille
{
    public static class LinqExtensions
    {
        public static IEnumerable<T> EndWith<T>(this IEnumerable<T> source, T end)
        {
            return source.Concat(new[] { end });
        }

        public static IEnumerable<T> StartWith<T>(this IEnumerable<T> source, T start)
        {
            return new[] { start }.Concat(source);
        }

        public static bool IsEmpty<T>(this IEnumerable<T> source)
        {
            foreach (var x in source)
                return false;
            return true;
        }

        public static int IndexOf<T>(this IEnumerable<T> source, T needle)
        {
            var i = 0;
            foreach (var s in source)
            {
                if (EqualityComparer<T>.Default.Equals(s, needle))
                {
                    return i;
                }

                i++;
            }

            return -1;
        }

        public static void ReplaceRange<T>(this List<T> source, T from, T to, IEnumerable<T> replacement)
        {
            var fromIndex = source.IndexOf(from);
            var toIndex = source.IndexOf(to) + 1;
            source.RemoveRange(fromIndex, toIndex - fromIndex);
            source.InsertRange(fromIndex, replacement);
        }
    }
}
