
using System;
using System.Reflection;

class A { }
interface I { }

class B : A, I { }
class C { }
class D : B { }

public class Program
{
    public static void Main()
    {
        Test(new A());
        Test(new B());
        Test(new C());
        Test(new D());
        Test(123);
        Test(-555);
        Test(new int[0]);
        Test(new uint[0]);
        Test(new object[0]);
        Test(new A[0]);
        Test(new B[0]);
        Test(new C[0]);
        Test(new D[0]);
        Test(new I[0]);
    }

    public static void Test(object o)
    {
        System.Console.WriteLine(o.GetType().Name);
        System.Console.WriteLine(o.GetType().GetTypeInfo().IsSubclassOf(typeof(int)));
        System.Console.WriteLine(o.GetType().GetTypeInfo().IsSubclassOf(typeof(object)));
        System.Console.WriteLine(o.GetType().GetTypeInfo().IsSubclassOf(typeof(ValueType)));
        System.Console.WriteLine(o.GetType().GetTypeInfo().IsSubclassOf(typeof(A)));
        System.Console.WriteLine(o.GetType().GetTypeInfo().IsSubclassOf(typeof(B)));
        System.Console.WriteLine(o.GetType().GetTypeInfo().IsSubclassOf(typeof(C)));
        System.Console.WriteLine(o.GetType().GetTypeInfo().IsSubclassOf(typeof(D)));
        System.Console.WriteLine(o.GetType().GetTypeInfo().IsSubclassOf(typeof(I)));

        System.Console.WriteLine(o.GetType().GetTypeInfo().IsSubclassOf(typeof(Array)));

        System.Console.WriteLine(o.GetType().GetTypeInfo().IsSubclassOf(typeof(int[])));
        System.Console.WriteLine(o.GetType().GetTypeInfo().IsSubclassOf(typeof(object[])));
        System.Console.WriteLine(o.GetType().GetTypeInfo().IsSubclassOf(typeof(ValueType[])));
        System.Console.WriteLine(o.GetType().GetTypeInfo().IsSubclassOf(typeof(A[])));
        System.Console.WriteLine(o.GetType().GetTypeInfo().IsSubclassOf(typeof(B[])));
        System.Console.WriteLine(o.GetType().GetTypeInfo().IsSubclassOf(typeof(C[])));
        System.Console.WriteLine(o.GetType().GetTypeInfo().IsSubclassOf(typeof(D[])));
        System.Console.WriteLine(o.GetType().GetTypeInfo().IsSubclassOf(typeof(I[])));
    }
}
