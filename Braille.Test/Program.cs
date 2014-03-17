
namespace Braille.Test
{
    public static class Console
    {
        [JsImport("console.log")]
        public static void Log(object s) { }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Console.Log(GetGreeting());
            Console.Log(Foo());
        }

        static double Foo()
        {
            return Bar() * Baz();
        }

        private static double Baz()
        {
            return 123.0;
        }

        private static double Bar()
        {
            return 2;
        }

        private static string GetGreeting()
        {
            return "Hello World";
        }
    }
}
