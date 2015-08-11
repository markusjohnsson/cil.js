
class A<T>
{
    public bool X(object o)
    {
        return o is T;
    }
}

class B : A<C>
{ 
}

class C 
{
}

public class Program
{
    public static void Main()
    {
        var b = new B();
        System.Console.WriteLine(b.X(new C()));
    }
}
