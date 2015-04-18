
class Program
{
    public static void Main()
    {
        Log("hello world");
        Log("xyzw");
        Log("1234");
    }

    private static void Log(string str)
    {
        TestLog.Log(str[0]);
        TestLog.Log(str[1]);
        TestLog.Log(str[2]);
        TestLog.Log(str[3]);
    }
}