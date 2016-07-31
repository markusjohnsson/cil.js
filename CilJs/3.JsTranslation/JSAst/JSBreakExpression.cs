using System.Collections.Generic;

namespace CilJs.JSAst
{
    class JSBreakExpression: JSExpression
    {
        public override void Emit(Emitter emitter)
        {
            emitter.EmitString("break");
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }
    }
}
