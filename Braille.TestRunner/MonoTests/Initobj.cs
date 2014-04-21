

public class A { }

public class Program
{
    public static T CreateDefault<T>()
    {
        return default(T);
    }

    public static void Main()
    {
        TestLog.Log(default(int));
        TestLog.Log(default(string));
        TestLog.Log(default(A));
    }
}