
class Program
{
    public static void Main()
    {
        Log("hello world");
        Log("xyzw");
        Log("1234");
    }

    private static void Log(string str)
    {
        System.Console.WriteLine(str[0]);
        System.Console.WriteLine(str[1]);
        System.Console.WriteLine(str[2]);
        System.Console.WriteLine(str[3]);
    }
}