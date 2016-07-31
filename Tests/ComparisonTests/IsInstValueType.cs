
interface I { }
struct A : I { }

class Program
{
    public static I Get()
    {
        return new A();
    }

    public static void Main()
    {
        Test(Get());
        Test(null);
    }

    private static void Test(I i)
    {
        System.Console.WriteLine(i is A);
    }
}
