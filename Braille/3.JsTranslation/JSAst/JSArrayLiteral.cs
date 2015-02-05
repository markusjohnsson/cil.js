using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSArrayLiteral: JSExpression
    {
        public IEnumerable<JSExpression> Values { get; set; }
        
        public bool Inline { get; set; }

        public override string ToString(Formatting formatting)
        {
            if (Values == null || Values.IsEmpty())
                return "[]";


            var sb = new StringBuilder();
            sb.Append("[");

            formatting.IncreaseIndentation();

            {
                if (!Inline)
                {
                    sb.Append(formatting.NewLine);
                    sb.Append(formatting.Indentation);   
                }

                var separatingWhitespace = Inline ? " " : formatting.NewLine + formatting.Indentation;

                sb.Append(string.Join("," + separatingWhitespace,
                    GetChildren().Select(p => p.ToString(formatting))));

                if (!Inline)
                {
                    sb.Append(formatting.NewLine);   
                }
            }

            formatting.DecreaseIndentation();

            if (Inline)
                sb.Append("]");
            else
                sb.Append(formatting.Indentation + "]");
            return sb.ToString();
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            if (Values == null)
                yield break;

            foreach (var v in Values)
                yield return v;
        }
    }
}
