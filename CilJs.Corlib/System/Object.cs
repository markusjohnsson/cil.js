using CilJs.Runtime.TranslatorServices;
using System.Reflection;

namespace System
{
    public class Object
    {
        public Object()
        {
        }

        [JsImport("function (a, b) { return Number(a === b); }")]
        private extern static bool ReferenceEqualsImpl(object a, object b);

        [JsImport("function (o) { return o.hash || (o.hash = CILJS.next_hash++); }")]
        private static extern int GetHashCode(object o);

        [JsReplace("{0}")]
        internal static extern T UnsafeCast<T>(object p);

        [JsPrototypeAccessible]
        [JsImport("function () { return asm0.ToJavaScriptString(this); }")]
        private extern object toString();

        public virtual string ToString()
        {
            return "System.Object";
        }

        // TODO: get rid of this method, better to have a conversion on String objects. This makes little to no sense.
        [JsAssemblyStatic]
        internal static object ToJavaScriptString(Object o)
        {
            if (o == null)
                return "".jsstr;
            else
            {
                var str = o.ToString();
                if (str == null)
                    return null;
                else
                    return str.jsstr;
            }
        }

        public static bool ReferenceEquals(object a, object b)
        {
            return ReferenceEqualsImpl(a, b);
        }

        public virtual bool Equals(object other)
        {
            return ReferenceEquals(this, other);
        }

        public virtual int GetHashCode()
        {
            return GetHashCode(this);
        }

        public Type GetType()
        {
            return TypeInfo.GetType(this);
        }

        public static bool Equals(object a, object b)
        {
            if (ReferenceEquals(a, b))
                return true;

            if (ReferenceEquals(a, null))
                return false;

            return a.Equals(b);
        }
    }
}