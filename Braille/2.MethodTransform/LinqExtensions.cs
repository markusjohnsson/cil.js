using System.Collections.Generic;
using System.Linq;

namespace Braille.MethodTransform
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
    }
}
