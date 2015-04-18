using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;
using CilJs.JavaScript;
using System.Reflection;
using CilJs.Runtime.InteropServices;
using CilJs.Runtime;

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
            internal CilJs.JavaScript.Array CustomAttributes;
            internal CilJs.JavaScript.Array Methods;
            internal Type TypeInstance;
            internal int Hash;
            internal CilJs.JavaScript.Boolean IsGenericTypeDefinition;
            internal CilJs.JavaScript.Boolean IsInterface;
            internal CilJs.JavaScript.Boolean IsValueType;
            internal CilJs.JavaScript.Boolean IsPrimitive;
            internal object GenericArguments;
            internal object Interfaces;
            internal CilJs.JavaScript.String MetadataName;
        }

        internal constructor ctor;

        private RuntimeType(constructor ctor)
        {
            this.ctor = ctor;
            init(ctor);
        }

        [JsReplace("{0}.init()")]
        extern static void init(constructor ctor);

        [JsAssemblyStatic(Name = "GetReflectionType")]
        internal static Type GetInstance(constructor ctor)
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
            return GetCustomAttributesImpl(this.ctor.CustomAttributes);
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

                var l = Marshal.ArrayLookup(Marshal.ObjectLookup(ctor.GenericArguments, (string)ctor.MetadataName), 0);
                var g = UnsafeCast<constructor>(l);

                if (string.FromJsString(g.FullName) == "CilJs.Runtime.UnboundGenericParameter")
                    return true;
                else
                    return false;
            }
        }

        public override Type MakeGenericType(params Type[] args)
        {
            if (!IsGenericTypeDefinition)
                throw new InvalidOperationException();

            var typeArgs = CilJs.JavaScript.Array.New();

            for (var i = 0; i < args.Length; i++)
                typeArgs[i] = ((RuntimeType)args[i]).ctor;

            var openType = Marshal.ObjectLookup(ctor.Assembly, FullName);
            var closedType = Marshal.Apply(openType, null, typeArgs);

            return GetInstance(UnsafeCast<constructor>(closedType));
        }

        public override Type[] GetGenericArguments()
        {
            var gargs = Array.FromJsArray<constructor>(Marshal.ObjectLookup(ctor.GenericArguments, (string)ctor.MetadataName));
            var result = new Type[gargs.Length];

            for (var i = 0; i < gargs.Length; i++)
                result[i] = GetInstance(gargs[i]);

            return result;
        }

        public override Type BaseType
        {
            get
            {
                if (!UnsafeCast<bool>(ctor.BaseType))
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
            // indicates that a object reference of type 'type' can be assigned to a field of type 'this'

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
                return CILJS.new_string(s.jsstr.substring(idx + 1));
            }
            ")]
        private static extern string GetName(string fullname);

        public override string Name
        {
            get
            {
                if (IsSubclassOf(typeof(Array)))
                {
                    return GetElementType().Name + "[]";
                }

                var s = string.FromJsString(ctor.FullName);

                return GetName(s);
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
            if (!IsSubclassOf(typeof(Array)))
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
                result[i] = MethodInfo.GetInstance(UnsafeCast<CilJs.JavaScript.Array>(ctor.Methods[i]));
            }

            for (var i = 0; i < baseLen; i++)
            {
                result[i + currLen] = baseMethods[i];
            }

            return result;
        }

        [JsReplace("({1}.IsInst({0}) ? 1: 0)")]
        private static extern bool IsInstanceOfTypeImpl(object value, object ctor);

        public override bool IsInstanceOfType(object value)
        {
            return IsInstanceOfTypeImpl(value, ctor);
        }
    }
}
