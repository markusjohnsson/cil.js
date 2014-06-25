
using System;
using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public class Object
    {
        [JsImport("function (a, b) { return Number(a === b); }")]
        private extern static bool ReferenceEqualsImpl(object a, object b);

        [JsImport("function (o) { return o.constructor; }")]
        private static extern Type GetTypeImpl(object p);

        [JsImport("function (o) { return o.hash || (o.hash = asm0.next_hash++); }")]
        private static extern int GetHashCode(object o);

        [JsPrototypeAccessible]
        [JsImport("function () { return asm0.ToJavaScriptString(this); }")]
        private extern object toString();

        public virtual string ToString()
        {
            return "System.Object";
        }

        public virtual int GetHashCode()
        {
            return GetHashCode(this);
        }

        [JsAssemblyStatic]
        internal static object ToJavaScriptString(Object o)
        {
            if (o == null)
                return "".jsstr;
            else
                return o.ToString().jsstr;
        }

        public static bool ReferenceEquals(object a, object b)
        {
            return ReferenceEqualsImpl(a, b);
        }

        public virtual bool Equals(object other)
        {
            return ReferenceEquals(this, other);
        }

        public Type GetType()
        {
            return GetTypeImpl(this);
        }
    }
}