using System;
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
        var ms = a.GetMethods();

        foreach (var m in ms)
            TestLog.Log(m.Name);
    }
}

