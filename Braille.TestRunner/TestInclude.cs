
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

[JsIgnore]
class JsReplaceAttribute : Attribute
{
    public JsReplaceAttribute(string replacement)
    {
        Replacement = replacement;
    }

    public string Replacement { get; set; }
}
