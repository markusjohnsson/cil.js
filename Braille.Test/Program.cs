using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.Text;

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


        //enum Foo { A, B, C, D }

        //static int Maths(int a, int b)
        //{
        //    var x = a * a * b;
        //    return x * x * a * (b + b) + b;
        //}

        //static void Switch(Foo x)
        //{
        //    switch (x)
        //    {
        //        case Foo.A:
        //            Console.WriteLine("asd");
        //            break;
        //        case Foo.B:
        //            Console.WriteLine("asd2");
        //            break;
        //        case Foo.C:
        //            Console.WriteLine("asd3");
        //            break;
        //        case Foo.D:
        //            Console.WriteLine("asd4");
        //            break;
        //        default:
        //            break;
        //    }
        //}

        //static void CollectionInitializer()
        //{
        //    var r = new ArrayList() 
        //    {
        //        "a0",
        //        "a1",
        //        "a2",
        //        "a3"
        //    };
        //    Console.WriteLine(r);
        //}
    }

    static class CSStringConverter
    {
        public static string Convert(string value)
        {
            var sb = new StringBuilder(value.Length + 10);

            sb.Append('"');

            for (int i = 0; i < value.Length; i++)
            {
                switch (value[i])
                {
                    //case '\'':
                    //    b.Append("\\'");
                    //    break;

                    case '\\':
                        sb.Append("\\\\");
                        break;

                    case '\x2028':
                    case '\x2029':
                        sb.Append(EscapeChar(value[i]));
                        break;

                    case char.MinValue:
                        sb.Append("\\0");
                        break;

                    case '\t':
                        sb.Append("\\t");
                        break;

                    case '\n':
                        sb.Append("\\n");
                        break;

                    case '\r':
                        sb.Append("\\r");
                        break;

                    case '"':
                        sb.Append("\\\"");
                        break;

                    default:
                        sb.Append(value[i]);
                        break;
                }
            }

            sb.Append('"');

            return sb.ToString();
        }

        private static string EscapeChar(char value)
        {
            return "\\u" + ((int)value).ToString("X4", CultureInfo.InvariantCulture);
        }
    }
}
