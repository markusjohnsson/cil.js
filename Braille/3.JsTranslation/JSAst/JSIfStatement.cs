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

        public override string ToString(Formatting formatting)
        {

            var sb = new StringBuilder();
            sb.Append(formatting.NewLine + formatting.Indentation + "if (");
            sb.Append(Condition.ToString(formatting));
            sb.Append("){");

            formatting.IncreaseIndentation();
            if (Statements != null)
                sb.Append(string.Join(formatting.NewLine + formatting.Indentation, Statements.Select(s => s.ToString(formatting))));
            formatting.DecreaseIndentation();
            sb.Append(formatting.NewLine + formatting.Indentation + "}");

            return sb.ToString();
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
