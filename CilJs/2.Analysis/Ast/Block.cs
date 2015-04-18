using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Type = IKVM.Reflection.Type;

namespace CilJs.Ast
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

        public int From;
        public int To;

        public Block(BlockKind blockType, int from, int to)
        {
            Kind = blockType;
            From = from;
            To = to;
        }

        /// <summary>
        /// Returns the expressions of the block
        /// </summary>
        /// <returns></returns>
        public IEnumerable<OpExpression> GetExpressions()
        {
            foreach (var n in Ast)
            {
                var o = n as OpExpression;
                var b = n as Block;

                if (o != null)
                    yield return o;

                if (b != null)
                {
                    foreach (var s in b.GetExpressions())
                        yield return s;
                }
            }
        }
    }

    class CatchBlock : Block
    {
        public CatchBlock(Type type, int from, int to)
            : base(BlockKind.Catch, from, to)
        {
            this.CatchType = type;
        }

        public Type CatchType { get; set; }
    }

    class TryBlock : Block
    {
        public TryBlock(int from, int to)
            : base(BlockKind.Try, from, to)
        {
        }
    }

    class FinallyBlock : Block
    {
        public FinallyBlock(int from, int to)
            : base(BlockKind.Finally, from, to)
        {
        }
    }

    class FaultBlock : Block
    {
        public FaultBlock(int from, int to)
            : base(BlockKind.Fault, from, to)
        {
        }
    }
}
