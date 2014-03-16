using Braille.AssemblyTransform;
using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Braille.MethodTransform
{
    enum FrameSpanType { Try, Catch, CatchWrapper, Finally, Fault }

    class TryCatchFinallyFrameSpan
    {
        public int From;
        public int To;
        public FrameSpanType Type;
        public string CatchType { get; set; }

        public TryCatchFinallyFrameSpan(int from, int to, FrameSpanType type)
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

    class ExtractTryCatchRegionsTask
    {
        class TryCatchFinally
        {
            public TryCatchFinallyFrameSpan TrySpan;
            public List<TryCatchFinallyFrameSpan> CatchSpans;
            public TryCatchFinallyFrameSpan FinallySpan;
            public TryCatchFinallyFrameSpan FaultSpan { get; set; }

            public IEnumerable<TryCatchFinallyFrameSpan> GetSpans()
            {
                yield return TrySpan;
                if (GetExceptionHandlers().Any())
                    yield return new TryCatchFinallyFrameSpan(GetExceptionHandlers().Min(c => c.From), GetExceptionHandlers().Max(c => c.To), FrameSpanType.CatchWrapper);
                foreach (var span in CatchSpans)
                    yield return span;
                if (FaultSpan != null)
                    yield return FaultSpan;
                if (FinallySpan != null)
                    yield return FinallySpan;
            }

            private IEnumerable<TryCatchFinallyFrameSpan> GetExceptionHandlers()
            {
                foreach (var c in CatchSpans)
                    yield return c;

                if (FaultSpan != null)
                    yield return FaultSpan;
            }
        }

        public IEnumerable<TryCatchFinallyFrameSpan> Process(CilMethod method, IList<OpExpression> frames)
        {
            var mtdb = method
                .ReflectionMethod
                .GetMethodBody();

            if (mtdb == null)
                return new TryCatchFinallyFrameSpan[] { null };

            var ex = mtdb
                .ExceptionHandlingClauses
                .GroupBy(e => e.TryOffset);

            var areas = new List<TryCatchFinally>();

            foreach (var clauseGroup in ex)
            {
                var result = new TryCatchFinally();

                var tryEnd = clauseGroup.Min(m => m.TryOffset + m.TryLength);

                result.TrySpan = new TryCatchFinallyFrameSpan(clauseGroup.Key, tryEnd, FrameSpanType.Try);

                result.CatchSpans = clauseGroup
                    .Where(e => e.Flags == ExceptionHandlingClauseOptions.Clause)
                    .Select(
                        e => new TryCatchFinallyFrameSpan(e.HandlerOffset, e.HandlerOffset + e.HandlerLength, FrameSpanType.Catch)
                        {
                            CatchType = e.CatchType != null ? e.CatchType.FullName : ""
                        })
                    .ToList();

                var finallyClause = clauseGroup.FirstOrDefault(f => f.Flags == ExceptionHandlingClauseOptions.Finally);
                if (finallyClause != null)
                {
                    result.FinallySpan = new TryCatchFinallyFrameSpan(finallyClause.HandlerOffset, finallyClause.HandlerOffset + finallyClause.HandlerLength, FrameSpanType.Finally);
                }

                var faultClause = clauseGroup.FirstOrDefault(f => f.Flags == ExceptionHandlingClauseOptions.Fault);
                if (faultClause != null)
                {
                    result.FaultSpan = new TryCatchFinallyFrameSpan(faultClause.HandlerOffset, faultClause.HandlerOffset + faultClause.HandlerLength, FrameSpanType.Fault);
                }

                areas.Add(result);
            }

            return areas
                .SelectMany(
                    a => a
                    .GetSpans())
                .OrderBy(
                    a => a.From)
                .Concat(new TryCatchFinallyFrameSpan[] { null });
        }
    }
}
