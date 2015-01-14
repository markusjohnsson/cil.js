
class A { }
class B { }
class C { }
class C<T> : C { }
class D : C<A> { }
class E : C<B> { }

class Program
{
    public static void Main()
    {
        TestCreate<A>();

        Test(new D());
        Test(new E());

        Test<A>(new D());
        Test<B>(new E());
    }

    private static void TestCreate<T>()
    {
        C<T> c = (C<T>)(object)new D();
        Test(c);
    }

    private static void Test(C c)
    {
        TestLog.Log(c is C<A>);
        TestLog.Log(c is C<B>);
        TestLog.Log(c is C);
    }

    private static void Test<T>(C<T> c)
    {
        TestLog.Log(c is C<A>);
        TestLog.Log(c is C<B>);
        TestLog.Log(c is C<T>);
        TestLog.Log(c is C);
    }
}