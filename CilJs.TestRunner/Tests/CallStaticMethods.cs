
class Program
{
    public static void Callee()
    {
        TestLog.Log("Called!");
    }

    public static void Main()
    {
        Callee();
    }
}