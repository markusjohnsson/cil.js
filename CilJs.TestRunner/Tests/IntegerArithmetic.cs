

class Program
{
    public static void Main()
    {
        X(0);
        X(1);
        X(2);
        X(3);
    }

    public static void X(int n)
    {
        TestLog.Log(n / 1);
        TestLog.Log(n / 2);
        TestLog.Log(n / 3); 
    }
}
