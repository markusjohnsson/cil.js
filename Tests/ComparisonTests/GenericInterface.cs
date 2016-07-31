interface I<T>
{
    void NonGeneric();
    void GenericArg(T t);
    T GenericReturn();
}

class A : I<int>
{
    public void NonGeneric()
    {
        System.Console.WriteLine("A.NonGeneric");
    }

    int field;

    public void GenericArg(int t)
    {
        System.Console.WriteLine("A.GenericArg");
        field = t;
    }

    public int GenericReturn()
    {
        System.Console.WriteLine("A.GenericReturn");
        return field;
    }
}

class B<T> : I<T>
{
    public void NonGeneric()
    {
        System.Console.WriteLine("B.NonGeneric");   
    }

    T field;

    public void GenericArg(T t)
    {
        System.Console.WriteLine("B.NonGeneric");
        field = t;
    }

    public T GenericReturn()
    {
        System.Console.WriteLine("B.GenericReturn");
        return field;
    }
}

class Program
{
    public static void Main()
    {
        Run(new A(), 12345);
        Run(new B<string>(), "Hello");
    }

    public static void Run<T>(I<T> it, T t)
    {
        it.NonGeneric();
        it.GenericArg(t);
        System.Console.WriteLine(it.GenericReturn());
    }
}