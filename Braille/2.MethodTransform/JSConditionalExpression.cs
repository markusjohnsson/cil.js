﻿using System;

namespace Braille.JSAst
{
    class JSConditionalExpression : JSExpression
    {
        public JSExpression Condition { get; set; }

        public JSExpression TrueValue { get; set; }

        public JSExpression FalseValue { get; set; }

        public override string ToString()
        {
            return String.Format("({0}) ? ({1}) : ({2})", Condition, TrueValue, FalseValue);
        }
    }
}
