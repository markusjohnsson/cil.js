using CilJs.Ast;
using System.Linq;

namespace CilJs.Analysis.Passes
{
    class UnreachableRemoval: IAnalysisPass
    {
        public void Run(CilMethod method)
        {
            method.OpTree = method.OpTree
                //.Where(o => o.StackBefore != null) // unreachable
                .Where(
                    o => false == (
                        o.Instruction.OpCode.Name == "br.s" &&
                        ((o.Targeting.Count == 1 && o.Targeting[0] == o.Prev) || o.Targeting.Count == 0) &&
                        o.Targets.Count == 1 && 
                        o.Targets[0] == o.Next))
                .ToList();
        }
    }
}
