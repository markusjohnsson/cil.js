using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSNewExpression: JSExpression
    {
        public JSExpression Constructor { get; set; }
        public IEnumerable<JSExpression> Arguments { get; set; }

        public override string ToString()
        {
            return String.Format("new {0}({1})", Constructor, string.Join(",", Arguments));
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Constructor;
            foreach (var x in Arguments)
                yield return x;
        }
    }
}
