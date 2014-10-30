using System.Reflection;

namespace System.Reflection
{
    public class MethodInfo : MemberInfo
    {
        private Braille.JavaScript.Array mtd;

        private MethodInfo() { }

        internal static MethodInfo GetInstance(Braille.JavaScript.Array m)
        {
            return new MethodInfo { mtd = m };
        }

        public override object[] GetCustomAttributes(bool inherit)
        {
            return GetCustomAttributesImpl(mtd[2]);
        }

        public override object[] GetCustomAttributes(Type attributeType, bool inherit)
        {
            throw new NotImplementedException();
        }

        public override bool IsDefined(Type attributeType, bool inherit)
        {
            throw new NotImplementedException();
        }

        public override string Name
        {
            get
            {
                return (string)UnsafeCast<Braille.JavaScript.String>(mtd[1]);
            }
        }
    }
}
