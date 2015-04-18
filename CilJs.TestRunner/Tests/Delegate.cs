
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

        TestLog.Log("f, f");
        TestEquality(f, f);
        
        TestLog.Log("f, X");
        TestEquality(f, X);

        TestLog.Log("f, Y");
        TestEquality(f, Y);

        TestLog.Log("f, null");
        TestEquality(f, null);

        TestLog.Log("null, null");
        TestEquality(null, null);
    }

    private static void CallDelegate(Foo f)
    {
        TestLog.Log(f(123));
    }

    private static void TestEquality(Foo f, Foo g)
    {
        TestLog.Log(f == g);
        TestLog.Log(f != g);
    }
}
