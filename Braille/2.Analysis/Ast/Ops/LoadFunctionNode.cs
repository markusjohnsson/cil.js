using Braille.Ast;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.Ast
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
