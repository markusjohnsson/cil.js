

class A<T>
{
    public T Value;
}

public class Program
{
    public static void Main()
    {
        var a = new A<object>();
        System.Console.WriteLine(a.Value);

        var b = new A<int>();
        System.Console.WriteLine(b.Value);
    }
}