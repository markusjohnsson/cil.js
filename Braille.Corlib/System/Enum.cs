using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

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
