public class Program
{
    public static void Main()
    {
        PrintObject(111);
        PrintObject(-111);
        PrintObject(145U);
        PrintObject(222U);
        //PrintObject(333L);
        //PrintObject(-333L);
        PrintObject(444UL);
        PrintObject(555f);
        PrintObject(-555f);
        PrintObject(666d);
        PrintObject(-666d);
        PrintObject((byte)20);
        PrintObject((byte)0);
        PrintObject((sbyte)-50);
        PrintObject((sbyte)50);
        PrintObject((sbyte)0);
    }

    public static void PrintObject(object o)
    {
        TestLog.Log(o);
    }

    public static void Print<T>(T t)
    {
        TestLog.Log(t);
    }
}