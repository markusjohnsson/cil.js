

class A
{
    public void Callee()
    {
        TestLog.Log("Called!");
    }
}

class Program
{
    public static void Main()
    {
        var a = new A();
        a.Callee();
    }
}