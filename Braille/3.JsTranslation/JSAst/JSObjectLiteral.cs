using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSObjectLiteral : JSExpression
    {
        public IEnumerable<KeyValuePair<string, JSExpression>> Properties { get; set; }

        public JSObjectLiteral()
        {
            Properties = new Dictionary<string, JSExpression>();
        }

        public override void Emit(Emitter emitter)
        {
            if (Properties.IsEmpty())
            {
                emitter.EmitString("{}");
                return;
            }

            emitter.EmitString("{");

            emitter.Formatting.IncreaseIndentation();

            {
                emitter.EmitNewLineAndIndentation();

                var first = true;

                foreach (var prop in Properties)
                {
                    if (false == first)
                    {
                        emitter.EmitString(",");
                        emitter.EmitNewLineAndIndentation();
                    }

                    first = false;

                    emitter.EmitString("'");
                    emitter.EmitString(prop.Key);
                    emitter.EmitString("'");
                    emitter.EmitString(": ");
                    emitter.Emit(prop.Value);
                }

                emitter.EmitNewLine();
            }

            emitter.Formatting.DecreaseIndentation();

            emitter.EmitIndentation();
            emitter.EmitString("}");
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            return Properties.Select(k => k.Value);
        }
    }
}
