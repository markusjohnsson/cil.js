

using System.Collections.Generic;

namespace System.Linq
{
    public static class Enumerable
    {
        public static IEnumerable<TResult> Select<T, TResult>(this IEnumerable<T> source, Func<T, TResult> selector)
        {
            foreach (var s in source)
                yield return selector(s);
        }

        public static IEnumerable<T> Where<T>(this IEnumerable<T> source, Func<T, bool> predicate)
        {
            foreach (var s in source)
                if (predicate(s))
                    yield return s;
        }

        public static T FirstOrDefault<T>(this IEnumerable<T> source)
        {
            foreach (var s in source)
            {
                return s;
            }

            return default(T);
        }

        public static bool Any<T>(this IEnumerable<T> source)
        {
            foreach (var s in source)
            {
                return true;
            }

            return false;
        }

        public static IEnumerable<T> OrderBy<T>(this IEnumerable<T> source, Func<T, double> comparator)
        {
            if (false == source.Any())
                yield break;

            var t = comparator(source.FirstOrDefault());
            
            foreach (var f in source.Where(f => comparator(f) < t).OrderBy(comparator))
                yield return f;

            foreach (var f in source.Where(f => comparator(f) >= t).OrderBy(comparator))
                yield return f;
        }
    }
}

namespace Raytracer
{
    public class Program
    {
        public static void Main() 
        {
            
        }
    }
}
