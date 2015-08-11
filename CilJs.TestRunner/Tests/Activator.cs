
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
        System.Console.WriteLine(typeof(A).Equals(a.GetType()));
        System.Console.WriteLine(a.X());
    }
}
