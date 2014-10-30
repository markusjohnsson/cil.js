
using System;
using System.Reflection;

class A : Attribute { }
class B : Attribute { }

class C
{
    [A]
    public void M() { }
    
    [A]
    [B]
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
        //TestLog.Log(n[0].GetType().Name);
        //TestLog.Log(n[1].GetType().Name);
    } 
}