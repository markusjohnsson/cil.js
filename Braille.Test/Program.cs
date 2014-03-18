
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
            for (var i=0; i<10; i++)
                Console.Log("Hello");
        }
    }
}
