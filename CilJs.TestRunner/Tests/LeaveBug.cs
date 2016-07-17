
class Program
{
    delegate bool pred<T>(T data);

    // C# compiler generates IL with a "leave" instruction outside of a try-catch scenario.. 
    // we need to treat it as a "br" instruction (NOT LEAVING a protected area).

    // As of roslyn this appears to no longer be true... so this test does not test that. But lets keep it.

    private static T FirstOrDefault<T>(T[] source, pred<T> predicate)
    {
        foreach (var s in source)
        {
            if (predicate(s))
                return s;
        }

        return default(T);
    }

    public static void Main()
    {
        string[] s = new[] { "asd" };
        System.Console.WriteLine(FirstOrDefault(s, x => true));
    }
}

