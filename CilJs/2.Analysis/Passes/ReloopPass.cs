using System;
using CilJs.Analysis.Passes;
using CilJs.Ast;
using System.Collections.Generic;
using IKVM.Reflection.Emit;
using System.Diagnostics;
using System.Linq;

namespace CilJs.Analysis.Passes
{
    internal class ReloopPass : IAnalysisPass
    {
        class Entry : Node
        {
            public List<Node> Ast = new List<Node>();
            public List<Entry> Reachable = new List<Entry>();

            //public Entry Next { get; internal set; }
        }

        class Base : Node { public Base Next; }
        class Simple : Base { public Entry Internal; }
        class Loop : Base { public Base Body; }
        class Multiple : Base { public List<Node> Handled = new List<Node>(); }

        public void Run(CilMethod method)
        {
            method.Block = Run(method.Block);
        }

        private Block Run(Block block)
        {
            foreach (var b in block.Ast.OfType<Block>())
                block.Ast.Replace(b, Run(b));

            if (ContainsSwitch(block))
            {
                // cannot handle switch yet.
                return block;
            }

            // Step 1: Create Entries
            var entries = GetEntries(block);

            if (entries.Count == 1)
                return block;

            // Step 2: Calculate, for each label, which other labels it can reach
            CalculateReachability(entries);

            // Step 3: Create blocks
            var rootNode = RecreateLoops(entries, new HashSet<Entry>());

            return CreateBlock(block.Kind, rootNode);
        }

        private Block CreateBlock(BlockKind kind, Base rootNode)
        {
            var newBlock = new Block(kind, 0, 0);
            foreach (var node in Enumerate(rootNode))
            {
                var simple = node as Simple;
                var loop = node as Loop;

                if (simple != null)
                {
                    newBlock.Ast.AddRange(simple.Internal.Ast);
                }

                if (loop != null)
                {
                    newBlock.Ast.Add(CreateBlock(BlockKind.Normal, loop.Body));
                }
            }
            newBlock.From = newBlock.Ast.OfType<OpExpression>().Min(op => op.PrefixTraversal().Min(o => o.Position));
            newBlock.To = newBlock.Ast.OfType<OpExpression>().Max(op => op.PrefixTraversal().Max(o => o.Position));
            return newBlock;
        }

        private static IEnumerable<Node> Enumerate(Base node)
        {
            if (node == null)
                yield break;
            yield return node;
            foreach (var x in Enumerate(node.Next))
                yield return x;
        }

        private void Print(List<Entry> entries)
        {
            Debug.WriteLine(string.Join("\n", entries.Select((e, i) => $"{i}: {string.Join(",", e.Reachable.Select(f => entries.IndexOf(f)))}")));
        }

        private void Print(Base block, int depth = 0)
        {
            var simple = block as Simple;
            if (simple != null)
            {
                Debug.WriteLine(new string(' ', depth) + "Simple");
                foreach (var node in simple.Internal.Ast)
                    Debug.WriteLine(new string(' ', depth + 1) + node.ToString());
                Print(simple.Next, depth);
                return;
            }

            var loop = block as Loop;
            if (loop != null)
            {

                Debug.WriteLine(new string(' ', depth) + "Loop");
                Print(loop.Body, depth + 1);
                Print(loop.Next, depth);
                return;
            }
        }

        private Base RecreateLoops(IEnumerable<Entry> entries, HashSet<Entry> handledLoopEntries)
        {
            if (entries.IsEmpty())
                return null;

            var first = entries.First();

            var last = entries.LastOrDefault(e => IsReachableFrom(e, first, entries.Except(handledLoopEntries)));

            if (last != null)
            {
                var loop = entries.TakeWhile(e => e != last).Concat(new[] { last }).ToList();

                handledLoopEntries.Add(first);
                return new Loop
                {
                    Body = RecreateLoops(loop, handledLoopEntries),
                    Next = RecreateLoops(entries.Skip(loop.Count()).ToList(), handledLoopEntries)
                };
            }
            else
            {
                //if (first.Reachable.Count > 1)
                //{

                //    //return new Multiple
                //    //{

                //    //};
                //}
                //else
                {
                    return new Simple
                    {
                        Internal = first,
                        Next = RecreateLoops(entries.Skip(1).ToList(), handledLoopEntries)
                    };
                }
            }
        }

        private static bool ContainsSwitch(Block block)
        {
            return block.Ast.OfType<OpExpression>()
                            .SelectMany(ast => ast.PrefixTraversal())
                            .Any(e => e.Instruction.OpCode.Name == "switch");
        }

        private void CalculateReachability(List<Entry> entries)
        {
            foreach (var source in entries)
            {
                CalculateDirectReachability(source, entries);
            }
        }

        private bool IsReachableFrom(Entry source, Entry target, IEnumerable<Entry> subset = null, HashSet<Entry> visited = null)
        {
            if (visited == null)
                visited = new HashSet<Entry>();

            foreach (var candidate in source.Reachable)
            {
                if (visited.Add(candidate) == false)
                    continue;

                if (subset != null && false == subset.Contains(candidate))
                {
                    continue;
                }

                if (candidate == target)
                {
                    return true;
                }
                // candidate reachable form source, target reachable from candidate => target reachable from source
                else if (IsReachableFrom(candidate, target, subset, visited))
                {
                    return true;
                }
            }

            return false;
        }

        private void CalculateDirectReachability(Entry source, List<Entry> entries)
        {
            var last = source.Ast.Last() as OpExpression;

            if (last == null ||
                last.Instruction.OpCode.FlowControl == FlowControl.Cond_Branch ||
                last.Instruction.OpCode.FlowControl == FlowControl.Next)
            {
                var target = entries
                    .SkipWhile(l => l != source)
                    .Skip(1)
                    .FirstOrDefault()
                    ;

                if (target != null)
                    source.Reachable.Add(target);
            }

            if (last != null && (
                last.Instruction.OpCode.FlowControl == FlowControl.Branch ||
                last.Instruction.OpCode.FlowControl == FlowControl.Cond_Branch))
            {
                source.Reachable.Add(GetTargetLabel(last, entries));
            }


        }

        private Entry GetTargetLabel(OpExpression branchSource, List<Entry> entries)
        {
            var pos = GetTargetPosition(branchSource.Instruction);
            foreach (var label in entries)
            {
                var first = label.Ast.First();
                var jmp = first as JumpLabel;
                if (jmp != null && jmp.Position == pos)
                    return label;

                var op = first as OpExpression;
                if (op != null && op.PrefixTraversal().Any(p => p.Position == pos))
                    return label;
            }

            throw new InvalidOperationException();
        }

        private int GetTargetPosition(OpInstruction i)
        {
            int data;
            if (i.Data is byte)
                data = (sbyte)(byte)i.Data;
            else if (i.Data is int)
                data = (int)i.Data;
            else
                data = 0;

            return 1 + i.Position + i.Size + data;
        }

        private List<Entry> GetEntries(Block block)
        {
            var entries = new List<Entry>();
            var currentLabel = new Entry();
            entries.Add(currentLabel);

            foreach (var node in block.Ast)
            {
                if (node is JumpLabel && currentLabel.Ast.Any())
                {
                    currentLabel = new Entry();
                    entries.Add(currentLabel);
                }

                currentLabel.Ast.Add(node);

                var op = node as OpExpression;
                if (op != null)
                {
                    switch (op.Instruction.OpCode.FlowControl)
                    {
                        case FlowControl.Branch:
                        case FlowControl.Cond_Branch:
                        case FlowControl.Return:
                        case FlowControl.Throw:
                            currentLabel = new Entry();
                            entries.Add(currentLabel);
                            break;
                    }
                }
            }

            entries = entries
                .Where(l => l.Ast.Count > 0)
                .ToList()
                ;

            return entries;
        }
    }
}