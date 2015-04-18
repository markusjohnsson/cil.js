using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class JSContinueExpression : JSExpression
    {
        public override void Emit(Emitter emitter)
        {
            emitter.EmitString("continue");
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }
    }
}
