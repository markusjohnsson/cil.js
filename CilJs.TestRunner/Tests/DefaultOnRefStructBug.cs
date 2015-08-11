
struct A<T>
{
    public T X;

    public void Reset()
    {
        X = default(T);
    }
}

class B { }

public class Program
{
    public static void Main()
    {
        A<int> x = new A<int>();
        x.X = 123;
        System.Console.WriteLine(x.X);
        x.Reset();
        System.Console.WriteLine(x.X);

        A<B> y = new A<B>();
        y.X = new B();
        System.Console.WriteLine(y.X == null ? "true" : "false");
        y.Reset();
        System.Console.WriteLine(y.X == null ? "true" : "false");
    }
}

