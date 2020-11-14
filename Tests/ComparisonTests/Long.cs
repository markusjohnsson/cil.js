
class Program
{
    public static void Main()
    {
        System.Console.WriteLine("1 - 21 ToString");
        System.Console.WriteLine((long)1L);
        System.Console.WriteLine((long)2L);
        System.Console.WriteLine((long)3L);
        System.Console.WriteLine((long)4L);
        System.Console.WriteLine((long)5L);
        System.Console.WriteLine((long)6L);
        System.Console.WriteLine((long)7L);
        System.Console.WriteLine((long)8L);
        System.Console.WriteLine((long)9L);
        System.Console.WriteLine((long)10L);
        System.Console.WriteLine((long)11L);
        System.Console.WriteLine((long)12L);
        System.Console.WriteLine((long)13L);
        System.Console.WriteLine((long)14L);
        System.Console.WriteLine((long)15L);
        System.Console.WriteLine((long)16L);
        System.Console.WriteLine((long)17L);
        System.Console.WriteLine((long)18L);
        System.Console.WriteLine((long)19L);
        System.Console.WriteLine((long)20L);
        System.Console.WriteLine((long)21L);

        System.Console.WriteLine("(long)0xf, (long)0xff ... (long)0xffffffffff");
        System.Console.WriteLine((long)0xfL);
        System.Console.WriteLine((long)0xffL);
        System.Console.WriteLine((long)0xfffL);
        System.Console.WriteLine((long)0xffffL);
        System.Console.WriteLine((long)0xfffffL);
        System.Console.WriteLine((long)0xffffffL);
        System.Console.WriteLine((long)0xfffffffL);
        System.Console.WriteLine((long)0xffffffffL);
        System.Console.WriteLine((long)0xfffffffffL);
        System.Console.WriteLine((long)0xffffffffffL);
        System.Console.WriteLine((long)0xfffffffffffL);
        System.Console.WriteLine((long)0xffffffffffffL);
        System.Console.WriteLine((long)0xfffffffffffffL);
        System.Console.WriteLine((long)0xffffffffffffffL);

        System.Console.WriteLine("(long)0x01, (long)0x0101 ... (long)0x01010101010101");
        System.Console.WriteLine((long)0x0L);
        System.Console.WriteLine((long)0x01L);
        System.Console.WriteLine((long)0x010L);
        System.Console.WriteLine((long)0x0101L);
        System.Console.WriteLine((long)0x01010L);
        System.Console.WriteLine((long)0x010101L);
        System.Console.WriteLine((long)0x0101010L);
        System.Console.WriteLine((long)0x01010101L);
        System.Console.WriteLine((long)0x010101010L);
        System.Console.WriteLine((long)0x0101010101L);
        System.Console.WriteLine((long)0x01010101010L);
        System.Console.WriteLine((long)0x010101010101L);
        System.Console.WriteLine((long)0x0101010101010L);
        System.Console.WriteLine((long)0x01010101010101L);

        System.Console.WriteLine("Add 1");
        System.Console.WriteLine(Add(0xfL, 1L));
        System.Console.WriteLine(Add(0xffL, 1L));
        System.Console.WriteLine(Add(0xfffL, 1L));
        System.Console.WriteLine(Add(0xffffL, 1L));
        System.Console.WriteLine(Add(0xfffffL, 1L));
        System.Console.WriteLine(Add(0xffffffL, 1L));
        System.Console.WriteLine(Add(0xfffffffL, 1L));
        System.Console.WriteLine(Add(0xffffffffL, 1L));
        System.Console.WriteLine(Add(0xfffffffffL, 1L));
        System.Console.WriteLine(Add(0xffffffffffL, 1L));
        System.Console.WriteLine(Add(0xfffffffffffL, 1L));
        System.Console.WriteLine(Add(0xffffffffffffL, 1L));
        System.Console.WriteLine(Add(0xfffffffffffffL, 1L));
        System.Console.WriteLine(Add(0xffffffffffffffL, 1L));

        System.Console.WriteLine("Add 2");
        System.Console.WriteLine(Add(0xfL, 2L));
        System.Console.WriteLine(Add(0xffL, 2L));
        System.Console.WriteLine(Add(0xfffL, 2L));
        System.Console.WriteLine(Add(0xffffL, 2L));
        System.Console.WriteLine(Add(0xfffffL, 2L));
        System.Console.WriteLine(Add(0xffffffL, 2L));
        System.Console.WriteLine(Add(0xfffffffL, 2L));
        System.Console.WriteLine(Add(0xffffffffL, 2L));
        System.Console.WriteLine(Add(0xfffffffffL, 2L));
        System.Console.WriteLine(Add(0xffffffffffL, 2L));
        System.Console.WriteLine(Add(0xfffffffffffL, 2L));
        System.Console.WriteLine(Add(0xffffffffffffL, 2L));
        System.Console.WriteLine(Add(0xfffffffffffffL, 2L));
        System.Console.WriteLine(Add(0xffffffffffffffL, 2L));

        System.Console.WriteLine("Add 0x1, 0x010, 0x0101 etc");
        System.Console.WriteLine(Add(0xfL, 0x0L));
        System.Console.WriteLine(Add(0xffL, 0x01L));
        System.Console.WriteLine(Add(0xfffL, 0x010L));
        System.Console.WriteLine(Add(0xffffL, 0x0101L));
        System.Console.WriteLine(Add(0xfffffL, 0x01010L));
        System.Console.WriteLine(Add(0xffffffL, 0x010101L));
        System.Console.WriteLine(Add(0xfffffffL, 0x0101010L));
        System.Console.WriteLine(Add(0xffffffffL, 0x01010101L));
        System.Console.WriteLine(Add(0xfffffffffL, 0x010101010L));
        System.Console.WriteLine(Add(0xffffffffffL, 0x0101010101L));
        System.Console.WriteLine(Add(0xfffffffffffL, 0x01010101010L));
        System.Console.WriteLine(Add(0xffffffffffffL, 0x010101010101L));
        System.Console.WriteLine(Add(0xfffffffffffffL, 0x0101010101010L));
        System.Console.WriteLine(Add(0xffffffffffffffL, 0x01010101010101L));

        System.Console.WriteLine("Add -0x1, -0x010, -0x0101 etc");
        System.Console.WriteLine(Add(0xfL, -0x0L));
        System.Console.WriteLine(Add(0xffL, -0x01L));
        System.Console.WriteLine(Add(0xfffL, -0x010L));
        System.Console.WriteLine(Add(0xffffL, -0x0101L));
        System.Console.WriteLine(Add(0xfffffL, -0x01010L));
        System.Console.WriteLine(Add(0xffffffL, -0x010101L));
        System.Console.WriteLine(Add(0xfffffffL, -0x0101010L));
        System.Console.WriteLine(Add(0xffffffffL, -0x01010101L));
        System.Console.WriteLine(Add(0xfffffffffL, -0x010101010L));
        System.Console.WriteLine(Add(0xffffffffffL, -0x0101010101L));
        System.Console.WriteLine(Add(0xfffffffffffL, -0x01010101010L));
        System.Console.WriteLine(Add(0xffffffffffffL, -0x010101010101L));
        System.Console.WriteLine(Add(0xfffffffffffffL, -0x0101010101010L));
        System.Console.WriteLine(Add(0xffffffffffffffL, -0x01010101010101L));

        System.Console.WriteLine("Sub 1");
        System.Console.WriteLine(Sub(0xfL, 1L));
        System.Console.WriteLine(Sub(0xffL, 1L));
        System.Console.WriteLine(Sub(0xfffL, 1L));
        System.Console.WriteLine(Sub(0xffffL, 1L));
        System.Console.WriteLine(Sub(0xfffffL, 1L));
        System.Console.WriteLine(Sub(0xffffffL, 1L));
        System.Console.WriteLine(Sub(0xfffffffL, 1L));
        System.Console.WriteLine(Sub(0xffffffffL, 1L));
        System.Console.WriteLine(Sub(0xfffffffffL, 1L));
        System.Console.WriteLine(Sub(0xffffffffffL, 1L));
        System.Console.WriteLine(Sub(0xfffffffffffL, 1L));
        System.Console.WriteLine(Sub(0xffffffffffffL, 1L));
        System.Console.WriteLine(Sub(0xfffffffffffffL, 1L));
        System.Console.WriteLine(Sub(0xffffffffffffffL, 1L));

        System.Console.WriteLine("Sub -1");
        System.Console.WriteLine(Sub(0xfL, -1L));
        System.Console.WriteLine(Sub(0xffL, -1L));
        System.Console.WriteLine(Sub(0xfffL, -1L));
        System.Console.WriteLine(Sub(0xffffL, -1L));
        System.Console.WriteLine(Sub(0xfffffL, -1L));
        System.Console.WriteLine(Sub(0xffffffL, -1L));
        System.Console.WriteLine(Sub(0xfffffffL, -1L));
        System.Console.WriteLine(Sub(0xffffffffL, -1L));
        System.Console.WriteLine(Sub(0xfffffffffL, -1L));
        System.Console.WriteLine(Sub(0xffffffffffL, -1L));
        System.Console.WriteLine(Sub(0xfffffffffffL, -1L));
        System.Console.WriteLine(Sub(0xffffffffffffL, -1L));
        System.Console.WriteLine(Sub(0xfffffffffffffL, -1L));
        System.Console.WriteLine(Sub(0xffffffffffffffL, -1L));

        System.Console.WriteLine("Sub 2");
        System.Console.WriteLine(Sub(0xfL, 2L));
        System.Console.WriteLine(Sub(0xffL, 2L));
        System.Console.WriteLine(Sub(0xfffL, 2L));
        System.Console.WriteLine(Sub(0xffffL, 2L));
        System.Console.WriteLine(Sub(0xfffffL, 2L));
        System.Console.WriteLine(Sub(0xffffffL, 2L));
        System.Console.WriteLine(Sub(0xfffffffL, 2L));
        System.Console.WriteLine(Sub(0xffffffffL, 2L));
        System.Console.WriteLine(Sub(0xfffffffffL, 2L));
        System.Console.WriteLine(Sub(0xffffffffffL, 2L));
        System.Console.WriteLine(Sub(0xfffffffffffL, 2L));
        System.Console.WriteLine(Sub(0xffffffffffffL, 2L));
        System.Console.WriteLine(Sub(0xfffffffffffffL, 2L));
        System.Console.WriteLine(Sub(0xffffffffffffffL, 2L));

        System.Console.WriteLine("Sub -2");
        System.Console.WriteLine(Sub(0xfL, -2L));
        System.Console.WriteLine(Sub(0xffL, -2L));
        System.Console.WriteLine(Sub(0xfffL, -2L));
        System.Console.WriteLine(Sub(0xffffL, -2L));
        System.Console.WriteLine(Sub(0xfffffL, -2L));
        System.Console.WriteLine(Sub(0xffffffL, -2L));
        System.Console.WriteLine(Sub(0xfffffffL, -2L));
        System.Console.WriteLine(Sub(0xffffffffL, -2L));
        System.Console.WriteLine(Sub(0xfffffffffL, -2L));
        System.Console.WriteLine(Sub(0xffffffffffL, -2L));
        System.Console.WriteLine(Sub(0xfffffffffffL, -2L));
        System.Console.WriteLine(Sub(0xffffffffffffL, -2L));
        System.Console.WriteLine(Sub(0xfffffffffffffL, -2L));
        System.Console.WriteLine(Sub(0xffffffffffffffL, -2L));

        System.Console.WriteLine("Sub 0x1, 0x010, 0x0101 etc");
        System.Console.WriteLine(Sub(0xfL, 0x0L));
        System.Console.WriteLine(Sub(0xffL, 0x01L));
        System.Console.WriteLine(Sub(0xfffL, 0x010L));
        System.Console.WriteLine(Sub(0xffffL, 0x0101L));
        System.Console.WriteLine(Sub(0xfffffL, 0x01010L));
        System.Console.WriteLine(Sub(0xffffffL, 0x010101L));
        System.Console.WriteLine(Sub(0xfffffffL, 0x0101010L));
        System.Console.WriteLine(Sub(0xffffffffL, 0x01010101L));
        System.Console.WriteLine(Sub(0xfffffffffL, 0x010101010L));
        System.Console.WriteLine(Sub(0xffffffffffL, 0x0101010101L));
        System.Console.WriteLine(Sub(0xfffffffffffL, 0x01010101010L));
        System.Console.WriteLine(Sub(0xffffffffffffL, 0x010101010101L));
        System.Console.WriteLine(Sub(0xfffffffffffffL, 0x0101010101010L));
        System.Console.WriteLine(Sub(0xffffffffffffffL, 0x01010101010101L));

        System.Console.WriteLine("Sub -0x1, -0x010, -0x0101 etc");
        System.Console.WriteLine(Sub(0xfL, -0x0L));
        System.Console.WriteLine(Sub(0xffL, -0x01L));
        System.Console.WriteLine(Sub(0xfffL, -0x010L));
        System.Console.WriteLine(Sub(0xffffL, -0x0101L));
        System.Console.WriteLine(Sub(0xfffffL, -0x01010L));
        System.Console.WriteLine(Sub(0xffffffL, -0x010101L));
        System.Console.WriteLine(Sub(0xfffffffL, -0x0101010L));
        System.Console.WriteLine(Sub(0xffffffffL, -0x01010101L));
        System.Console.WriteLine(Sub(0xfffffffffL, -0x010101010L));
        System.Console.WriteLine(Sub(0xffffffffffL, -0x0101010101L));
        System.Console.WriteLine(Sub(0xfffffffffffL, -0x01010101010L));
        System.Console.WriteLine(Sub(0xffffffffffffL, -0x010101010101L));
        System.Console.WriteLine(Sub(0xfffffffffffffL, -0x0101010101010L));
        System.Console.WriteLine(Sub(0xffffffffffffffL, -0x01010101010101L));

        System.Console.WriteLine("Mul 1");
        System.Console.WriteLine(Mul(0xfL, 1L));
        System.Console.WriteLine(Mul(0xffL, 1L));
        System.Console.WriteLine(Mul(0xfffL, 1L));
        System.Console.WriteLine(Mul(0xffffL, 1L));
        System.Console.WriteLine(Mul(0xfffffL, 1L));
        System.Console.WriteLine(Mul(0xffffffL, 1L));
        System.Console.WriteLine(Mul(0xfffffffL, 1L));
        System.Console.WriteLine(Mul(0xffffffffL, 1L));
        System.Console.WriteLine(Mul(0xfffffffffL, 1L));
        System.Console.WriteLine(Mul(0xffffffffffL, 1L));
        System.Console.WriteLine(Mul(0xfffffffffffL, 1L));
        System.Console.WriteLine(Mul(0xffffffffffffL, 1L));
        System.Console.WriteLine(Mul(0xfffffffffffffL, 1L));
        System.Console.WriteLine(Mul(0xffffffffffffffL, 1L));

        System.Console.WriteLine("Mul -1");
        System.Console.WriteLine(Mul(0xfL, -1L));
        System.Console.WriteLine(Mul(0xffL, -1L));
        System.Console.WriteLine(Mul(0xfffL, -1L));
        System.Console.WriteLine(Mul(0xffffL, -1L));
        System.Console.WriteLine(Mul(0xfffffL, -1L));
        System.Console.WriteLine(Mul(0xffffffL, -1L));
        System.Console.WriteLine(Mul(0xfffffffL, -1L));
        System.Console.WriteLine(Mul(0xffffffffL, -1L));
        System.Console.WriteLine(Mul(0xfffffffffL, -1L));
        System.Console.WriteLine(Mul(0xffffffffffL, -1L));
        System.Console.WriteLine(Mul(0xfffffffffffL, -1L));
        System.Console.WriteLine(Mul(0xffffffffffffL, -1L));
        System.Console.WriteLine(Mul(0xfffffffffffffL, -1L));
        System.Console.WriteLine(Mul(0xffffffffffffffL, -1L));

        System.Console.WriteLine("Mul 2");
        System.Console.WriteLine(Mul(0xfL, 2L));
        System.Console.WriteLine(Mul(0xffL, 2L));
        System.Console.WriteLine(Mul(0xfffL, 2L));
        System.Console.WriteLine(Mul(0xffffL, 2L));
        System.Console.WriteLine(Mul(0xfffffL, 2L));
        System.Console.WriteLine(Mul(0xffffffL, 2L));
        System.Console.WriteLine(Mul(0xfffffffL, 2L));
        System.Console.WriteLine(Mul(0xffffffffL, 2L));
        System.Console.WriteLine(Mul(0xfffffffffL, 2L));
        System.Console.WriteLine(Mul(0xffffffffffL, 2L));
        System.Console.WriteLine(Mul(0xfffffffffffL, 2L));
        System.Console.WriteLine(Mul(0xffffffffffffL, 2L));
        System.Console.WriteLine(Mul(0xfffffffffffffL, 2L));
        System.Console.WriteLine(Mul(0xffffffffffffffL, 2L));

        System.Console.WriteLine("Mul -2");
        System.Console.WriteLine(Mul(0xfL, -2L));
        System.Console.WriteLine(Mul(0xffL, -2L));
        System.Console.WriteLine(Mul(0xfffL, -2L));
        System.Console.WriteLine(Mul(0xffffL, -2L));
        System.Console.WriteLine(Mul(0xfffffL, -2L));
        System.Console.WriteLine(Mul(0xffffffL, -2L));
        System.Console.WriteLine(Mul(0xfffffffL, -2L));
        System.Console.WriteLine(Mul(0xffffffffL, -2L));
        System.Console.WriteLine(Mul(0xfffffffffL, -2L));
        System.Console.WriteLine(Mul(0xffffffffffL, -2L));
        System.Console.WriteLine(Mul(0xfffffffffffL, -2L));
        System.Console.WriteLine(Mul(0xffffffffffffL, -2L));
        System.Console.WriteLine(Mul(0xfffffffffffffL, -2L));
        System.Console.WriteLine(Mul(0xffffffffffffffL, -2L));

        System.Console.WriteLine("Mul 0x1, 0x010, 0x0101 etc");
        System.Console.WriteLine(Mul(0xfL, 0x0L));
        System.Console.WriteLine(Mul(0xffL, 0x01L));
        System.Console.WriteLine(Mul(0xfffL, 0x010L));
        System.Console.WriteLine(Mul(0xffffL, 0x0101L));
        System.Console.WriteLine(Mul(0xfffffL, 0x01010L));
        System.Console.WriteLine(Mul(0xffffffL, 0x010101L));
        System.Console.WriteLine(Mul(0xfffffffL, 0x0101010L));
        System.Console.WriteLine(Mul(0xffffffffL, 0x01010101L));
        System.Console.WriteLine(Mul(0xfffffffffL, 0x010101010L));
        System.Console.WriteLine(Mul(0xffffffffffL, 0x0101010101L));
        System.Console.WriteLine(Mul(0xfffffffffffL, 0x01010101010L));
        System.Console.WriteLine(Mul(0xffffffffffffL, 0x010101010101L));
        System.Console.WriteLine(Mul(0xfffffffffffffL, 0x0101010101010L));
        System.Console.WriteLine(Mul(0xffffffffffffffL, 0x01010101010101L));

        System.Console.WriteLine("Mul -0x1, -0x010, -0x0101 etc");
        System.Console.WriteLine(Mul(0xfL, -0x0L));
        System.Console.WriteLine(Mul(0xffL, -0x01L));
        System.Console.WriteLine(Mul(0xfffL, -0x010L));
        System.Console.WriteLine(Mul(0xffffL, -0x0101L));
        System.Console.WriteLine(Mul(0xfffffL, -0x01010L));
        System.Console.WriteLine(Mul(0xffffffL, -0x010101L));
        System.Console.WriteLine(Mul(0xfffffffL, -0x0101010L));
        System.Console.WriteLine(Mul(0xffffffffL, -0x01010101L));
        System.Console.WriteLine(Mul(0xfffffffffL, -0x010101010L));
        System.Console.WriteLine(Mul(0xffffffffffL, -0x0101010101L));
        System.Console.WriteLine(Mul(0xfffffffffffL, -0x01010101010L));
        System.Console.WriteLine(Mul(0xffffffffffffL, -0x010101010101L));
        System.Console.WriteLine(Mul(0xfffffffffffffL, -0x0101010101010L));
        System.Console.WriteLine(Mul(0xffffffffffffffL, -0x01010101010101L));

        System.Console.WriteLine("Div 1");
        System.Console.WriteLine(Div(0xfL, 1L));
        System.Console.WriteLine(Div(0xffL, 1L));
        System.Console.WriteLine(Div(0xfffL, 1L));
        System.Console.WriteLine(Div(0xffffL, 1L));
        System.Console.WriteLine(Div(0xfffffL, 1L));
        System.Console.WriteLine(Div(0xffffffL, 1L));
        System.Console.WriteLine(Div(0xfffffffL, 1L));
        System.Console.WriteLine(Div(0xffffffffL, 1L));
        System.Console.WriteLine(Div(0xfffffffffL, 1L));
        System.Console.WriteLine(Div(0xffffffffffL, 1L));
        System.Console.WriteLine(Div(0xfffffffffffL, 1L));
        System.Console.WriteLine(Div(0xffffffffffffL, 1L));
        System.Console.WriteLine(Div(0xfffffffffffffL, 1L));
        System.Console.WriteLine(Div(0xffffffffffffffL, 1L));

        System.Console.WriteLine("Div long.MinValue");
        System.Console.WriteLine(Div(long.MinValue, 0xfL));
        System.Console.WriteLine(Div(long.MinValue, 0xffL));
        System.Console.WriteLine(Div(long.MinValue, 0xfffL));
        System.Console.WriteLine(Div(long.MinValue, 0xffffL));
        System.Console.WriteLine(Div(long.MinValue, 0xfffffL));
        System.Console.WriteLine(Div(long.MinValue, 0xffffffL));
        System.Console.WriteLine(Div(long.MinValue, 0xfffffffL));
        System.Console.WriteLine(Div(long.MinValue, 0xffffffffL));
        System.Console.WriteLine(Div(long.MinValue, 0xfffffffffL));
        System.Console.WriteLine(Div(long.MinValue, 0xffffffffffL));
        System.Console.WriteLine(Div(long.MinValue, 0xfffffffffffL));
        System.Console.WriteLine(Div(long.MinValue, 0xffffffffffffL));
        System.Console.WriteLine(Div(long.MinValue, 0xfffffffffffffL));
        System.Console.WriteLine(Div(long.MinValue, 0xffffffffffffffL));

        System.Console.WriteLine("Div -1");
        System.Console.WriteLine(Div(0xfL, -1L));
        System.Console.WriteLine(Div(0xffL, -1L));
        System.Console.WriteLine(Div(0xfffL, -1L));
        System.Console.WriteLine(Div(0xffffL, -1L));
        System.Console.WriteLine(Div(0xfffffL, -1L));
        System.Console.WriteLine(Div(0xffffffL, -1L));
        System.Console.WriteLine(Div(0xfffffffL, -1L));
        System.Console.WriteLine(Div(0xffffffffL, -1L));
        System.Console.WriteLine(Div(0xfffffffffL, -1L));
        System.Console.WriteLine(Div(0xffffffffffL, -1L));
        System.Console.WriteLine(Div(0xfffffffffffL, -1L));
        System.Console.WriteLine(Div(0xffffffffffffL, -1L));
        System.Console.WriteLine(Div(0xfffffffffffffL, -1L));
        System.Console.WriteLine(Div(0xffffffffffffffL, -1L));

        System.Console.WriteLine("Div 2");
        System.Console.WriteLine(Div(0xfL, 2L));
        System.Console.WriteLine(Div(0xffL, 2L));
        System.Console.WriteLine(Div(0xfffL, 2L));
        System.Console.WriteLine(Div(0xffffL, 2L));
        System.Console.WriteLine(Div(0xfffffL, 2L));
        System.Console.WriteLine(Div(0xffffffL, 2L));
        System.Console.WriteLine(Div(0xfffffffL, 2L));
        System.Console.WriteLine(Div(0xffffffffL, 2L));
        System.Console.WriteLine(Div(0xfffffffffL, 2L));
        System.Console.WriteLine(Div(0xffffffffffL, 2L));
        System.Console.WriteLine(Div(0xfffffffffffL, 2L));
        System.Console.WriteLine(Div(0xffffffffffffL, 2L));
        System.Console.WriteLine(Div(0xfffffffffffffL, 2L));
        System.Console.WriteLine(Div(0xffffffffffffffL, 2L));

        System.Console.WriteLine("Div -2");
        System.Console.WriteLine(Div(0xfL, -2L));
        System.Console.WriteLine(Div(0xffL, -2L));
        System.Console.WriteLine(Div(0xfffL, -2L));
        System.Console.WriteLine(Div(0xffffL, -2L));
        System.Console.WriteLine(Div(0xfffffL, -2L));
        System.Console.WriteLine(Div(0xffffffL, -2L));
        System.Console.WriteLine(Div(0xfffffffL, -2L));
        System.Console.WriteLine(Div(0xffffffffL, -2L));
        System.Console.WriteLine(Div(0xfffffffffL, -2L));
        System.Console.WriteLine(Div(0xffffffffffL, -2L));
        System.Console.WriteLine(Div(0xfffffffffffL, -2L));
        System.Console.WriteLine(Div(0xffffffffffffL, -2L));
        System.Console.WriteLine(Div(0xfffffffffffffL, -2L));
        System.Console.WriteLine(Div(0xffffffffffffffL, -2L));

        System.Console.WriteLine("Div 0x1, 0x010, 0x0101 etc");
        System.Console.WriteLine(Div(0xffL, 0x01L));
        System.Console.WriteLine(Div(0xfffL, 0x010L));
        System.Console.WriteLine(Div(0xffffL, 0x0101L));
        System.Console.WriteLine(Div(0xfffffL, 0x01010L));
        System.Console.WriteLine(Div(0xffffffL, 0x010101L));
        System.Console.WriteLine(Div(0xfffffffL, 0x0101010L));
        System.Console.WriteLine(Div(0xffffffffL, 0x01010101L));
        System.Console.WriteLine(Div(0xfffffffffL, 0x010101010L));
        System.Console.WriteLine(Div(0xffffffffffL, 0x0101010101L));
        System.Console.WriteLine(Div(0xfffffffffffL, 0x01010101010L));
        System.Console.WriteLine(Div(0xffffffffffffL, 0x010101010101L));
        System.Console.WriteLine(Div(0xfffffffffffffL, 0x0101010101010L));
        System.Console.WriteLine(Div(0xffffffffffffffL, 0x01010101010101L));

        System.Console.WriteLine("Div -0x1, -0x010, -0x0101 etc");
        System.Console.WriteLine(Div(0xffL, -0x01L));
        System.Console.WriteLine(Div(0xfffL, -0x010L));
        System.Console.WriteLine(Div(0xffffL, -0x0101L));
        System.Console.WriteLine(Div(0xfffffL, -0x01010L));
        System.Console.WriteLine(Div(0xffffffL, -0x010101L));
        System.Console.WriteLine(Div(0xfffffffL, -0x0101010L));
        System.Console.WriteLine(Div(0xffffffffL, -0x01010101L));
        System.Console.WriteLine(Div(0xfffffffffL, -0x010101010L));
        System.Console.WriteLine(Div(0xffffffffffL, -0x0101010101L));
        System.Console.WriteLine(Div(0xfffffffffffL, -0x01010101010L));
        System.Console.WriteLine(Div(0xffffffffffffL, -0x010101010101L));
        System.Console.WriteLine(Div(0xfffffffffffffL, -0x0101010101010L));
        System.Console.WriteLine(Div(0xffffffffffffffL, -0x01010101010101L));


        System.Console.WriteLine("Mod 1");
        System.Console.WriteLine(Mod(0xfL, 1L));
        System.Console.WriteLine(Mod(0xffL, 1L));
        System.Console.WriteLine(Mod(0xfffL, 1L));
        System.Console.WriteLine(Mod(0xffffL, 1L));
        System.Console.WriteLine(Mod(0xfffffL, 1L));
        System.Console.WriteLine(Mod(0xffffffL, 1L));
        System.Console.WriteLine(Mod(0xfffffffL, 1L));
        System.Console.WriteLine(Mod(0xffffffffL, 1L));
        System.Console.WriteLine(Mod(0xfffffffffL, 1L));
        System.Console.WriteLine(Mod(0xffffffffffL, 1L));
        System.Console.WriteLine(Mod(0xfffffffffffL, 1L));
        System.Console.WriteLine(Mod(0xffffffffffffL, 1L));
        System.Console.WriteLine(Mod(0xfffffffffffffL, 1L));
        System.Console.WriteLine(Mod(0xffffffffffffffL, 1L));

        System.Console.WriteLine("Mod -1");
        System.Console.WriteLine(Mod(0xfL, -1L));
        System.Console.WriteLine(Mod(0xffL, -1L));
        System.Console.WriteLine(Mod(0xfffL, -1L));
        System.Console.WriteLine(Mod(0xffffL, -1L));
        System.Console.WriteLine(Mod(0xfffffL, -1L));
        System.Console.WriteLine(Mod(0xffffffL, -1L));
        System.Console.WriteLine(Mod(0xfffffffL, -1L));
        System.Console.WriteLine(Mod(0xffffffffL, -1L));
        System.Console.WriteLine(Mod(0xfffffffffL, -1L));
        System.Console.WriteLine(Mod(0xffffffffffL, -1L));
        System.Console.WriteLine(Mod(0xfffffffffffL, -1L));
        System.Console.WriteLine(Mod(0xffffffffffffL, -1L));
        System.Console.WriteLine(Mod(0xfffffffffffffL, -1L));
        System.Console.WriteLine(Mod(0xffffffffffffffL, -1L));

        System.Console.WriteLine("Mod 2");
        System.Console.WriteLine(Mod(0xfL, 2L));
        System.Console.WriteLine(Mod(0xffL, 2L));
        System.Console.WriteLine(Mod(0xfffL, 2L));
        System.Console.WriteLine(Mod(0xffffL, 2L));
        System.Console.WriteLine(Mod(0xfffffL, 2L));
        System.Console.WriteLine(Mod(0xffffffL, 2L));
        System.Console.WriteLine(Mod(0xfffffffL, 2L));
        System.Console.WriteLine(Mod(0xffffffffL, 2L));
        System.Console.WriteLine(Mod(0xfffffffffL, 2L));
        System.Console.WriteLine(Mod(0xffffffffffL, 2L));
        System.Console.WriteLine(Mod(0xfffffffffffL, 2L));
        System.Console.WriteLine(Mod(0xffffffffffffL, 2L));
        System.Console.WriteLine(Mod(0xfffffffffffffL, 2L));
        System.Console.WriteLine(Mod(0xffffffffffffffL, 2L));

        System.Console.WriteLine("Mod -2");
        System.Console.WriteLine(Mod(0xfL, -2L));
        System.Console.WriteLine(Mod(0xffL, -2L));
        System.Console.WriteLine(Mod(0xfffL, -2L));
        System.Console.WriteLine(Mod(0xffffL, -2L));
        System.Console.WriteLine(Mod(0xfffffL, -2L));
        System.Console.WriteLine(Mod(0xffffffL, -2L));
        System.Console.WriteLine(Mod(0xfffffffL, -2L));
        System.Console.WriteLine(Mod(0xffffffffL, -2L));
        System.Console.WriteLine(Mod(0xfffffffffL, -2L));
        System.Console.WriteLine(Mod(0xffffffffffL, -2L));
        System.Console.WriteLine(Mod(0xfffffffffffL, -2L));
        System.Console.WriteLine(Mod(0xffffffffffffL, -2L));
        System.Console.WriteLine(Mod(0xfffffffffffffL, -2L));
        System.Console.WriteLine(Mod(0xffffffffffffffL, -2L));

        System.Console.WriteLine("Mod 0x1, 0x010, 0x0101 etc");
        System.Console.WriteLine(Mod(0xffL, 0x01L));
        System.Console.WriteLine(Mod(0xfffL, 0x010L));
        System.Console.WriteLine(Mod(0xffffL, 0x0101L));
        System.Console.WriteLine(Mod(0xfffffL, 0x01010L));
        System.Console.WriteLine(Mod(0xffffffL, 0x010101L));
        System.Console.WriteLine(Mod(0xfffffffL, 0x0101010L));
        System.Console.WriteLine(Mod(0xffffffffL, 0x01010101L));
        System.Console.WriteLine(Mod(0xfffffffffL, 0x010101010L));
        System.Console.WriteLine(Mod(0xffffffffffL, 0x0101010101L));
        System.Console.WriteLine(Mod(0xfffffffffffL, 0x01010101010L));
        System.Console.WriteLine(Mod(0xffffffffffffL, 0x010101010101L));
        System.Console.WriteLine(Mod(0xfffffffffffffL, 0x0101010101010L));
        System.Console.WriteLine(Mod(0xffffffffffffffL, 0x01010101010101L));

        System.Console.WriteLine("Mod -0x1, -0x010, -0x0101 etc");
        System.Console.WriteLine(Mod(0xffL, -0x01L));
        System.Console.WriteLine(Mod(0xfffL, -0x010L));
        System.Console.WriteLine(Mod(0xffffL, -0x0101L));
        System.Console.WriteLine(Mod(0xfffffL, -0x01010L));
        System.Console.WriteLine(Mod(0xffffffL, -0x010101L));
        System.Console.WriteLine(Mod(0xfffffffL, -0x0101010L));
        System.Console.WriteLine(Mod(0xffffffffL, -0x01010101L));
        System.Console.WriteLine(Mod(0xfffffffffL, -0x010101010L));
        System.Console.WriteLine(Mod(0xffffffffffL, -0x0101010101L));
        System.Console.WriteLine(Mod(0xfffffffffffL, -0x01010101010L));
        System.Console.WriteLine(Mod(0xffffffffffffL, -0x010101010101L));
        System.Console.WriteLine(Mod(0xfffffffffffffL, -0x0101010101010L));
        System.Console.WriteLine(Mod(0xffffffffffffffL, -0x01010101010101L));

        System.Console.WriteLine(Mod(0xfL, 2L));
        System.Console.WriteLine(Mod(0xfL, -2L));
        System.Console.WriteLine(Mod(-0xfL, -2L));
        System.Console.WriteLine(Mod(-0xfL, 2L));

        TestRightShift(0x0L);
        TestRightShift(0x1L);
        TestRightShift(0xffL);
        TestRightShift(0x01010101010101L);
        TestRightShift(0x10000000000000L);
        TestRightShift(0xffffffffffffffL);

        TestLeftShift(0x0L);
        TestLeftShift(0x1L);
        TestLeftShift(0xffL);
        TestLeftShift(0x01010101010101L);
        TestLeftShift(0x10000000000000L);
        TestLeftShift(0xffffffffffffffL);

        System.Console.WriteLine(Double(0xff));
        System.Console.WriteLine(Double(0xfffffffffffL));

        System.Console.WriteLine(0xffffffffffffffL.Equals(0xffffffffffffffL));
    }

    public static double Double(long l)
    {
        return (double)l;
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

    public static long Div(long a, long b)
    {
        return a / b;
    }

    public static long Mod(long a, long b)
    {
        return a % b;
    }

    public static void TestRightShift(long n)
    {
        System.Console.WriteLine("RightShift " + n);
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

    public static void TestLeftShift(long n)
    {
        System.Console.WriteLine("LeftShift " + n);
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

    public static long RightShift(long a, int b)
    {
        return a >> b;
    }

    public static long LeftShift(long a, int b)
    {
        return a << b;
    }
}
