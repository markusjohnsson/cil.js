

class A
{
    public string X { get; set; }
}

class Program
{
    public static void Main()
    {
        System.Console.WriteLine(GetString());

        var a = new A();
        a.X = "300";

        System.Console.WriteLine(a.X);

        System.Console.WriteLine(IsString(a.X));

        System.Console.WriteLine("123456789".Length);
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
