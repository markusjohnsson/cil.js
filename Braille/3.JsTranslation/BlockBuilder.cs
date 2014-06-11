
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
            //InsertMissingCatchBlocks();

            if (hasBranching)
            {
                yield return JSFactory.Statement(
                    new JSVariableDelcaration
                    {
                        Name = "__pos_" + Depth + "__",
                        Value = new JSNumberLiteral { Value = 0, IsHex = true }
                    });

                yield return new JSWhileLoopStatement
                {
                    Condition = new JSBinaryExpression
                    {
                        Left = new JSIdentifier { Name = "__pos_" + Depth + "__" },
                        Operator = ">=",
                        Right = new JSNumberLiteral { Value = 0 }
                    },
                    Statements = new List<JSStatement> 
                    {
                        new JSSwitchStatement
                        {
                            Value = new JSIdentifier { Name = "__pos_" + Depth + "__" },
                            Statements = Statements
                        }
                    }
                };

                yield return new JSBreakExpression().ToStatement();
            }
            else
            {
                foreach (var stmnt in Statements.Where(s => !(s is JSExpressionStatement) || !(((JSExpressionStatement)s).Expression is JSBreakExpression)))
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
                    if (ifier != null && ifier.Name == "__pos__")
                    {
                        ifier.Name = "__pos_" + Depth + "__";
                    }

                    if (ifier != null && ifier.Name == "__outer_pos__")
                    {
                        ifier.Name = "__pos_" + Math.Max(0, Depth - 1) + "__";
                    }
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

        public void InsertStatements(IEnumerable<JSStatement> statements)
        {
            Statements.AddRange(statements);
        }

        internal void InsertTryBlock(IEnumerable<JSStatement> enumerable)
        {
            throw new NotImplementedException();
        }
    }
}
