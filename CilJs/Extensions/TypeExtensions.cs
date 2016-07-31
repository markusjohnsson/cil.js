using System.Collections.Generic;
using Type = Managed.Reflection.Type;

namespace CilJs
{
    public static class TypeExtensions
    {
        public static IEnumerable<Type> GetTypeChain(this Managed.Reflection.Type node)
        {
            while (node != null)
            {
                yield return node;
                node = node.BaseType;
            }
        }
    }
}
