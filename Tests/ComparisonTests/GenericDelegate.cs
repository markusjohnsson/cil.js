
delegate TResult MFunc<T, TResult>(T t);

class IntWrapper
{
    public int Value;
}

class StringWrapper
{
    public string Value;
}

class Program
{
    public static void Main()
    {
        CallDelegate(i => new StringWrapper { Value = "Result" });
    }

    public static void CallDelegate(MFunc<IntWrapper, StringWrapper> a)
    {
        System.Console.WriteLine(a(new IntWrapper { Value = 123 }).Value);
    }
}
