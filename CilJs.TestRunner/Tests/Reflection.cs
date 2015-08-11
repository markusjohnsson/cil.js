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

        System.Console.WriteLine(typeof(A).Name);
        System.Console.WriteLine(typeof(int).Name);
        System.Console.WriteLine(typeof(string).Name);
        System.Console.WriteLine(typeof(bool).Name);

        System.Console.WriteLine(typeof(A).FullName);
        System.Console.WriteLine(typeof(int).FullName);
        System.Console.WriteLine(typeof(string).FullName);
        System.Console.WriteLine(typeof(bool).FullName);

        System.Console.WriteLine(typeof(A).FullName);
        System.Console.WriteLine(new A().GetType().FullName);
        System.Console.WriteLine(new A().GetType().Equals(typeof(A)));
        System.Console.WriteLine(new A().GetType().Equals(typeof(string)));
        System.Console.WriteLine("".GetType().Equals(typeof(string)));
        System.Console.WriteLine("".GetType().Equals(typeof(A)));
        System.Console.WriteLine(1.GetType().Equals(typeof(A)));
        System.Console.WriteLine(1.GetType().Equals(typeof(int)));
        System.Console.WriteLine(1.GetType().FullName);

        System.Console.WriteLine(typeof(A).AssemblyQualifiedName.Replace(".clr", ".ciljs"));
        System.Console.WriteLine(typeof(X<A>).FullName.Replace(".clr", ".ciljs"));
        System.Console.WriteLine(new X<A>().GetType().FullName.Replace(".clr", ".ciljs"));
        System.Console.WriteLine(new X<A>().GetType().Equals(typeof(X<>)));
        System.Console.WriteLine(new X<A>().GetType().Equals(typeof(X<B>)));
        System.Console.WriteLine("".GetType().Equals(typeof(X<>)));

        System.Console.WriteLine(typeof(X<>).MakeGenericType(new[] { typeof(A) }).Equals(typeof(X<A>)));

        System.Console.WriteLine(typeof(object).BaseType == null);
        System.Console.WriteLine(typeof(A).BaseType.Equals(typeof(object)));
        System.Console.WriteLine(typeof(A).BaseType.Equals(typeof(B)));
        System.Console.WriteLine(typeof(B).BaseType.Equals(typeof(A)));

        System.Console.WriteLine(IsAssignableFrom(typeof(B), typeof(A)));
        System.Console.WriteLine(IsAssignableFrom(typeof(B), typeof(B)));
        System.Console.WriteLine(IsAssignableFrom(typeof(A), typeof(B)));
        System.Console.WriteLine(IsAssignableFrom(typeof(A), typeof(A)));

        System.Console.WriteLine(IsAssignableFrom(typeof(A), typeof(I2)));
        System.Console.WriteLine(IsAssignableFrom(typeof(B), typeof(I2)));
        System.Console.WriteLine(IsAssignableFrom(typeof(A), typeof(I)));
        System.Console.WriteLine(IsAssignableFrom(typeof(B), typeof(I)));

        System.Console.WriteLine(IsAssignableFrom(typeof(I2), typeof(I2)));
        System.Console.WriteLine(IsAssignableFrom(typeof(I), typeof(I2)));
        System.Console.WriteLine(IsAssignableFrom(typeof(I2), typeof(B)));
        System.Console.WriteLine(IsAssignableFrom(typeof(I), typeof(B)));

        System.Console.WriteLine(IsAssignableFrom(typeof(I3<int>), typeof(X<int>)));
        System.Console.WriteLine(IsAssignableFrom(typeof(I), typeof(X<int>)));
        System.Console.WriteLine(IsAssignableFrom(typeof(I2), typeof(X<int>)));
        System.Console.WriteLine(IsAssignableFrom(typeof(I), typeof(I3<int>)));

    }

    public static bool IsAssignableFrom(Type a, Type b)
    {
        return a.IsAssignableFrom(b);
    }
}
