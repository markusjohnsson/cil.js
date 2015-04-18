using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class JSThrowExpression: JSExpression
    {

        public override void Emit(Emitter emitter)
        {
            emitter.EmitString("throw ");
            Expression.Emit(emitter);
        }

        public JSExpression Expression { get; set; }


        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Expression;
        }
    }
}
