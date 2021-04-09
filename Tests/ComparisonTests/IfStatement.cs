

class Program
{
    public static void Main()
    {
        X(0);
        X(100);
        X(1000);
    }

    public static void X(int n)
    {
        if (n > 100)
        {
            System.Console.WriteLine("big");
        }
    }
}
