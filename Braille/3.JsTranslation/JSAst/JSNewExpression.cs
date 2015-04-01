using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSNewExpression : JSExpression
    {
        public JSExpression Constructor { get; set; }
        public List<JSExpression> Arguments { get; set; }

        public JSNewExpression()
        {
            Arguments = new List<JSExpression>();
        }

        public override void Emit(Emitter emitter)
        {
            emitter.EmitString("new ");
            emitter.EmitParenthesizedIf(Constructor, false == (Constructor is JSIdentifier));
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
                    arg.Emit(emitter);
                }
            }

            emitter.EmitString(")");
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Constructor;
            if (Arguments != null)
            {
                foreach (var x in Arguments)
                    yield return x;
            }
        }
    }
}
