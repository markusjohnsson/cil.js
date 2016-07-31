
delegate string Foo(int x);

class Program
{
    static string X(int y)
    {
        return "RESULT!";
    }

    static string Y(int y)
    {
        return "FOO!";
    }

    public static void Main()
    {
        Foo f = X;

        CallDelegate(f);

        System.Console.WriteLine("f, f");
        TestEquality(f, f);
        
        System.Console.WriteLine("f, X");
        TestEquality(f, X);

        System.Console.WriteLine("f, Y");
        TestEquality(f, Y);

        System.Console.WriteLine("f, null");
        TestEquality(f, null);

        System.Console.WriteLine("null, null");
        TestEquality(null, null);
    }

    private static void CallDelegate(Foo f)
    {
        System.Console.WriteLine(f(123));
    }

    private static void TestEquality(Foo f, Foo g)
    {
        System.Console.WriteLine(f == g);
        System.Console.WriteLine(f != g);
    }
}
