
using System;
using System.Collections.Generic;
using System.Reflection;

class A : Attribute { }

class B : Attribute 
{
    public Type T { get; set; }
    public B(Type t) 
    {
        T = t;
    }
}

class D 
{
}

class C
{
    [A]
    public void M() { }
    
    [B(typeof(D))]
    public void N() { }
}

public static class MiniLinq
{    
    public static T First<T>(this IEnumerable<T> source)
    {
        foreach (var s in source)
        {
            return s;
        }

        return default(T);
    }
    
    public static int Count<T>(this IEnumerable<T> source)
    {
        int counter = 0;
        foreach (var s in source)
        {
            counter++;
        }

        return counter;
    }
}

class Program
{
    public static void Main() 
    {
        var bms = typeof(C).GetTypeInfo().GetMethods();

        var m = bms[0].CustomAttributes;
        var n = bms[1].CustomAttributes;

        System.Console.WriteLine(m.Count());
        System.Console.WriteLine(m.First().GetType().Name);

        System.Console.WriteLine(n.Count());
        // System.Console.WriteLine(((B)n.First()).T.Name);
    } 
}