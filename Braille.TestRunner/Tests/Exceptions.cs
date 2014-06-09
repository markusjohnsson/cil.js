
using System;

class A : Exception
{ 
}

class B : Exception
{ 
}

class C : B
{ 
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
        catch (C)
        {
            TestLog.Log("C");
        }
        catch (B)
        {
            TestLog.Log("B");
        }
        catch (A)
        {
            TestLog.Log("A");
        }
        finally
        {
            TestLog.Log("Finally");
        }
    }
}
