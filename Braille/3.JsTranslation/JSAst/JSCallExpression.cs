using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSCallExpression : JSExpression
    {
        public bool Indent { get; set; }
        public JSExpression Function { get; set; }
        public List<JSExpression> Arguments { get; set; }

        public JSCallExpression()
        {
            Arguments = new List<JSExpression>();
        }

        public override void Emit(Emitter emitter)
        {
            var function = Function;

            emitter.EmitParenthesizedIf(function, false == IsIdentifier(function));

            emitter.Formatting.IncreaseIndentation();

            emitter.EmitString("(");
            if (Arguments != null)
            {
                var first = true;
                foreach (var arg in Arguments)
                {
                    if (false == first)
                    {
                        emitter.EmitString(",");
                    }

                    first = false;

                    if (Indent)
                    {
                        emitter.EmitNewLine();
                        emitter.EmitIndentation();
                    }

                    emitter.Emit(arg);
                }
            }
            emitter.EmitString(")");
            

            emitter.Formatting.DecreaseIndentation();
        }

        private static bool IsIdentifier(JSExpression function)
        {
            var prop = function as JSPropertyAccessExpression;
            return function is JSIdentifier || (prop != null && IsIdentifier(prop.Host));
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Function;
            if (Arguments != null)
                foreach (var x in Arguments)
                    yield return x;
        }
    }
}
