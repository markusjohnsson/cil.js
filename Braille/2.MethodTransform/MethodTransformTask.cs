using Braille.AssemblyTransform;
using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.MethodTransform
{
    class MethodTransformTask
    {
        private ILToFrameTransform methodTransform;
        private FrameToAstTransform frameTransform;
        private InsertFrameLabelsTask insertFrameLabelsTask;
        private ExtractTryCatchRegionsTask insertTryCatchRegionsTask;

        public MethodTransformTask()
        {
            methodTransform = new ILToFrameTransform();
            insertFrameLabelsTask = new InsertFrameLabelsTask();
            insertTryCatchRegionsTask = new ExtractTryCatchRegionsTask();
            frameTransform = new FrameToAstTransform();
        }

        class BrailleBlock
        {
            public List<JSStatement> Statements = new List<JSStatement>();

            private int depth;
            private bool hasBranching;

            public BrailleBlock(int depth)
            {
                this.depth = depth;
            }

            public IEnumerable<JSStatement> Build()
            {
                if (hasBranching)
                {
                    yield return new JSStatement
                    {
                        Expression = new JSVariableDelcaration
                        {
                            Name = "__braille_pos_" + depth + "__",
                            Value = new JSNumberLiteral { Value = 0 }
                        }
                    };

                    yield return new JSWhileLoopStatement
                    {
                        Condition = new JSBoolLiteral
                        {
                            Value = true
                        },
                        Statements = new List<JSStatement> 
                    {
                        new JSSwitchStatement
                        {
                            Value = new JSIdentifier { Name = "__braille_pos_" + depth + "__" },
                            Statements = Statements
                        }
                    }
                    };
                }
                else
                {
                    foreach (var stmnt in Statements)
                        yield return stmnt;
                }
            }

            internal void InsertLabel(int p)
            {
                if (false == hasBranching)
                    Statements.Add(new JSSwitchCase { Value = new JSNumberLiteral { Value = 0 } });

                hasBranching = true;
                Statements.Add(new JSSwitchCase { Value = new JSNumberLiteral { Value = p } });
            }

            internal void AddStatements(IEnumerable<JSStatement> statements)
            {
                Statements.AddRange(statements);
            }
        }

        public void Process(IEnumerable<CilAssembly> asms)
        {
            foreach (var asm in asms)
            {
                foreach (var type in asm.Types)
                {
                    foreach (var method in type.Methods)
                    {
                        Console.WriteLine(type.Name + "::" + method.Name);

                        var functionBlock = new List<JSStatement>();

                        var frames = methodTransform.Process(method).ToList();

                        insertFrameLabelsTask.Process(frames);
                        var tryBlockQueue = new Queue<TryCatchFinallyFrameSpan>(insertTryCatchRegionsTask.Process(method, frames));

                        var block = new BrailleBlock(0);
                        var blockStack = new Stack<BrailleBlock>();

                        TryCatchFinallyFrameSpan awaitedBlock = null;
                        TryCatchFinallyFrameSpan currentBlock = null;

                        var tryBlockStack = new Stack<TryCatchFinallyFrameSpan>();

                        awaitedBlock = tryBlockQueue.Dequeue();

                        foreach (var frame in frames)
                        {
                            if (frame.IsLabel)
                            {
                                block.InsertLabel(frame.GetStartPosition());
                            }

                            if (currentBlock != null && false == currentBlock.Contains(frame))
                            {
                                var parentBlock = blockStack.Pop();
                                switch (currentBlock.Type)
                                {
                                    case FrameSpanType.Try:
                                        parentBlock.Statements.Add(new JSTryBlock { Statements = block.Build().ToList() });
                                        break;
                                    case FrameSpanType.Catch:
                                        parentBlock.Statements.Add(new JSIfStatement
                                        {
                                            Condition = new JSBinaryExpression
                                            {
                                                Left = new JSIdentifier { Name = "__braille_error__" },
                                                Operator = "instanceof",
                                                Right = new JSIdentifier { Name = currentBlock.CatchType }
                                            },
                                            Statements = block.Build().ToList()
                                        });
                                        break;
                                    case FrameSpanType.CatchWrapper:
                                        parentBlock.Statements.Add(new JSCatchBlock { Error = new JSIdentifier { Name = "__braille_error__" }, Statements = block.Build().ToList() });
                                        break;
                                    case FrameSpanType.Finally:
                                        parentBlock.Statements.Add(new JSFinallyBlock { Statements = block.Build().ToList() });
                                        break;
                                }
                                block = parentBlock;
                                currentBlock = tryBlockStack.Pop();
                            }

                            while (awaitedBlock != null && awaitedBlock.Contains(frame))
                            {
                                blockStack.Push(block);
                                block = new BrailleBlock(blockStack.Count);
                                tryBlockStack.Push(currentBlock);
                                currentBlock = awaitedBlock;
                                awaitedBlock = tryBlockQueue.Dequeue();
                            }

                            block.AddStatements(frameTransform.Process(frame));
                        }

                        functionBlock.AddRange(block.Build());

                        method.JsFunction = new JSFunctionDelcaration
                        {
                            Body = functionBlock,
                            Name = method.Name,
                            Parameters = Enumerable.Empty<JSFunctionParameter>()
                        };
                    }
                }
            }
        }

        private static void Print(CilMethod method)
        {
            var il = new ILReader(method.IlCode, method.Resolver);
            foreach (var instruction in il.Process())
                Console.WriteLine("{0:x}\t: {1}", instruction.Position, instruction.ToString());
        }

        private static void Print(Frame frame, int depth = 0)
        {
            if (frame == null)
                return;

            Console.WriteLine("// {2:x}:\t {0}{1}\t\t{3:x}", new string(' ', depth), frame.Instruction.ToString(), frame.Instruction.Position, frame.IsLabel);
            foreach (var child in frame.Values)
            {
                Print(child, depth + 1);
            }
        }
    }
}
