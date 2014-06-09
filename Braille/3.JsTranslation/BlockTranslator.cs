using Braille.Ast;
using Braille.JSAst;
using Braille.Loading.Model;
using IKVM.Reflection;
using System.Collections.Generic;
using System.Linq;

namespace Braille.JsTranslation
{
    /// <summary>
    /// Translates blocks (method bodies, try-catch-finally constructs) into JavaScript AST.
    /// </summary>
    class BlockTranslator : AbstractTranslator
    {
        private CilType type;
        private CilMethod method;
        private JSExpression this_;
        private OpTranslator opTranslator;

        public BlockTranslator(Context context, CilAssembly assembly, CilType type, CilMethod method, JSExpression this_)
            : base(context)
        {
            this.type = type;
            this.method = method;
            this.this_ = this_;
            this.opTranslator = new OpTranslator(context, assembly, type, method);
        }

        public List<JSStatement> Transform(Block block)
        {
            return CreateJsBlock(block, 0).Build().ToList();
        }

        private BlockBuilder CreateJsBlock(Block block, int depth)
        {
            var builder = new BlockBuilder(depth);

            foreach (var node in block.Ast)
            {
                var protectedRegion = node as ProtectedRegion;
                var label = node as JumpLabel;
                var expr = node as OpExpression;

                if (protectedRegion != null)
                {
                    if (protectedRegion.CatchBlocks.Count == 0 &&
                        protectedRegion.FaultBlock == null &&
                        protectedRegion.FinallyBlock == null)
                    {
                        builder.InsertStatements(CreateJsBlock(protectedRegion.TryBlock, depth + 1).Build());
                    }
                    else
                    {
                        builder.InsertStatements(CreateJsTryBlock(protectedRegion.TryBlock, depth + 1));

                        if (protectedRegion.CatchBlocks.Any() || protectedRegion.FaultBlock != null)
                            builder.InsertStatements(CreateJsCatchBlock(protectedRegion.CatchBlocks, protectedRegion.FaultBlock, depth + 1));

                        if (protectedRegion.FinallyBlock != null)
                            builder.InsertStatements(CreateJsFinallyBlock(protectedRegion.FinallyBlock, depth + 1));

                    }
                }
                else if (label != null)
                {
                    builder.InsertLabel(label.Position);
                }
                else if (expr != null)
                {
                    builder.InsertStatements(opTranslator.Process(expr));
                }
            }

            return builder;
        }

        private IEnumerable<JSStatement> CreateJsTryBlock(TryBlock tryBlock, int depth)
        {
            yield return new JSTryBlock { Statements = CreateJsBlock(tryBlock, depth).Build().ToList() };
        }

        private IEnumerable<JSStatement> CreateJsCatchBlock(IEnumerable<CatchBlock> catchBlocks, FaultBlock faultBlock, int p)
        {
            if (catchBlocks.Count() == 1 && catchBlocks.First().CatchType == null)
            {
                yield return new JSCatchBlock { Error = new JSIdentifier { Name = "_" } };
                yield break;
            }

            var handledFlag = new JSIdentifier { Name = "__braille_error_handled_" + p + "__" };

            var statements = new List<JSStatement> 
            {
                JSFactory.Statement(
                    new JSVariableDelcaration
                    {
                        Name = handledFlag.Name,
                        Value = new JSBoolLiteral { Value = false }
                    })
            };

            foreach (var catchBlock in catchBlocks)
            {
                var block = CreateJsBlock(catchBlock, p);
                block.Statements.Insert(0,
                    JSFactory
                        .Assignment(handledFlag, new JSBoolLiteral { Value = true })
                        .ToStatement());

                statements.Add(new JSIfStatement
                {
                    Condition = new JSBinaryExpression
                    {
                        Left = new JSUnaryExpression { Operand = handledFlag, Operator = "!" },
                        Operator = "&&",
                        Right = new JSBinaryExpression
                        {
                            Left = new JSIdentifier { Name = "__braille_error__" },
                            Operator = "instanceof",
                            Right = GetTypeIdentifier(catchBlock.CatchType, method.ReflectionMethod, type.ReflectionType, this_)
                        }
                    },
                    Statements = block.Build().ToList()
                });
            }

            if (faultBlock != null)
            {
                statements.AddRange(CreateJsFaultBlock(faultBlock, p));
            }

            yield return new JSCatchBlock
            {
                Error = new JSIdentifier { Name = "__braille_error__" },
                Statements = statements
            };
        }

        private IEnumerable<JSStatement> CreateJsFaultBlock(FaultBlock faultBlock, int p)
        {
            var block = CreateJsBlock(faultBlock, p);

            block.Statements.Add(JSFactory.Statement(new JSThrowExpression { Expression = new JSIdentifier { Name = "__braille_error__" } }));

            yield return new JSIfStatement
            {
                Condition = new JSBinaryExpression
                {
                    Left = new JSIdentifier { Name = "__braille_error_handled_" + (block.Depth - 1) + "__" },
                    Operator = "===",
                    Right = new JSBoolLiteral { Value = false }
                },
                Statements = block.Build().ToList()
            };
        }

        private IEnumerable<JSStatement> CreateJsFinallyBlock(FinallyBlock finallyBlock, int p)
        {
            yield return new JSFinallyBlock
            {
                Statements = CreateJsBlock(finallyBlock, p).Build().ToList()
            };
        }
    }
}
