using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSFunctionDelcaration : JSExpression
    {
        public readonly static JSFunctionDelcaration Empty = new JSFunctionDelcaration();

        public string Name { get; set; }
        public List<JSStatement> Body { get; set; }
        public List<JSFunctionParameter> Parameters { get; set; }
        
        public JSFunctionDelcaration()
        {
            Body = new List<JSStatement>();
            Parameters = new List<JSFunctionParameter>();
        }

        public override string ToString()
        {
            // todo: let this happen in OpToJsTransform
            var variables = GetChildrenRecursive(a => a == this || !(a is JSFunctionDelcaration))
                .OfType<JSVariableDelcaration>()
                .Select(v => v.Name)
                .Distinct();

            return string.Format("function {0}({1}) {{ {2}\n {3} }}",
                Name ?? "",
                Parameters == null ?
                    "" : string.Join(",", Parameters.Select(p => p.ToString())),
                string.Join("\n", variables.Select(v => "var " + v + ";")),
                Body == null ?
                    "" : string.Join("\n", Body.Select(p => p.ToString()).Where(s => !string.IsNullOrWhiteSpace(s))));
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
