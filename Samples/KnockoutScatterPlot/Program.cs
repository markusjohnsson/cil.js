using CilJs.Runtime.TranslatorServices;
using System;
using System.Collections.Generic;

namespace KnockoutScatterPlot
{
    public class Item
    {
        // Public and internal fields are available to javascript from class instances using their normal name
        // so passing an instance of Item to a javascript such as knockout would allow it to access X, Y and Color.
        //
        // However, if these were properties, they would only be accessible through their getters and setters, 
        // for which you would need to know the metadata token.
        //
        // Thus, we use fields.

        public double X;

        public double Y;

        public string Color;
    }

    public class ViewModel
    {
        // See comment in Item to explain why this needs to be a field
        public KnockoutObservableArray<Item> Items;

        int mixColor(int from, int to, double d)
        {
            // we can do some serious integer bit arithmetic without problems

            var ra = (from & 0xff0000) >> 16;
            var ga = (from & 0xff00) >> 8;
            var ba = (from & 0xff);

            var rb = (to & 0xff0000) >> 16;
            var gb = (to & 0xff00) >> 8;
            var bb = (to & 0xff);

            var r = mix(ra, rb, d);
            var g = mix(ga, gb, d);
            var b = mix(ba, bb, d);

            return r << 16 | g << 8 | b;
        }

        private int mix(int a, int b, double d)
        {
            var t = a + (int)((b - a) * d);
            return t < 0 ? 0 : t > 255 ? 255 : t;
        }

        Item CreateItem(double x, double y)
        {
            var color = "#" + mixColor(0xff3333, 0x6666ff, x / 20).ToString("X");
            
            return new Item { X = 5 * x, Y = 100 * y / 150, Color = color };
        }

        public ViewModel()
        {
            Items = Knockout.ObservableArray<Item>(
                new[] {
                    CreateItem(13.61, 31.96),
                    CreateItem(15.99, 39.89),
                    CreateItem(7.85, 25.29),
                    CreateItem(14.55, 25.05),
                    CreateItem(12.66, 21.93),
                    CreateItem(15.73, 36.93),
                    CreateItem(17.01, 50.11),
                    CreateItem(18.46, 63.1),
                    CreateItem(19.1, 75.36),
                    CreateItem(13.8, 49.54),
                    CreateItem(13.43, 76.81),
                    CreateItem(11.05, 48.91),
                    CreateItem(15.69, 45.47),
                    CreateItem(16.55, 45.97),
                    CreateItem(16.02, 45.59),
                    CreateItem(11.4, 57.78),
                    CreateItem(10.88, 31.43),
                    CreateItem(12.03, 42.87),
                    CreateItem(11.11, 51.72),
                    CreateItem(11.68, 25.58),
                    CreateItem(13.03, 27.45),
                    CreateItem(17.23, 40.61),
                    CreateItem(15.45, 42.57),
                    CreateItem(10.72, 19.61),
                    CreateItem(12.55, 39.28),
                    CreateItem(13.23, 28.01),
                    CreateItem(13.3, 41.41),
                    CreateItem(19.05, 104.17),
                    CreateItem(12.14, 23.53),
                    CreateItem(17.68, 91.59),
                    CreateItem(15.38, 69.77),
                    CreateItem(18.38, 74.98),
                    CreateItem(15.4, 56.57),
                    CreateItem(16.73, 61.03),
                    CreateItem(15.7, 44.64),
                    CreateItem(18, 67.34),
                    CreateItem(10.75, 22.02),
                    CreateItem(12.79, 28.14),
                    CreateItem(13.59, 25.12),
                    CreateItem(12.01, 24.96),
                    CreateItem(12.91, 24.61),
                    CreateItem(13.5, 84.41),
                    CreateItem(12.81, 34.83),
                    CreateItem(14.14, 27.08),
                    CreateItem(18.54, 68.5),
                    CreateItem(18.26, 86.21),
                    CreateItem(13.3, 24.56),
                    CreateItem(11.97, 24.76),
                    CreateItem(11.51, 24.56),
                    CreateItem(19.37, 82.12),
                    CreateItem(12.96, 74.64),
                    CreateItem(12.6, 66.87),
                    CreateItem(8.71, 31.31),
                    CreateItem(13.09, 69.26),
                    CreateItem(16.05, 42.97),
                    CreateItem(13.31, 38.08),
                    CreateItem(18.83, 42.79),
                    CreateItem(18.76, 78.78),
                    CreateItem(12.27, 65.26),
                    CreateItem(10.97, 14.83),
                    CreateItem(13.49, 28.49),
                    CreateItem(12.84, 25.35),
                    CreateItem(17.59, 41.98),
                    CreateItem(12.12, 54.22),
                    CreateItem(13.8, 27.82),
                    CreateItem(15.8, 45.4),
                    CreateItem(16.22, 45.78),
                    CreateItem(16.93, 50.96),
                    CreateItem(14.97, 46.02),
                    CreateItem(13.25, 28.2),
                    CreateItem(13.8, 26.94),
                    CreateItem(12.96, 71.51),
                    CreateItem(12.76, 33.72),
                    CreateItem(12.17, 69.71),
                    CreateItem(12.13, 26.69),
                    CreateItem(12.67, 26.34),
                    CreateItem(12.37, 30.22),
                    CreateItem(12.28, 31.67),
                    CreateItem(11.51, 32.39),
                    CreateItem(14.61, 32.76),
                    CreateItem(15.54, 39.77),
                    CreateItem(11.95, 16.66),
                    CreateItem(13.27, 34.44),
                    CreateItem(13.24, 77.14),
                    CreateItem(10.98, 40.17),
                    CreateItem(13.15, 21.97),
                    CreateItem(17.45, 49.17),
                    CreateItem(13.29, 35.11),
                    CreateItem(17.06, 46.49),
                    CreateItem(16.27, 42.08),
                    CreateItem(13.92, 29.99),
                    CreateItem(17.71, 143.78),
                    CreateItem(14.45, 51.88),
                    CreateItem(16.88, 67.26),
                    CreateItem(11.84, 22.18),
                    CreateItem(12.23, 18.08),
                    CreateItem(17.06, 42.89),
                    CreateItem(12.62, 29.75),
                    CreateItem(13.01, 65.76),
                    CreateItem(12.66, 13.41),
                    CreateItem(18.68, 59.84),
                    CreateItem(20.21, 91.07),
                    CreateItem(17.42, 40.7),
                    CreateItem(12.58, 19.29),
                    CreateItem(16.15, 69.22),
                    CreateItem(9.2, 8.6),
                    CreateItem(19.08, 126.15),
                    CreateItem(18.49, 80.9),
                    CreateItem(13.96, 82.48),
                    CreateItem(12.26, 63.15),
                    CreateItem(16.45, 43.21),
                    CreateItem(12.55, 27.8),
                    CreateItem(11.42, 28.9),
                    CreateItem(13.13, 19.63),
                    CreateItem(13.59, 25.1),
                    CreateItem(11.94, 58.58),
                    CreateItem(18.34, 40.11),
                    CreateItem(12.67, 28.85),
                    CreateItem(16.06, 74.86),
                    CreateItem(16.13, 44.62),
                    CreateItem(12.69, 25.78),
                    CreateItem(12.86, 29.46),
                    CreateItem(12.55, 20.98),
                    CreateItem(16.93, 45.56),
                    CreateItem(17.28, 66.67),
                    CreateItem(18.44, 113.05),
                    CreateItem(15.55, 53.75),
                    CreateItem(15.49, 24.39),
                    CreateItem(16.48, 26.11),
                    CreateItem(16.4, 46.02),
                    CreateItem(12.68, 74.92),
                    CreateItem(13.03, 70.16),
                    CreateItem(13.32, 97.08),
                    CreateItem(12.09, 65.51),
                    CreateItem(13.52, 78.39),
                    CreateItem(12.48, 73.6),
                    CreateItem(10.94, 32.51),
                    CreateItem(11.81, 27.06),
                    CreateItem(16.76, 62.38),
                    CreateItem(16.92, 49.22),
                    CreateItem(16.28, 47.29),
                    CreateItem(18.2, 41.15),
                    CreateItem(17.8, 62.59),
                    CreateItem(11.77, 61.13),
                    CreateItem(14.11, 64.17),
                    CreateItem(17.9, 100.01),
                    CreateItem(16.27, 41.78),
                    CreateItem(16.11, 34.13),
                    CreateItem(11.58, 30.16),
                    CreateItem(15.68, 39.8),
                    CreateItem(15.53, 40.91),
                    CreateItem(12.3, 28.37),
                    CreateItem(12.23, 16.18),
                    CreateItem(13.42, 99.7),
                    CreateItem(13.07, 68.85),
                    CreateItem(18.58, 116.31),
                    CreateItem(17.45, 55.72),
                    CreateItem(18.21, 147.75),
                    CreateItem(17.02, 112.19),
                    CreateItem(14.89, 63.39),
                    CreateItem(13.4, 71.57),
                    CreateItem(9.71, 13.65),
                    CreateItem(13.16, 32.39),
                    CreateItem(13.58, 27.51),
                    CreateItem(11.81, 23.06),
                    CreateItem(11.58, 30),
                    CreateItem(14.64, 42.92),
                    CreateItem(14.95, 38.65),
                    CreateItem(12.82, 38.52),
                    CreateItem(17.66, 46.36),
                    CreateItem(18.6, 76.56),
                    CreateItem(17.47, 82.17),
                    CreateItem(18.32, 74.9),
                    CreateItem(13.07, 26.3),
                    CreateItem(17.29, 67.35),
                    CreateItem(17.96, 59.86),
                    CreateItem(16.24, 71.17),
                    CreateItem(12.92, 30.36),
                    CreateItem(17.69, 63.66),
                    CreateItem(13.18, 26.69),
                    CreateItem(12.6, 29.36),
                    CreateItem(17.14, 45.21),
                    CreateItem(11.19, 10.53),
                    CreateItem(17.9, 70.58),
                    CreateItem(13.43, 77.72),
                    CreateItem(9.99, 49.11),
                    CreateItem(12.35, 80.04),
                    CreateItem(14.84, 44.22),
                    CreateItem(16.87, 47.88),
                    CreateItem(12.86, 28.84),
                    CreateItem(18.13, 59.26),
                    CreateItem(11.85, 26.85),
                    CreateItem(16.5, 43.38),
                    CreateItem(15.33, 41.29),
                    CreateItem(17.72, 48.95),
                    CreateItem(17.11, 52.62),
                    CreateItem(16.34, 41.51),
                    CreateItem(16.37, 43.95),
                    CreateItem(15.81, 40.45),
                    CreateItem(15.62, 44.98),
                    CreateItem(16.79, 46.85),
                    CreateItem(15.5, 38.3),
                    CreateItem(12.63, 26.85),
                    CreateItem(13.78, 38.55),
                    CreateItem(15.7, 40.81),
                    CreateItem(17.89, 64.97),
                    CreateItem(14.63, 40.39),
                    CreateItem(17.31, 58.32),
                    CreateItem(13.45, 29.48),
                    CreateItem(12.56, 26.89),
                    CreateItem(12.63, 28.95),
                    CreateItem(13.17, 27.4),
                    CreateItem(10.51, 20.1),
                    CreateItem(16.33, 51.45),
                    CreateItem(12.99, 17.24),
                    CreateItem(9.8, 27.96),
                    CreateItem(13.32, 30.16),
                    CreateItem(17.07, 111.38),
                    CreateItem(12.59, 83.36),
                    CreateItem(17.07, 56.24),
                    CreateItem(10.66, 23.17)
});
        }
    }

    public static class Program
    {
        public static void Main()
        {
            var vm = new ViewModel();

            Knockout.ApplyBindings(vm);
        }
    }
}
