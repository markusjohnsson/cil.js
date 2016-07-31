
class A { }

class Program
{
    public static void Main() 
    {
        var x = new A();
        var hc = x.GetHashCode();
        System.Console.WriteLine(hc != 0);
        System.Console.WriteLine(hc == x.GetHashCode());

        var y = new A();
        System.Console.WriteLine(y.GetHashCode() == y.GetHashCode());
        System.Console.WriteLine(y.GetHashCode() != x.GetHashCode());

        TestString("hello");
    }

    public static void TestString(string s)
    {
        var a = s + " world";
        var b = "hello world";

        System.Console.WriteLine(a.GetHashCode() == b.GetHashCode());
        System.Console.WriteLine(a.GetHashCode() == s.GetHashCode());
    }
}