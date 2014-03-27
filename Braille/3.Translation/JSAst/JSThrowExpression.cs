using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSThrowExpression: JSExpression
    {

        public override string ToString()
        {
            return "throw " + Expression.ToString();
        }

        public JSExpression Expression { get; set; }


        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Expression;
        }
    }
}
