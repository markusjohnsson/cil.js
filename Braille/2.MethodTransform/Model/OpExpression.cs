using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Braille.MethodTransform
{
    class OpNode
    { 
    }

    enum OpBlockType { Try, Catch, CatchWrapper, Finally, Fault }

    class OpBlock : OpNode
    {
        public OpBlockType Type;
        public string ExceptionType { get; set; }
        List<OpNode> Nodes;
    }

    class OpTryCatchBlock : OpNode
    {
        public OpBlock TryBlock;
        public List<OpBlock> CatchBlocks;
        public OpBlock FinallyBlock;
        public OpBlock FaultBlock;
    }

    //class OpExpression : OpNode
    //{
    //    public OpInstruction Instruction;
    //    public List<OpExpression> Arguments = new List<OpExpression>();

    //    public bool IsLabel { get; set; }

    //    public bool ContainsPosition(int position)
    //    {
    //        if (Instruction == null)
    //            return false;
    //        return (Instruction.Position == position) || Arguments.Any(v => v.ContainsPosition(position));
    //    }

    //    public int GetStartPosition()
    //    {
    //        if (Arguments.Any())
    //            return Math.Min(Instruction.Position, Arguments.Min(v => v.GetStartPosition()));
    //        else if (Instruction != null)
    //            return Instruction.Position;
    //        else
    //            return -1;
    //    }

    //    public ExceptionHandlingClause Handler { get; set; }

    //    public IEnumerable<OpExpression> Postfix()
    //    {
    //        foreach (var val in Arguments)
    //            foreach (var c in val.Postfix().Where(x => x != null))
    //                yield return c;

    //        yield return this;
    //    }
    //}
}
