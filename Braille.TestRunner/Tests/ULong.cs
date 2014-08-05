
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
}
