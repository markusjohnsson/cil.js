using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSFunctionDelcaration: JSExpression
    {
        public string Name { get; set; }
        public IEnumerable<JSStatement> Body { get; set; }
        public IEnumerable<JSFunctionParameter> Parameters { get; set; }

        public override string ToString()
        {
            return string.Format("function {0}({1}) {{ {2} }}", 
                Name.ToString(), 
                string.Join(",", Parameters.Select(p => p.ToString())),
                string.Join("\n", Body.Select(p => p.ToString())).ToString());
        }
    }
}
