
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

        TestLog.Log(m.Length);
        TestLog.Log(m[0].GetType().Name);

        TestLog.Log(n.Length);
        TestLog.Log(((B)n[0]).T.Name);
    } 
}