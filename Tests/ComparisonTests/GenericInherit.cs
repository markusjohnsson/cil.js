
class A<T> { public System.Type Get() { return typeof(T); } }

class B : A<int> { }

class Program 
{
    public static void Main() 
    {
        var a = new B();
        System.Console.WriteLine(a.Get().Name);
    }
}