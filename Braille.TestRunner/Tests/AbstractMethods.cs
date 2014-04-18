
abstract class A 
{
    public abstract void X();
}

class B : A 
{
    public override void X()
    {
        TestLog.Log("B.X");
    }
}

class C : A
{
    public override void X()
    {
        TestLog.Log("C.X");
    }
}

class Program
{
    public static void Main()
    {
        InvokeX(new B());
        InvokeX(new C());
    }

    private static void InvokeX(A a)
    {
        a.X();
    }
}