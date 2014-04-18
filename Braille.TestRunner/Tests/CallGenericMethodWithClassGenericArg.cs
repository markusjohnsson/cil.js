
// crashes translator

public class E
{
    public static void Any<T>()
    {
    }
}

public class A<T>
{
    public void M()
    {
        E.Any<T>();
    }
}

public class Program
{
    public static void Main()
    { 
    }
}