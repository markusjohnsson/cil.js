using CilJs.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class JSLineComment: JSExpression
    {
        public string Text { get; set; }

        public override void Emit(Emitter emitter)
        {
            var first = true;
            foreach (var t in Text.Split('\n'))
            {
                if (first == false)
                    emitter.EmitNewLineAndIndentation();

                first = false;

                emitter.EmitString("/* ");
                emitter.EmitString(t.Replace("*/", "* /"));
                emitter.EmitString("*/");
            }
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }
    }
}
