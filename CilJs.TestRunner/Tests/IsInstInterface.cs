
interface I1 { }
interface I2 { }
interface I3: I2 { }
class A { }
class B : A, I1, I2 { }
class C : A, I3 { }
class D : C, I2 { }

public class Program
{
    public static void Main()
    {
        TestImpl(new A());
        TestImpl(new B());
        TestImpl(new C());
        TestImpl(new D());
    }

    public static void TestImpl(object o)
    {
        TestLog.Log(o is I1 ? "true" : "false");
        TestLog.Log(o is I2 ? "true" : "false");
        TestLog.Log(o is I3 ? "true" : "false");
    }
}
