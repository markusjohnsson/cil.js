
class A
{
}

class B : A
{
}

class C
{
}

class D<T>
{
    public static void Test(object o)
    {
        System.Console.WriteLine(o is T ? "true" : "false");
    }
}

class Program
{
    public static void Main()
    {
        D<A>.Test(new A());
        D<A>.Test(new B());
        D<A>.Test(new C());
        D<A>.Test(null);
    }
}