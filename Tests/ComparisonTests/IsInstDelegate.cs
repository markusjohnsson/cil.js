using System;

public delegate TResult FuncX<T, TResult>(T arg0);
public delegate T FuncX<T>();

public static class Program
{
    public static void Main(string[] args)
    {
        FuncX<object, object> lambda = i => null;
        System.Console.WriteLine("Lambda:");
        WriteType(lambda);
        System.Console.WriteLine("Method (object):");
        WriteType((FuncX<object, object>)MethodObj);
        System.Console.WriteLine("Method (object):");
        WriteType((FuncX<int, object>)MethodInt);
        System.Console.WriteLine("Method (object):");
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
            System.Console.WriteLine("FuncX<object>");
        }
        if (d as FuncX<object, object> != null)
        {
            System.Console.WriteLine("FuncX<object, object>");
        }
        if (d as FuncX<string, object> != null)
        {
            System.Console.WriteLine("FuncX<string, object>");
        }
        if (d as FuncX<int, object> != null)
        {
            System.Console.WriteLine("FuncX<int, object>");
        }
    }
}