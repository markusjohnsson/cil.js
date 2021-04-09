
using System;

class Program
{
    public static void Main()
    {
        Break();
        Continue();
        Nested();
        Gotos();
        For();
        Foreach();
        Console.WriteLine(Format("{0}: {1}", "hey", "ho"));
    }

    public static void Break()
    {
        var a = 1;

        while (true)
        {
            if (a > 2)
                break;

            if (a > 3)
                break;

            a++;
        }
        Console.WriteLine(a);
    }

    public static void Continue()
    {
        var a = 1;

        while (true)
        {
            a++;

            if (a == 4)
                return;

            if (a > 2)
                continue;

            if (a > 3)
                continue;
        }
        Console.WriteLine(a);
    }

    public static void Nested()
    {
        var a = 1;

        while (true)
        {
            if (a > 2)
                break;

            var b = 1;

            while (true)
            {
                if (b > 2)
                    break;

                if (b > 3)
                    break;

                b++;
            }

            if (a > 3)
                break;

            a++;
            Console.WriteLine(b);
        }
        Console.WriteLine(a);
    }

    public static void Gotos()
    {
        var i = 0;

start:

        i++;

        Console.WriteLine(i);

        if (i < 4)
            goto start;

        Console.WriteLine(i);
    }

    public static void For()
    {
        for (int i = 0; i < 10; i++)
        {
            Console.WriteLine(i);
        }
    }

    public static void Foreach()
    {
        foreach (var item in new []{ 6, 5, 4, 3 })
        {
            Console.WriteLine(item);
        }
    }

    public static string Format(string formatString, params object []values)
    {
        // poor man's implementation. 

        for (var i = 0; i < values.Length; i++)
        {
            var v = values[i];
            if (v == null)
                v = string.Empty;
            formatString = formatString.Replace("{" + i + "}", v.ToString());
        }

        return formatString;
    }
}