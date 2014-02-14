using System;
using System.Collections.Generic;

namespace Braille.Test
{
    class Program
    {
        static void Main(string[] args)
        {
            var h = "Hello";
            var w = "World";

            Console.WriteLine(h + w);
        }

        enum Foo { A, B, C, D }

        static void Switch(Foo x)
        {
            switch (x)
            {
                case Foo.A:
                    Console.WriteLine("asd");
                    break;
                case Foo.B:
                    Console.WriteLine("asd2");
                    break;
                case Foo.C:
                    Console.WriteLine("asd3");
                    break;
                case Foo.D:
                    Console.WriteLine("asd4");
                    break;
                default:
                    break;
            }
        }

        static void CollectionInitializer()
        {
            var r = new Dictionary<string, string>() 
            {
                { "a0", "b" },
                { "a1", "b" },
                { "a2", "b" },
                { "a3", "b" }
            };
            Console.WriteLine(r);
        }
    }
}
