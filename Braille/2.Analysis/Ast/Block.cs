using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Type = IKVM.Reflection.Type;

namespace Braille.Ast
{
    enum BlockKind { Normal, Try, Catch, Fault, Finally }
    
    class ProtectedRegion : Node
    {
        public TryBlock TryBlock;
        public List<CatchBlock> CatchBlocks;
        public FinallyBlock FinallyBlock;
        public FaultBlock FaultBlock;
    }

    class Block : Node
    {
        public BlockKind Kind;
        public List<Node> Ast = new List<Node>();

        public Block(BlockKind blockType)
        {
            Kind = blockType;
        }
    }

    class CatchBlock : Block
    {
        public CatchBlock(Type type)
            : base(BlockKind.Catch)
        {
            this.CatchType = type;
        }

        public Type CatchType { get; set; }
    }

    class TryBlock : Block
    {
        public TryBlock()
            : base(BlockKind.Try)
        {
        }
    }

    class FinallyBlock : Block
    {
        public FinallyBlock()
            : base(BlockKind.Finally)
        {
        }
    }

    class FaultBlock : Block
    {
        public FaultBlock()
            : base(BlockKind.Fault)
        {
        }
    }
}
