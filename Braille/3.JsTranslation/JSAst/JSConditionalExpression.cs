using System;
using System.IO;

namespace Braille.JSAst
{
    class JSConditionalExpression : JSExpression
    {
        public JSExpression Condition { get; set; }

        public JSExpression TrueValue { get; set; }

        public JSExpression FalseValue { get; set; }

        public override void Emit(Emitter emitter)
        {
            emitter.EmitString("(");
            emitter.EmitParenthesized(Condition);
            emitter.EmitString("?");
            emitter.EmitParenthesized(TrueValue);
            emitter.EmitString(":");
            emitter.EmitParenthesized(FalseValue);
            emitter.EmitString(")");
        }

        public override System.Collections.Generic.IEnumerable<JSExpression> GetChildren()
        {
            yield return Condition;
            yield return TrueValue;
            yield return FalseValue;
        }
    }
}
