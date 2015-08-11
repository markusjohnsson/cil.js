
public struct A { public int U; }
public class C { public int V; }

public class Program
{
    public static void X(out int foo)
    {
        foo = 2;
    }

    public static void Y(out A foo)
    {
        foo = new A { U = 3 };
    }

    public static void Z(out C foo)
    {
        foo = new C { V = 4 };
    }

    public static void Main()
    {
        int a;
        A b;
        C c;

        X(out a);
        Y(out b);
        Z(out c);

        System.Console.WriteLine(a);
        System.Console.WriteLine(b.U);
        System.Console.WriteLine(c.V);
    }

}

