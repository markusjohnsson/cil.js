using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Type = IKVM.Reflection.Type;

namespace Braille.Ast
{
    enum BlockKind { Normal, Try, Catch, CatchWrapper, Fault, Finally }

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
        public CatchBlock(Type type): base(BlockKind.Catch)
        {
            this.CatchType = type;
        }

        public Type CatchType { get; set; }
    }
}
