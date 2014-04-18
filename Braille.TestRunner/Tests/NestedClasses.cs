
public class A
{
    public class B
    {
        public static void M()
        {
            TestLog.Log("A.B.M");
        }

        public void X()
        {
            TestLog.Log("A.B.X");
        }
    }
}

public class Program
{
    public static void Main()
    {
        A.B.M();

        var b = new A.B();
        b.X();
    }
}

