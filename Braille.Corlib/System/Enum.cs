using System.Runtime.CompilerServices;
using CilJs.Runtime.TranslatorServices;

namespace System
{
    public class Enum : ValueType
    {
        public static Type GetUnderlyingType(Type enumType)
        {
            if (!enumType.IsEnum)
                throw new InvalidOperationException();

            return typeof(int);
        }
    }
}
