using System.Collections.Generic;
using Type = IKVM.Reflection.Type;

namespace CilJs
{
    public static class TypeExtensions
    {
        public static IEnumerable<Type> GetTypeChain(this IKVM.Reflection.Type node)
        {
            while (node != null)
            {
                yield return node;
                node = node.BaseType;
            }
        }
    }
}
