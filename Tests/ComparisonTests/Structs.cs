
struct A
{
    public int Value;
}

class Program
{
    public static void Main()
    {
        A a = new A();
        a.Value = 123456789;

        Print(a);
        Mutate(a);
        Print(a);
        MutateBoxed(a);
        Print(a);
        MutateGeneric(a);
        Print(a);
    }

    private static void Mutate(A a)
    {
        a.Value = 111;
        A a2 = a;
        a2.Value = 222;
        Print(a);
        Print(a2);
    }
    
    private static void MutateBoxed(object o)
    {
        A a = (A)o;
        a.Value = 333;
        A a2 = (A)o;
        a2.Value = 444;
        Print(a);
        Print(a2);
    }

    private static void MutateGeneric<T>(T t)
    {
        A a = (A)(object)t;
        a.Value = 555;
        A a2 = (A)(object)t;
        a2.Value = 666;
        Print(a);
        Print(a2);
    }

    static A sfield;

    private static void MutateField(A a)
    {
        a.Value = 777;
        sfield = a;
        sfield.Value = 888;
        Print(a);
        Print(sfield);
    }

    private static void Print(A a)
    {
        System.Console.WriteLine(a.Value);
    }
}
