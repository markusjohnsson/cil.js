
using Braille.Runtime.TranslatorServices;
namespace Braille.Runtime
{
    internal class UnboundGenericParameter
    {
        internal readonly static UnboundGenericParameter Instance = new UnboundGenericParameter();

        [JsAssemblyStatic]
        public static UnboundGenericParameter GetUnboundGenericParameter()
        {
            return Instance;
        }
    }
}
