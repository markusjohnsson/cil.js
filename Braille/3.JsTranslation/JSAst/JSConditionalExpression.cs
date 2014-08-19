using System;

namespace Braille.JSAst
{
    class JSConditionalExpression : JSExpression
    {
        public JSExpression Condition { get; set; }

        public JSExpression TrueValue { get; set; }

        public JSExpression FalseValue { get; set; }

        public override string ToString(Formatting formatting)
        {
            return String.Format("(({0}) ? ({1}) : ({2}))", Condition.ToString(formatting), TrueValue.ToString(formatting), FalseValue.ToString(formatting));
        }

        public override System.Collections.Generic.IEnumerable<JSExpression> GetChildren()
        {
            yield return Condition;
            yield return TrueValue;
            yield return FalseValue;
        }
    }
}
