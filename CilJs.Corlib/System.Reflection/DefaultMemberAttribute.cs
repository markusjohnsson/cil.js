using System.Runtime.CompilerServices;

namespace System.Reflection
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct |
            AttributeTargets.Interface)]
    public sealed class DefaultMemberAttribute : Attribute
    {
        string member_name;

        public DefaultMemberAttribute(string memberName)
        {
            this.member_name = memberName;
        }

        public string MemberName
        {
            get
            {
                return member_name;
            }
        }
    }
}
