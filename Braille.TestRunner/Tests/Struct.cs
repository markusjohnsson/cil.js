
struct S
{
    public int X;
    public int Y;
}

public class Program
{
    public static void Main()
    {
        var s = new S();
        TestLog.Log(s.X);
        TestLog.Log(s.Y);
    }
}