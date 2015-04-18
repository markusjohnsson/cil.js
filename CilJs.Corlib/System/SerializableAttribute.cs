using System;
using System.Runtime.InteropServices;

namespace System
{
    [ComVisibleAttribute(true)]
    [AttributeUsageAttribute(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Enum | AttributeTargets.Delegate, Inherited = false)]
    public sealed class SerializableAttribute : Attribute
    {
    }
}
