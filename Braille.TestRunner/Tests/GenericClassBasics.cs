

class A<T>
{
    public T Prop { get; set; }
}

class Program
{
    public static void Main()
    {
        var i = new A<int>();
        i.Prop = 123;

        var s = new A<string>();
        s.Prop = "Hello";

        TestLog.Log(i.Prop);
        TestLog.Log(s.Prop);
    }
}