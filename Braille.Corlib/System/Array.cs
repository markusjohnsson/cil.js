using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public class Array
    {
        internal object type;
        internal object jsarr;
        
        public int Length { get { return GetLengthImpl(this); } }

        [JsImport("function(o) { return o.jsarr.length; }")]
        private extern static int GetLengthImpl(object s);

        [JsImport("function(o, i) { return box(o.jsarr[i], o.type); }")]
        private extern static object GetValueImpl(object s, int i);

        public object GetValue(int index)
        {
            return GetValueImpl(this, index);
        }
    }
}
