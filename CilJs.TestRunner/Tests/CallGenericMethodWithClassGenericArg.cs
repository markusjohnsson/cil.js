
// crashes translator

public class A { }
public class B { }

public class E
{
    public static void Any<T>(object o, T t)
    {
        Log<T>(o);
        Log<T>(t);
    }

    private static void Log<T>(object o)
    {
        System.Console.WriteLine(o is T);
    }
}

public class A<T>
{
    public void M(object o, T t)
    {
        E.Any<T>(o, t);
    }
}

public class Program
{
    public static void Main()
    {
        var a = new A<B>();
        a.M(new A(), new B());
        a.M(new B(), new B());
    }
}