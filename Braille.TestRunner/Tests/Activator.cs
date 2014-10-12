
using System;
class A
{
    public int X() { return 123; }
}

class Program
{
    public static void Main() 
    {
        A a = (A)Activator.CreateInstance(typeof(A));
        TestLog.Log(typeof(A).Equals(a.GetType()));
        TestLog.Log(a.X());
    }
}
