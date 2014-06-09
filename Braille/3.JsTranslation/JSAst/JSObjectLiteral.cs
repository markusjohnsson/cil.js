using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSObjectLiteral : JSExpression
    {
        public IEnumerable<KeyValuePair<string, JSExpression>> Properties { get; set; }

        public JSObjectLiteral()
        {
            Properties = new Dictionary<string, JSExpression>();
        }

        public override string ToString(Formatting formatting)
        {
            var sb = new StringBuilder();
            sb.Append("{");

            formatting.IncreaseIndentation();

            {
                sb.Append(string.Join("," + formatting.NewLine + formatting.Indentation,
                    Properties.Select(p => string.Format("'{0}': {1}", p.Key, p.Value.ToString(formatting)))));

                sb.Append(formatting.NewLine);
            }

            formatting.DecreaseIndentation();

            sb.Append(formatting.Indentation + "}");
            return sb.ToString();
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            return Properties.Select(k => k.Value);
        }
    }
}
