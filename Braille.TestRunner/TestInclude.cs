
using System;

class TestLog
{
    [JsImport("braille_test_log")]
    public static void Log(object o)
    {
        Console.WriteLine(o);
    }
}

[JsIgnore]
class JsIgnoreAttribute : Attribute
{ 
}

[JsIgnore]
class JsImportAttribute : Attribute
{
    public JsImportAttribute(string function)
    {
        Function = function;
    }

    public string Function { get; set; }
}

class TestHelper
{
    [JsImport("new Error()")]
    public static Exception CreateException(string message)
    {
        throw new Exception(message);
    }
}
