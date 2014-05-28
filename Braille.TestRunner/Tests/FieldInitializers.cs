
class Program
{
    public static int X = 123;
    public int Y = 321;

    public static void Main()
    {
        TestLog.Log(X);
        TestLog.Log(new Program().Y);
    }
}