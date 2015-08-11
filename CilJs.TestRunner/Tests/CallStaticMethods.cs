
class Program
{
    public static void Callee()
    {
        System.Console.WriteLine("Called!");
    }

    public static void Main()
    {
        Callee();
    }
}