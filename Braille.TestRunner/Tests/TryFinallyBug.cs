using System;
class Program
{
    public static void Main()
    {
        try
        {
            TestLog.Log("Try 1");

            try
            {
                TestLog.Log("Try 2");
                throw new Exception();
            }
            finally
            {
                TestLog.Log("Finally with branching");

                if (What())
                    TestLog.Log("In branch");

                TestLog.Log("After branch");
            }
            TestLog.Log("After Finally");
        }
        catch (Exception e)
        {
            TestLog.Log("Catch");
        }
    }

    public static bool What() { return true; }
}