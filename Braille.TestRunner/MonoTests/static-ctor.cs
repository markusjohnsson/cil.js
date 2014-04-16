using System;

class X
{
    static X()
    {
        test.global = 1;
    }
}

class Y : X
{
}

class Z : Y
{
    public Z()
    {
    }
}

class test
{
    static public int global;

    static int Main()
    {
        Z z = new Z();

        if (global != 1)
        {
            TestLog.Log("Error");
            return 1;
        }
        TestLog.Log("Ok");
        return 0;
    }
}