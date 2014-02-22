using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSBinaryExpression: JSExpression
    {
        public JSExpression Left { get; set; }
        public JSExpression Right { get; set; }

        public string Operator { get; set; }

        public override string ToString()
        {
            return string.Format("{0} {1} {2}", WrapBinaryExpressions(Left), Operator, WrapBinaryExpressions(Right));
        }

        private string WrapBinaryExpressions(JSExpression expression)
        {
            if (expression is JSBinaryExpression)
                return "(" + expression.ToString() + ")";
            else
                return expression.ToString();
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Left;
            yield return Right;
        }
    }
}
