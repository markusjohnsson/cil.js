class A
{ 
}

class B : A
{ 
}

class C
{ 
}

class Program
{
    public static void Main()
    {
        AsA(new A());
        AsA(new B());
        AsA(new C());

        As<A>(new A());
        As<A>(new B());
        As<A>(new C());

        As<B>(new A());
        As<B>(new B());
        As<B>(new C());
    }

    private static void AsA(object o)
    {
        System.Console.WriteLine((o as A) == null ? "null" : "not null");
    }

    private static void As<T>(object o) where T: class
    {
        System.Console.WriteLine((o as T) == null ? "null" : "not null");
    }
}