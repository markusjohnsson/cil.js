
using System;

class A : Exception
{
    public A() : base("Exception A") { }
}

class B : Exception
{
    public B() : base("Exception B") { }
    protected B(string msg) : base(msg) { }
}

class C : B
{
    public C() : base("Exception C") { }
}

public class Program
{
    public static void Main()
    {
        TestTryCatch(new A());
        TestTryCatch(new B());
        TestTryCatch(new C());
    }

    private static void TestTryCatch(Exception e)
    {
        try
        {
            throw e;
        }
        catch (C c)
        {
            TestLog.Log(c.Message);
        }
        catch (B b)
        {
            TestLog.Log(b.Message);
        }
        catch (A a)
        {
            TestLog.Log(a.Message);
        }
        finally
        {
            TestLog.Log("Finally");
        }
    }
}
