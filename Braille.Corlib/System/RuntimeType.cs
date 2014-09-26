using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;
using Braille.JavaScript;
using System.Reflection;

namespace System
{
    sealed internal class RuntimeType : Type
    {
        // o.constructor for reference types, o.type for (boxed) value types
        [JsImport("function (o) { return o.type || o.constructor; }")]
        internal static extern constructor GetConstructor(object p);

        internal class constructor
        {
            internal object FullName;
            internal object CustomAttributes;
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
            if (!UnsafeCast<bool>(ctor.TypeInstance))
                ctor.TypeInstance = new RuntimeType(ctor);

            return ctor.TypeInstance;
        }

        public static Type GetType(object o)
        {
            return GetInstance(GetConstructor(o));
        }

        public static Type GetRuntimeTypeFromHandle(RuntimeTypeHandle handle)
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

        public override object[] GetCustomAttributes(bool inherit)
        {
            throw new NotImplementedException();
        }

        public override object[] GetCustomAttributes(Type attributeType, bool inherit)
        {
            throw new NotImplementedException();
        }

        public override Assembly Assembly
        {
            get { throw new NotImplementedException(); }
        }

        public override bool IsDefined(Type attributeType, bool inherit)
        {
            throw new NotImplementedException();
        }
    }
}
