
public class Program
{
    public static void Main()
    {
        Neg(123);
        Neg(-123);
        Neg(444123);
        Neg(-518495);
        Neg(123d);
        Neg(-123d);
        Neg(444123d);
        Neg(-518495d);
    }

    private static void Neg(int p)
    {
        System.Console.WriteLine(-p);
    }

    private static void Neg(double p)
    {
        System.Console.WriteLine(-p);
    }
}
