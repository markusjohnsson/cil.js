using System;
class Program
{
    public static void Main()
    {
        try
        {
            System.Console.WriteLine("Try 1");

            try
            {
                System.Console.WriteLine("Try 2");
                throw new Exception();
            }
            finally
            {
                System.Console.WriteLine("Finally with branching");

                if (What())
                    System.Console.WriteLine("In branch");

                System.Console.WriteLine("After branch");
            }
            System.Console.WriteLine("After Finally");
        }
        catch (Exception e)
        {
            System.Console.WriteLine("Catch");
        }
    }

    public static bool What() { return true; }
}