using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;
using Braille.JavaScript;

namespace System
{
    public abstract class MemberInfo
    {
    }

    public abstract class Type: MemberInfo
    {
        public abstract string FullName { get; }

        public static Type GetTypeFromHandle(RuntimeTypeHandle handle)
        {
            return new RuntimeType(handle.value);
        }

    }

    sealed internal class RuntimeType : Type
    {
        [JsImport("function (o) { return o.type || o.constructor; }")] // constructor for reference types, type for (boxed) value types
        internal static extern constructor GetConstructor(object p);

        internal class constructor
        {
            internal object FullName;
        }

        constructor ctor;

        internal RuntimeType(object ctor)
        {
            this.ctor = UnsafeCast<constructor>(ctor);
        }

        public static Type GetType(object o)
        {
            return new RuntimeType(GetConstructor(o));
        }

        public override string FullName
        {
            get { return string.FromJsString(ctor.FullName); }
        }

        public override bool Equals(object other)
        {
            var type = other as RuntimeType;
            return ctor == type.ctor;
        }
    }
}
