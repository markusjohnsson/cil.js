using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;
using Braille.JavaScript;
using System.Reflection;

namespace System
{
    public abstract class Type: MemberInfo
    {
        public abstract string FullName { get; }

        public static Type GetTypeFromHandle(RuntimeTypeHandle handle)
        {
            return RuntimeType.GetTypeFromHandle(handle);
        }

    }

    sealed internal class RuntimeType : Type
    {
        [JsImport("function (o) { return o.type || o.constructor; }")] // constructor for reference types, type for (boxed) value types
        internal static extern constructor GetConstructor(object p);

        internal class constructor
        {
            internal object FullName;
            internal Type TypeInstance;
            internal int Hash;
        }

        constructor ctor;

        private RuntimeType(constructor ctor)
        {
            this.ctor = ctor;
        }

        private static Type GetInstance(constructor ctor)
        { 
            if (! UnsafeCast<bool>(ctor.TypeInstance))
                ctor.TypeInstance = new RuntimeType(ctor);

            return ctor.TypeInstance;
        }

        public static Type GetType(object o)
        {
            return GetInstance(GetConstructor(o));
        }

        public static Type GetTypeFromHandle(RuntimeTypeHandle handle)
        {
            return GetInstance(UnsafeCast<constructor>(handle.value));
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

        public override int GetHashCode()
        {
            if (!UnsafeCast<bool>(ctor.Hash))
                ctor.Hash = base.GetHashCode();

            return ctor.Hash;
        }
    }
}
