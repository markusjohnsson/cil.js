
using System.Runtime.InteropServices;

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

public class C
{
    public class D
    {
        public class E
        {
            private static int y = 123;

            public void Y()
            {
                TestLog.Log("C.D.E.Y" + y++);
            }
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

        var e = new C.D.E();
        e.Y();
    }
}

