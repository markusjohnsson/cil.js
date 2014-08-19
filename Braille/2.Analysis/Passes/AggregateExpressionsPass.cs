using Braille.Ast;
using Braille.Loading.Model;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace Braille.Analysis.Passes
{
    public static class StackExtensions
    {
        public static IEnumerable<T> Pop<T>(this Stack<T> s, int n) 
        {
            for (var i = 0; i < n; i++)
                yield return s.Pop();
        }
    }

    class AggregateExpressionsPass: IAnalysisPass
    {
        private Context ctx;

        public AggregateExpressionsPass(Context ctx)
        {
            this.ctx = ctx;
        }

        class span { public OpExpression from; public OpExpression to; }

        public void Run(CilMethod method)
        {
            ProcessBlock(method.Block);
        }

        private static void ProcessBlock(Block block)
        {
            var spans = GetExpressionSpans(block).ToList();

            foreach (var span in spans)
            {
                Debug.WriteLine("span: IL_{0:X} - IL_{1:X}", span.from.Instruction.Position, span.to.Instruction.Position);

                block.Ast.ReplaceRange(
                    from: span.from, 
                    to: span.to, 
                    replacement: AggregateExpression(block, span));
            }

            foreach (var subblock in block.Ast.OfType<Block>())
                ProcessBlock(subblock);
        }

        private static Node[] AggregateExpression(Block block, span span)
        {
            var stack = new Stack<Node>();

            Node last = null;

            foreach (var op in block.Ast.GetRange(span.from, span.to).Cast<OpExpression>())
            {
                var popCount = op.GetRealPopCount();
                if (popCount > 0)
                    op.Arguments = stack.Pop(popCount).Reverse().ToList();

                var pushCount = op.PushCount;
                if (pushCount > 0)
                    stack.Push(op);

                last = op;
            }

            if (stack.Any() && stack.Peek() == last)

                return stack.Reverse().ToArray();
            else
                return stack.Reverse().EndWith(last).ToArray();
        }

        private static IEnumerable<span> GetExpressionSpans(Block block)
        {
            OpExpression start = null;

            OpExpression prev = null;

            foreach (var node in block.Ast)
            {
                var expr = node as OpExpression;

                if (expr == null)
                {
                    start = null;
                }
                else if
                    ((expr.Instruction.OpCode.FlowControl != IKVM.Reflection.Emit.FlowControl.Next &&
                      expr.Instruction.OpCode.FlowControl != IKVM.Reflection.Emit.FlowControl.Call &&
                      expr.Instruction.OpCode.FlowControl != IKVM.Reflection.Emit.FlowControl.Return) ||
                     expr.PushCount > 1)
                {
                    start = null;
                }
                else if (expr.PushCount == 0)
                {
                    if (start != null && prev != null && start != prev)
                        yield return new span { from = start, to = expr };

                    start = null;
                }
                else if (expr.StackBefore.Count == 0)
                {
                    if (start != null && prev != null && start != prev)
                        yield return new span { from = start, to = prev };

                    start = expr;
                }

                prev = expr;
            }

            if (start != null && prev != null && start != prev)
                yield return new span { from = start, to = prev };

        }
    }
}
