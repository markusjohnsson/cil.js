using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSFunctionDelcaration : JSExpression
    {
        public readonly static JSFunctionDelcaration Empty = new JSFunctionDelcaration();

        public string Name { get; set; }
        public List<JSStatement> Body { get; set; }
        public List<JSFunctionParameter> Parameters { get; set; }

        public JSFunctionDelcaration()
        {
            Body = new List<JSStatement>();
            Parameters = new List<JSFunctionParameter>();
        }

        public override string ToString(Formatting formatting)
        {
            var sb = new StringBuilder();

            sb.Append("function ");

            if (Name != null)
                sb.Append(Name);

            sb.Append("(");

            if (Parameters != null)
                sb.Append(string.Join(",", Parameters.Select(p => p.ToString(formatting))));

            sb.Append(")");

            sb.Append(formatting.NewLine + formatting.Indentation + "{");

            formatting.IncreaseIndentation();

            {
                var variables = GetChildrenRecursive(a => a == this || !(a is JSFunctionDelcaration))
                    .OfType<JSVariableDelcaration>()
                    .Select(v => v.Name)
                    .Distinct();

                var indent = formatting.NewLine + formatting.Indentation;

                if (variables.Any())
                {
                    sb.Append(indent);
                    sb.Append(string.Join(indent, variables.Select(v => "var " + v + ";")));
                }

                if (Body != null)
                {
                    sb.Append(indent);
                    sb.Append(string.Join(indent, Body.Select(p => p.ToString(formatting)).Where(s => !string.IsNullOrWhiteSpace(s))));
                }
            }
            
            formatting.DecreaseIndentation();

            sb.Append(formatting.NewLine + formatting.Indentation + "}");

            return sb.ToString();
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            if (Body != null)
                foreach (var x in Body)
                    yield return x;

            if (Parameters != null)
                foreach (var x in Parameters)
                    yield return x;
        }


    }
}
