using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;
using Braille.JavaScript;
using System.Reflection;

namespace System
{
    public abstract class Type : MemberInfo
    {
        public abstract string FullName { get; }

        public static Type GetTypeFromHandle(RuntimeTypeHandle handle)
        {
            return RuntimeType.GetRuntimeTypeFromHandle(handle);
        }

        public virtual bool IsSubclassOf(Type c)
        {
            if (c == null || c == this)
                return false;

            for (Type type = BaseType; type != null; type = type.BaseType)
                if (type == c)
                    return true;

            return false;
        }

        public bool IsEnum
        {
            get { return IsSubclassOf(typeof(Enum)); }
        }

        public abstract Assembly Assembly { get; }

        public abstract Type BaseType { get; }

        public abstract string AssemblyQualifiedName { get; }

        public abstract bool IsGenericType { get; }

        public abstract bool IsInterface { get; }

        public abstract bool IsGenericTypeDefinition { get; }

        public abstract Type[] GetGenericArguments();

        public abstract Type[] GetInterfaces();

        public abstract Type MakeGenericType(params Type[] args);

        public abstract bool IsAssignableFrom(Type type);

        public abstract string Name { get; }

        public abstract bool IsValueType { get; }

        public abstract bool IsPrimitive { get; }

        public abstract Type GetElementType();
    }
}