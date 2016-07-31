

public class Program
{
    public static void Main()
    {
        Test((byte)0, (byte)0);
        Test((byte)0, (byte)1);
        Test((byte)1, 1);
        Test((byte)0, (sbyte)0);

        Test((sbyte)0, (byte)0);
        Test((sbyte)0, (byte)1);
        Test((sbyte)1, 1000);
        Test((sbyte)0, (sbyte)0);

        Test(byte.MaxValue, (sbyte)-1);
        Test((sbyte)0, (byte)1);
        Test((sbyte)1, 1000);
        Test((sbyte)0, (sbyte)0);

        Test(true, true);
        Test(true, false);
        Test(false, true);
        Test(false, false);
    }

    public static void Test(object a, object b)
    {
        System.Console.WriteLine(a.Equals(b));
    }
}