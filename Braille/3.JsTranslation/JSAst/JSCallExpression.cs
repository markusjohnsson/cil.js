using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSCallExpression : JSExpression
    {
        public JSExpression Function { get; set; }
        public List<JSExpression> Arguments { get; set; }

        public JSCallExpression()
        {
            Arguments = new List<JSExpression>();
        }

        public override string ToString(Formatting formatting)
        {
            var s = "";

            if (Function is JSIdentifier)
                s += Function.ToString(formatting);
            else
                s += "(" + Function.ToString(formatting) + ")";

            if (Arguments != null)
                s += string.Format("({0})", string.Join(",", Arguments.Select(a => a.ToString(formatting))));
            else
                s += "()";

            return s;
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
