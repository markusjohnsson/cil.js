
using System;

interface I { }

class B : I
{
    public string X;
}

class Program
{
    public static void Main()
    {
        object b = new I[1];
        M(b);
        System.Console.WriteLine(((B) ((I[]) b)[0]).X);
    }

    private static void M(object b) 
    {
        var a = (object[]) b;
        a[0] = new B() { X = "X" };
    }
}
