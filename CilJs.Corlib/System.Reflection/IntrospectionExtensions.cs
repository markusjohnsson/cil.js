
namespace System.Reflection
{
    public static class IntrospectionExtensions 
    {
        public static TypeInfo GetTypeInfo(this Type type) 
        {
            return (TypeInfo)type;
        }
    }
}