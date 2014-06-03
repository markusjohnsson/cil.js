using Braille.Ast;
using IKVM.Reflection;
using System.Collections.Generic;
using System.Linq;

namespace Braille.Analysis
{
    enum RegionType { Try, Catch, CatchWrapper, Finally, Fault }

    class ProtectedRegionSpan
    {
        public int From;
        public int To;
        public RegionType Type;
        public string CatchType { get; set; }

        public ProtectedRegionSpan(int from, int to, RegionType type)
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
            if (GetExceptionHandlers().Any())
                yield return new ProtectedRegionSpan(GetExceptionHandlers().Min(c => c.From), GetExceptionHandlers().Max(c => c.To), RegionType.CatchWrapper);
            foreach (var span in CatchSpan)
                yield return span;
            if (FaultSpan != null)
                yield return FaultSpan;
            if (FinallySpan != null)
                yield return FinallySpan;
        }

        private IEnumerable<ProtectedRegionSpan> GetExceptionHandlers()
        {
            foreach (var c in CatchSpan)
                yield return c;

            if (FaultSpan != null)
                yield return FaultSpan;
        }
    }

    class ProtectedRegionsExtractor
    {
        public IEnumerable<ProtectedRegionSpan> Process(CilMethod method, IList<OpExpression> frames)
        {
            var mtdb = method
                .ReflectionMethod
                .GetMethodBody();

            if (mtdb == null)
                return new ProtectedRegionSpan[] { null };

            var ex = mtdb
                .ExceptionHandlingClauses
                .GroupBy(e => e.TryOffset);

            var areas = new List<ProtectedRegion>();

            foreach (var clauseGroup in ex)
            {
                var result = new ProtectedRegion();

                var tryEnd = clauseGroup.Min(m => m.TryOffset + m.TryLength);

                result.TrySpan = new ProtectedRegionSpan(clauseGroup.Key, tryEnd, RegionType.Try);

                result.CatchSpan = clauseGroup
                    .Where(e => e.Flags == ExceptionHandlingClauseOptions.Clause)
                    .Select(
                        e => new ProtectedRegionSpan(e.HandlerOffset, e.HandlerOffset + e.HandlerLength, RegionType.Catch)
                        {
                            CatchType = e.CatchType != null ? e.CatchType.FullName : ""
                        })
                    .ToList();

                var finallyClause = clauseGroup.FirstOrDefault(f => f.Flags == ExceptionHandlingClauseOptions.Finally);
                if (finallyClause != null)
                {
                    result.FinallySpan = new ProtectedRegionSpan(finallyClause.HandlerOffset, finallyClause.HandlerOffset + finallyClause.HandlerLength, RegionType.Finally);
                }

                var faultClause = clauseGroup.FirstOrDefault(f => f.Flags == ExceptionHandlingClauseOptions.Fault);
                if (faultClause != null)
                {
                    result.FaultSpan = new ProtectedRegionSpan(faultClause.HandlerOffset, faultClause.HandlerOffset + faultClause.HandlerLength, RegionType.Fault);
                }

                areas.Add(result);
            }

            return areas
                .SelectMany(
                    a => a
                    .GetSpans())
                .OrderBy(
                    a => a.From)
                .Concat(new ProtectedRegionSpan[] { null });
        }
    }
}
