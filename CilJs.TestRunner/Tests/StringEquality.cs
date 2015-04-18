
internal class Program
{
    public static void Cmp(string s)
    {
        TestLog.Log(s == "Hello World");
        TestLog.Log(s.Equals("Hello World"));
        TestLog.Log("Hello World".Equals(s));
    }

    public static void Main()
    {
        Cmp("Hello World");
        Cmp("Hello, World");
        Cmp("Hello");
    }
}

