

class A { }
class B { }

class C<T>
{
    public void X<T2>() 
    {
        System.Console.WriteLine(typeof(T).Name);
        System.Console.WriteLine(typeof(T2).Name);
    }
}


class Program
{
    public static void Main()
    {
        var c = new C<A>();
        c.X<B>();
    }
}