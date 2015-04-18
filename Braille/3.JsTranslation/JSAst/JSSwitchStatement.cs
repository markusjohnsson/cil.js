using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class JSSwitchStatement: JSStatement
    {

        public override string ToString(Formatting formatting)
        {

            var sb = new StringBuilder();
            sb.Append(formatting.NewLine + formatting.Indentation + "switch (");
            sb.Append(Value.ToString(formatting));
            sb.Append("){");

            formatting.IncreaseIndentation();
            if (Statements != null)
            {
                sb.Append(formatting.NewLine);
                sb.Append(formatting.Indentation);
                sb.Append(string.Join(formatting.NewLine + formatting.Indentation, Statements.Select(s => s.ToString(formatting))));
            }
            formatting.DecreaseIndentation();
            sb.Append(formatting.NewLine + formatting.Indentation + "}");

            return sb.ToString();
        }

        public JSIdentifier Value { get; set; }

        public List<JSStatement> Statements { get; set; }


        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Value;

            foreach (var s in Statements)
                yield return s;
        }
    }
}
