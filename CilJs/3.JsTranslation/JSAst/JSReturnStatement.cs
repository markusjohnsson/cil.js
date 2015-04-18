using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class JSReturnExpression : JSExpression
    {
        public JSExpression Expression { get; set; }

        public override void Emit(Emitter emitter)
        {
            emitter.EmitString("return");

            if (Expression != null)
            {
                emitter.EmitString(" ");
                Expression.Emit(emitter);
            }
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Expression;
        }
    }
}
