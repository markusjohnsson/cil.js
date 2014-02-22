using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSStatement : JSExpression
    {
        public JSExpression Expression { get; set; }

        public override string ToString()
        {
            if (Expression is JSEmptyExpression)
                return string.Empty;

            if (Expression is JSLineComment)
                return Expression.ToString();

            return Expression.ToString() + ";";
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Expression;
        }
    }
}
