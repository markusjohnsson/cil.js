
namespace Braille.Test
{
    public static class Console
    {
        [JsImport("console.log")]
        public static void Log(object s) { }
    }

    class A
    {
        public int Field;
    }

    struct Point
    {
        public int X;
        public int Y;
        public int SquaredLength { get { return X * X + Y * Y; } }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var a = new Point();
            a.X = 123;
            a.Y = 321;

            Console.Log(a);
            Console.Log(a.SquaredLength);
        }
    }
}
