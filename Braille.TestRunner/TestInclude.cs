
using System;

public class TestLog
{
    [JsImport("braille_test_log")]
    public static void Log(object o)
    {
        Console.WriteLine(o);
    }
}

[JsIgnore]
public class JsIgnoreAttribute : Attribute
{ 
}

[JsIgnore]
public class JsImportAttribute : Attribute
{
    public JsImportAttribute(string function)
    {
        Function = function;
    }

    public string Function { get; set; }
}

public class TestHelper
{
    [JsImport("new Error()")]
    public static Exception CreateException(string message)
    {
        throw new Exception(message);
    }
}
