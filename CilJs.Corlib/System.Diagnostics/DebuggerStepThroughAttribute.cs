
using System.Runtime.InteropServices;
namespace System.Diagnostics
{
    [SerializableAttribute]
    [ComVisibleAttribute(true)]
    [AttributeUsageAttribute(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Constructor | AttributeTargets.Method, Inherited = false)]
    public sealed class DebuggerStepThroughAttribute : Attribute
    { 
    }
}
