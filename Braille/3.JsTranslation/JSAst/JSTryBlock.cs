using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSTryBlock : JSStatement
    {
        public List<JSStatement> Statements { get; set; }

        public override string ToString(Formatting formatting)
        {
            var sb = new StringBuilder();
            sb.Append(formatting.NewLine + formatting.Indentation + "try {");
            formatting.IncreaseIndentation();
            sb.Append(string.Join(formatting.NewLine + formatting.Indentation, Statements.Select(s => s.ToString(formatting))));
            formatting.DecreaseIndentation();
            sb.Append(formatting.NewLine + formatting.Indentation + "}");
            
            return sb.ToString();
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            foreach (var s in Statements)
                yield return s;
        }
    }

    class JSCatchBlock : JSStatement
    {
        public List<JSStatement> Statements { get; set; }

        public JSIdentifier Error { get; set; }

        public override string ToString(Formatting formatting)
        {

            var sb = new StringBuilder();
            sb.Append(formatting.NewLine + formatting.Indentation + "catch (");
            sb.Append(Error.ToString(formatting));
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
            foreach (var s in Statements)
                yield return s;

            if (Error != null)
                yield return Error;
        }
    }

    class JSFinallyBlock : JSStatement
    {
        public List<JSStatement> Statements { get; set; }

        public override string ToString(Formatting formatting)
        {
            var sb = new StringBuilder();
            sb.Append(formatting.NewLine + formatting.Indentation + "finally {");
            formatting.IncreaseIndentation();
            sb.Append(string.Join(formatting.NewLine + formatting.Indentation, Statements.Select(s => s.ToString(formatting))));
            formatting.DecreaseIndentation();
            sb.Append(formatting.NewLine + formatting.Indentation + "}");

            return sb.ToString();
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            foreach (var s in Statements)
                yield return s;
        }
    }
}
