using Braille.Ast;
using System.Collections.Generic;
using System.Linq;

namespace Braille.Analysis.Passes
{
    class AggregateBlocksPass: IAnalysisPass
    {
        public void Run(CilMethod method)
        {
            RewriteBlock(method.Block);
        }

        private static void RewriteBlock(Block block)
        {
            var replacements = new List<List<Block>>();

            var currentAggregate = new List<Block>();

            foreach (var node in block.Ast)
            {
                if (node is TryBlock ||
                    node is CatchBlock ||
                    node is FinallyBlock ||
                    node is FaultBlock)
                {
                    if (node is FinallyBlock && currentAggregate.Count == 0)
                    {
                        // nasty solution for rare case where there is a leave(.s) op between catch and finally. 
                        // TODO: read up un what's happening

                        replacements.Last().Add((Block)node);
                    }
                    else
                    {
                        currentAggregate.Add((Block)node);
                    }

                    RewriteBlock((Block)node);
                }
                else if (currentAggregate.Count > 0)
                {
                    replacements.Add(currentAggregate);

                    currentAggregate = new List<Block>();
                }
            }

            foreach (var aggregate in replacements)
            {
                var pr = new ProtectedRegion 
                {
                    TryBlock = aggregate.OfType<TryBlock>().Single(),
                    CatchBlocks = aggregate.OfType<CatchBlock>().ToList(),
                    FinallyBlock = aggregate.OfType<FinallyBlock>().SingleOrDefault(),
                    FaultBlock = aggregate.OfType<FaultBlock>().SingleOrDefault()
                };

                block.Ast.ReplaceRange(
                    from: aggregate.First(),
                    to: aggregate.Last(),
                    replacement: new [] { pr });
            }
        }
    }
}
