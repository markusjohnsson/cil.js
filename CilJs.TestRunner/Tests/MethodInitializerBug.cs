class A<T> 
{ 
    public static T[] Value = new T[0]; 
}

class B<T>
{
    public T[] Value;
    public B()
    {
        Value = A<T>.Value;
    }
}

class C { }
class D { }

class Program
{
    public static void Main()
    {
        System.Console.WriteLine(new B<C>().Value.GetType().FullName);
        System.Console.WriteLine(new B<D>().Value.GetType().FullName);
    }
}