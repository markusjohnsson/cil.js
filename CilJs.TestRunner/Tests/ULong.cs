    
class Program
{
    public static void Main()
    {
        System.Console.WriteLine(1UL);
        System.Console.WriteLine(2UL);
        System.Console.WriteLine(3UL);
        System.Console.WriteLine(4UL);
        System.Console.WriteLine(5UL);
        System.Console.WriteLine(6UL);
        System.Console.WriteLine(7UL);
        System.Console.WriteLine(8UL);
        System.Console.WriteLine(9UL);
        System.Console.WriteLine(10UL);
        System.Console.WriteLine(11UL);
        System.Console.WriteLine(12UL);
        System.Console.WriteLine(13UL);
        System.Console.WriteLine(14UL);
        System.Console.WriteLine(15UL);
        System.Console.WriteLine(16UL);
        System.Console.WriteLine(17UL);
        System.Console.WriteLine(18UL);
        System.Console.WriteLine(19UL);
        System.Console.WriteLine(20UL);
        System.Console.WriteLine(21UL);

        System.Console.WriteLine(0xfUL);
        System.Console.WriteLine(0xffUL);
        System.Console.WriteLine(0xfffUL);
        System.Console.WriteLine(0xffffUL);
        System.Console.WriteLine(0xfffffUL);
        System.Console.WriteLine(0xffffffUL);
        System.Console.WriteLine(0xfffffffUL);
        System.Console.WriteLine(0xffffffffUL);
        System.Console.WriteLine(0xfffffffffUL);
        System.Console.WriteLine(0xffffffffffUL);
        System.Console.WriteLine(0xfffffffffffUL);
        System.Console.WriteLine(0xffffffffffffUL);
        System.Console.WriteLine(0xfffffffffffffUL);
        System.Console.WriteLine(0xffffffffffffffUL);

        System.Console.WriteLine(0x0UL);
        System.Console.WriteLine(0x01UL);
        System.Console.WriteLine(0x010UL);
        System.Console.WriteLine(0x0101UL);
        System.Console.WriteLine(0x01010UL);
        System.Console.WriteLine(0x010101UL);
        System.Console.WriteLine(0x0101010UL);
        System.Console.WriteLine(0x01010101UL);
        System.Console.WriteLine(0x010101010UL);
        System.Console.WriteLine(0x0101010101UL);
        System.Console.WriteLine(0x01010101010UL);
        System.Console.WriteLine(0x010101010101UL);
        System.Console.WriteLine(0x0101010101010UL);
        System.Console.WriteLine(0x01010101010101UL);

        System.Console.WriteLine(Add(0xfUL, 1UL));
        System.Console.WriteLine(Add(0xffUL, 1UL));
        System.Console.WriteLine(Add(0xfffUL, 1UL));
        System.Console.WriteLine(Add(0xffffUL, 1UL));
        System.Console.WriteLine(Add(0xfffffUL, 1UL));
        System.Console.WriteLine(Add(0xffffffUL, 1UL));
        System.Console.WriteLine(Add(0xfffffffUL, 1UL));
        System.Console.WriteLine(Add(0xffffffffUL, 1UL));
        System.Console.WriteLine(Add(0xfffffffffUL, 1UL));
        System.Console.WriteLine(Add(0xffffffffffUL, 1UL));
        System.Console.WriteLine(Add(0xfffffffffffUL, 1UL));
        System.Console.WriteLine(Add(0xffffffffffffUL, 1UL));
        System.Console.WriteLine(Add(0xfffffffffffffUL, 1UL));
        System.Console.WriteLine(Add(0xffffffffffffffUL, 1UL));

        System.Console.WriteLine(Add(0xfUL, 2UL));
        System.Console.WriteLine(Add(0xffUL, 2UL));
        System.Console.WriteLine(Add(0xfffUL, 2UL));
        System.Console.WriteLine(Add(0xffffUL, 2UL));
        System.Console.WriteLine(Add(0xfffffUL, 2UL));
        System.Console.WriteLine(Add(0xffffffUL, 2UL));
        System.Console.WriteLine(Add(0xfffffffUL, 2UL));
        System.Console.WriteLine(Add(0xffffffffUL, 2UL));
        System.Console.WriteLine(Add(0xfffffffffUL, 2UL));
        System.Console.WriteLine(Add(0xffffffffffUL, 2UL));
        System.Console.WriteLine(Add(0xfffffffffffUL, 2UL));
        System.Console.WriteLine(Add(0xffffffffffffUL, 2UL));
        System.Console.WriteLine(Add(0xfffffffffffffUL, 2UL));
        System.Console.WriteLine(Add(0xffffffffffffffUL, 2UL));


        System.Console.WriteLine(Add(0xfUL, 0x0UL));
        System.Console.WriteLine(Add(0xffUL, 0x01UL));
        System.Console.WriteLine(Add(0xfffUL, 0x010UL));
        System.Console.WriteLine(Add(0xffffUL, 0x0101UL));
        System.Console.WriteLine(Add(0xfffffUL, 0x01010UL));
        System.Console.WriteLine(Add(0xffffffUL, 0x010101UL));
        System.Console.WriteLine(Add(0xfffffffUL, 0x0101010UL));
        System.Console.WriteLine(Add(0xffffffffUL, 0x01010101UL));
        System.Console.WriteLine(Add(0xfffffffffUL, 0x010101010UL));
        System.Console.WriteLine(Add(0xffffffffffUL, 0x0101010101UL));
        System.Console.WriteLine(Add(0xfffffffffffUL, 0x01010101010UL));
        System.Console.WriteLine(Add(0xffffffffffffUL, 0x010101010101UL));
        System.Console.WriteLine(Add(0xfffffffffffffUL, 0x0101010101010UL));
        System.Console.WriteLine(Add(0xffffffffffffffUL, 0x01010101010101UL));

        System.Console.WriteLine(Sub(0xfUL, 1UL));
        System.Console.WriteLine(Sub(0xffUL, 1UL));
        System.Console.WriteLine(Sub(0xfffUL, 1UL));
        System.Console.WriteLine(Sub(0xffffUL, 1UL));
        System.Console.WriteLine(Sub(0xfffffUL, 1UL));
        System.Console.WriteLine(Sub(0xffffffUL, 1UL));
        System.Console.WriteLine(Sub(0xfffffffUL, 1UL));
        System.Console.WriteLine(Sub(0xffffffffUL, 1UL));
        System.Console.WriteLine(Sub(0xfffffffffUL, 1UL));
        System.Console.WriteLine(Sub(0xffffffffffUL, 1UL));
        System.Console.WriteLine(Sub(0xfffffffffffUL, 1UL));
        System.Console.WriteLine(Sub(0xffffffffffffUL, 1UL));
        System.Console.WriteLine(Sub(0xfffffffffffffUL, 1UL));
        System.Console.WriteLine(Sub(0xffffffffffffffUL, 1UL));

        System.Console.WriteLine(Sub(0xfUL, 2UL));
        System.Console.WriteLine(Sub(0xffUL, 2UL));
        System.Console.WriteLine(Sub(0xfffUL, 2UL));
        System.Console.WriteLine(Sub(0xffffUL, 2UL));
        System.Console.WriteLine(Sub(0xfffffUL, 2UL));
        System.Console.WriteLine(Sub(0xffffffUL, 2UL));
        System.Console.WriteLine(Sub(0xfffffffUL, 2UL));
        System.Console.WriteLine(Sub(0xffffffffUL, 2UL));
        System.Console.WriteLine(Sub(0xfffffffffUL, 2UL));
        System.Console.WriteLine(Sub(0xffffffffffUL, 2UL));
        System.Console.WriteLine(Sub(0xfffffffffffUL, 2UL));
        System.Console.WriteLine(Sub(0xffffffffffffUL, 2UL));
        System.Console.WriteLine(Sub(0xfffffffffffffUL, 2UL));
        System.Console.WriteLine(Sub(0xffffffffffffffUL, 2UL));

        System.Console.WriteLine(Sub(0xfUL, 0x0UL));
        System.Console.WriteLine(Sub(0xffUL, 0x01UL));
        System.Console.WriteLine(Sub(0xfffUL, 0x010UL));
        System.Console.WriteLine(Sub(0xffffUL, 0x0101UL));
        System.Console.WriteLine(Sub(0xfffffUL, 0x01010UL));
        System.Console.WriteLine(Sub(0xffffffUL, 0x010101UL));
        System.Console.WriteLine(Sub(0xfffffffUL, 0x0101010UL));
        System.Console.WriteLine(Sub(0xffffffffUL, 0x01010101UL));
        System.Console.WriteLine(Sub(0xfffffffffUL, 0x010101010UL));
        System.Console.WriteLine(Sub(0xffffffffffUL, 0x0101010101UL));
        System.Console.WriteLine(Sub(0xfffffffffffUL, 0x01010101010UL));
        System.Console.WriteLine(Sub(0xffffffffffffUL, 0x010101010101UL));
        System.Console.WriteLine(Sub(0xfffffffffffffUL, 0x0101010101010UL));
        System.Console.WriteLine(Sub(0xffffffffffffffUL, 0x01010101010101UL));

        System.Console.WriteLine(Mul(0xfUL, 1UL));
        System.Console.WriteLine(Mul(0xffUL, 1UL));
        System.Console.WriteLine(Mul(0xfffUL, 1UL));
        System.Console.WriteLine(Mul(0xffffUL, 1UL));
        System.Console.WriteLine(Mul(0xfffffUL, 1UL));
        System.Console.WriteLine(Mul(0xffffffUL, 1UL));
        System.Console.WriteLine(Mul(0xfffffffUL, 1UL));
        System.Console.WriteLine(Mul(0xffffffffUL, 1UL));
        System.Console.WriteLine(Mul(0xfffffffffUL, 1UL));
        System.Console.WriteLine(Mul(0xffffffffffUL, 1UL));
        System.Console.WriteLine(Mul(0xfffffffffffUL, 1UL));
        System.Console.WriteLine(Mul(0xffffffffffffUL, 1UL));
        System.Console.WriteLine(Mul(0xfffffffffffffUL, 1UL));
        System.Console.WriteLine(Mul(0xffffffffffffffUL, 1UL));

        System.Console.WriteLine(Mul(0xfUL, 2UL));
        System.Console.WriteLine(Mul(0xffUL, 2UL));
        System.Console.WriteLine(Mul(0xfffUL, 2UL));
        System.Console.WriteLine(Mul(0xffffUL, 2UL));
        System.Console.WriteLine(Mul(0xfffffUL, 2UL));
        System.Console.WriteLine(Mul(0xffffffUL, 2UL));
        System.Console.WriteLine(Mul(0xfffffffUL, 2UL));
        System.Console.WriteLine(Mul(0xffffffffUL, 2UL));
        System.Console.WriteLine(Mul(0xfffffffffUL, 2UL));
        System.Console.WriteLine(Mul(0xffffffffffUL, 2UL));
        System.Console.WriteLine(Mul(0xfffffffffffUL, 2UL));
        System.Console.WriteLine(Mul(0xffffffffffffUL, 2UL));
        System.Console.WriteLine(Mul(0xfffffffffffffUL, 2UL));
        System.Console.WriteLine(Mul(0xffffffffffffffUL, 2UL));

        System.Console.WriteLine(Mul(0xfUL, 0x0UL));
        System.Console.WriteLine(Mul(0xffUL, 0x01UL));
        System.Console.WriteLine(Mul(0xfffUL, 0x010UL));
        System.Console.WriteLine(Mul(0xffffUL, 0x0101UL));
        System.Console.WriteLine(Mul(0xfffffUL, 0x01010UL));
        System.Console.WriteLine(Mul(0xffffffUL, 0x010101UL));
        System.Console.WriteLine(Mul(0xfffffffUL, 0x0101010UL));
        System.Console.WriteLine(Mul(0xffffffffUL, 0x01010101UL));
        System.Console.WriteLine(Mul(0xfffffffffUL, 0x010101010UL));
        System.Console.WriteLine(Mul(0xffffffffffUL, 0x0101010101UL));
        System.Console.WriteLine(Mul(0xfffffffffffUL, 0x01010101010UL));
        System.Console.WriteLine(Mul(0xffffffffffffUL, 0x010101010101UL));
        System.Console.WriteLine(Mul(0xfffffffffffffUL, 0x0101010101010UL));
        System.Console.WriteLine(Mul(0xffffffffffffffUL, 0x01010101010101UL));

        System.Console.WriteLine("Div 1");
        System.Console.WriteLine(Div(0xfUL, 1UL));
        System.Console.WriteLine(Div(0xffUL, 1UL));
        System.Console.WriteLine(Div(0xfffUL, 1UL));
        System.Console.WriteLine(Div(0xffffUL, 1UL));
        System.Console.WriteLine(Div(0xfffffUL, 1UL));
        System.Console.WriteLine(Div(0xffffffUL, 1UL));
        System.Console.WriteLine(Div(0xfffffffUL, 1UL));
        System.Console.WriteLine(Div(0xffffffffUL, 1UL));
        System.Console.WriteLine(Div(0xfffffffffUL, 1UL));
        System.Console.WriteLine(Div(0xffffffffffUL, 1UL));
        System.Console.WriteLine(Div(0xfffffffffffUL, 1UL));
        System.Console.WriteLine(Div(0xffffffffffffUL, 1UL));
        System.Console.WriteLine(Div(0xfffffffffffffUL, 1UL));
        System.Console.WriteLine(Div(0xffffffffffffffUL, 1UL));

        System.Console.WriteLine("Div 2");
        System.Console.WriteLine(Div(0xfUL, 2UL));
        System.Console.WriteLine(Div(0xffUL, 2UL));
        System.Console.WriteLine(Div(0xfffUL, 2UL));
        System.Console.WriteLine(Div(0xffffUL, 2UL));
        System.Console.WriteLine(Div(0xfffffUL, 2UL));
        System.Console.WriteLine(Div(0xffffffUL, 2UL));
        System.Console.WriteLine(Div(0xfffffffUL, 2UL));
        System.Console.WriteLine(Div(0xffffffffUL, 2UL));
        System.Console.WriteLine(Div(0xfffffffffUL, 2UL));
        System.Console.WriteLine(Div(0xffffffffffUL, 2UL));
        System.Console.WriteLine(Div(0xfffffffffffUL, 2UL));
        System.Console.WriteLine(Div(0xffffffffffffUL, 2UL));
        System.Console.WriteLine(Div(0xfffffffffffffUL, 2UL));
        System.Console.WriteLine(Div(0xffffffffffffffUL, 2UL));

        System.Console.WriteLine("Div 0x1, 0x010, 0x0101 etc");
        //Console.WriteLine(Div(0xfUL, 0x0UL));
        System.Console.WriteLine(Div(0xffUL, 0x01UL));
        System.Console.WriteLine(Div(0xfffUL, 0x010UL));
        System.Console.WriteLine(Div(0xffffUL, 0x0101UL));
        System.Console.WriteLine(Div(0xfffffUL, 0x01010UL));
        System.Console.WriteLine(Div(0xffffffUL, 0x010101UL));
        System.Console.WriteLine(Div(0xfffffffUL, 0x0101010UL));
        System.Console.WriteLine(Div(0xffffffffUL, 0x01010101UL));
        System.Console.WriteLine(Div(0xfffffffffUL, 0x010101010UL));
        System.Console.WriteLine(Div(0xffffffffffUL, 0x0101010101UL));
        System.Console.WriteLine(Div(0xfffffffffffUL, 0x01010101010UL));
        System.Console.WriteLine(Div(0xffffffffffffUL, 0x010101010101UL));
        System.Console.WriteLine(Div(0xfffffffffffffUL, 0x0101010101010UL));
        System.Console.WriteLine(Div(0xffffffffffffffUL, 0x01010101010101UL));

        System.Console.WriteLine("Mod 1");
        System.Console.WriteLine(Mod(0xfUL, 1UL));
        System.Console.WriteLine(Mod(0xffUL, 1UL));
        System.Console.WriteLine(Mod(0xfffUL, 1UL));
        System.Console.WriteLine(Mod(0xffffUL, 1UL));
        System.Console.WriteLine(Mod(0xfffffUL, 1UL));
        System.Console.WriteLine(Mod(0xffffffUL, 1UL));
        System.Console.WriteLine(Mod(0xfffffffUL, 1UL));
        System.Console.WriteLine(Mod(0xffffffffUL, 1UL));
        System.Console.WriteLine(Mod(0xfffffffffUL, 1UL));
        System.Console.WriteLine(Mod(0xffffffffffUL, 1UL));
        System.Console.WriteLine(Mod(0xfffffffffffUL, 1UL));
        System.Console.WriteLine(Mod(0xffffffffffffUL, 1UL));
        System.Console.WriteLine(Mod(0xfffffffffffffUL, 1UL));
        System.Console.WriteLine(Mod(0xffffffffffffffUL, 1UL));

        System.Console.WriteLine("Mod 2");
        System.Console.WriteLine(Mod(0xfUL, 2UL));
        System.Console.WriteLine(Mod(0xffUL, 2UL));
        System.Console.WriteLine(Mod(0xfffUL, 2UL));
        System.Console.WriteLine(Mod(0xffffUL, 2UL));
        System.Console.WriteLine(Mod(0xfffffUL, 2UL));
        System.Console.WriteLine(Mod(0xffffffUL, 2UL));
        System.Console.WriteLine(Mod(0xfffffffUL, 2UL));
        System.Console.WriteLine(Mod(0xffffffffUL, 2UL));
        System.Console.WriteLine(Mod(0xfffffffffUL, 2UL));
        System.Console.WriteLine(Mod(0xffffffffffUL, 2UL));
        System.Console.WriteLine(Mod(0xfffffffffffUL, 2UL));
        System.Console.WriteLine(Mod(0xffffffffffffUL, 2UL));
        System.Console.WriteLine(Mod(0xfffffffffffffUL, 2UL));
        System.Console.WriteLine(Mod(0xffffffffffffffUL, 2UL));

        System.Console.WriteLine("Mod 0x1, 0x010, 0x0101 etc");
        //Console.WriteLine(Mod(0xfUL, 0x0UL));
        System.Console.WriteLine(Mod(0xffUL, 0x01UL));
        System.Console.WriteLine(Mod(0xfffUL, 0x010UL));
        System.Console.WriteLine(Mod(0xffffUL, 0x0101UL));
        System.Console.WriteLine(Mod(0xfffffUL, 0x01010UL));
        System.Console.WriteLine(Mod(0xffffffUL, 0x010101UL));
        System.Console.WriteLine(Mod(0xfffffffUL, 0x0101010UL));
        System.Console.WriteLine(Mod(0xffffffffUL, 0x01010101UL));
        System.Console.WriteLine(Mod(0xfffffffffUL, 0x010101010UL));
        System.Console.WriteLine(Mod(0xffffffffffUL, 0x0101010101UL));
        System.Console.WriteLine(Mod(0xfffffffffffUL, 0x01010101010UL));
        System.Console.WriteLine(Mod(0xffffffffffffUL, 0x010101010101UL));
        System.Console.WriteLine(Mod(0xfffffffffffffUL, 0x0101010101010UL));
        System.Console.WriteLine(Mod(0xffffffffffffffUL, 0x01010101010101UL));

        TestRightShift(0x0UL);
        TestRightShift(0x1UL);
        TestRightShift(0xffUL);
        TestRightShift(0x01010101010101UL);
        TestRightShift(0x10000000000000UL);
        TestRightShift(0xffffffffffffffUL);

        TestLeftShift(0x0UL);
        TestLeftShift(0x1UL);
        TestLeftShift(0xffUL);
        TestLeftShift(0x01010101010101UL);
        TestLeftShift(0x10000000000000UL);
        TestLeftShift(0xffffffffffffffUL);

        System.Console.WriteLine(Double(0xffUL));
        System.Console.WriteLine(Double(0xfffffffffffUL));
    }

    public static double Double(ulong l)
    {
        return (double)l;
    }


    public static ulong Add(ulong a, ulong b)
    {
        return a + b;
    }

    public static ulong Sub(ulong a, ulong b)
    {
        return a - b;
    }

    public static ulong Mul(ulong a, ulong b)
    {
        return a * b;
    }

    public static ulong Div(ulong a, ulong b)
    {
        return a / b;
    }

    public static ulong Mod(ulong a, ulong b)
    {
        return a % b;
    }

    public static void TestRightShift(ulong n)
    {
        System.Console.WriteLine(RightShift(n, 0));
        System.Console.WriteLine(RightShift(n, 1));
        System.Console.WriteLine(RightShift(n, 2));
        System.Console.WriteLine(RightShift(n, 7));
        System.Console.WriteLine(RightShift(n, 8));
        System.Console.WriteLine(RightShift(n, 9));
        System.Console.WriteLine(RightShift(n, 15));
        System.Console.WriteLine(RightShift(n, 16));
        System.Console.WriteLine(RightShift(n, 17));
        System.Console.WriteLine(RightShift(n, 23));
        System.Console.WriteLine(RightShift(n, 24));
        System.Console.WriteLine(RightShift(n, 25));
        System.Console.WriteLine(RightShift(n, 31));
        System.Console.WriteLine(RightShift(n, 32));
        System.Console.WriteLine(RightShift(n, 33));
    }

    public static void TestLeftShift(ulong n)
    {
        System.Console.WriteLine(LeftShift(n, 0));
        System.Console.WriteLine(LeftShift(n, 1));
        System.Console.WriteLine(LeftShift(n, 2));
        System.Console.WriteLine(LeftShift(n, 7));
        System.Console.WriteLine(LeftShift(n, 8));
        System.Console.WriteLine(LeftShift(n, 9));
        System.Console.WriteLine(LeftShift(n, 15));
        System.Console.WriteLine(LeftShift(n, 16));
        System.Console.WriteLine(LeftShift(n, 17));
        System.Console.WriteLine(LeftShift(n, 23));
        System.Console.WriteLine(LeftShift(n, 24));
        System.Console.WriteLine(LeftShift(n, 25));
        System.Console.WriteLine(LeftShift(n, 31));
        System.Console.WriteLine(LeftShift(n, 32));
        System.Console.WriteLine(LeftShift(n, 33));
    }

    public static ulong RightShift(ulong a, int b)
    {
        return a >> b;
    }

    public static ulong LeftShift(ulong a, int b)
    {
        return a << b;
    }
}
