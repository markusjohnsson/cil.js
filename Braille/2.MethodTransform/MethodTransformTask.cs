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
        private OpExpressionBuilder expressionBuilder = new OpExpressionBuilder();
        private OpToJsTransform exprToJsTransform = new OpToJsTransform();
        private InsertLabelsTask insertFrameLabelsTask = new InsertLabelsTask();
        private ExtractTryCatchRegionsTask insertTryCatchRegionsTask = new ExtractTryCatchRegionsTask();

        public void Process(IEnumerable<CilAssembly> asms)
        {
            foreach (var asm in asms)
            {
                foreach (var type in asm.Types)
                {
                    foreach (var method in type.Methods)
                    {
                        var functionBlock = new List<JSStatement>();
                        functionBlock.Add(
                            new JSStatement
                            {
                                Expression = new JSVariableDelcaration
                                {
                                    Name = "__braille_args__",
                                    Value = new JSIdentifier { Name = "arguments" }
                                }
                            });

                        var frames = expressionBuilder.Build(method).ToList();

                        insertFrameLabelsTask.Process(frames);
                        var tryBlockQueue = new Queue<TryCatchFinallyFrameSpan>(insertTryCatchRegionsTask.Process(method, frames));

                        var block = new BlockBuilder(0);
                        var blockStack = new Stack<BlockBuilder>();

                        TryCatchFinallyFrameSpan awaitedBlock = null;
                        TryCatchFinallyFrameSpan currentBlock = null;

                        var tryBlockStack = new Stack<TryCatchFinallyFrameSpan>();

                        awaitedBlock = tryBlockQueue.Dequeue();


                        foreach (var frame in frames)
                        {
                            if (frame.IsLabel)
                            {
                                block.InsertLabel(frame.Position);
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
                                        block.Statements.Insert(0, new JSStatement { Expression = new JSBinaryExpression { Left = new JSIdentifier { Name = "__braille_error_handled_" + (blockStack.Count - 1) + "__" }, Operator = "=", Right = new JSBoolLiteral { Value = false } } });
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
                                    case FrameSpanType.Fault:
                                        block.Statements.Add(new JSStatement { Expression = new JSThrowExpression { Expression = new JSIdentifier { Name = "__braille_error__" } } });
                                        parentBlock.Statements.Add(new JSIfStatement
                                        {
                                            Condition = new JSBinaryExpression
                                            {
                                                Left = new JSIdentifier { Name = "__braille_error_handled_" + (blockStack.Count - 1) + "__" },
                                                Operator = "===",
                                                Right = new JSBoolLiteral { Value = false }
                                            },
                                            Statements = block.Build().ToList()
                                        });
                                        break;
                                    case FrameSpanType.CatchWrapper:
                                        block.Statements.Insert(0, new JSStatement { Expression = new JSVariableDelcaration { Name = "__braille_error_handled_" + blockStack.Count + "__", Value = new JSBoolLiteral { Value = false } } });
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
                                block = new BlockBuilder(blockStack.Count);
                                tryBlockStack.Push(currentBlock);
                                currentBlock = awaitedBlock;
                                awaitedBlock = tryBlockQueue.Dequeue();
                            }

                            block.AddStatements(exprToJsTransform.Process(frame));
                        }

                        functionBlock.AddRange(
                            frames
                                .SelectMany(op => op.StoreLocations)
                                .Distinct()
                                .Select(
                                    n => new JSStatement
                                    {
                                        Expression = new JSVariableDelcaration
                                        {
                                            Name = n.Name
                                        }
                                    }));

                        functionBlock.AddRange(block.Build());

                        method.JsFunction = new JSFunctionDelcaration
                        {
                            Body = functionBlock,
                            Name = method.Name.Replace("<", "_").Replace(">", "_").Replace("`", "_").Replace(".", "_"),
                            Parameters = Enumerable.Empty<JSFunctionParameter>()
                        };
                    }
                }
            }
        }

        //private static void Print(CilMethod method)
        //{
        //    var il = new OpInstructionReader(method.IlCode, method.Resolver);
        //    foreach (var instruction in il.Process())
        //        Console.WriteLine("{0:x}\t: {1}", instruction.Position, instruction.ToString());
        //}

        //private static void Print(OpExpression frame, int depth = 0)
        //{
        //    if (frame == null)
        //        return;

        //    Console.WriteLine("// {2:x}:\t {0}{1}\t\t{3:x}", new string(' ', depth), frame.Instruction.ToString(), frame.Instruction.Position, frame.IsLabel);
        //    foreach (var child in frame.Arguments)
        //    {
        //        Print(child, depth + 1);
        //    }
        //}
    }
}
