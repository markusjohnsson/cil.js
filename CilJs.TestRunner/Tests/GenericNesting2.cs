public class A<T>
{
    public class B
    {
        public class C
        {
            public void Foo(T x)
            {
                TestLog.Log(x);
                TestLog.Log(x.GetType().FullName);
            }

            public static void Bar(T x)
            {
                TestLog.Log(x);
                TestLog.Log(x.GetType().FullName);
            }

            public static void Baz<T2>(T x, T2 y)
            {
                TestLog.Log(x);
                TestLog.Log(y);
                TestLog.Log(x.GetType().FullName);
                TestLog.Log(y.GetType().FullName);
            }

            public void Buz<T2>(T x, T2 y)
            {
                TestLog.Log(x);
                TestLog.Log(y);
                TestLog.Log(x.GetType().FullName);
                TestLog.Log(y.GetType().FullName);
            }
        }
    }
}

class Program
{
    public static void Main()
    {
        (new A<int>.B.C()).Foo(123);
        (new A<string>.B.C()).Foo("A");

        A<int>.B.C.Bar(123);
        A<string>.B.C.Bar("B");

        A<int>.B.C.Baz(123, "C");

        (new A<string>.B.C()).Buz("C", 321);
    }
}