
class Program
{
    public unsafe static void Main()
    {
        var ints = new int[] { 0, 1, 2, 3 };

        fixed (int* pInts = ints)
        {
            var pBytes = (byte*)pInts;

            for (var i = 0; i < (ints.Length * 4); i++)
                pBytes[i] += 1;
        }

        foreach (var i in ints)
            System.Console.WriteLine(i);
    }
}