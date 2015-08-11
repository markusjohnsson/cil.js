
enum X 
{
    A, B, C
}

public class Program
{
    public static void Main()
    {
        X x = default(X);
        System.Console.WriteLine((int)x);
        x = X.A;
        System.Console.WriteLine((int)x);
        x = X.B;
        System.Console.WriteLine((int)x);
        x = X.C;
        System.Console.WriteLine((int)x);

    }
}
