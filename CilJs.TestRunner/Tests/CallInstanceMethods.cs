

class A
{
    public void Callee()
    {
        System.Console.WriteLine("Called!");
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