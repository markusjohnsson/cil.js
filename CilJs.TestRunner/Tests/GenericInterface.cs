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
        TestLog.Log("A.NonGeneric");
    }

    int field;

    public void GenericArg(int t)
    {
        TestLog.Log("A.GenericArg");
        field = t;
    }

    public int GenericReturn()
    {
        TestLog.Log("A.GenericReturn");
        return field;
    }
}

class B<T> : I<T>
{
    public void NonGeneric()
    {
        TestLog.Log("B.NonGeneric");   
    }

    T field;

    public void GenericArg(T t)
    {
        TestLog.Log("B.NonGeneric");
        field = t;
    }

    public T GenericReturn()
    {
        TestLog.Log("B.GenericReturn");
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
        TestLog.Log(it.GenericReturn());
    }
}