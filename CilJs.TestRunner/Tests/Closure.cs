
public class A { public string Prop { get; set; } }

public delegate void X();

public class Program
{
    public static void Main()
    {
        A a = new A { Prop = "hello" };
        A b = null;
        
        X x = () => 
        {
            b = a;
        };

        x();

        System.Console.WriteLine(b.Prop);
    }
}

