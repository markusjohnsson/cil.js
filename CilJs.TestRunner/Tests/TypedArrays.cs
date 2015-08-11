public class Program
{
    public static void Main()
    {
        TestUInt8();
        TestInt8();
        TestUInt16();
        TestInt16();
        TestUInt32();
        TestInt32();
        
    }

    private static void TestInt8()
    {
        sbyte[] a = new sbyte[3];
        a[0] = -5;
        a[1] = 6;
        a[2] = 7;
        foreach (var x in a)
            System.Console.WriteLine(x);
    }

    private static void TestUInt8()
    {
        byte[] a = new byte[3];
        a[0] = 5;
        a[1] = 6;
        a[2] = 7;
        foreach (var x in a)
            System.Console.WriteLine(x);
    }

    private static void TestInt16()
    {
        short[] a = new short[3];
        a[0] = -5;
        a[1] = 6;
        a[2] = 7;
        foreach (var x in a)
            System.Console.WriteLine(x);
    }

    private static void TestUInt16()
    {
        ushort[] a = new ushort[3];
        a[0] = 5;
        a[1] = 6;
        a[2] = 7;
        foreach (var x in a)
            System.Console.WriteLine(x);
    }

    private static void TestInt32()
    {
        int[] a = new int[3];
        a[0] = -5;
        a[1] = 6;
        a[2] = 7;
        foreach (var x in a)
            System.Console.WriteLine(x);
    }

    private static void TestUInt32()
    {
        uint[] a = new uint[3];
        a[0] = 5;
        a[1] = 6;
        a[2] = 7;
        foreach (var x in a)
            System.Console.WriteLine(x);
    }


}