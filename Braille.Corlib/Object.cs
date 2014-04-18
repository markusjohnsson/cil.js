
using System;
using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
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
        public override string ToString()
        {
            return this ? "True" : "False";
        }
    }

    public struct Byte
    {
        public override string ToString()
        {
            return InternalFormatting.NumberStructToString(this);
        }
    }

    public struct Char
    {
        public const char MinValue = (char)0;
        public const char MaxValue = (char)65535;

        public override string ToString()
        {
            return ToStringImpl(this);
        }

        [JsImport("function(o) { return new_string(String.fromCharCode(o.boxed)); }")]
        private extern static string ToStringImpl(object o);
    }

    public class Console
    {
        [JsImport("(function (o) { console.log(o); })")]
        internal extern static void WriteLineImpl(object s);

        public static void WriteLine(object s)
        {
            WriteLineImpl(s.ToString());
        }
    }

    public class Delegate
    {
    }

    public struct Double
    {
        public const double Epsilon = 4.9406564584124650e-324;
        public const double MaxValue = 1.7976931348623157e308;
        public const double MinValue = -1.7976931348623157e308;
        public const double NaN = 0.0d / 0.0d;
        public const double NegativeInfinity = -1.0d / 0.0d;
        public const double PositiveInfinity = 1.0d / 0.0d;

        public override string ToString()
        {
            return InternalFormatting.NumberStructToString(this);
        }
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

    public class InvalidOperationException : Exception
    {
        public InvalidOperationException(string message)
            : base(message)
        {

        }
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
        public override string ToString()
        {
            return InternalFormatting.NumberStructToString(this);
        }
    }

    public struct Int32
    {
        public override string ToString()
        {
            return InternalFormatting.NumberStructToString(this);
        }
    }

    internal static class InternalFormatting
    {
        [JsImport("function(o) { return new_string(o.boxed.toString()); }")]
        internal extern static string NumberStructToString(object o);
    }

    public struct Int64
    {
        public override string ToString()
        {
            return InternalFormatting.NumberStructToString(this);
        }
    }

    public struct IntPtr
    {
        public override string ToString()
        {
            return InternalFormatting.NumberStructToString(this);
        }
    }

    public class Math
    {
        public const double PI = 3.14159265359;
        
        public static double Sqrt(double v)
        {
            return SqrtImpl(v);
        }

        public static double Floor(double v)
        {
            return FloorImpl(v);
        }

        public static double Pow(double v, double exponent)
        {
            return PowImpl(v, exponent);
        }

        [JsImport("function(o) { return Math.sqrt(o.boxed); }")]
        internal extern static double SqrtImpl(object v);

        [JsImport("function(o) { return Math.floor(o.boxed); }")]
        internal extern static double FloorImpl(object v);

        [JsImport("function(a, b) { return Math.pow(a.boxed, b.boxed); }")]
        internal extern static double PowImpl(object a, object b);

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
        public override string ToString()
        {
            return InternalFormatting.NumberStructToString(this);
        }
    }

    public struct Single
    {
        public override string ToString()
        {
            return InternalFormatting.NumberStructToString(this);
        }
    }

    public class Type
    {
    }

    public struct UInt16
    {
        public override string ToString()
        {
            return InternalFormatting.NumberStructToString(this);
        }
    }

    public struct UInt32
    {
        public override string ToString()
        {
            return InternalFormatting.NumberStructToString(this);
        }
    }

    public struct UInt64
    {
        public override string ToString()
        {
            return InternalFormatting.NumberStructToString(this);
        }
    }

    public struct UIntPtr
    {
        public override string ToString()
        {
            return InternalFormatting.NumberStructToString(this);
        }
    }

    public class ValueType
    {
    }

    public struct Void
    {
    }

    public class NotSupportedException : Exception
    {
        public NotSupportedException(): base("Operation not supported")
        {
        }

        public NotSupportedException(string message)
            : base(message)
        {

        }
    }

    public class NotImplementedException : Exception
    {
    }

    public static class Environment
    {
        public static int CurrentManagedThreadId { get { return 0; } }
    }

    public class Object
    {
        [JsImport("function (a, b) { return a === b; }")]
        private extern static bool ReferenceEqualsImpl(object a, object b);

        [JsImport("function (o) { return o.constructor; }")]
        private static extern Type GetTypeImpl(object p);

        public virtual string ToString()
        {
            return "System.Object";
        }

        public virtual int GetHashCode()
        {
            return 0;
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

    public delegate TResult Func<T, TResult>(T arg);
}

namespace Braille.Runtime
{
    [JsIgnore]
    internal class ManagedPointer<T>
    {
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
        IEnumerator GetEnumerator();
    }

    public interface IEnumerator : IDisposable
    {
        object Current { get; }
        bool MoveNext();
        void Reset();
    }
}

namespace System.Collections.Generic
{
    public interface IEnumerable<T>: IEnumerable
    {
        IEnumerator<T> GetEnumerator();
    }

    public interface IEnumerator<T>: IEnumerator, IDisposable
    {
        T Current { get; }
        bool MoveNext();
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

    [AttributeUsage(AttributeTargets.Method, Inherited = true)]
    public sealed class ExtensionAttribute : Attribute
    { 
    }
}

namespace System.Runtime.Versioning
{
    [JsIgnore]
    public class TargetFrameworkAttribute : Attribute
    {
    }
}
