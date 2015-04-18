
class A { }

class Program
{
    public static void Main() 
    {
        var x = new A();
        var hc = x.GetHashCode();
        TestLog.Log(hc != 0);
        TestLog.Log(hc == x.GetHashCode());

        var y = new A();
        TestLog.Log(y.GetHashCode() == y.GetHashCode());
        TestLog.Log(y.GetHashCode() != x.GetHashCode());

        TestString("hello");
    }

    public static void TestString(string s)
    {
        var a = s + " world";
        var b = "hello world";

        TestLog.Log(a.GetHashCode() == b.GetHashCode());
        TestLog.Log(a.GetHashCode() == s.GetHashCode());
    }
}