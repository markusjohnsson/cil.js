
using System.Runtime.CompilerServices;
namespace System
{
    public class Array
    {
        public int Length { get; private set; }
    }

    [AttributeUsage(AttributeTargets.All)]
    public class Attribute
    {
    }

    [Flags]
    public enum AttributeTargets
    {
        Assembly = 0x00000001,
        Module = 0x00000002,
        Class = 0x00000004,
        Struct = 0x00000008,
        Enum = 0x00000010,
        Constructor = 0x00000020,
        Method = 0x00000040,
        Property = 0x00000080,
        Field = 0x00000100,
        Event = 0x00000200,
        Interface = 0x00000400,
        Parameter = 0x00000800,
        Delegate = 0x00001000,
        ReturnValue = 0x00002000,

        GenericParameter = 0x00004000,
        All = Assembly | Module | Class | Struct | Enum | Constructor |
            Method | Property | Field | Event | Interface | Parameter | Delegate | ReturnValue | GenericParameter
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

    public class Enum: ValueType
    {
    }

    public class Exception
    {
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

    public class ParamArrayAttribute: Attribute
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

    public class String
    {
        [IndexerName("Chars")]
        public char this[int i] { get { throw new Exception("Direct call not supported."); } }

        public static string Concat(string a, string b)
        {
            throw new Exception("Not implemented.");
        }

        public static string Concat(object a, object b)
        {
            throw new Exception("Not implemented.");
        }

        public static string Concat(params string[] args)
        {
            throw new Exception("Not implemented.");
        }

        public static string Concat(params object[] args)
        {
            throw new Exception("Not implemented.");
        }

        public int Length { get; private set; }
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
        public virtual string ToString()
        {
            return "System.Object";
        }
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
