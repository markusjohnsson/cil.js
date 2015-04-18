
using System;

class A<T>
{
    public delegate TResult D<TResult>(T input);

    public void X()
    {
        Z(Y);
    }

    static Type Y(T input)
    {
        return typeof(T);
    }

    void Z(D<Type> callback)
    {
        TestLog.Log(callback(default(T)).Name);
    }
}


class Program
{
    public static void Main()
    {
        var a = new A<string>();
        a.X();
    }
}