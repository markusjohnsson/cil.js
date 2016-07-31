
public class X
{
    public virtual void M()
    {
        System.Console.WriteLine("a");
    }
}

public class Y: X
{
    public override void M()
    {
        System.Console.WriteLine("b");
    }
}

public class Z: Y
{
    public new void M()
    {
        System.Console.WriteLine("c");
    }
}

public class Program
{
    public static void Main()
    {
        var z = new Z();
        z.M();

        Y y = z;
        y.M();

        X x = z;
        x.M();
    }
}
