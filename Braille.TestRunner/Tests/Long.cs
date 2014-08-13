
class Program
{
    public static void Main()
    {
        TestLog.Log("1 - 21 ToString");
        TestLog.Log((long)1L);
        TestLog.Log((long)2L);
        TestLog.Log((long)3L);
        TestLog.Log((long)4L);
        TestLog.Log((long)5L);
        TestLog.Log((long)6L);
        TestLog.Log((long)7L);
        TestLog.Log((long)8L);
        TestLog.Log((long)9L);
        TestLog.Log((long)10L);
        TestLog.Log((long)11L);
        TestLog.Log((long)12L);
        TestLog.Log((long)13L);
        TestLog.Log((long)14L);
        TestLog.Log((long)15L);
        TestLog.Log((long)16L);
        TestLog.Log((long)17L);
        TestLog.Log((long)18L);
        TestLog.Log((long)19L);
        TestLog.Log((long)20L);
        TestLog.Log((long)21L);

        TestLog.Log("(long)0xf, (long)0xff ... (long)0xffffffffff");
        TestLog.Log((long)0xfL);
        TestLog.Log((long)0xffL);
        TestLog.Log((long)0xfffL);
        TestLog.Log((long)0xffffL);
        TestLog.Log((long)0xfffffL);
        TestLog.Log((long)0xffffffL);
        TestLog.Log((long)0xfffffffL);
        TestLog.Log((long)0xffffffffL);
        TestLog.Log((long)0xfffffffffL);
        TestLog.Log((long)0xffffffffffL);
        TestLog.Log((long)0xfffffffffffL);
        TestLog.Log((long)0xffffffffffffL);
        TestLog.Log((long)0xfffffffffffffL);
        TestLog.Log((long)0xffffffffffffffL);

        TestLog.Log("(long)0x01, (long)0x0101 ... (long)0x01010101010101");
        TestLog.Log((long)0x0L);
        TestLog.Log((long)0x01L);
        TestLog.Log((long)0x010L);
        TestLog.Log((long)0x0101L);
        TestLog.Log((long)0x01010L);
        TestLog.Log((long)0x010101L);
        TestLog.Log((long)0x0101010L);
        TestLog.Log((long)0x01010101L);
        TestLog.Log((long)0x010101010L);
        TestLog.Log((long)0x0101010101L);
        TestLog.Log((long)0x01010101010L);
        TestLog.Log((long)0x010101010101L);
        TestLog.Log((long)0x0101010101010L);
        TestLog.Log((long)0x01010101010101L);

        TestLog.Log("Add 1");
        TestLog.Log(Add(0xfL, 1L));
        TestLog.Log(Add(0xffL, 1L));
        TestLog.Log(Add(0xfffL, 1L));
        TestLog.Log(Add(0xffffL, 1L));
        TestLog.Log(Add(0xfffffL, 1L));
        TestLog.Log(Add(0xffffffL, 1L));
        TestLog.Log(Add(0xfffffffL, 1L));
        TestLog.Log(Add(0xffffffffL, 1L));
        TestLog.Log(Add(0xfffffffffL, 1L));
        TestLog.Log(Add(0xffffffffffL, 1L));
        TestLog.Log(Add(0xfffffffffffL, 1L));
        TestLog.Log(Add(0xffffffffffffL, 1L));
        TestLog.Log(Add(0xfffffffffffffL, 1L));
        TestLog.Log(Add(0xffffffffffffffL, 1L));

        TestLog.Log("Add 2");
        TestLog.Log(Add(0xfL, 2L));
        TestLog.Log(Add(0xffL, 2L));
        TestLog.Log(Add(0xfffL, 2L));
        TestLog.Log(Add(0xffffL, 2L));
        TestLog.Log(Add(0xfffffL, 2L));
        TestLog.Log(Add(0xffffffL, 2L));
        TestLog.Log(Add(0xfffffffL, 2L));
        TestLog.Log(Add(0xffffffffL, 2L));
        TestLog.Log(Add(0xfffffffffL, 2L));
        TestLog.Log(Add(0xffffffffffL, 2L));
        TestLog.Log(Add(0xfffffffffffL, 2L));
        TestLog.Log(Add(0xffffffffffffL, 2L));
        TestLog.Log(Add(0xfffffffffffffL, 2L));
        TestLog.Log(Add(0xffffffffffffffL, 2L));

        TestLog.Log("Add 0x1, 0x010, 0x0101 etc");
        TestLog.Log(Add(0xfL, 0x0L));
        TestLog.Log(Add(0xffL, 0x01L));
        TestLog.Log(Add(0xfffL, 0x010L));
        TestLog.Log(Add(0xffffL, 0x0101L));
        TestLog.Log(Add(0xfffffL, 0x01010L));
        TestLog.Log(Add(0xffffffL, 0x010101L));
        TestLog.Log(Add(0xfffffffL, 0x0101010L));
        TestLog.Log(Add(0xffffffffL, 0x01010101L));
        TestLog.Log(Add(0xfffffffffL, 0x010101010L));
        TestLog.Log(Add(0xffffffffffL, 0x0101010101L));
        TestLog.Log(Add(0xfffffffffffL, 0x01010101010L));
        TestLog.Log(Add(0xffffffffffffL, 0x010101010101L));
        TestLog.Log(Add(0xfffffffffffffL, 0x0101010101010L));
        TestLog.Log(Add(0xffffffffffffffL, 0x01010101010101L));

        TestLog.Log("Add -0x1, -0x010, -0x0101 etc");
        TestLog.Log(Add(0xfL, -0x0L));
        TestLog.Log(Add(0xffL, -0x01L));
        TestLog.Log(Add(0xfffL, -0x010L));
        TestLog.Log(Add(0xffffL, -0x0101L));
        TestLog.Log(Add(0xfffffL, -0x01010L));
        TestLog.Log(Add(0xffffffL, -0x010101L));
        TestLog.Log(Add(0xfffffffL, -0x0101010L));
        TestLog.Log(Add(0xffffffffL, -0x01010101L));
        TestLog.Log(Add(0xfffffffffL, -0x010101010L));
        TestLog.Log(Add(0xffffffffffL, -0x0101010101L));
        TestLog.Log(Add(0xfffffffffffL, -0x01010101010L));
        TestLog.Log(Add(0xffffffffffffL, -0x010101010101L));
        TestLog.Log(Add(0xfffffffffffffL, -0x0101010101010L));
        TestLog.Log(Add(0xffffffffffffffL, -0x01010101010101L));

        TestLog.Log("Sub 1");
        TestLog.Log(Sub(0xfL, 1L));
        TestLog.Log(Sub(0xffL, 1L));
        TestLog.Log(Sub(0xfffL, 1L));
        TestLog.Log(Sub(0xffffL, 1L));
        TestLog.Log(Sub(0xfffffL, 1L));
        TestLog.Log(Sub(0xffffffL, 1L));
        TestLog.Log(Sub(0xfffffffL, 1L));
        TestLog.Log(Sub(0xffffffffL, 1L));
        TestLog.Log(Sub(0xfffffffffL, 1L));
        TestLog.Log(Sub(0xffffffffffL, 1L));
        TestLog.Log(Sub(0xfffffffffffL, 1L));
        TestLog.Log(Sub(0xffffffffffffL, 1L));
        TestLog.Log(Sub(0xfffffffffffffL, 1L));
        TestLog.Log(Sub(0xffffffffffffffL, 1L));

        TestLog.Log("Sub -1");
        TestLog.Log(Sub(0xfL, -1L));
        TestLog.Log(Sub(0xffL, -1L));
        TestLog.Log(Sub(0xfffL, -1L));
        TestLog.Log(Sub(0xffffL, -1L));
        TestLog.Log(Sub(0xfffffL, -1L));
        TestLog.Log(Sub(0xffffffL, -1L));
        TestLog.Log(Sub(0xfffffffL, -1L));
        TestLog.Log(Sub(0xffffffffL, -1L));
        TestLog.Log(Sub(0xfffffffffL, -1L));
        TestLog.Log(Sub(0xffffffffffL, -1L));
        TestLog.Log(Sub(0xfffffffffffL, -1L));
        TestLog.Log(Sub(0xffffffffffffL, -1L));
        TestLog.Log(Sub(0xfffffffffffffL, -1L));
        TestLog.Log(Sub(0xffffffffffffffL, -1L));

        TestLog.Log("Sub 2");
        TestLog.Log(Sub(0xfL, 2L));
        TestLog.Log(Sub(0xffL, 2L));
        TestLog.Log(Sub(0xfffL, 2L));
        TestLog.Log(Sub(0xffffL, 2L));
        TestLog.Log(Sub(0xfffffL, 2L));
        TestLog.Log(Sub(0xffffffL, 2L));
        TestLog.Log(Sub(0xfffffffL, 2L));
        TestLog.Log(Sub(0xffffffffL, 2L));
        TestLog.Log(Sub(0xfffffffffL, 2L));
        TestLog.Log(Sub(0xffffffffffL, 2L));
        TestLog.Log(Sub(0xfffffffffffL, 2L));
        TestLog.Log(Sub(0xffffffffffffL, 2L));
        TestLog.Log(Sub(0xfffffffffffffL, 2L));
        TestLog.Log(Sub(0xffffffffffffffL, 2L));

        TestLog.Log("Sub -2");
        TestLog.Log(Sub(0xfL, -2L));
        TestLog.Log(Sub(0xffL, -2L));
        TestLog.Log(Sub(0xfffL, -2L));
        TestLog.Log(Sub(0xffffL, -2L));
        TestLog.Log(Sub(0xfffffL, -2L));
        TestLog.Log(Sub(0xffffffL, -2L));
        TestLog.Log(Sub(0xfffffffL, -2L));
        TestLog.Log(Sub(0xffffffffL, -2L));
        TestLog.Log(Sub(0xfffffffffL, -2L));
        TestLog.Log(Sub(0xffffffffffL, -2L));
        TestLog.Log(Sub(0xfffffffffffL, -2L));
        TestLog.Log(Sub(0xffffffffffffL, -2L));
        TestLog.Log(Sub(0xfffffffffffffL, -2L));
        TestLog.Log(Sub(0xffffffffffffffL, -2L));

        TestLog.Log("Sub 0x1, 0x010, 0x0101 etc");
        TestLog.Log(Sub(0xfL, 0x0L));
        TestLog.Log(Sub(0xffL, 0x01L));
        TestLog.Log(Sub(0xfffL, 0x010L));
        TestLog.Log(Sub(0xffffL, 0x0101L));
        TestLog.Log(Sub(0xfffffL, 0x01010L));
        TestLog.Log(Sub(0xffffffL, 0x010101L));
        TestLog.Log(Sub(0xfffffffL, 0x0101010L));
        TestLog.Log(Sub(0xffffffffL, 0x01010101L));
        TestLog.Log(Sub(0xfffffffffL, 0x010101010L));
        TestLog.Log(Sub(0xffffffffffL, 0x0101010101L));
        TestLog.Log(Sub(0xfffffffffffL, 0x01010101010L));
        TestLog.Log(Sub(0xffffffffffffL, 0x010101010101L));
        TestLog.Log(Sub(0xfffffffffffffL, 0x0101010101010L));
        TestLog.Log(Sub(0xffffffffffffffL, 0x01010101010101L));

        TestLog.Log("Sub -0x1, -0x010, -0x0101 etc");
        TestLog.Log(Sub(0xfL, -0x0L));
        TestLog.Log(Sub(0xffL, -0x01L));
        TestLog.Log(Sub(0xfffL, -0x010L));
        TestLog.Log(Sub(0xffffL, -0x0101L));
        TestLog.Log(Sub(0xfffffL, -0x01010L));
        TestLog.Log(Sub(0xffffffL, -0x010101L));
        TestLog.Log(Sub(0xfffffffL, -0x0101010L));
        TestLog.Log(Sub(0xffffffffL, -0x01010101L));
        TestLog.Log(Sub(0xfffffffffL, -0x010101010L));
        TestLog.Log(Sub(0xffffffffffL, -0x0101010101L));
        TestLog.Log(Sub(0xfffffffffffL, -0x01010101010L));
        TestLog.Log(Sub(0xffffffffffffL, -0x010101010101L));
        TestLog.Log(Sub(0xfffffffffffffL, -0x0101010101010L));
        TestLog.Log(Sub(0xffffffffffffffL, -0x01010101010101L));

        TestLog.Log("Mul 1");
        TestLog.Log(Mul(0xfL, 1L));
        TestLog.Log(Mul(0xffL, 1L));
        TestLog.Log(Mul(0xfffL, 1L));
        TestLog.Log(Mul(0xffffL, 1L));
        TestLog.Log(Mul(0xfffffL, 1L));
        TestLog.Log(Mul(0xffffffL, 1L));
        TestLog.Log(Mul(0xfffffffL, 1L));
        TestLog.Log(Mul(0xffffffffL, 1L));
        TestLog.Log(Mul(0xfffffffffL, 1L));
        TestLog.Log(Mul(0xffffffffffL, 1L));
        TestLog.Log(Mul(0xfffffffffffL, 1L));
        TestLog.Log(Mul(0xffffffffffffL, 1L));
        TestLog.Log(Mul(0xfffffffffffffL, 1L));
        TestLog.Log(Mul(0xffffffffffffffL, 1L));

        TestLog.Log("Mul -1");
        TestLog.Log(Mul(0xfL, -1L));
        TestLog.Log(Mul(0xffL, -1L));
        TestLog.Log(Mul(0xfffL, -1L));
        TestLog.Log(Mul(0xffffL, -1L));
        TestLog.Log(Mul(0xfffffL, -1L));
        TestLog.Log(Mul(0xffffffL, -1L));
        TestLog.Log(Mul(0xfffffffL, -1L));
        TestLog.Log(Mul(0xffffffffL, -1L));
        TestLog.Log(Mul(0xfffffffffL, -1L));
        TestLog.Log(Mul(0xffffffffffL, -1L));
        TestLog.Log(Mul(0xfffffffffffL, -1L));
        TestLog.Log(Mul(0xffffffffffffL, -1L));
        TestLog.Log(Mul(0xfffffffffffffL, -1L));
        TestLog.Log(Mul(0xffffffffffffffL, -1L));

        TestLog.Log("Mul 2");
        TestLog.Log(Mul(0xfL, 2L));
        TestLog.Log(Mul(0xffL, 2L));
        TestLog.Log(Mul(0xfffL, 2L));
        TestLog.Log(Mul(0xffffL, 2L));
        TestLog.Log(Mul(0xfffffL, 2L));
        TestLog.Log(Mul(0xffffffL, 2L));
        TestLog.Log(Mul(0xfffffffL, 2L));
        TestLog.Log(Mul(0xffffffffL, 2L));
        TestLog.Log(Mul(0xfffffffffL, 2L));
        TestLog.Log(Mul(0xffffffffffL, 2L));
        TestLog.Log(Mul(0xfffffffffffL, 2L));
        TestLog.Log(Mul(0xffffffffffffL, 2L));
        TestLog.Log(Mul(0xfffffffffffffL, 2L));
        TestLog.Log(Mul(0xffffffffffffffL, 2L));

        TestLog.Log("Mul -2");
        TestLog.Log(Mul(0xfL, -2L));
        TestLog.Log(Mul(0xffL, -2L));
        TestLog.Log(Mul(0xfffL, -2L));
        TestLog.Log(Mul(0xffffL, -2L));
        TestLog.Log(Mul(0xfffffL, -2L));
        TestLog.Log(Mul(0xffffffL, -2L));
        TestLog.Log(Mul(0xfffffffL, -2L));
        TestLog.Log(Mul(0xffffffffL, -2L));
        TestLog.Log(Mul(0xfffffffffL, -2L));
        TestLog.Log(Mul(0xffffffffffL, -2L));
        TestLog.Log(Mul(0xfffffffffffL, -2L));
        TestLog.Log(Mul(0xffffffffffffL, -2L));
        TestLog.Log(Mul(0xfffffffffffffL, -2L));
        TestLog.Log(Mul(0xffffffffffffffL, -2L));

        TestLog.Log("Mul 0x1, 0x010, 0x0101 etc");
        TestLog.Log(Mul(0xfL, 0x0L));
        TestLog.Log(Mul(0xffL, 0x01L));
        TestLog.Log(Mul(0xfffL, 0x010L));
        TestLog.Log(Mul(0xffffL, 0x0101L));
        TestLog.Log(Mul(0xfffffL, 0x01010L));
        TestLog.Log(Mul(0xffffffL, 0x010101L));
        TestLog.Log(Mul(0xfffffffL, 0x0101010L));
        TestLog.Log(Mul(0xffffffffL, 0x01010101L));
        TestLog.Log(Mul(0xfffffffffL, 0x010101010L));
        TestLog.Log(Mul(0xffffffffffL, 0x0101010101L));
        TestLog.Log(Mul(0xfffffffffffL, 0x01010101010L));
        TestLog.Log(Mul(0xffffffffffffL, 0x010101010101L));
        TestLog.Log(Mul(0xfffffffffffffL, 0x0101010101010L));
        TestLog.Log(Mul(0xffffffffffffffL, 0x01010101010101L));

        TestLog.Log("Mul -0x1, -0x010, -0x0101 etc");
        TestLog.Log(Mul(0xfL, -0x0L));
        TestLog.Log(Mul(0xffL, -0x01L));
        TestLog.Log(Mul(0xfffL, -0x010L));
        TestLog.Log(Mul(0xffffL, -0x0101L));
        TestLog.Log(Mul(0xfffffL, -0x01010L));
        TestLog.Log(Mul(0xffffffL, -0x010101L));
        TestLog.Log(Mul(0xfffffffL, -0x0101010L));
        TestLog.Log(Mul(0xffffffffL, -0x01010101L));
        TestLog.Log(Mul(0xfffffffffL, -0x010101010L));
        TestLog.Log(Mul(0xffffffffffL, -0x0101010101L));
        TestLog.Log(Mul(0xfffffffffffL, -0x01010101010L));
        TestLog.Log(Mul(0xffffffffffffL, -0x010101010101L));
        TestLog.Log(Mul(0xfffffffffffffL, -0x0101010101010L));
        TestLog.Log(Mul(0xffffffffffffffL, -0x01010101010101L));

        TestLog.Log(0x111L.GetHashCode());
    }

    public static long Add(long a, long b)
    {
        return a + b;
    }

    public static long Sub(long a, long b)
    {
        return a - b;
    }

    public static long Mul(long a, long b)
    {
        return a * b;
    }
}
