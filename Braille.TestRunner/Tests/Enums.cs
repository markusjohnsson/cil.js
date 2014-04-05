
enum X 
{
    A, B, C
}

public class Program
{
    public static void Main()
    {
        X x = default(X);
        TestLog.Log((int)x);
        x = X.A;
        TestLog.Log((int)x);
        x = X.B;
        TestLog.Log((int)x);
        x = X.C;
        TestLog.Log((int)x);

    }
}
