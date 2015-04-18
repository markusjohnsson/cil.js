
class X
{
	public int Y { get; set; } 
}

class Program
{
    public static void Main()
    {
        var x = new X();
        x.Y = 123;
        TestLog.Log(x.Y);
    }
}
