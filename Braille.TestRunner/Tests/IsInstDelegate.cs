using System;

public delegate TResult FuncX<T, TResult>(T arg0);
public delegate T FuncX<T>();

public static class Program
{
    public static void Main(string[] args)
    {
        FuncX<object, object> lambda = i => null;
        TestLog.Log("Lambda:");
        WriteType(lambda);
        TestLog.Log("Method (object):");
        WriteType((FuncX<object, object>)MethodObj);
        TestLog.Log("Method (object):");
        WriteType((FuncX<int, object>)MethodInt);
        TestLog.Log("Method (object):");
        WriteType((FuncX<string, object>)MethodString);
    }

    public static object MethodObj(object i)
    {
        return null;
    }

    public static object MethodInt(int i)
    {
        return null;
    }

    public static object MethodString(string i)
    {
        return null;
    }

    private static void WriteType(Delegate d)
    {
        if (d as FuncX<object> != null)
        {
            TestLog.Log("FuncX<object>");
        }
        if (d as FuncX<object, object> != null)
        {
            TestLog.Log("FuncX<object, object>");
        }
        if (d as FuncX<string, object> != null)
        {
            TestLog.Log("FuncX<string, object>");
        }
        if (d as FuncX<int, object> != null)
        {
            TestLog.Log("FuncX<int, object>");
        }
    }
}