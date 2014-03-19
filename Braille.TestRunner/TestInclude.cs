
using System;

public class TestLog
{
    [JsImport("braille_test_log")]
    public static void Log(object o)
    {
        Console.WriteLine(o);
    }
}

public class JsImportAttribute : Attribute
{
    public JsImportAttribute(string function)
    {
        Function = function;
    }

    public string Function { get; set; }
}