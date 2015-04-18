
using System;
public class Program
{
    public static event EventHandler MyEvent;

    public static void Main()
    {
        MyEvent += (s, e) => TestLog.Log("First");
        MyEvent += Handler;

        MyEvent(new object(), new EventArgs());

        MyEvent -= Handler;

        MyEvent(new object(), new EventArgs());
    }

    private static void Handler(object s, EventArgs e)
    {
        TestLog.Log("Second");
    }
}

