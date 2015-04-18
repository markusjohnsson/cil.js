
class Program
{
    public static void Main()
    {
        try
        {
            if (Get() != 0)
                TestLog.Log(Get().ToString());
        }
        finally
        {
            try
            {
                if (Get() != 0)
                    TestLog.Log(Get().ToString());
            }
            finally
            {
                if (Get() != 0)
                    TestLog.Log(Get().ToString());
            }

            if (Get() != 0)
                TestLog.Log(Get().ToString());
        }
    }

    private static int Get()
    {
        return 1;
    }
}
