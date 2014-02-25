using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSCallExpression : JSExpression
    {
        public JSExpression Function { get; set; }
        public IEnumerable<JSExpression> Arguments { get; set; }

        public override string ToString()
        {
            var s = "";

            if (Function is JSIdentifier)
                s += Function.ToString();
            else
                s += "(" + Function.ToString() + ")";

            if (Arguments != null)
                s += string.Format("({0})", string.Join(",", Arguments));
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
