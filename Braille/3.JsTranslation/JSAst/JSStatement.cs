using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    abstract class JSStatement : JSExpression
    {   
    }

    class JSExpressionStatement: JSStatement
    {
        private JSExpression _Expression;
        public JSExpression Expression
        {
            get
            {
                return _Expression;
            }
            set
            {
                if (value == null)
                    throw new InvalidOperationException();
                _Expression = value;
            }
        }

        public JSExpressionStatement()
        {
        }

        public JSExpressionStatement(JSExpression expression)
        {
            Expression = expression;
        }

        public override string ToString(Formatting formatting)
        {
            if (Expression is JSLineComment)
                return Expression.ToString(formatting);

            var result = Expression.ToString(formatting);

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
