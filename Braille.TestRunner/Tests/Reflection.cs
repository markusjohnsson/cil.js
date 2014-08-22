
class A
{ 
}

class Program
{
    public static void Main()
    {
        TestLog.Log(typeof(A).FullName);
        TestLog.Log(new A().GetType().FullName);
        TestLog.Log(new A().GetType().Equals(typeof(A)));
        TestLog.Log(new A().GetType().Equals(typeof(string)));
        TestLog.Log("".GetType().Equals(typeof(string)));
        TestLog.Log("".GetType().Equals(typeof(A)));
        TestLog.Log(1.GetType().Equals(typeof(A)));
        TestLog.Log(1.GetType().Equals(typeof(int)));
        TestLog.Log(1.GetType().FullName);
    }
}
