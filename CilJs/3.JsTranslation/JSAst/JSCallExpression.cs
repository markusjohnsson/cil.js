using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class JSCallExpression : JSExpression
    {
        public bool Indent { get; set; }
        public JSExpression Function { get; set; }
        public List<JSExpression> Arguments { get; set; }

        public JSCallExpression()
        {
            Arguments = new List<JSExpression>();
        }

        public override string ToString(Formatting formatting)
        {
            var s = "";

            var function = Function;

            if (IsIdentifier(function))
                s += Function.ToString(formatting);
            else
                s += "(" + Function.ToString(formatting) + ")";

            formatting.IncreaseIndentation();

            string prefix;
            if (Indent)
            {
                prefix = formatting.NewLine + formatting.Indentation;
            }
            else
            {
                prefix = "";
            }
                

            if (Arguments != null)
                s += string.Format("({0}{1})", prefix, string.Join("," + prefix, Arguments.Select(a => a.ToString(formatting))));
            else
                s += "()";

            formatting.DecreaseIndentation();

            return s;
        }

        private static bool IsIdentifier(JSExpression function)
        {
            var prop = function as JSPropertyAccessExpression;
            return function is JSIdentifier || (prop != null && IsIdentifier(prop.Host));
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Function;
            if (Arguments != null)
                foreach (var x in Arguments)
                    yield return x;
        }
    }
}
