

using Braille.Runtime.TranslatorServices;
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
        [JsImport(@"function() { return document.getElementById(""canvas"").getContext(""2d""); }")]
        public static extern object GetContext();

        [JsImport(@"function(ctx) { return ctx.createImageData(500,500); }")]
        public static extern object CreateImageData(object ctx);

        [JsImport(@"function(ctx, data) { return ctx.putImageData(data, 0, 0); }")]
        public static extern object PutImageData(object ctx, object data);

        [JsImport(@"function(data, x, y, r, g, b, a) { 
                data[x + y * 500 + 0] = 255 * r;
                data[x + y * 500 + 1] = 255 * g;
                data[x + y * 500 + 2] = 255 * b;
                data[x + y * 500 + 3] = 255 * a; 
            }")]
        public static extern void SetPixel(object data, int x, int y, double r, double g, double b, double a);

        public static void Main() 
        {
            var ctx = GetContext();
            var data = CreateImageData(ctx);

            var raytracer = new RayTracer.RayTracer(500, 500, (x, y, c) => { SetPixel(data, x, y, c.R, c.G, c.B, 1); });
            raytracer.Render(raytracer.DefaultScene);
        }
    }
}
