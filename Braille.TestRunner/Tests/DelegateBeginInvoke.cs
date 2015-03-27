
using System;
using System.Threading;

delegate void A();
delegate int B();
delegate void C(int a);

class Program
{
    public static void Main()
    {
        Simple();
        WithCallback();
    }

    public static void WithCallback()
    {
        IAsyncResult result;
        var state = 0;
        A a = () => { TestLog.Log("A"); };
        result = null;
        result = a.BeginInvoke((r) => { state = 1; }, " state ");

        while (state == 0) Thread.Sleep(0);

        a.EndInvoke(result);

        TestLog.Log(state);
        TestLog.Log(result.AsyncState);
    }

    public static void Simple()
    {
        IAsyncResult result;

        A a = () => { TestLog.Log("A"); };
        result = null;
        result = a.BeginInvoke(null, null);
        a.EndInvoke(result);

        B b = () => { TestLog.Log("B"); return 123; };
        result = null;
        result = b.BeginInvoke(null, null);
        TestLog.Log(b.EndInvoke(result));

        IAsyncResult r1, r2;
        int i = 0;
        int[] arr = new int[2];
        C c = (x) => { lock (arr) { arr[i++] = x; } };
        r1 = c.BeginInvoke(123, null, null);
        r2 = c.BeginInvoke(456, null, null);
        c.EndInvoke(r1);
        c.EndInvoke(r2);
        TestLog.Log(arr[0] == 123 || arr[0] == 456);
        TestLog.Log(arr[1] == 123 || arr[1] == 456);

    }
}
