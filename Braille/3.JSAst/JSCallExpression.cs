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

            s += string.Format("({0})", string.Join(",", Arguments));

            return s;
        }
    }
}
