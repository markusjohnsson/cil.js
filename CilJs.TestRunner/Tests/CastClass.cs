
class A { }
class B : A { }
class C { }

class Program
{
    public static void Main()
    {
        Test<A>();
        Test<B>();
        Test<C>();
    }

    private static void Test<T>()
    {
        Cast<T>(new A());
        Cast<T>(new B());
        Cast<T>(new C());
    }

    private static void Cast<T>(object a)
    {
        try
        {
            object result = (T)a;
            TestLog.Log("Success");
        }
        catch
        {
            TestLog.Log("Failure");
        }
    }
}