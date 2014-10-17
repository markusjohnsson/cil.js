using System;

class A { }

class B : A, I2 { }

class X<T>: I3<T> { }

interface I { }
interface I2 : I { }
interface I3<T>: I { }

class Program
{
    public static void Main()
    {

        TestLog.Log(typeof(A).Name);
        TestLog.Log(typeof(int).Name);
        TestLog.Log(typeof(string).Name);
        TestLog.Log(typeof(bool).Name);

        TestLog.Log(typeof(A).FullName);
        TestLog.Log(typeof(int).FullName);
        TestLog.Log(typeof(string).FullName);
        TestLog.Log(typeof(bool).FullName);

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

        TestLog.Log(typeof(X<>).MakeGenericType(new[] { typeof(A) }).Equals(typeof(X<A>)));

        TestLog.Log(typeof(object).BaseType == null);
        TestLog.Log(typeof(A).BaseType.Equals(typeof(object)));
        TestLog.Log(typeof(A).BaseType.Equals(typeof(B)));
        TestLog.Log(typeof(B).BaseType.Equals(typeof(A)));

        TestLog.Log(IsAssignableFrom(typeof(B), typeof(A)));
        TestLog.Log(IsAssignableFrom(typeof(B), typeof(B)));
        TestLog.Log(IsAssignableFrom(typeof(A), typeof(B)));
        TestLog.Log(IsAssignableFrom(typeof(A), typeof(A)));

        TestLog.Log(IsAssignableFrom(typeof(A), typeof(I2)));
        TestLog.Log(IsAssignableFrom(typeof(B), typeof(I2)));
        TestLog.Log(IsAssignableFrom(typeof(A), typeof(I)));
        TestLog.Log(IsAssignableFrom(typeof(B), typeof(I)));

        TestLog.Log(IsAssignableFrom(typeof(I2), typeof(I2)));
        TestLog.Log(IsAssignableFrom(typeof(I), typeof(I2)));
        TestLog.Log(IsAssignableFrom(typeof(I2), typeof(B)));
        TestLog.Log(IsAssignableFrom(typeof(I), typeof(B)));

        TestLog.Log(IsAssignableFrom(typeof(I3<int>), typeof(X<int>)));
        TestLog.Log(IsAssignableFrom(typeof(I), typeof(X<int>)));
        TestLog.Log(IsAssignableFrom(typeof(I2), typeof(X<int>)));
        TestLog.Log(IsAssignableFrom(typeof(I), typeof(I3<int>)));

    }

    public static bool IsAssignableFrom(Type a, Type b)
    {
        return a.IsAssignableFrom(b);
    }
}
