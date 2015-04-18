
class A { }

struct B { }

class C<T>
{
    public static T t;

    public static void CheckEquals(T t2)
    {
        TestLog.Log(ReferenceEquals(t, t2));
    }
}

public class Program
{
    private static object a;
    private static B b;
    private static object b4;

    public static void Main()
    {
        TestLog.Log(ReferenceEquals(a, null));
        TestLog.Log(ReferenceEquals(b, null));
        TestLog.Log(ReferenceEquals(b4, null));
        TestLog.Log(ReferenceEquals(null, a));
        TestLog.Log(ReferenceEquals(null, b));
        TestLog.Log(ReferenceEquals(null, b4));

        var a2 = new A();
        a = a2;
        CheckEquals(a2);
        CheckEquals(new A());

        var b2 = new B();
        b = b2;
        b4 = b2;
        CheckEquals(b2, b2);
        var b5 = new B();
        CheckEquals(b5, b5);

        object b6 = b4;
        TestLog.Log(ReferenceEquals(b6, b4));
        TestLog.Log(ReferenceEquals(b2, b2));
        TestLog.Log(ReferenceEquals(b2, null));

        C<A>.t = a2;
        C<A>.CheckEquals(a2);
        C<A>.CheckEquals(new A());

        C<B>.t = b2;
        C<B>.CheckEquals(b2);
        C<B>.CheckEquals(new B());
    }

    private static void CheckEquals(A a2)
    {
        TestLog.Log(ReferenceEquals(a, a2));
        TestLog.Log(ReferenceEquals(a2, a));
        TestLog.Log(ReferenceEquals(a2, null));
        TestLog.Log(ReferenceEquals(null, a2));
    }

    private static void CheckEquals(B b2, object b3)
    {
        TestLog.Log(ReferenceEquals(b, b2));
        TestLog.Log(ReferenceEquals(b, b3));
        TestLog.Log(ReferenceEquals(b4, b2));
        TestLog.Log(ReferenceEquals(b4, b3));

        TestLog.Log(ReferenceEquals(null, b2));
        TestLog.Log(ReferenceEquals(null, b3));
        TestLog.Log(ReferenceEquals(b2, null));
        TestLog.Log(ReferenceEquals(b3, null));
        TestLog.Log(ReferenceEquals(b4, b2));
        TestLog.Log(ReferenceEquals(b4, b3));
    }
}