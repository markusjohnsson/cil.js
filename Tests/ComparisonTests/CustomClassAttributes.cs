using System;
using System.Collections.Generic;
using System.Reflection;

class A: Attribute { }

[A]
class B { }

class A2 : Attribute {
    public string P { get; set; }
    public A2(string s) { P = s; } 
}

[A2("xyz")]
class C { }

class D { }

public static class MiniLinq
{    
    public static bool Any<T>(this IEnumerable<T> source)
    {
        foreach (var s in source)
        {
            return true;
        }

        return false;
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

public class Program
{
    public static void Main()
    {
        var a0 = typeof(B).GetTypeInfo().CustomAttributes;
        System.Console.WriteLine(a0.Count());
        foreach (var attr in a0)
        {
            System.Console.WriteLine(typeof(A).Equals(attr.AttributeType));
            System.Console.WriteLine(attr.AttributeType.FullName);
        }

        var a1 = typeof(C).GetTypeInfo().CustomAttributes;
        System.Console.WriteLine(a1.Count());
        // System.Console.WriteLine(((A2)a1[0]).P);

        var a2 = typeof(D).GetTypeInfo().CustomAttributes;
        System.Console.WriteLine(a2.Count());
    }
}