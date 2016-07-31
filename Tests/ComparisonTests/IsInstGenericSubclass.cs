
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
        Test1(null);
        Test2<A>(null);

        TestCreate<A>();

        Test1(new D());
        Test1(new E());

        Test2<A>(new D());
        Test2<B>(new E());
    }

    private static void TestCreate<T>()
    {
        C<T> c = (C<T>)(object)new D();
        Test1(c);
        Test2(c);
    }

    private static void Test1(C c)
    {
        System.Console.WriteLine(c is C<A>);
        System.Console.WriteLine(c is C<B>);
        System.Console.WriteLine(c is C);
    }

    private static void Test2<T>(C<T> c)
    {
        System.Console.WriteLine(c is C<A>);
        System.Console.WriteLine(c is C<B>);
        System.Console.WriteLine(c is C<T>);
        System.Console.WriteLine(c is C);
    }
}