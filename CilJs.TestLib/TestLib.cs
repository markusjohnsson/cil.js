
using System;

public class TestLog
{
    [JsImport("ciljs_test_log")]
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

[JsIgnore]
public class JsReplaceAttribute : Attribute
{
    public JsReplaceAttribute(string replacement)
    {
        Replacement = replacement;
    }

    public string Replacement { get; set; }
}
