
class A<T> { }

class B<T>
{
    public A<T> Value;
    public T[] Array;

    public void Foo(object val)
    {
        if (val is T[])
            Array = (T[])val;

        if (val is A<T>)
            Value = (A<T>)val;
    }
}

class C { }
class D { }

class Program
{
    public static void Main()
    {
        var b0 = new B<C>();
        b0.Foo(null);
        System.Console.WriteLine(b0.Value == null);
        System.Console.WriteLine(b0.Array == null);

        var b1 = new B<D>();
        b1.Foo(null);
        System.Console.WriteLine(b1.Value == null);
        System.Console.WriteLine(b1.Array == null);
    }
}