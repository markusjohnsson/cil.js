
class Program
{
    public static void Main()
    {
        TestLog.Log(1UL);
        TestLog.Log(2UL);
        TestLog.Log(3UL);
        TestLog.Log(4UL);
        TestLog.Log(5UL);
        TestLog.Log(6UL);
        TestLog.Log(7UL);
        TestLog.Log(8UL);
        TestLog.Log(9UL);
        TestLog.Log(10UL);
        TestLog.Log(11UL);
        TestLog.Log(12UL);
        TestLog.Log(13UL);
        TestLog.Log(14UL);
        TestLog.Log(15UL);
        TestLog.Log(16UL);
        TestLog.Log(17UL);
        TestLog.Log(18UL);
        TestLog.Log(19UL);
        TestLog.Log(20UL);
        TestLog.Log(21UL);

        TestLog.Log(0xfUL);
        TestLog.Log(0xffUL);
        TestLog.Log(0xfffUL);
        TestLog.Log(0xffffUL);
        TestLog.Log(0xfffffUL);
        TestLog.Log(0xffffffUL);
        TestLog.Log(0xfffffffUL);
        TestLog.Log(0xffffffffUL);
        TestLog.Log(0xfffffffffUL);
        TestLog.Log(0xffffffffffUL);
        TestLog.Log(0xfffffffffffUL);
        TestLog.Log(0xffffffffffffUL);
        TestLog.Log(0xfffffffffffffUL);
        TestLog.Log(0xffffffffffffffUL);

        TestLog.Log(0x0UL);
        TestLog.Log(0x01UL);
        TestLog.Log(0x010UL);
        TestLog.Log(0x0101UL);
        TestLog.Log(0x01010UL);
        TestLog.Log(0x010101UL);
        TestLog.Log(0x0101010UL);
        TestLog.Log(0x01010101UL);
        TestLog.Log(0x010101010UL);
        TestLog.Log(0x0101010101UL);
        TestLog.Log(0x01010101010UL);
        TestLog.Log(0x010101010101UL);
        TestLog.Log(0x0101010101010UL);
        TestLog.Log(0x01010101010101UL);

        TestLog.Log(Add(0xfUL, 1UL));
        TestLog.Log(Add(0xffUL, 1UL));
        TestLog.Log(Add(0xfffUL, 1UL));
        TestLog.Log(Add(0xffffUL, 1UL));
        TestLog.Log(Add(0xfffffUL, 1UL));
        TestLog.Log(Add(0xffffffUL, 1UL));
        TestLog.Log(Add(0xfffffffUL, 1UL));
        TestLog.Log(Add(0xffffffffUL, 1UL));
        TestLog.Log(Add(0xfffffffffUL, 1UL));
        TestLog.Log(Add(0xffffffffffUL, 1UL));
        TestLog.Log(Add(0xfffffffffffUL, 1UL));
        TestLog.Log(Add(0xffffffffffffUL, 1UL));
        TestLog.Log(Add(0xfffffffffffffUL, 1UL));
        TestLog.Log(Add(0xffffffffffffffUL, 1UL));

        TestLog.Log(Add(0xfUL, 2UL));
        TestLog.Log(Add(0xffUL, 2UL));
        TestLog.Log(Add(0xfffUL, 2UL));
        TestLog.Log(Add(0xffffUL, 2UL));
        TestLog.Log(Add(0xfffffUL, 2UL));
        TestLog.Log(Add(0xffffffUL, 2UL));
        TestLog.Log(Add(0xfffffffUL, 2UL));
        TestLog.Log(Add(0xffffffffUL, 2UL));
        TestLog.Log(Add(0xfffffffffUL, 2UL));
        TestLog.Log(Add(0xffffffffffUL, 2UL));
        TestLog.Log(Add(0xfffffffffffUL, 2UL));
        TestLog.Log(Add(0xffffffffffffUL, 2UL));
        TestLog.Log(Add(0xfffffffffffffUL, 2UL));
        TestLog.Log(Add(0xffffffffffffffUL, 2UL));


        TestLog.Log(Add(0xfUL, 0x0UL));
        TestLog.Log(Add(0xffUL, 0x01UL));
        TestLog.Log(Add(0xfffUL, 0x010UL));
        TestLog.Log(Add(0xffffUL, 0x0101UL));
        TestLog.Log(Add(0xfffffUL, 0x01010UL));
        TestLog.Log(Add(0xffffffUL, 0x010101UL));
        TestLog.Log(Add(0xfffffffUL, 0x0101010UL));
        TestLog.Log(Add(0xffffffffUL, 0x01010101UL));
        TestLog.Log(Add(0xfffffffffUL, 0x010101010UL));
        TestLog.Log(Add(0xffffffffffUL, 0x0101010101UL));
        TestLog.Log(Add(0xfffffffffffUL, 0x01010101010UL));
        TestLog.Log(Add(0xffffffffffffUL, 0x010101010101UL));
        TestLog.Log(Add(0xfffffffffffffUL, 0x0101010101010UL));
        TestLog.Log(Add(0xffffffffffffffUL, 0x01010101010101UL));

        TestLog.Log(Sub(0xfUL, 1UL));
        TestLog.Log(Sub(0xffUL, 1UL));
        TestLog.Log(Sub(0xfffUL, 1UL));
        TestLog.Log(Sub(0xffffUL, 1UL));
        TestLog.Log(Sub(0xfffffUL, 1UL));
        TestLog.Log(Sub(0xffffffUL, 1UL));
        TestLog.Log(Sub(0xfffffffUL, 1UL));
        TestLog.Log(Sub(0xffffffffUL, 1UL));
        TestLog.Log(Sub(0xfffffffffUL, 1UL));
        TestLog.Log(Sub(0xffffffffffUL, 1UL));
        TestLog.Log(Sub(0xfffffffffffUL, 1UL));
        TestLog.Log(Sub(0xffffffffffffUL, 1UL));
        TestLog.Log(Sub(0xfffffffffffffUL, 1UL));
        TestLog.Log(Sub(0xffffffffffffffUL, 1UL));

        TestLog.Log(Sub(0xfUL, 2UL));
        TestLog.Log(Sub(0xffUL, 2UL));
        TestLog.Log(Sub(0xfffUL, 2UL));
        TestLog.Log(Sub(0xffffUL, 2UL));
        TestLog.Log(Sub(0xfffffUL, 2UL));
        TestLog.Log(Sub(0xffffffUL, 2UL));
        TestLog.Log(Sub(0xfffffffUL, 2UL));
        TestLog.Log(Sub(0xffffffffUL, 2UL));
        TestLog.Log(Sub(0xfffffffffUL, 2UL));
        TestLog.Log(Sub(0xffffffffffUL, 2UL));
        TestLog.Log(Sub(0xfffffffffffUL, 2UL));
        TestLog.Log(Sub(0xffffffffffffUL, 2UL));
        TestLog.Log(Sub(0xfffffffffffffUL, 2UL));
        TestLog.Log(Sub(0xffffffffffffffUL, 2UL));

        TestLog.Log(Sub(0xfUL, 0x0UL));
        TestLog.Log(Sub(0xffUL, 0x01UL));
        TestLog.Log(Sub(0xfffUL, 0x010UL));
        TestLog.Log(Sub(0xffffUL, 0x0101UL));
        TestLog.Log(Sub(0xfffffUL, 0x01010UL));
        TestLog.Log(Sub(0xffffffUL, 0x010101UL));
        TestLog.Log(Sub(0xfffffffUL, 0x0101010UL));
        TestLog.Log(Sub(0xffffffffUL, 0x01010101UL));
        TestLog.Log(Sub(0xfffffffffUL, 0x010101010UL));
        TestLog.Log(Sub(0xffffffffffUL, 0x0101010101UL));
        TestLog.Log(Sub(0xfffffffffffUL, 0x01010101010UL));
        TestLog.Log(Sub(0xffffffffffffUL, 0x010101010101UL));
        TestLog.Log(Sub(0xfffffffffffffUL, 0x0101010101010UL));
        TestLog.Log(Sub(0xffffffffffffffUL, 0x01010101010101UL));

        TestLog.Log(Mul(0xfUL, 1UL));
        TestLog.Log(Mul(0xffUL, 1UL));
        TestLog.Log(Mul(0xfffUL, 1UL));
        TestLog.Log(Mul(0xffffUL, 1UL));
        TestLog.Log(Mul(0xfffffUL, 1UL));
        TestLog.Log(Mul(0xffffffUL, 1UL));
        TestLog.Log(Mul(0xfffffffUL, 1UL));
        TestLog.Log(Mul(0xffffffffUL, 1UL));
        TestLog.Log(Mul(0xfffffffffUL, 1UL));
        TestLog.Log(Mul(0xffffffffffUL, 1UL));
        TestLog.Log(Mul(0xfffffffffffUL, 1UL));
        TestLog.Log(Mul(0xffffffffffffUL, 1UL));
        TestLog.Log(Mul(0xfffffffffffffUL, 1UL));
        TestLog.Log(Mul(0xffffffffffffffUL, 1UL));

        TestLog.Log(Mul(0xfUL, 2UL));
        TestLog.Log(Mul(0xffUL, 2UL));
        TestLog.Log(Mul(0xfffUL, 2UL));
        TestLog.Log(Mul(0xffffUL, 2UL));
        TestLog.Log(Mul(0xfffffUL, 2UL));
        TestLog.Log(Mul(0xffffffUL, 2UL));
        TestLog.Log(Mul(0xfffffffUL, 2UL));
        TestLog.Log(Mul(0xffffffffUL, 2UL));
        TestLog.Log(Mul(0xfffffffffUL, 2UL));
        TestLog.Log(Mul(0xffffffffffUL, 2UL));
        TestLog.Log(Mul(0xfffffffffffUL, 2UL));
        TestLog.Log(Mul(0xffffffffffffUL, 2UL));
        TestLog.Log(Mul(0xfffffffffffffUL, 2UL));
        TestLog.Log(Mul(0xffffffffffffffUL, 2UL));

        TestLog.Log(Mul(0xfUL, 0x0UL));
        TestLog.Log(Mul(0xffUL, 0x01UL));
        TestLog.Log(Mul(0xfffUL, 0x010UL));
        TestLog.Log(Mul(0xffffUL, 0x0101UL));
        TestLog.Log(Mul(0xfffffUL, 0x01010UL));
        TestLog.Log(Mul(0xffffffUL, 0x010101UL));
        TestLog.Log(Mul(0xfffffffUL, 0x0101010UL));
        TestLog.Log(Mul(0xffffffffUL, 0x01010101UL));
        TestLog.Log(Mul(0xfffffffffUL, 0x010101010UL));
        TestLog.Log(Mul(0xffffffffffUL, 0x0101010101UL));
        TestLog.Log(Mul(0xfffffffffffUL, 0x01010101010UL));
        TestLog.Log(Mul(0xffffffffffffUL, 0x010101010101UL));
        TestLog.Log(Mul(0xfffffffffffffUL, 0x0101010101010UL));
        TestLog.Log(Mul(0xffffffffffffffUL, 0x01010101010101UL));

        TestLog.Log("Div 1");
        TestLog.Log(Div(0xfUL, 1UL));
        TestLog.Log(Div(0xffUL, 1UL));
        TestLog.Log(Div(0xfffUL, 1UL));
        TestLog.Log(Div(0xffffUL, 1UL));
        TestLog.Log(Div(0xfffffUL, 1UL));
        TestLog.Log(Div(0xffffffUL, 1UL));
        TestLog.Log(Div(0xfffffffUL, 1UL));
        TestLog.Log(Div(0xffffffffUL, 1UL));
        TestLog.Log(Div(0xfffffffffUL, 1UL));
        TestLog.Log(Div(0xffffffffffUL, 1UL));
        TestLog.Log(Div(0xfffffffffffUL, 1UL));
        TestLog.Log(Div(0xffffffffffffUL, 1UL));
        TestLog.Log(Div(0xfffffffffffffUL, 1UL));
        TestLog.Log(Div(0xffffffffffffffUL, 1UL));

        TestLog.Log("Div 2");
        TestLog.Log(Div(0xfUL, 2UL));
        TestLog.Log(Div(0xffUL, 2UL));
        TestLog.Log(Div(0xfffUL, 2UL));
        TestLog.Log(Div(0xffffUL, 2UL));
        TestLog.Log(Div(0xfffffUL, 2UL));
        TestLog.Log(Div(0xffffffUL, 2UL));
        TestLog.Log(Div(0xfffffffUL, 2UL));
        TestLog.Log(Div(0xffffffffUL, 2UL));
        TestLog.Log(Div(0xfffffffffUL, 2UL));
        TestLog.Log(Div(0xffffffffffUL, 2UL));
        TestLog.Log(Div(0xfffffffffffUL, 2UL));
        TestLog.Log(Div(0xffffffffffffUL, 2UL));
        TestLog.Log(Div(0xfffffffffffffUL, 2UL));
        TestLog.Log(Div(0xffffffffffffffUL, 2UL));

        TestLog.Log("Div 0x1, 0x010, 0x0101 etc");
        //TestLog.Log(Div(0xfUL, 0x0UL));
        TestLog.Log(Div(0xffUL, 0x01UL));
        TestLog.Log(Div(0xfffUL, 0x010UL));
        TestLog.Log(Div(0xffffUL, 0x0101UL));
        TestLog.Log(Div(0xfffffUL, 0x01010UL));
        TestLog.Log(Div(0xffffffUL, 0x010101UL));
        TestLog.Log(Div(0xfffffffUL, 0x0101010UL));
        TestLog.Log(Div(0xffffffffUL, 0x01010101UL));
        TestLog.Log(Div(0xfffffffffUL, 0x010101010UL));
        TestLog.Log(Div(0xffffffffffUL, 0x0101010101UL));
        TestLog.Log(Div(0xfffffffffffUL, 0x01010101010UL));
        TestLog.Log(Div(0xffffffffffffUL, 0x010101010101UL));
        TestLog.Log(Div(0xfffffffffffffUL, 0x0101010101010UL));
        TestLog.Log(Div(0xffffffffffffffUL, 0x01010101010101UL));

        TestLog.Log("Mod 1");
        TestLog.Log(Mod(0xfUL, 1UL));
        TestLog.Log(Mod(0xffUL, 1UL));
        TestLog.Log(Mod(0xfffUL, 1UL));
        TestLog.Log(Mod(0xffffUL, 1UL));
        TestLog.Log(Mod(0xfffffUL, 1UL));
        TestLog.Log(Mod(0xffffffUL, 1UL));
        TestLog.Log(Mod(0xfffffffUL, 1UL));
        TestLog.Log(Mod(0xffffffffUL, 1UL));
        TestLog.Log(Mod(0xfffffffffUL, 1UL));
        TestLog.Log(Mod(0xffffffffffUL, 1UL));
        TestLog.Log(Mod(0xfffffffffffUL, 1UL));
        TestLog.Log(Mod(0xffffffffffffUL, 1UL));
        TestLog.Log(Mod(0xfffffffffffffUL, 1UL));
        TestLog.Log(Mod(0xffffffffffffffUL, 1UL));

        TestLog.Log("Mod 2");
        TestLog.Log(Mod(0xfUL, 2UL));
        TestLog.Log(Mod(0xffUL, 2UL));
        TestLog.Log(Mod(0xfffUL, 2UL));
        TestLog.Log(Mod(0xffffUL, 2UL));
        TestLog.Log(Mod(0xfffffUL, 2UL));
        TestLog.Log(Mod(0xffffffUL, 2UL));
        TestLog.Log(Mod(0xfffffffUL, 2UL));
        TestLog.Log(Mod(0xffffffffUL, 2UL));
        TestLog.Log(Mod(0xfffffffffUL, 2UL));
        TestLog.Log(Mod(0xffffffffffUL, 2UL));
        TestLog.Log(Mod(0xfffffffffffUL, 2UL));
        TestLog.Log(Mod(0xffffffffffffUL, 2UL));
        TestLog.Log(Mod(0xfffffffffffffUL, 2UL));
        TestLog.Log(Mod(0xffffffffffffffUL, 2UL));

        TestLog.Log("Mod 0x1, 0x010, 0x0101 etc");
        //TestLog.Log(Mod(0xfUL, 0x0UL));
        TestLog.Log(Mod(0xffUL, 0x01UL));
        TestLog.Log(Mod(0xfffUL, 0x010UL));
        TestLog.Log(Mod(0xffffUL, 0x0101UL));
        TestLog.Log(Mod(0xfffffUL, 0x01010UL));
        TestLog.Log(Mod(0xffffffUL, 0x010101UL));
        TestLog.Log(Mod(0xfffffffUL, 0x0101010UL));
        TestLog.Log(Mod(0xffffffffUL, 0x01010101UL));
        TestLog.Log(Mod(0xfffffffffUL, 0x010101010UL));
        TestLog.Log(Mod(0xffffffffffUL, 0x0101010101UL));
        TestLog.Log(Mod(0xfffffffffffUL, 0x01010101010UL));
        TestLog.Log(Mod(0xffffffffffffUL, 0x010101010101UL));
        TestLog.Log(Mod(0xfffffffffffffUL, 0x0101010101010UL));
        TestLog.Log(Mod(0xffffffffffffffUL, 0x01010101010101UL));

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
        TestLog.Log(RightShift(n, 0));
        TestLog.Log(RightShift(n, 1));
        TestLog.Log(RightShift(n, 2));
        TestLog.Log(RightShift(n, 7));
        TestLog.Log(RightShift(n, 8));
        TestLog.Log(RightShift(n, 9));
        TestLog.Log(RightShift(n, 15));
        TestLog.Log(RightShift(n, 16));
        TestLog.Log(RightShift(n, 17));
        TestLog.Log(RightShift(n, 23));
        TestLog.Log(RightShift(n, 24));
        TestLog.Log(RightShift(n, 25));
        TestLog.Log(RightShift(n, 31));
        TestLog.Log(RightShift(n, 32));
        TestLog.Log(RightShift(n, 33));
    }

    public static void TestLeftShift(ulong n)
    {
        TestLog.Log(LeftShift(n, 0));
        TestLog.Log(LeftShift(n, 1));
        TestLog.Log(LeftShift(n, 2));
        TestLog.Log(LeftShift(n, 7));
        TestLog.Log(LeftShift(n, 8));
        TestLog.Log(LeftShift(n, 9));
        TestLog.Log(LeftShift(n, 15));
        TestLog.Log(LeftShift(n, 16));
        TestLog.Log(LeftShift(n, 17));
        TestLog.Log(LeftShift(n, 23));
        TestLog.Log(LeftShift(n, 24));
        TestLog.Log(LeftShift(n, 25));
        TestLog.Log(LeftShift(n, 31));
        TestLog.Log(LeftShift(n, 32));
        TestLog.Log(LeftShift(n, 33));
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
