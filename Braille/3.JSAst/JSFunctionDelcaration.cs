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
            // todo: let this happen in OpToJsTransform
            var variables = GetChildrenRecursive()
                .OfType<JSVariableDelcaration>()
                .Select(v => v.Name)
                .Distinct();

            return string.Format("function {0}({1}) {{ {2}\n {3} }}", 
                Name ?? "", 
                Parameters == null ? 
                    "" : string.Join(",", Parameters.Select(p => p.ToString())),
                string.Join("\n", variables.Select(v => "var " + v + ";")),
                string.Join("\n", Body.Select(p => p.ToString())));
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            if (Body != null)
                foreach (var x in Body)
                    yield return x;

            if (Parameters != null)
                foreach (var x in Parameters)
                    yield return x;
        }
    }
}
