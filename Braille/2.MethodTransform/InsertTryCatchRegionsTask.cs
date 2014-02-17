using Braille.AssemblyTransform;
using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Braille.MethodTransform
{
    class TryCatchFinally
    {
        public TryCatchFinallyFrameSpan TrySpan;
        public List<TryCatchFinallyFrameSpan> CatchSpans;
        public TryCatchFinallyFrameSpan FinallySpan;

        public IEnumerable<TryCatchFinallyFrameSpan> GetSpans()
        {
            yield return TrySpan;
            if (CatchSpans.Any())
                yield return new TryCatchFinallyFrameSpan(CatchSpans.Min(c => c.From), CatchSpans.Max(c => c.To), FrameSpanType.CatchWrapper);
            foreach (var span in CatchSpans)
                yield return span;
            if (FinallySpan != null)
                yield return FinallySpan;
        }
    }

    enum FrameSpanType { Try, Catch, CatchWrapper, Finally }

    class TryCatchFinallyFrameSpan
    {
        public int From;
        public int To;
        public FrameSpanType Type;

        public TryCatchFinallyFrameSpan(int from, int to, FrameSpanType type)
        {
            From = from;
            To = to;
            Type = type;
        }

        public bool Contains(Frame frame)
        {
            return frame.Instruction.Position < To &&
                    frame.GetStartPosition() >= From;
        }

        public string CatchType { get; set; }
    }

    class ExtractTryCatchRegionsTask
    {
        public IEnumerable<TryCatchFinallyFrameSpan> Process(CilMethod method, IList<Frame> frames)
        {
            var ex = method
                .ReflectionMethod
                .GetMethodBody()
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
