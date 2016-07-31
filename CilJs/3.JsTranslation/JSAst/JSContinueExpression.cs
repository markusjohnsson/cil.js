using System.Collections.Generic;

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
