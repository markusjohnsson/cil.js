using System;

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

public class Program
{
    public static void Main(string[] args)
    {
        var a0 = typeof(B).GetCustomAttributes(true);
        System.Console.WriteLine(a0.Length);
        for (var i = 0; i < a0.Length; i++)
        {
            System.Console.WriteLine(typeof(A).Equals(a0[i].GetType()));
            System.Console.WriteLine(a0[i].GetType().FullName);
        }

        var a1 = typeof(C).GetCustomAttributes(true);
        System.Console.WriteLine(((A2)a1[0]).P);

        var a2 = typeof(D).GetCustomAttributes(true);
        System.Console.WriteLine(a2.Length);
    }
}