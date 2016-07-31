
class Program
{
    public static void Test(long l)
    {
        System.Console.WriteLine((int)l);
        System.Console.WriteLine((uint)l);
        System.Console.WriteLine((long)l);
        System.Console.WriteLine((ulong)l);
        System.Console.WriteLine((double)l);
    }

    public static void Test(ulong l)
    {
        System.Console.WriteLine((int)l);
        System.Console.WriteLine((uint)l);
        System.Console.WriteLine((long)l);
        System.Console.WriteLine((ulong)l);
        System.Console.WriteLine((double)l);
    }

    public static void Test(int i)
    {
        System.Console.WriteLine((int)i);
        System.Console.WriteLine((uint)i);
        System.Console.WriteLine((long)i);
        System.Console.WriteLine((ulong)i);
        System.Console.WriteLine((double)i);
    }

    public static void Main()
    {
        Test(1L);
        Test(-1L);
        Test(1UL);
        //var x = -1L;
        //Test((ulong)x);    // <---- only thing wrong here is formatting..
        Test(1);
        Test(-1);
    }
}