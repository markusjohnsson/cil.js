
using CilJs.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CilJs.Analysis;
using CilJs.Ast;

namespace CilJs.JsTranslation
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
        private bool hasFinally;
        private int startPosition;

        public BlockBuilder(int depth, int startPosition, bool hasFinally)
        {
            this.depth = depth;
            this.startPosition = startPosition;
            this.hasFinally = hasFinally;
        }

        public IEnumerable<JSStatement> Build()
        {
            UpdatePositions();

            if (hasBranching)
            {
                yield return JSFactory.Statement(
                    new JSVariableDelcaration
                    {
                        Name = "in_block_" + Depth,
                        Value = new JSBoolLiteral { Value = true }
                    });

                if (hasFinally)
                {
                    yield return JSFactory.Statement(
                        new JSVariableDelcaration
                        {
                            Name = "__finally_continuation_" + Depth + "__",
                            Value = new JSIdentifier { Name = "__pos__" }
                        });
                }

                yield return JSFactory.Statement(
                    new JSVariableDelcaration
                    {
                        Name = "__pos__",
                        Value = new JSNumberLiteral { Value = startPosition }
                    });

                yield return new JSWhileLoopStatement
                {
                    Condition = new JSIdentifier { Name = "in_block_" + Depth },
                    Statements = new List<JSStatement> 
                    {
                        new JSSwitchStatement
                        {
                            Value = new JSIdentifier { Name = "__pos__" },
                            Statements = Statements
                        }
                    }
                };

            }
            else
            {
                foreach (var stmnt in Statements
                    .Where(s => !(s is JSSwitchCase) && !((s is JSExpressionStatement) && (
                        ((JSExpressionStatement)s).Expression is JSBreakExpression))))
                {
                    yield return stmnt;
                }

            }
        }

        private void UpdatePositions()
        {
            var toRemove = new List<JSStatement>();

            foreach (var stmt in Statements)
            {
                foreach (var x in stmt.GetChildrenRecursive(_ => true))
                {
                    var ifier = x as JSIdentifier;

                    if (ifier != null && ifier.Name == "in_block")
                    {
                        if (hasBranching)
                        {
                            ifier.Name = "in_block_" + Depth;
                        }
                        else
                        {
                            toRemove.Add(stmt);
                        }
                    }

                    if (ifier != null && ifier.Name == "__finally_continuation__")
                    {
                        if (hasBranching)
                        {
                            ifier.Name = "__finally_continuation_" + Depth + "__";
                        }
                        else
                        {
                            toRemove.Add(stmt);
                        }
                    }
                }
            }

            Statements.RemoveAll(toRemove.Contains);
        }

        public void InsertLabel(JumpLabel label)
        {
            //if (false == hasBranching)
            //    Statements.Insert(0, new JSSwitchCase { Value = new JSNumberLiteral { Value = 0, IsHex = true } });

            hasBranching = hasBranching || label.IntruducesBranching;

            Statements.Add(new JSSwitchCase { Value = new JSNumberLiteral { Value = label.Position, IsHex = true } });
        }

        public void InsertStatements(IEnumerable<JSStatement> statements)
        {
            Statements.AddRange(statements);
        }
    }
}
