using IKVM.Reflection;
using System.Collections.Generic;

namespace Braille.Ast
{
    class StackUseDefinition
    {
        public OpExpression Usage;
        public List<Node> Definitions;
        public VariableInfo Variable;
        public Type Type;
    }
}
