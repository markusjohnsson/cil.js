using System;
using System.Collections.Generic;

namespace CilJs.JSAst
{
    internal class JSEmitCallbackExpression : JSStatement
    {
        private Func<Emitter, IEnumerable<JSStatement>> p;

        public JSEmitCallbackExpression(Func<Emitter, IEnumerable<JSStatement>> p)
        {
            this.p = p;
        }

        public override void Emit(Emitter emitter)
        {
            foreach (var s in p(emitter))
                s.Emit(emitter);
        }

        public override IEnumerable<JSExpression> GetChildren()
        { 
            yield break;
        }
    }
}