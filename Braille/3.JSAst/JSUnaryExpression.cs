using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSUnaryExpression: JSExpression
    {
        public string Operator { get; set; }

        public JSExpression Operand { get; set; }

        public override string ToString()
        {
            return "(" + Operator + Operand.ToString() + ")";
        }


        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Operand;
        }
    }
}
