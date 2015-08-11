
using System;
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

class Program
{
    public static void Main() 
    {
        var bms = typeof(C).GetMethods();

        var m = bms[0].GetCustomAttributes(true);
        var n = bms[1].GetCustomAttributes(true);

        System.Console.WriteLine(m.Length);
        System.Console.WriteLine(m[0].GetType().Name);

        System.Console.WriteLine(n.Length);
        System.Console.WriteLine(((B)n[0]).T.Name);
    } 
}