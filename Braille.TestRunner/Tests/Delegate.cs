
delegate string Foo(int x);

class Program
{
    static string X(int y)
    {
        return "RESULT!";
    }

    public static void Main()
    {
        Foo f = X;

        CallDelegate(f);
    }

    private static void CallDelegate(Foo f)
    {
        TestLog.Log(f(123));
    }
}
