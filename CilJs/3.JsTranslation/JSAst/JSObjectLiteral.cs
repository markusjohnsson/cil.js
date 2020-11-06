using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace CilJs.JSAst
{
    class JSObjectLiteral : JSExpression
    {
        static Regex identifierRegex = new Regex(@"^\w+$");
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

                    if (identifierRegex.IsMatch(prop.Key))
                    {
                        emitter.EmitString(prop.Key);
                    }
                    else
                    {
                        emitter.EmitString("\"");
                        emitter.EmitString(prop.Key);
                        emitter.EmitString("\"");
                    }
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
