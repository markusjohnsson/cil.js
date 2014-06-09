﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSArrayLiteral: JSExpression
    {
        public IEnumerable<JSExpression> Values { get; set; }

        public override string ToString(Formatting formatting)
        {
            return string.Format("[ {0} ]", Values == null ? "" : string.Join(",", Values.Select(v => v.ToString(formatting))));
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            if (Values == null)
                yield break;

            foreach (var v in Values)
                yield return v;
        }
    }
}
