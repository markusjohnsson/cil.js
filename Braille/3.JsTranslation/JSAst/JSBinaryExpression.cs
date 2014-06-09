using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSBinaryExpression: JSExpression
    {
        private JSExpression _Left;
        public JSExpression Left
        {
            get
            {
                return _Left;
            }
            set
            {
                if (value == null) throw new ArgumentNullException();
                _Left = value;
            }
        }
        private JSExpression _Right;
        public JSExpression Right
        {
            get
            {
                return _Right;
            }
            set
            {
                if (value == null) throw new ArgumentNullException();
                _Right = value;
            }
        }

        public string Operator { get; set; }

        public override string ToString(Formatting formatting)
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
