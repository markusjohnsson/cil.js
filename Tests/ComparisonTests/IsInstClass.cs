class A
{ 
}

class B : A
{ 
}

class Program
{
    public static void Main()
    {
        Isa(new A());
        Isa(new B());
        Isa("hello");
    }

    public static void Isa(object o)
    {
        System.Console.WriteLine(o is A ? "true" : "false");
    }
}