
class Program
{
    public static int X = 123;
    public int Y = 321;

    public static void Main()
    {
        System.Console.WriteLine(X);
        System.Console.WriteLine(new Program().Y);
    }
}