
struct A
{
    public int Value;
}

class Program
{
    public static void Main()
    {
        //A a = new A();
        //a.Value = 123456789;

        //Print(a);
        //Mutate(a);
        //Print(a);
    }

    private static void Mutate(A a)
    {
        a.Value = 999;
        Print(a);
    }

    private static void Print(A a)
    {
        TestLog.Log(a.Value);
    }
}
