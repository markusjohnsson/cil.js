using Managed.Reflection;
using System.Collections.Generic;

namespace CilJs.Ast
{
    class StackUseDefinition
    {
        public OpExpression Usage;
        public List<Node> Definitions;
        public VariableInfo Variable;
        public Type Type;
    }
}
