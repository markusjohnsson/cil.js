

interface I<T>
{ 
}

class A : I<A>
{ 
}


class B<T> where T: C
{ 
}

class C : B<C>
{ 
}

public class Program
{
    public static void Main() 
    {
        var a = new A();
        var c = new C();
    }
}