
interface I
{
    string GetValue();
}

struct A: I
{
    public int V;
    public string GetValue() { return V.ToString(); }
}

class B : I
{
    public string V;
    public string GetValue() { return V.ToString(); }
}

class Program
{
    public static void ObjectArray()
    {
        var o = new object[1];
        o.SetValue(1, 0);
        System.Console.WriteLine(o[0]);
        o.SetValue("test", 0);
        System.Console.WriteLine(o[0]);
        o.SetValue(null, 0);
        System.Console.WriteLine(o[0]);
    }

    public static void ValueTypeArray()
    {
        var o = new System.ValueType[1];
        o.SetValue(1, 0);
        System.Console.WriteLine(o[0]);
        o.SetValue(new A { V = 123 }, 0);
        System.Console.WriteLine(((A)o[0]).V);
        o.SetValue(null, 0);
        System.Console.WriteLine(o[0]);
    }

    public static void InterfaceArray()
    {
        var o = new I[1];
        o.SetValue(new A { V = 123 }, 0);
        System.Console.WriteLine(o[0].GetValue());
        o.SetValue(new B { V = "hello" }, 0);
        System.Console.WriteLine(o[0].GetValue());
        o.SetValue(null, 0);
        System.Console.WriteLine(o[0]);
    }

    public static void AArray()
    {
        var o = new A[1];
        o.SetValue(new A { V = 123 }, 0);
        System.Console.WriteLine(o[0].GetValue());
        o.SetValue(null, 0);
        System.Console.WriteLine(o[0].GetValue());
    }

    public static void Main()
    {
        ObjectArray();
        ValueTypeArray();
        InterfaceArray();
        AArray();
    }
}

