
class Program
{
    private static int[] GetArray()
    {
        return new int[] { 8, 4, 5, 1, 6 };
    }

    public static void Main()
    {
        var arr = GetArray();

        for (var i = 0; i < arr.Length; i++)
            TestLog.Log(arr[i]);
    }
}