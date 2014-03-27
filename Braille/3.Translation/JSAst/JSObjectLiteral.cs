using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSObjectLiteral : JSExpression
    {
        public IEnumerable<KeyValuePair<string, JSExpression>> Properties { get; set; }

        public JSObjectLiteral()
        {
            Properties = new Dictionary<string, JSExpression>();
        }

        public override string ToString()
        {
            return string.Format("{{ \n{0} \n}}",
                string.Join(",\n",
                    Properties.Select(p => string.Format("'{0}': {1}", p.Key, p.Value.ToString()))));
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            return Properties.Select(k => k.Value);
        }
    }
}
