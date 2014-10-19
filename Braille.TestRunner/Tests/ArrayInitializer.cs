
class Program
{
    private static int[] GetIntArray()
    {
        return new int[] { 0, 8, -4, 5, -1, 6, 500, int.MaxValue, int.MinValue };
    }

    private static uint[] GetUIntArray()
    {
        return new uint[] { 0, 8, 4, 5, 1, 6, 500, uint.MaxValue, uint.MinValue };
    }

    private static byte[] GetByteArray()
    {
        return new byte[] { 0, 8, 4, 5, 1, byte.MaxValue, byte.MinValue };
    }

    public static void Main()
    {
        Print(GetIntArray());
        Print(GetUIntArray());
        Print(GetByteArray());
    }

    public static void Print<T>(T[] arr) 
    {
        for (var i = 0; i < arr.Length; i++)
            TestLog.Log(arr[i]);
    }
}