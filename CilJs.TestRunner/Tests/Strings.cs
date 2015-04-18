

class A
{
    public string X { get; set; }
}

class Program
{
    public static void Main()
    {
        TestLog.Log(GetString());

        var a = new A();
        a.X = "300";

        TestLog.Log(a.X);

        TestLog.Log(IsString(a.X));

        TestLog.Log("123456789".Length);
    }

    public static string IsString(object o)
    {
        return o is string ? "true" : "false";
    }

    public static string GetString()
    {
        return "Hello"; 
    }
}
