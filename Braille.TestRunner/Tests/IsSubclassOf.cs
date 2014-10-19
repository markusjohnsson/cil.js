
using System;

class A { }
interface I { }

class B : A, I { }
class C { }
class D : B { }

public class Program
{
    public static void Main()
    {
        //Test(new A());
        //Test(new B());
        //Test(new C());
        //Test(new D());
        //Test(123);
        //Test(-555);
        Test(new int[0]);
        //Test(new uint[0]);
        //Test(new object[0]);
        //Test(new A[0]);
        //Test(new B[0]);
        //Test(new C[0]);
        //Test(new D[0]);
        //Test(new I[0]);
    }

    public static void Test(object o)
    {
        TestLog.Log(o.GetType().Name);
        TestLog.Log(o.GetType().IsSubclassOf(typeof(int)));
        TestLog.Log(o.GetType().IsSubclassOf(typeof(object)));
        TestLog.Log(o.GetType().IsSubclassOf(typeof(ValueType)));
        TestLog.Log(o.GetType().IsSubclassOf(typeof(A)));
        TestLog.Log(o.GetType().IsSubclassOf(typeof(B)));
        TestLog.Log(o.GetType().IsSubclassOf(typeof(C)));
        TestLog.Log(o.GetType().IsSubclassOf(typeof(D)));
        TestLog.Log(o.GetType().IsSubclassOf(typeof(I)));

        TestLog.Log(o.GetType().IsSubclassOf(typeof(Array)));

        TestLog.Log(o.GetType().IsSubclassOf(typeof(int[])));
        TestLog.Log(o.GetType().IsSubclassOf(typeof(object[])));
        TestLog.Log(o.GetType().IsSubclassOf(typeof(ValueType[])));
        TestLog.Log(o.GetType().IsSubclassOf(typeof(A[])));
        TestLog.Log(o.GetType().IsSubclassOf(typeof(B[])));
        TestLog.Log(o.GetType().IsSubclassOf(typeof(C[])));
        TestLog.Log(o.GetType().IsSubclassOf(typeof(D[])));
        TestLog.Log(o.GetType().IsSubclassOf(typeof(I[])));
    }
}
