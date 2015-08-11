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
        System.Console.WriteLine((int)Math.Sqrt(p) == 1);
        System.Console.WriteLine((int)Math.Sqrt(p) == 2);
        System.Console.WriteLine((int)Math.Sqrt(p) == 3);
    }
}
