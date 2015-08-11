
internal class Program
{
    public static void Cmp(string s)
    {
        System.Console.WriteLine(s == "Hello World");
        System.Console.WriteLine(s.Equals("Hello World"));
        System.Console.WriteLine("Hello World".Equals(s));
    }

    public static void Main()
    {
        Cmp("Hello World");
        Cmp("Hello, World");
        Cmp("Hello");
    }
}

