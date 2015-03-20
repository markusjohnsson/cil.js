using System;
using System.Collections.Generic;

public static class E
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
}

public class P { public int Prop { get; set; } }

public class Program
{
    public static void Main()
    {
        var arr = new P[5];
        arr[0] = new P { Prop = 11 };
        arr[1] = new P { Prop = 22 };
        arr[2] = new P { Prop = 33 };
        arr[3] = new P { Prop = 44 };
        arr[4] = new P { Prop = 55 };

        TestLog.Log(arr.FirstOrDefault().Prop);
        //TestLog.Log(arr.Any());
        //TestLog.Log(arr.Select(p => p.Prop).FirstOrDefault());
        //TestLog.Log(arr.Where(p => p.Prop == 22).FirstOrDefault().Prop);
        //TestLog.Log(arr.Where(p => p.Prop == 99).FirstOrDefault()); // null
    }
}


