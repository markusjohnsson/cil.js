

class A { }
class B { }

class C<T>
{
    public void X<T2>() 
    {
        TestLog.Log(typeof(T).Name);
        TestLog.Log(typeof(T2).Name);
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