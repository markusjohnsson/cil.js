
using Braille.Runtime.TranslatorServices;
namespace Braille.Runtime.InteropServices
{
    public static class Marshal
    {
        [JsReplace("null")]
        private extern static object null_impl();

        public static object Null { get { return null_impl(); } }

        [JsReplace("({0}[{1}])")]
        public extern static object ArrayLookup(object arr, int index);

        [JsReplace("({0}[{1}.jsstr])")]
        public extern static object ObjectLookup(object arr, string property);

        [JsReplace("({0}.apply({1}, {2}.jsarr))")] 
        public extern static object Apply(object function, object thisobj, object[] args);
    }
}
