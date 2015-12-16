

using CilJs.Runtime.TranslatorServices;
using System;
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

        public static T MinByOrDefault<T>(this IEnumerable<T> source, Func<T, double> comparator)
        {
            var first = true;
            var result = default(T);
            var low = 0d;

            foreach (var s in source)
            {
                var value = comparator(s);
                if (first || value < low)
                {
                    low = value;
                    result = s;
                }
            }

            return result;
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
    public class Stopwatch
    {
        [JsImport(@"function() { return Date.now(); }")]
        internal static extern int Now();

        int start;
        int end;

        public Stopwatch(int start)
        {
            this.start = start;
        }

        public static Stopwatch StartNew()
        {
            return new Stopwatch(Now());
        }

        public void Stop()
        {
            end = Now();
        }

        public double TotalSeconds
        {
            get { return (end - start) / 1000d; }
        }
    }

    public class Program
    {
        [JsImport(@"function() { return document.getElementById(""canvas"").getContext(""2d""); }")]
        public static extern object GetContext();

        [JsImport(@"function(ctx) { return ctx.createImageData(200,200); }")]
        public static extern object CreateImageData(object ctx);

        [JsImport(@"function(ctx, data) { return ctx.putImageData(data, 0, 0); }")]
        public static extern object PutImageData(object ctx, object data);

        [JsImport(@"function(imgData, x, y, r, g, b, a) { 
                imgData.data[4*(x + y * 200) + 0] = 255 * r;
                imgData.data[4*(x + y * 200) + 1] = 255 * g;
                imgData.data[4*(x + y * 200) + 2] = 255 * b;
                imgData.data[4*(x + y * 200) + 3] = 255 * a; 
            }")]
        public static extern void SetPixel(object data, int x, int y, double r, double g, double b, double a);

        public static void Main() 
        {
            var sw = Stopwatch.StartNew();
            var ctx = GetContext();
            var imgData = CreateImageData(ctx);

            var raytracer = new RayTracer.RayTracer(200, 200, (x, y, c) => { SetPixel(imgData, x, y, c.R, c.G, c.B, 1); });
            raytracer.Render(raytracer.DefaultScene);

            PutImageData(ctx, imgData);

            sw.Stop();
            Console.WriteLine(sw.TotalSeconds);

        }
    }
}
