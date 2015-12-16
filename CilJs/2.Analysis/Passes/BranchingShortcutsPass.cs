using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CilJs.Ast;
using IKVM.Reflection.Emit;

namespace CilJs.Analysis.Passes
{
    class BranchingShortcutsPass : IAnalysisPass
    {
        public void Run(CilMethod method)
        {
            foreach (var op in method.OpTree)
            {
                if (op.Instruction == null)
                    continue;

                if (op.Instruction.OpCode.FlowControl == FlowControl.Branch ||
                    op.Instruction.OpCode.FlowControl == FlowControl.Cond_Branch)
                {
                    if (op.Instruction.OpCode.Name.StartsWith("leave"))
                        continue; // cannot handle this case

                    if (op.Instruction.OpCode.Name == "switch")
                        continue; // TODO: handle this too..

                    var targetPosition = GetTargetPosition(op.Instruction);
                    var target = method
                        .OpTree
                        .Where(p => p.Instruction != null)
                        .SkipWhile(p => p.Instruction.Position != targetPosition)
                        .SkipWhile(p => p.Instruction.OpCode.Name == "nop")
                        .First()
                        ;

                    if (op.Instruction.OpCode.Name.StartsWith("leave"))
                        continue; 
                    
                    if (target.Instruction.OpCode.FlowControl == FlowControl.Branch)
                    {
                        var pos = GetTargetPosition(target.Instruction);
                        op.Instruction.Data = CalculateData(op.Instruction, pos);
                    }
                }
            }
        }
        
        private int CalculateData(OpInstruction i, int pos)
        {
            return pos - 1 - i.Position - i.Size;
        }

        private int GetTargetPosition(OpInstruction i)
        {
            int data;
            if (i.Data is byte)
                data = (sbyte)(byte)i.Data;
            else if (i.Data is int)
                data = (int)i.Data;
            else
                data = 0;

            return 1 + i.Position + i.Size + data;
        }

    }
}
