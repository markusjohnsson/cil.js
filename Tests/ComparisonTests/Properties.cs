
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
        System.Console.WriteLine(x.Y);
    }
}
