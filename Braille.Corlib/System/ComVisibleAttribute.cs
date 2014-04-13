using System.Text;

namespace System
{
    [AttributeUsage(AttributeTargets.Class)]
    public sealed class ComVisibleAttribute : Attribute
    {
        public ComVisibleAttribute(bool serializable)
        {
        }
    }
}
