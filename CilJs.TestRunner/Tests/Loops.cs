

class Program
{
    public static void Main()
    {
        Break();
        Continue();
        Nested();
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
            a++;

            if (a == 4)
                return;

            if (a > 2)
                continue;

            if (a > 3)
                continue;
        }
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
        }
    }
}