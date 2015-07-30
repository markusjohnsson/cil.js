
using CilJs.Runtime.TranslatorServices;

namespace CilJs.JavaScript
{
    public class Object
    {
        [JsImport("function (o) { return o === void 0; }")]
        public extern static bool IsUndefined(object o);
    }
}
