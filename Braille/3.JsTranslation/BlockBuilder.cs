
using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Braille.Analysis;
using Braille.Ast;

namespace Braille.JsTranslation
{
    class BlockBuilder
    {
        public List<JSStatement> Statements = new List<JSStatement>();

        private int depth;
        public int Depth
        {
            get
            {
                return depth;
            }
        }

        private bool hasBranching;

        public BlockBuilder(int depth)
        {
            this.depth = depth;
        }

        public IEnumerable<JSStatement> Build()
        {
            UpdatePositions();
            InsertMissingCatchBlocks();

            if (hasBranching)
            {
                yield return new JSStatement
                {
                    Expression = new JSVariableDelcaration
                    {
                        Name = "__braille_pos_" + Depth + "__",
                        Value = new JSNumberLiteral { Value = 0, IsHex = true }
                    }
                };

                yield return new JSWhileLoopStatement
                {
                    Condition = new JSBinaryExpression
                    {
                        Left = new JSIdentifier { Name = "__braille_pos_" + Depth + "__" },
                        Operator = ">=",
                        Right = new JSNumberLiteral { Value = 0 }
                    },
                    Statements = new List<JSStatement> 
                    {
                        new JSSwitchStatement
                        {
                            Value = new JSIdentifier { Name = "__braille_pos_" + Depth + "__" },
                            Statements = Statements
                        }
                    }
                };

                yield return new JSBreakExpression().ToStatement();
            }
            else
            {
                foreach (var stmnt in Statements.Where(s => !(s.Expression is JSBreakExpression)))
                    yield return stmnt;
            }
        }

        private void UpdatePositions()
        {
            foreach (var stmt in Statements)
            {
                foreach (var x in stmt.GetChildrenRecursive(_ => true))
                {
                    var ifier = x as JSIdentifier;
                    if (ifier != null && ifier.Name == "__braille_pos__")
                    {
                        ifier.Name = "__braille_pos_" + Depth + "__";
                    }

                    if (ifier != null && ifier.Name == "__braille_outer_pos__")
                    {
                        ifier.Name = "__braille_pos_" + Math.Max(0, Depth - 1) + "__";
                    }

                    //if (ifier != null && ifier.Name == "__braille_outer_pos_marked__")
                    //{
                    //    ifier.Name = "__braille__" + depth + "__";
                    //}

                    //if (ifier != null && ifier.Name == "__braille_outer_pos_unmarked__")
                    //{
                    //    ifier.Name = "__braille_outer_pos_marked__";
                    //}
                }
            }
        }

        private void InsertMissingCatchBlocks()
        {
            foreach (var pair in Statements.Zip(Statements.Skip(1).EndWith(null), (current, next) => new { current, next }))
            {
                if (pair.current is JSTryBlock &&
                    false == pair.next is JSCatchBlock &&
                    false == pair.next is JSFinallyBlock)
                {
                    ((JSTryBlock)pair.current).InsertEmptyCatch = true;
                }
            }
        }

        public void InsertLabel(int p)
        {
            if (false == hasBranching)
                Statements.Insert(0, new JSSwitchCase { Value = new JSNumberLiteral { Value = 0, IsHex = true } });

            hasBranching = true;

            Statements.Add(new JSSwitchCase { Value = new JSNumberLiteral { Value = p, IsHex = true } });
        }

        public void InsertBlock(BlockBuilder block, BlockKind kind, JSExpression catchType)
        {
            switch (kind)
            {
                case BlockKind.Try:
                    Statements.Add(new JSTryBlock { Statements = block.Build().ToList() });
                    break;
                case BlockKind.Catch:
                    block.Statements.Insert(0,
                        new JSStatement
                        {
                            Expression = new JSBinaryExpression
                            {
                                Left = new JSIdentifier { Name = "__braille_error_handled_" + (block.Depth - 1) + "__" },
                                Operator = "=",
                                Right = new JSBoolLiteral { Value = false }
                            }
                        });
                    Statements.Add(new JSIfStatement
                    {
                        Condition = new JSBinaryExpression
                        {
                            Left = new JSIdentifier { Name = "__braille_error__" },
                            Operator = "instanceof",
                            Right = catchType
                        },
                        Statements = block.Build().ToList()
                    });
                    break;
                case BlockKind.Fault:
                    block.Statements.Add(new JSStatement { Expression = new JSThrowExpression { Expression = new JSIdentifier { Name = "__braille_error__" } } });
                    Statements.Add(new JSIfStatement
                    {
                        Condition = new JSBinaryExpression
                        {
                            Left = new JSIdentifier { Name = "__braille_error_handled_" + (block.Depth - 1) + "__" },
                            Operator = "===",
                            Right = new JSBoolLiteral { Value = false }
                        },
                        Statements = block.Build().ToList()
                    });
                    break;
                case BlockKind.CatchWrapper:
                    block.Statements.Insert(0, new JSStatement
                    {
                        Expression = new JSVariableDelcaration { Name = "__braille_error_handled_" + block.Depth + "__", Value = new JSBoolLiteral { Value = false } }
                    });
                    Statements.Add(new JSCatchBlock { Error = new JSIdentifier { Name = "__braille_error__" }, Statements = block.Build().ToList() });
                    break;
                case BlockKind.Finally:
                    Statements.Add(new JSFinallyBlock { Statements = block.Build().ToList() });
                    break;
            }
        }

        public void InsertStatements(IEnumerable<JSStatement> statements)
        {
            Statements.AddRange(statements);
        }
    }
}
