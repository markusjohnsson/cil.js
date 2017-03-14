using System;
using System.Reflection;

public class A
{
    public void X() { }
    public void Y() { }
    public void Z() { }
}

public class Program
{
    public static void Main()
    {
        var a = typeof(A);
        var ms = a.GetTypeInfo().GetMethods();

        foreach (var m in ms)
            System.Console.WriteLine(m.Name);
    }
}

