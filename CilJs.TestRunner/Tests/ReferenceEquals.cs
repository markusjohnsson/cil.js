
class A { }

struct B { }

class C<T>
{
    public static T t;

    public static void CheckEquals(T t2)
    {
        System.Console.WriteLine(ReferenceEquals(t, t2));
    }
}

public class Program
{
    private static object a;
    private static B b;
    private static object b4;

    public static void Main()
    {
        System.Console.WriteLine(ReferenceEquals(a, null));
        System.Console.WriteLine(ReferenceEquals(b, null));
        System.Console.WriteLine(ReferenceEquals(b4, null));
        System.Console.WriteLine(ReferenceEquals(null, a));
        System.Console.WriteLine(ReferenceEquals(null, b));
        System.Console.WriteLine(ReferenceEquals(null, b4));

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
        System.Console.WriteLine(ReferenceEquals(b6, b4));
        System.Console.WriteLine(ReferenceEquals(b2, b2));
        System.Console.WriteLine(ReferenceEquals(b2, null));

        C<A>.t = a2;
        C<A>.CheckEquals(a2);
        C<A>.CheckEquals(new A());

        C<B>.t = b2;
        C<B>.CheckEquals(b2);
        C<B>.CheckEquals(new B());
    }

    private static void CheckEquals(A a2)
    {
        System.Console.WriteLine(ReferenceEquals(a, a2));
        System.Console.WriteLine(ReferenceEquals(a2, a));
        System.Console.WriteLine(ReferenceEquals(a2, null));
        System.Console.WriteLine(ReferenceEquals(null, a2));
    }

    private static void CheckEquals(B b2, object b3)
    {
        System.Console.WriteLine(ReferenceEquals(b, b2));
        System.Console.WriteLine(ReferenceEquals(b, b3));
        System.Console.WriteLine(ReferenceEquals(b4, b2));
        System.Console.WriteLine(ReferenceEquals(b4, b3));

        System.Console.WriteLine(ReferenceEquals(null, b2));
        System.Console.WriteLine(ReferenceEquals(null, b3));
        System.Console.WriteLine(ReferenceEquals(b2, null));
        System.Console.WriteLine(ReferenceEquals(b3, null));
        System.Console.WriteLine(ReferenceEquals(b4, b2));
        System.Console.WriteLine(ReferenceEquals(b4, b3));
    }
}