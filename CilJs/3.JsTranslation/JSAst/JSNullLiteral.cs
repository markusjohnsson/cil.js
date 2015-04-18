using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class JSNullLiteral: JSExpression
    {
        public override void Emit(Emitter emitter)
        {
            emitter.EmitString("null");
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }
    }
}
