
interface I<T1>
{
    void X<T2>(string param);
}

class A<T>: I<T>
{
    public void X<T2>(string param)
    {
        System.Console.WriteLine(typeof(T2).FullName);
        System.Console.WriteLine(param);
    }
}

class X { }
class Y { }

class Program
{
    public static void Main()
    {
        var a = new A<X>();
        a.X<Y>("test1");
        ((I<X>)a).X<Y>("test2");
    }
}

