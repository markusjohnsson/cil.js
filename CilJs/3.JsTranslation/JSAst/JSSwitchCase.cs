using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class JSSwitchCase: JSStatement
    {
        public JSExpression Value { get; set; }

        public override void Emit(Emitter emitter)
        {
            emitter.EmitString("case ");
            Value.Emit(emitter);
            emitter.EmitString(":");
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Value;
        }

    }
}
