using Braille.AssemblyTransform;
using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Braille.MethodTransform
{
    class MethodTransformTask
    {
        private OpExpressionBuilder expressionBuilder = new OpExpressionBuilder();
        
        private InsertLabelsTask insertFrameLabelsTask = new InsertLabelsTask();
        private ExtractTryCatchRegionsTask insertTryCatchRegionsTask = new ExtractTryCatchRegionsTask();

        public void Process(IEnumerable<CilAssembly> asms)
        {
            asms = asms.ToList();

            foreach (var asm in asms)
            {
                foreach (var type in asm.Types)
                {
                    if (type.IsIgnored)
                    {
                        continue;
                    }

                    if (type.IsUserDelegate)
                    {
                        TransformDelegate(type);
                    }

                    foreach (var method in type.Methods)
                    {
                        if (method.GetReplacement() != null)
                        {
                            continue;
                        }

                        if (method.IlCode != null)
                        {
                            TransformNormalMethod(asms, asm, type, method);
                        }
                    }
                }
            }
        }

        private static void TransformDelegate(CilType type)
        {
            foreach (var method in type.Methods)
            {
                switch (method.Name)
                {
                    case "Invoke":
                        method.JsFunction = new JSFunctionDelcaration
                        {
                            Name = "Invoke",
                            Body = new List<JSStatement> 
                            {
                                new JSStatement 
                                {
                                    Expression = new JSIdentifier 
                                    {
                                        Name = "return arguments[0]._methodPtr.apply(arguments[0]._target, Array(arguments).shift())"
                                    }
                                }
                            }
                        };
                        break;
                    case ".ctor":
                        method.JsFunction = new JSFunctionDelcaration
                        {
                            Name = "ctor",
                            Body = new List<JSStatement> 
                            {
                                new JSStatement 
                                {
                                    Expression = new JSIdentifier 
                                    {
                                        Name = "arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];"
                                    }
                                }
                            }
                        };
                        break;
                }
            }
        }

        private void TransformNormalMethod(IEnumerable<CilAssembly> asms, CilAssembly asm, CilType type, CilMethod method)
        {
            var frames = expressionBuilder.Build(method);

            insertFrameLabelsTask.Process(frames);

            var exprToJsTransform = new OpToJsTransform((List<CilAssembly>)asms, asm, type, method);

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

            var function = new JSFunctionDelcaration
            {
                Body = functionBlock,
                Name = method.Name.Replace("<", "_").Replace(">", "_").Replace("`", "_").Replace(".", "_"),
                Parameters = Enumerable.Empty<JSFunctionParameter>()
            };

            method.JsFunction = 
                (method.ReflectionMethod.IsGenericMethodDefinition) || 
                (method.ReflectionMethod.IsStatic && method.ReflectionMethod.DeclaringType.IsGenericType) ? 
                    CreateGenericFunction(method, function) : 
                    function;
        }

        private JSFunctionDelcaration CreateGenericFunction(CilMethod method, JSFunctionDelcaration function)
        {
            var mi = method.ReflectionMethod;

            // For static methods on generic classes, the type arguments are passed to 
            // the method at the call site rather than wired through the generic class type.

            var classGenArgs = (mi.IsStatic && mi.DeclaringType.IsGenericType) ? mi.DeclaringType.GetGenericArguments() : new Type[0];
            var methodGenArgs = mi.IsGenericMethod ? mi.GetGenericArguments() : new Type[0];
            var types = classGenArgs.Concat(methodGenArgs);

            return new JSFunctionDelcaration
            {
                Body = new [] { new JSStatement { Expression = new JSReturnExpression { Expression = function } } },
                Parameters = types.Select(t => new JSFunctionParameter { Name = t.Name }).ToList()
            };
        }
    }
}
