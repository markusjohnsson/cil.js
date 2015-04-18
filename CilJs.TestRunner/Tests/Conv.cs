
class Program
{
    public static void Test(long l)
    {
        TestLog.Log((int)l);
        TestLog.Log((uint)l);
        TestLog.Log((long)l);
        TestLog.Log((ulong)l);
        TestLog.Log((double)l);
    }

    public static void Test(ulong l)
    {
        TestLog.Log((int)l);
        TestLog.Log((uint)l);
        TestLog.Log((long)l);
        TestLog.Log((ulong)l);
        TestLog.Log((double)l);
    }

    public static void Test(int i)
    {
        TestLog.Log((int)i);
        TestLog.Log((uint)i);
        TestLog.Log((long)i);
        TestLog.Log((ulong)i);
        TestLog.Log((double)i);
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