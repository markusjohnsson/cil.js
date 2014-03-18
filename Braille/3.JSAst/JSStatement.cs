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
            if (Expression is JSLineComment)
                return Expression.ToString();

            var result = Expression.ToString();

            if (string.IsNullOrWhiteSpace(result))
                return string.Empty;

            return result + ";";
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Expression;
        }
    }
}
