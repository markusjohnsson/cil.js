using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSWhileLoopStatement : JSStatement
    {
        public JSWhileLoopStatement()
        {
            Statements = new List<JSStatement>();
        }

        public JSExpression Condition { get; set; }

        public List<JSStatement> Statements { get; set; }

        public override string ToString()
        {
            return String.Format("while ({0}){{\n{1}\n}}", Condition, string.Join("", Statements));
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Condition;

            foreach (var x in Statements)
                yield return x;
        }
    }
}
