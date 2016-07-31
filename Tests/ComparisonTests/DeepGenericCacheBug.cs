

class A<T> { }
class K<T> { }
class X { }
class Y { }

class Program
{
    public static void Main()
    {
        System.Console.WriteLine(typeof(A<K<X>>) == typeof(A<K<Y>>));
    }
}
