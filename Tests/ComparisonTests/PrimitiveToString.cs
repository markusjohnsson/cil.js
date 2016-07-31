public class Program
{
    public static void Main()
    {
        PrintObject(0);
        PrintObject(111);
        PrintObject(-111);
        PrintObject(int.MinValue);
        PrintObject(int.MaxValue);

        PrintObject(0U);
        PrintObject(145U);
        PrintObject(222U);
        PrintObject(uint.MinValue);
        PrintObject(uint.MaxValue);

        PrintObject(0L);
        PrintObject(333L);  
        PrintObject(-333L);
        PrintObject(long.MinValue);
        PrintObject(long.MaxValue);

        PrintObject(0UL);
        PrintObject(444UL);
        PrintObject(ulong.MinValue);
        PrintObject(ulong.MaxValue);

        PrintObject(555f);
        PrintObject(0f);
        PrintObject(-555f);

        PrintObject(666d);
        PrintObject(0d);
        PrintObject(-666d);

        PrintObject((byte)0);
        PrintObject((byte)20);
        PrintObject(byte.MinValue);
        PrintObject(byte.MaxValue);

        PrintObject((sbyte)-50);
        PrintObject((sbyte)0);
        PrintObject((sbyte)50);
        PrintObject((sbyte.MinValue));
        PrintObject((sbyte.MaxValue));

        PrintObject(true);
        PrintObject(false);
    }

    public static void PrintObject(object o)
    {
        System.Console.WriteLine(o);

        PrintArray(new object[] { o });
    }

    public static void PrintArray(object[] a)
    {
        System.Console.WriteLine(a[0].ToString());
    }
}