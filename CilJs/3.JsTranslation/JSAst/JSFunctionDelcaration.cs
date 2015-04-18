using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class JSFunctionDelcaration : JSExpression
    {
        public readonly static JSFunctionDelcaration Empty = new JSFunctionDelcaration();

        public bool Inline { get; set; }
        public string Name { get; set; }
        public List<JSStatement> Body { get; set; }
        public List<JSFunctionParameter> Parameters { get; set; }

        public JSFunctionDelcaration()
        {
            Body = new List<JSStatement>();
            Parameters = new List<JSFunctionParameter>();
        }

        public override void Emit(Emitter emitter)
        {
            emitter.EmitString("function ");

            if (Name != null)
                emitter.EmitString(Name);

            emitter.EmitString("(");

            if (Parameters != null)
            {
                var first = true;
                foreach (var p in Parameters)
                {
                    if (false == first)
                    {
                        emitter.EmitString(", ");
                    }

                    first = false;

                    emitter.Emit(p);
                }
            }

            emitter.EmitString(")");


            if (!Inline)
                emitter.EmitNewLineAndIndentation();

            emitter.EmitString("{");
            emitter.Formatting.IncreaseIndentation();

            {
                var variables = GetChildrenRecursive(a => a == this || !(a is JSFunctionDelcaration))
                    .OfType<JSVariableDelcaration>()
                    .Select(v => v.Name)
                    .Distinct();

                if (variables.Any())
                {
                    foreach (var v in variables)
                    {
                        if (false == Inline)
                            emitter.EmitNewLineAndIndentation();

                        emitter.EmitString("var ");
                        emitter.EmitString(v);
                        emitter.EmitString(";");
                    }
                }

                if (Body != null)
                {
                    var lastPos = 0L;

                    foreach (var p in Body)
                    {
                        if (false == Inline && emitter.Position != lastPos)
                        {
                            emitter.EmitNewLineAndIndentation();
                        }

                        if (Inline)
                        {
                            emitter.EmitString(" ");
                        }

                        lastPos = emitter.Position;

                        emitter.Emit(p);
                    }
                }
            }
            
            emitter.Formatting.DecreaseIndentation();

            if (!Inline)
                emitter.EmitNewLineAndIndentation();

            emitter.EmitString("}");
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            if (Body != null)
                foreach (var x in Body)
                    yield return x;

            if (Parameters != null)
                foreach (var x in Parameters)
                    yield return x;
        }


    }
}
