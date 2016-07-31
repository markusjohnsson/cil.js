using System;

interface I { }
interface I2 { int Get(); }

class D: I2
{
    public int x;

    public int Get() { return x; }
}

class C<T> : I where T: I2
{
    public void X(T i2) 
    {
        System.Console.WriteLine(i2.Get());
    }
}

public class Program
{
    public static void Main()
    {
        new C<D>().X(new D { x = 101 });
    }
}
