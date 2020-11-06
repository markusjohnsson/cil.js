using System.Collections.Generic;

namespace CilJs.JSAst
{
    class JSRaw : JSExpression
    {
        public string Value { get; set; }

        public override void Emit(Emitter emitter)
        {
            emitter.EmitMultiLine(Value);
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }
    }
}
