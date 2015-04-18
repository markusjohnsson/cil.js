using Mono.Cecil.Cil;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.Ast
{
    class CallNode: OpExpression
    {
        public CilMethod Target { get; set; }

        public CallNode(OpInstruction op, List<OpInstruction> prefixes, Instruction cecilInstruction, int? popCount, int pushCount, CilMethod target):
            base(op, prefixes, cecilInstruction, popCount, pushCount)
        {
            Target = target;
        }
    }
}
