using System.Runtime.CompilerServices;

namespace System.Reflection
{
    public abstract class MemberInfo : ICustomAttributeProvider
    {
        public abstract object[] GetCustomAttributes(bool inherit);

        public abstract object[] GetCustomAttributes(Type attributeType, bool inherit);

        public abstract bool IsDefined(Type attributeType, bool inherit);
    }
}
