using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSArrayLiteral: JSExpression
    {
        public IEnumerable<JSExpression> Values { get; set; }

        public override string ToString()
        {
            return string.Format("[ {0} ]", string.Join(",", Values.Select(v => v.ToString())));
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            return Values;
        }
    }
}
