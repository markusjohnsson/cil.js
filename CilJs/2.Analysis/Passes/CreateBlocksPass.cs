using CilJs.Ast;
using Managed.Reflection;
using System.Collections.Generic;
using System.Linq;

namespace CilJs.Analysis.Passes
{
    class CreateBlocksPass: IAnalysisPass
    {
        #region SubTypes
        enum RegionKind { Try, Catch, Finally, Fault }

        class ProtectedRegionSpan
        {
            public int From;
            public int To;
            public RegionKind Type;
            public Type CatchType { get; set; }

            public ProtectedRegionSpan(int from, int to, RegionKind type)
            {
                From = from;
                To = to;
                Type = type;
            }

            public bool Contains(OpExpression frame)
            {
                return frame.Instruction.Position < To &&
                        frame.Position >= From;
            }
        }

        class ProtectedRegion
        {
            public ProtectedRegionSpan TrySpan;
            public List<ProtectedRegionSpan> CatchSpan;
            public ProtectedRegionSpan FinallySpan;
            public ProtectedRegionSpan FaultSpan;

            public IEnumerable<ProtectedRegionSpan> GetSpans()
            {
                yield return TrySpan;
                foreach (var span in CatchSpan)
                    yield return span;
                if (FaultSpan != null)
                    yield return FaultSpan;
                if (FinallySpan != null)
                    yield return FinallySpan;
            }
        }
        #endregion

        public void Run(CilMethod method)
        {
            var regions = GetRegions(method);
            
            var spans = regions
                .SelectMany(r => r.GetSpans())
                .OrderBy(s => s.From)
                .ThenByDescending(s => s.To);

            var regionQueue = new Queue<ProtectedRegionSpan>(spans);

            ProtectedRegionSpan nextRegion = null;
            ProtectedRegionSpan currentRegion = null;

            var regionStack = new Stack<ProtectedRegionSpan>();

            if (regionQueue.Any())
                nextRegion = regionQueue.Dequeue();

            var block = new Block(BlockKind.Normal, 0, 0);
            block.Ast.Add(new JumpLabel(0, false));

            var rootBlock = block;

            var blockStack = new Stack<Block>();

            foreach (var op in method.OpTree)
            {
                while (currentRegion != null && false == currentRegion.Contains(op))
                {
                    // we are no longer in currentRegion, let's wrap it up!

                    var parentBlock = blockStack.Pop();

                    parentBlock.Ast.Add(block);

                    block = parentBlock;
                    currentRegion = regionStack.Pop();
                }

                if (op.IsLabel)
                {
                    block.Ast.Add(new JumpLabel(op.Position, true));
                }

                while (nextRegion != null && nextRegion.Contains(op))
                {
                    // we've entered nextRegion

                    blockStack.Push(block);

                    block = CreateBlock(nextRegion);

                    block.Ast.Add(new JumpLabel(op.Position, false));

                    regionStack.Push(currentRegion);
                    currentRegion = nextRegion;

                    if (regionQueue.Any())
                        nextRegion = regionQueue.Dequeue();
                    else
                        nextRegion = null;
                }

                block.Ast.Add(op);
                block.To = op.Position;
            }

            if (blockStack.Any())
            {
                var parentBlock = blockStack.Pop();
                parentBlock.Ast.Add(block);
            }

            method.Block = rootBlock;
        }

        private Block CreateBlock(ProtectedRegionSpan regionSpan)
        {
            switch (regionSpan.Type)
            {
                case RegionKind.Try:
                    return new TryBlock(regionSpan.From, regionSpan.To);
                case RegionKind.Catch:
                    return new CatchBlock(regionSpan.CatchType, regionSpan.From, regionSpan.To);
                case RegionKind.Finally:
                    return new FinallyBlock(regionSpan.From, regionSpan.To);
                case RegionKind.Fault:
                    return new FaultBlock(regionSpan.From, regionSpan.To);
                default:
                    return new Block(BlockKind.Normal, regionSpan.From, regionSpan.To);
            }
        }

        private static List<ProtectedRegion> GetRegions(CilMethod method)
        {
            var mtdb = method.MethodBody;

            if (mtdb == null)
                return new List<ProtectedRegion>() { null };

            var ex = mtdb
                .ExceptionHandlingClauses
                .GroupBy(e => new { e.TryOffset, e.TryLength });

            var regions = new List<ProtectedRegion>();

            foreach (var clauseGroup in ex)
            {
                var result = new ProtectedRegion();

                var key = clauseGroup.Key;

                result.TrySpan = new ProtectedRegionSpan(key.TryOffset, key.TryOffset + key.TryLength, RegionKind.Try);

                result.CatchSpan = clauseGroup
                    .Where(e => e.Flags == ExceptionHandlingClauseOptions.Clause)
                    .Select(
                        e => new ProtectedRegionSpan(e.HandlerOffset, e.HandlerOffset + e.HandlerLength, RegionKind.Catch)
                        {
                            CatchType = e.CatchType
                        })
                    .ToList();

                var finallyClause = clauseGroup.FirstOrDefault(f => f.Flags == ExceptionHandlingClauseOptions.Finally);
                if (finallyClause != null)
                {
                    result.FinallySpan = new ProtectedRegionSpan(finallyClause.HandlerOffset, finallyClause.HandlerOffset + finallyClause.HandlerLength, RegionKind.Finally);
                }

                var faultClause = clauseGroup.FirstOrDefault(f => f.Flags == ExceptionHandlingClauseOptions.Fault);
                if (faultClause != null)
                {
                    result.FaultSpan = new ProtectedRegionSpan(faultClause.HandlerOffset, faultClause.HandlerOffset + faultClause.HandlerLength, RegionKind.Fault);
                }

                regions.Add(result);
            }
            return regions;
        }
    }
}
