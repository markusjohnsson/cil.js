using System.Collections.Generic;

namespace Braille.Ast
{
    class OpTryCatchBlock : OpNode
    {
        public OpBlock TryBlock;
        public List<OpBlock> CatchBlocks;
        public OpBlock FinallyBlock;
        public OpBlock FaultBlock;
    }
}
