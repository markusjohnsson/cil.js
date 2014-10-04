using Braille.Runtime.TranslatorServices;
using System;
using System.Collections.Generic;

namespace KnockoutScatterPlot
{
    public abstract class KnockoutObservable<T>
    {
    }

    public abstract class KnockoutObservableArray<T>
    {
    }

    public class Knockout
    {
        [JsReplace("ko.observable({0})")]
        public extern static KnockoutObservable<T> Observable<T>(T o);

        [JsReplace("ko.observableArray({0} && {0}.jsarr)")]
        public extern static KnockoutObservableArray<T> ObservableArray<T>(T[] o = null);

        [JsReplace("ko.applyBindings({0})")]
        public extern static void ApplyBindings(object obj);
    }
}
