using System.Collections.Generic;

namespace CilJs.JSAst
{
    class JSEmptyExpression : JSExpression
    {
        public override void Emit(Emitter emitter)
        {
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }
    }
}
