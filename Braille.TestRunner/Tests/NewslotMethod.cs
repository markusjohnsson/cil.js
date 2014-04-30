
public class X
{
    public virtual void M()
    {
        TestLog.Log("a");
    }
}

public class Y: X
{
    public override void M()
    {
        TestLog.Log("b");
    }
}

public class Z: Y
{
    public new void M()
    {
        TestLog.Log("c");
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
