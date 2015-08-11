

struct A
{
    public int X;
}

public class Program
{
    public static void Main()
    {
        A[] a = new A[1];

        Populate(a);

        Print(a);

        PrintAsObject(a);
    }

    private static void PrintAsObject(object o)
    {
        System.Console.WriteLine(((A) ((A[]) o)[0]).X);
    }

    private static void Print(A[] a)
    {
        System.Console.WriteLine(a[0].X);
    }

    private static void Populate(A[] a)
    {
        a[0] = new A {X = 123};
    }
}
