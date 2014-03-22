class A
{ 
}

class B : A
{ 
}

class Program
{
    public static void Main()
    {
        object a = new A();
        object b = new B();
        object c = "hello";

        TestLog.Log(a is A ? "true" : "false");
        TestLog.Log(b is A ? "true" : "false");
        TestLog.Log(c is A ? "true" : "false");
    }
}