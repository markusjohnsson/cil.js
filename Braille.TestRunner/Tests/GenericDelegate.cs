
delegate TResult MFunc<T, TResult>(T t);

class Program
{
    public static void Main()
    {
        CallDelegate(i => "Result");
    }

    public static void CallDelegate(MFunc<int, string> a)
    {
        TestLog.Log(a(123));
    }
}
