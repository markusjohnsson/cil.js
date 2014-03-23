

class A<T>
{
    public T Prop { get; set; }
}

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
        // should be simplified as soon as we can have corlib types as generic args.

        var i = new A<IntWrapper>();
        i.Prop = new IntWrapper { Value = 123 };

        var s = new A<StringWrapper>();
        s.Prop = new StringWrapper { Value = "Hello" };

        TestLog.Log(i.Prop.Value);
        TestLog.Log(s.Prop.Value);
    }
}