
public class A
{
    public virtual void M()
    {
        System.Console.WriteLine("A");
    }
}

public class B: A
{
    public override void M()
    {
        System.Console.WriteLine("B");
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
