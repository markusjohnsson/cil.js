
using System;

interface I<T> { }

class A<T> 
{
    public static A<T> Instance = typeof(I<T>).IsAssignableFrom(typeof(T)) ?
        (A<T>) Activator.CreateInstance(typeof(C<>).MakeGenericType(typeof(T))) :
        new B<T>();
}

class B<T> : A<T> { }
class C<T> : A<T> { }

class D : I<D> { }
class E { }

class Program
{
    public static bool IsA<T>(object e) 
    {
        return e is A<T>;
    }

    public static void Main()
    {
        TestLog.Log(IsA<D>(A<D>.Instance));

        TestLog.Log(A<E>.Instance.GetType().Name);
        TestLog.Log(A<D>.Instance.GetType().Name);

        
    }
}