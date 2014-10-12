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
            return RuntimeType.GetRuntimeTypeFromHandle(handle);
        }

        /// <summary>
        ///   The assembly where the type is defined.
        /// </summary>
        public abstract Assembly Assembly
        {
            get;
        }

        public abstract string AssemblyQualifiedName { get; }

        public abstract bool IsGenericType { get; }

        public abstract bool IsGenericTypeDefinition { get; }

        public abstract Type[] GetGenericArguments();
    }
}