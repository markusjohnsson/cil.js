
class Program
{
    public static void Main()
    {
        try
        {
            if (Get() != 0)
                System.Console.WriteLine(Get().ToString());
        }
        finally
        {
            try
            {
                if (Get() != 0)
                    System.Console.WriteLine(Get().ToString());
            }
            finally
            {
                if (Get() != 0)
                    System.Console.WriteLine(Get().ToString());
            }

            if (Get() != 0)
                System.Console.WriteLine(Get().ToString());
        }
    }

    private static int Get()
    {
        return 1;
    }
}
