
class A
{ 
}

class B: A
{ 
}

class C
{ 
}

class Program
{
    public static void Test<T>(object o)
    {
        System.Console.WriteLine(o is T ? "true" : "false");
    }

    public static void Main()
    {
        Test<A>(new A());
        Test<A>(new B());
        Test<A>(new C());
        Test<A>(null);
    }
}