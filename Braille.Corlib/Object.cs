
using System;
using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public class Array
    {
        public int Length { get; private set; }
    }

    [AttributeUsageAttribute(AttributeTargets.Class, Inherited = true)]
    public sealed class AttributeUsageAttribute : Attribute
    {
        public AttributeUsageAttribute(AttributeTargets targets)
        {
            ValidOn = targets;
        }

        public AttributeTargets ValidOn { get; private set; }

        public bool Inherited { get; set; }
    }

    public struct Boolean
    {
    }

    public struct Byte
    {
    }

    public struct Char
    {
        public const char MinValue = (char)0;
        public const char MaxValue = (char)65535;
    }

    public class Console
    {
        public static void WriteLine(object s) { }
    }

    public class Delegate
    {
    }

    public struct Double
    {
    }

    public class Enum : ValueType
    {
    }

    public class Exception
    {
        public Exception()
        {
        }

        public Exception(string message)
        {
            Message = message;
        }

        public string Message { get; set; }
    }

    [AttributeUsage(AttributeTargets.Enum, Inherited = false)]
    public class FlagsAttribute : Attribute
    {

    }

    public interface IDisposable
    {
        void Dispose();
    }

    public interface ICloneable
    {
        object Clone();
    }

    public struct Int16
    {
    }

    public struct Int32
    {
        public override string ToString()
        {
            return ToStringImpl(this);
        }

        [JsImport("function(o) { return new_string(o.boxed.toString()); }")]
        private extern static string ToStringImpl(object o);
    }

    public struct Int64
    {
    }

    public struct IntPtr
    {
    }

    public class Math
    {
        public const double PI = 3.14159265359;
    }

    public class MulticastDelegate : Delegate
    {
    }

    public class ParamArrayAttribute : Attribute
    {
    }

    public struct RuntimeFieldHandle
    {
    }

    public struct RuntimeTypeHandle
    {
    }

    public struct SByte
    {
    }

    public struct Single
    {
    }

    public class Type
    {
    }

    public struct UInt16
    {
    }

    public struct UInt32
    {
    }

    public struct UInt64
    {
    }

    public struct UIntPtr
    {
    }

    public class ValueType
    {
    }

    public struct Void
    {
    }

    public class Object
    {
        [JsImport("function (a, b) { return a === b; }")]
        private extern static bool ReferenceEqualsImpl(object a, object b);

        public virtual string ToString()
        {
            return "System.Object";
        }

        [JsAssemblyStatic]
        internal static object ToJavaScriptString(Object o)
        {
            return o.ToString().jsstr;
        }

        public static bool ReferenceEquals(object a, object b)
        {
            return ReferenceEqualsImpl(a, b);
        }

    }
}

namespace Braille.Runtime.TranslatorServices
{
    [JsIgnore]
    [AttributeUsage(AttributeTargets.Method)]
    internal class JsPrototypeAccessibleAttribute : Attribute
    {
    }
    [JsIgnore]
    [AttributeUsage(AttributeTargets.Method)]
    internal class JsAssemblyStaticAttribute : Attribute
    {
    }
    [JsIgnore]
    [AttributeUsage(AttributeTargets.Method)]
    internal class JsReplaceAttribute : Attribute
    {
        public JsReplaceAttribute(string replacement)
        {
            Replacement = replacement;
        }

        public string Replacement { get; set; }
    }
    [JsIgnore]
    [AttributeUsage(AttributeTargets.Method)]
    internal class JsImportAttribute : Attribute
    {
        public JsImportAttribute(string function)
        {
            Function = function;
        }

        public string Function { get; set; }
    }
    [JsIgnore]
    internal class JsIgnoreAttribute : Attribute
    {
    }
}

namespace System.Diagnostics
{
    using Braille.Runtime.TranslatorServices;
    public class Debugger
    {
        [JsReplace("debugger")]
        public extern static void Break();
    }
}

namespace System.Collections
{
    public interface IEnumerable
    {
    }

    public interface IEnumerator
    {
    }

}

namespace System.Runtime.InteropServices
{
    public class OutAttribute : Attribute
    {
    }
}

namespace System.Runtime.CompilerServices
{

    [AttributeUsage(AttributeTargets.Property, Inherited = true)]
    public sealed class IndexerNameAttribute : Attribute
    {
        public IndexerNameAttribute(string indexerName)
        {
        }
    }
}

namespace System.Runtime.Versioning
{
    public class TargetFrameworkAttribute : Attribute
    {
    }
}
