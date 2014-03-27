using System.Collections.Generic;

namespace Braille.Ast
{
    class StackUseDefinition
    {
        public OpExpression Usage;
        public List<OpNode> Definitions;
        public VariableInfo Variable;
    }
}
