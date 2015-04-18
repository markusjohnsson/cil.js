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
        TestLog.Log(o is A ? "true" : "false");
    }
}