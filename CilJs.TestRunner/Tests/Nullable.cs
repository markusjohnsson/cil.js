

public struct A
{
    public int X;
}


public class Program
{
    public static void Main()
    {
        Print(null);
        Print(default(A?));
        Print(new A { X = 33 });
        Print(default(A));
        PrintObject(null);
        PrintObject(default(A?));
        PrintObject(new A { X = 33 });
        PrintObject(default(A));
    }

    private static void PrintObject(object o)
    {
        Print((A?)o);
    }

    private static void Print(A? a)
    {
        System.Console.WriteLine(a.HasValue ? "true" : "false");

        if (a != null)
            System.Console.WriteLine(a.Value.X);
    }
}