
namespace Braille.Test
{
    class A : I
    {
        public void Foo()
        {
            throw new System.NotImplementedException();
        }
    }

    interface I { void Foo(); }

    class Program
    {
        static void Main(string[] args)
        {
        }
    }
}
