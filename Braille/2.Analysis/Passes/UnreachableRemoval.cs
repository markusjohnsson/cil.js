using Braille.Ast;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.Analysis.Passes
{
    class UnreachableRemoval: IRewriter
    {
        public void Run(CilMethod method)
        {
            method.OpTree = method.OpTree
                //.Where(o => o.StackBefore != null) // unreachable
                .Where(
                    o => false == (
                        o.Instruction.OpCode.Name == "br.s" &&
                        o.Targeting.Count == 1 && o.Targeting[0] == o.Prev &&
                        o.Targets.Count == 1 && o.Targets[0] == o.Next))
                .ToList();
        }
    }
}
