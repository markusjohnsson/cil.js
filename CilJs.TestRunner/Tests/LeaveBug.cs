
class Program
{
    delegate bool pred<T>(T data);

    // C# compiler generates IL with a "leave" instruction outside of a try-catch scenario.. 
    // we need to treat it as a "br" instruction (NOT LEAVING a protected area).

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
        TestLog.Log(FirstOrDefault(s, x => true));
    }
}

