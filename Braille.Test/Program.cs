using System;
using System.Collections;
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

        static int Maths(int a, int b)
        {
            var x = a * a * b;
            return x * x * a * (b + b) + b;
        }

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
            var r = new ArrayList() 
            {
                "a0",
                "a1",
                "a2",
                "a3"
            };
            Console.WriteLine(r);
        }
    }
}
