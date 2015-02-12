
public class A
{
    public virtual void M()
    {
        TestLog.Log("A");
    }
}

public class B: A
{
    public override void M()
    {
        TestLog.Log("B");
    }
}

public class Program
{
    public static void X<T>(T t) where T: A
    {
        t.M();
    }

    public static void Main()
    {
        X(new A());
        X(new B());
        X<A>(new B());
    }
}
