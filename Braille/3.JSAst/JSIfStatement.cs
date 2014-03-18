using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSIfStatement : JSStatement
    {
        public JSIfStatement()
        {
            Statements = new List<JSStatement>();
        }

        public JSExpression Condition { get; set; }

        public List<JSStatement> Statements { get; set; }

        public override string ToString()
        {
            return String.Format("if ({0}){{\n{1}\n}}", Condition, string.Join("", Statements));
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Condition;

            if (Statements != null)
            {
                foreach (var s in Statements)
                    yield return s;
            }
        }
    }
}
