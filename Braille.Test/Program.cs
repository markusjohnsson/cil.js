
namespace Braille.Test
{
    public static class Console
    {
        [JsImport("console.log")]
        public static void Log(string s) { }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Console.Log("Hello World");
        }
    }
}
