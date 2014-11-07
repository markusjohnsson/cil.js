
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
    public static void Main()
    {
        TestLog.Log(A<E>.Instance.GetType().Name);
        TestLog.Log(A<D>.Instance.GetType().Name);
    }
}