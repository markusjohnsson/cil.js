
interface I<T> 
{
    void Print();
}

class A {}
class B {}

class C : I<A>, I<B> 
{
    void I<A>.Print()
    {
        TestLog.Log("A");
    }

    void I<B>.Print()
    {
        TestLog.Log("B");
    }
}

class Program
{
    public static void Main()
    {
        var c = new C();
        PrintA(c);
        PrintB(c);
    }

    private static void PrintA(I<A> c)
    {
        c.Print();
    }

    private static void PrintB(I<B> c)
    {
        c.Print();
    }
}
