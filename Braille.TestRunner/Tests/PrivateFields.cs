
class A
{
    private int x;

    public int AX { get { return x; } set { x = value; }}
}

class B : A
{
    private int x;

    public int BX { get { return x; } set { x = value; } }
}

class Program
{
    public static void Main()
    {
        var a = new B();

        a.AX = 123;
        a.BX = 321;

        TestLog.Log(a.AX);
        TestLog.Log(a.BX);
    }
}
