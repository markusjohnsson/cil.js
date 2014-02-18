using Braille.AssemblyTransform;
using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.MethodTransform
{
    class BlockBuilder
    {
        public List<JSStatement> Statements = new List<JSStatement>();

        private int depth;
        private bool hasBranching;

        public BlockBuilder(int depth)
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
}
