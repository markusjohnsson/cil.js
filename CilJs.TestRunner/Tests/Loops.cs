

class Program
{
    public static void Main()
    {
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
    }

    public static void Continue()
    {
        var a = 1;

        while (true)
        {
            if (a > 2)
                continue;

            if (a > 3)
                continue;

            a++;
        }
    }
}