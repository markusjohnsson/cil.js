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

public class Program
{
    public static void Main(string[] args)
    {
        var a0 = typeof(B).GetCustomAttributes(true);
        TestLog.Log(a0.Length);
        for (var i = 0; i < a0.Length; i++)
        {
            TestLog.Log(typeof(A).Equals(a0[i].GetType()));
            TestLog.Log(a0[i].GetType().FullName);
        }

        var a1 = typeof(C).GetCustomAttributes(true);
        TestLog.Log(((A2)a1[0]).P);

    }
}