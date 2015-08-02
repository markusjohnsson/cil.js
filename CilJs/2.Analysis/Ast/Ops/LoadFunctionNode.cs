using System.Collections.Generic;

namespace CilJs.Ast
{
    class LoadFunctionNode: OpExpression
    {
        public CilMethod Target { get; set; }

        public LoadFunctionNode(OpInstruction op, List<OpInstruction> prefixes, int? popCount, int pushCount, CilMethod target) :
            base(op, prefixes, popCount, pushCount)
        {
            Target = target;
        }
    }
}
