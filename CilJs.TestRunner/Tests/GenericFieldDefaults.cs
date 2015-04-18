

class A<T>
{
    public T Value;
}

public class Program
{
    public static void Main()
    {
        var a = new A<object>();
        TestLog.Log(a.Value);

        var b = new A<int>();
        TestLog.Log(b.Value);
    }
}