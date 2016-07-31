
interface I
{
    void Foo();
}

struct S : I
{
    public void Foo() { System.Console.WriteLine("Foo"); }
}

public class Program
{
    public static void Main()
    {
        S s = new S();
        I i = s;
        Run(i);
    }

    private static void Run(I i)
    {
        i.Foo();
    }
}
