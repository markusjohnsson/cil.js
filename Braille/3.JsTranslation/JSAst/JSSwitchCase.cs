using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSSwitchCase: JSStatement
    {
        public JSExpression Value { get; set; }

        public override string ToString(Formatting formatting)
        {
            return "case " + Value.ToString(formatting) + ":";
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Value;
        }

    }
}
