
public struct A { public int U; }
public class C { public int V; }
 
public class Program
{
    public static void X(ref int foo)
    {
        foo = 2;
    }

    public static void Y(ref A foo)
    {
        foo = new A { U = 3 };
    }
    
    public static void Z(ref C foo)
    {
        foo = new C { V = 4 };
    }

    public static void Main()
    {
        var a = 1;
        var b = new A { U = 1 };
        var c = new C { V = 1 };

        X(ref a);
        Y(ref b);
        Z(ref c);

        System.Console.WriteLine(a);
        System.Console.WriteLine(b.U);
        System.Console.WriteLine(c.V);
    }

}

