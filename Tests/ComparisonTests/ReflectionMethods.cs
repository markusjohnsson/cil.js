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
    public static void Sort(MethodInfo[] a) 
    {
        for (int p = 0; p < a.Length; p++)
        {
            for (int i = 0; i < a.Length-1; i++)
            {
                if (a[i].Name.CompareTo(a[i + 1].Name) > 0)
                {
                    var t = a[i + 1];
                    a[i + 1] = a[i];
                    a[i] = t;
                }
            }
        }
    }

    public static void Main()
    {
        var a = typeof(A);
        var ms = a.GetTypeInfo().GetMethods();

        Sort(ms);

        foreach (var m in ms)
            System.Console.WriteLine(m.Name);
    }
}

