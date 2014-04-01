using Braille.Analysis;
using Braille.Ast;
using Braille.JSAst;
using Braille.Loading.Model;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;
using Type = IKVM.Reflection.Type;

namespace Braille.JsTranslation
{

    class MethodTranslator
    {
        private OpExpressionBuilder expressionBuilder;

        private InsertLabelsTask insertFrameLabelsTask = new InsertLabelsTask();
        private ExtractTryCatchRegionsTask insertTryCatchRegionsTask = new ExtractTryCatchRegionsTask();
        private Context context;

        public MethodTranslator(Context context)
        {
            this.context = context;
            expressionBuilder = new OpExpressionBuilder(context.ReflectionUniverse);
        }

        public JSFunctionDelcaration Translate(List<CilAssembly> world, CilAssembly assembly, CilType type, CilMethod method)
        {
            if (type.IsIgnored)
            {
                throw new ArgumentException("cannot translate method of ignored class");
            }

            if (method.GetReplacement() != null || type.IsInterface)
            {
                return null;
            }

            if (type.IsUserDelegate)
            {
                return TranslateDelegateMethod(method);
            }
            else
            {
                return TransformNormalMethod(world, assembly, type, method);
            }
        }

        private JSFunctionDelcaration TranslateDelegateMethod(CilMethod method)
        {
            switch (method.Name)
            {
                case "Invoke":
                    return new JSFunctionDelcaration
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
                case ".ctor":
                    return new JSFunctionDelcaration
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
                default:
                    return JSFunctionDelcaration.Empty;
            }
        }

        private JSFunctionDelcaration TransformNormalMethod(List<CilAssembly> world, CilAssembly asm, CilType type, CilMethod method)
        {
            var frames = expressionBuilder.Build(method);

            insertFrameLabelsTask.Process(frames);

            var exprToJsTransform = new OpTranslator((List<CilAssembly>)world, asm, type, method);

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

            var locIdx = 0;
            foreach (var loc in method.ReflectionMethod.GetMethodBody().LocalVariables)
            {
                functionBlock.Add(
                    new JSStatement
                    {
                        Expression = new JSVariableDelcaration
                        {
                            Name = "loc" + locIdx,
                            Value = CreateDefaultValue(loc)
                        }
                    });
                locIdx++;
            }

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

            return
                (method.ReflectionMethod.IsGenericMethodDefinition) ||
                (method.ReflectionMethod.IsStatic && method.ReflectionMethod.DeclaringType.IsGenericType) ?
                    CreateGenericFunction(method, function) :
                    function;
        }

        private JSExpression CreateDefaultValue(LocalVariableInfo loc)
        {
            return
                loc.LocalType.FullName == "System.Boolean" ?
                    new JSBoolLiteral { Value = default(bool) } :
                loc.LocalType.IsPrimitive ?
                    new JSNumberLiteral { Value = 0 } as JSExpression : 
                loc.LocalType.IsValueType ?
                    new JSNewExpression
                    {
                        Constructor = new JSPropertyAccessExpression
                        {
                            Host = GetAssemblyIdentifier(loc.LocalType),
                            Property = loc.LocalType.Namespace == null ? loc.LocalType.Name : loc.LocalType.Namespace + "." + loc.LocalType.Name
                        }
                    } as JSExpression :
                    new JSNullLiteral();
        }

        private JSIdentifier GetAssemblyIdentifier(Type type)
        {
            var asm = context.Assemblies.FirstOrDefault(c => c.ReflectionAssembly == type.Assembly);

            if (asm == null)
            {
                throw new Exception("Cannot resolve assembly of type " + type);
            }

            return new JSIdentifier { Name = asm.Identifier };
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
                Body = new[] { new JSStatement { Expression = new JSReturnExpression { Expression = function } } },
                Parameters = types.Select(t => new JSFunctionParameter { Name = t.Name }).ToList()
            };
        }
    }
}
