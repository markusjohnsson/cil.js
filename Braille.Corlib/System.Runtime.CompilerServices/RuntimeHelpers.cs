
using Braille.Runtime.TranslatorServices;
namespace System.Runtime.CompilerServices
{
    public class RuntimeHelpers
    {
        [JsImport(@"
            function (arr, handle) {
                handle.value.type();
                var data = new Int8Array(handle.value.type[handle.value.field]);
                arr.jsarr = new arr.etype.ArrayType(data.buffer);   
            }
            ")]
        public extern static void InitializeArray(Array array, RuntimeFieldHandle handle);
    }
}