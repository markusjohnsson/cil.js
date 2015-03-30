using Mono.Cecil.Cil;
using System.Collections.Generic;

namespace Braille.Ast
{
    class LoadFunctionNode: OpExpression
    {
        public CilMethod Target { get; set; }

        public LoadFunctionNode(OpInstruction op, List<OpInstruction> prefixes, Instruction cecilInstruction, int? popCount, int pushCount, CilMethod target) :
            base(op, prefixes, cecilInstruction, popCount, pushCount)
        {
            Target = target;
        }
    }
}
