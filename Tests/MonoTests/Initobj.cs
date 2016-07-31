

public class A { }

public class Program
{
    public static T CreateDefault<T>()
    {
        return default(T);
    }

    public static void Main()
    {
        System.Console.WriteLine(default(int));
        System.Console.WriteLine(default(string));
        System.Console.WriteLine(default(A));
    }
}