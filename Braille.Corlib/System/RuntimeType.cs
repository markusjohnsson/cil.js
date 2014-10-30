using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;
using Braille.JavaScript;
using System.Reflection;
using Braille.Runtime.InteropServices;

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
            internal constructor BaseType;
            internal Assembly.jsAsm Assembly;
            internal Braille.JavaScript.Array CustomAttributes;
            internal Braille.JavaScript.Array Methods;
            internal Type TypeInstance;
            internal int Hash;
            internal Braille.JavaScript.Boolean IsGenericTypeDefinition;
            internal Braille.JavaScript.Boolean IsInterface;
            internal Braille.JavaScript.Boolean IsValueType;
            internal Braille.JavaScript.Boolean IsPrimitive;
            internal object GenericArguments;
            internal object Interfaces;
        }

        internal constructor ctor;

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

        public override Assembly Assembly
        {
            get { return Assembly.GetInstance(ctor.Assembly); }
        }

        public override string FullName
        {
            get
            {
                if (IsSubclassOf(typeof(Array)))
                {
                    return GetElementType().FullName + "[]";
                }

                var s = string.FromJsString(ctor.FullName);

                if (IsGenericType && !IsGenericTypeDefinition)
                {
                    s += "[";

                    var ga = GetGenericArguments();
                    for (var i = 0; i < ga.Length; i++)
                        s += "[" + ga[i].AssemblyQualifiedName + "]";

                    s += "]";
                }

                return s;
            }
        }

        public override string AssemblyQualifiedName
        {
            get
            {
                return FullName + ", " + Assembly.FullName;
            }
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
            return GetCustomAttributesImpl(this.ctor.CustomAttributes, inherit);
        }

        public override object[] GetCustomAttributes(Type attributeType, bool inherit)
        {
            throw new NotImplementedException();
        }

        public override bool IsDefined(Type attributeType, bool inherit)
        {
            throw new NotImplementedException();
        }

        public override bool IsInterface
        {
            get { return (bool)ctor.IsInterface; }
        }

        public override bool IsGenericType
        {
            get { return (bool)ctor.IsGenericTypeDefinition; }
        }

        public override bool IsGenericTypeDefinition
        {
            get
            {
                if ((bool)ctor.IsGenericTypeDefinition == false)
                    return false;

                if (Marshal.ArrayLookup(ctor.GenericArguments, 0) == Marshal.Null)
                    return true;
                else
                    return false;
            }
        }

        public override Type MakeGenericType(params Type[] args)
        {
            if (!IsGenericTypeDefinition)
                throw new InvalidOperationException();

            var type_args = new constructor[args.Length];

            for (var i = 0; i < args.Length; i++)
                type_args[i] = ((RuntimeType)args[i]).ctor;

            var open_type = Marshal.ObjectLookup(ctor.Assembly, FullName);
            var closed_type = Marshal.Apply(open_type, null, type_args);

            return GetInstance(UnsafeCast<constructor>(closed_type));
        }

        public override Type[] GetGenericArguments()
        {
            var gargs = Array.FromJsArray<constructor>(ctor.GenericArguments);
            var result = new Type[gargs.Length];

            for (var i = 0; i < gargs.Length; i++)
                result[i] = GetInstance(gargs[i]);

            return result;
        }

        public override Type BaseType
        {
            get
            {
                if (ctor.BaseType == Marshal.Null)
                    return null;
                else
                    return GetInstance(ctor.BaseType);
            }
        }

        public override Type[] GetInterfaces()
        {
            var ifaces = Array.FromJsArray<constructor>(ctor.Interfaces);
            var result = new Type[ifaces.Length];

            for (var i = 0; i < ifaces.Length; i++)
                result[i] = GetInstance(ifaces[i]);

            return result;
        }

        public override bool IsAssignableFrom(Type type)
        {
            // indicates that a object reference of type 'type' can be asigned to a field of type 'this'

            if (type == null)
                return false;

            if (Equals(type))
                return true;

            if (type.IsSubclassOf(this))
                return true;

            if (type.IsInterface && Equals(typeof(object)))
                return true;

            if (IsInterface)
            {
                var ifaces = type.GetInterfaces();
                for (var i = 0; i < ifaces.Length; i++)
                    if (IsAssignableFrom(ifaces[i]))
                        return true;
            }

            return false;
        }

        [JsImport(@"
            function (s) {
                var idx = s.jsstr.lastIndexOf('.');
                return new_string(s.jsstr.substring(idx + 1));
            }
            ")]
        private static extern string GetName(string fullname);

        public override string Name
        {
            get
            {
                return GetName(FullName);
            }
        }

        public override bool IsValueType
        {
            get
            {
                return (bool)ctor.IsValueType;
            }
        }

        public override bool IsPrimitive
        {
            get
            {
                return (bool)ctor.IsPrimitive;
            }
        }

        public override Type GetElementType()
        {
            if (! IsSubclassOf(typeof(Array)))
                throw new Exception("Invalid operation");

            return GetGenericArguments()[0];
        }

        public override MethodInfo[] GetMethods()
        {
            var baseMethods = this.BaseType != null ?
                this.BaseType.GetMethods() :
                new MethodInfo[0];
            
            var len = baseMethods.Length + ctor.Methods.Length;
            var currLen = ctor.Methods.Length;
            var baseLen = baseMethods.Length;
            var result = new MethodInfo[len];

            for (var i = 0; i < currLen; i++)
            {
                result[i] = MethodInfo.GetInstance(UnsafeCast<Braille.JavaScript.Array>(ctor.Methods[i]));
            }

            for (var i = 0; i < baseLen; i++)
            {
                result[i + currLen] = baseMethods[i];
            }

            return result;
        }
    }
}
