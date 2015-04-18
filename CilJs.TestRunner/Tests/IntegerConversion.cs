using System;

class Program
{
    public static void Main()
    {
        Test(2);
        Test(3);
        Test(4);
        Test(8);
    }

    private static void Test(double p)
    {
        TestLog.Log((int)Math.Sqrt(p) == 1);
        TestLog.Log((int)Math.Sqrt(p) == 2);
        TestLog.Log((int)Math.Sqrt(p) == 3);
    }
}
