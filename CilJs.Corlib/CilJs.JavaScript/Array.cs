using CilJs.Runtime.TranslatorServices;
using System.Collections.Generic;

namespace CilJs.JavaScript
{
    public class Array: IEnumerable<object>
    {
        private Array() { }

        [JsReplace("[]")]
        public extern static Array New();

        public extern int Length
        {
            [JsReplace("{0}.length")]
            get;
        }

        public extern object this[int i]
        {
            [JsReplace("{0}[{1}]")]
            get;

            [JsReplace("{0}[{1}] = {2}")]
            set;
        }

        public IEnumerator<object> GetEnumerator()
        {
            var a = this;
            for (int i = 0; i < a.Length; i++)
            {
                yield return a[i];
            }
        }

        System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }
}
