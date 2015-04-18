
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
        TestLog.Log(x.X);
        x.Reset();
        TestLog.Log(x.X);

        A<B> y = new A<B>();
        y.X = new B();
        TestLog.Log(y.X == null ? "true" : "false");
        y.Reset();
        TestLog.Log(y.X == null ? "true" : "false");
    }
}

