
interface I { }
struct A : I { }

class Program
{
    public static A Get()
    {
        return new A();
    }

    public static void Main()
    {
        I i = Get();

        TestLog.Log(i is A);
    }
}
