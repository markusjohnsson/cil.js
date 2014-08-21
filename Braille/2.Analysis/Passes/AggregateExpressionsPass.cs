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
            var original = block.Ast.GetRange(span.from, span.to).Cast<OpExpression>().ToList();

            var stack = new Stack<Node>();

            Node last = null;

            foreach (var op in original)
            {
                var popCount = op.GetRealPopCount();
                if (popCount > 0)
                    op.Arguments = stack.Pop(popCount).Reverse().ToList();

                var pushCount = op.PushCount;
                if (pushCount > 0)
                    stack.Push(op);

                last = op;
            }

            Node[] result;
            if (stack.Any() && stack.Peek() == last)
                result = stack.Reverse().ToArray();
            else
                result = stack.Reverse().EndWith(last).ToArray();

            // check result and bail if not correct..
            //var resultNodes = result
            //    .Cast<OpExpression>()
            //    .SelectMany(node => node.PrefixTraversal())
            //    .Cast<OpInstruction>()
            //    .ToList();

            //if (original.Select(o => o.Instruction).Any(originalNode => resultNodes.Contains(originalNode) == false))
            //{
            //    Debug.WriteLine("Bailing expression aggregation");
            //    result = original.Cast<Node>().ToArray();
            //}

            return result;
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
                      expr.Instruction.OpCode.FlowControl != IKVM.Reflection.Emit.FlowControl.Return &&
                      expr.Instruction.OpCode.FlowControl != IKVM.Reflection.Emit.FlowControl.Throw &&
                      expr.Instruction.OpCode.FlowControl != IKVM.Reflection.Emit.FlowControl.Cond_Branch) ||
                     expr.PushCount > 1)
                {
                    start = null;
                }
                else if (expr.PushCount == 0)
                {
                    if (start != null && prev != null && start != expr)
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
