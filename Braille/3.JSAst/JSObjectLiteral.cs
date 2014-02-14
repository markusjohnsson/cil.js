using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSObjectLiteral : JSExpression
    {
        public Dictionary<string, JSExpression> Properties { get; set; }

        public override string ToString()
        {
            return string.Format("{{ {0} }}",
                string.Join(",", Properties.Select(p => string.Format("{0}: {1}", p.Key, p.Value.ToString()))));
        }
    }
}
