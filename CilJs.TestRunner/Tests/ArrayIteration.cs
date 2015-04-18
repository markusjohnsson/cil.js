using System.Collections;

public class Program
{
    public static void Main()
    {
        var xs = new int[5];
        xs[0] = 44;
        xs[1] = 43;
        xs[2] = 42;
        xs[3] = 41;
        xs[4] = 40;

        PrintArray(xs);
    }

    private static void PrintArray(IEnumerable xs)
    {
        foreach (var x in xs)
            TestLog.Log(x);
    }
}
