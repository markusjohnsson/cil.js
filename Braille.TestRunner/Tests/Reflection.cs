
class A { }

class B { }

class X<T> { }

class Program
{
    public static void Main()
    {
        TestLog.Log(typeof(A).FullName);
        TestLog.Log(new A().GetType().FullName);
        TestLog.Log(new A().GetType().Equals(typeof(A)));
        TestLog.Log(new A().GetType().Equals(typeof(string)));
        TestLog.Log("".GetType().Equals(typeof(string)));
        TestLog.Log("".GetType().Equals(typeof(A)));
        TestLog.Log(1.GetType().Equals(typeof(A)));
        TestLog.Log(1.GetType().Equals(typeof(int)));
        TestLog.Log(1.GetType().FullName);

        TestLog.Log(typeof(A).AssemblyQualifiedName.Replace(".clr", ".brl"));
        TestLog.Log(typeof(X<A>).FullName.Replace(".clr", ".brl"));
        TestLog.Log(new X<A>().GetType().FullName.Replace(".clr", ".brl"));
        TestLog.Log(new X<A>().GetType().Equals(typeof(X<>)));
        TestLog.Log(new X<A>().GetType().Equals(typeof(X<B>)));
        TestLog.Log("".GetType().Equals(typeof(X<>)));
    }
}
