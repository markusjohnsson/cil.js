using System;

class A 
{ 
    public virtual void X() {}
}
class B: A 
{
    public override void X()
    {
        Console.WriteLine("Hey");
    }
}

public class Program
{
    public static void Main()
    {
        for (var i = 0; i < 100; i++)
        {
            var b = new B();
            b.X();
        }
    }
}