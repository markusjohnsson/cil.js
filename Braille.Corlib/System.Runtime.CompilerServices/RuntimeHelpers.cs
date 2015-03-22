
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
        internal extern static void InitializeArrayImpl(Array array, RuntimeFieldHandle handle);

        [JsReplace("new Uint32Array([{0},{1}])")]
        internal extern static long Make(uint a, uint b);

        public static void InitializeArray(Array array, RuntimeFieldHandle handle)
        {
            if (array is long[] || array is ulong[])
            {
                var target = ((long[])array);
                var arr = new uint[0];
                
                InitializeArrayImpl(arr, handle);

                for (int i = 0, j = 0; i < array.Length; i++, j += 2)
                    target[i] = Make(arr[j], arr[j + 1]);
            }
            else
            {
                InitializeArrayImpl(array, handle);
            }
        }
    }
}