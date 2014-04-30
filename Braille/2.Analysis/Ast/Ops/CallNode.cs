using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.Ast
{
    class CallNode: OpExpression
    {
        public CilMethod Target { get; set; }

        public CallNode(OpInstruction op, List<OpInstruction> prefixes, int? popCount, int pushCount, CilMethod target): 
            base(op, prefixes, popCount, pushCount)
        {
            Target = target;
        }
    }
}
