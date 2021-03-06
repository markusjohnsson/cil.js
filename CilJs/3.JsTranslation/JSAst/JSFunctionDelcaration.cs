using System.Collections.Generic;
using System.Linq;

namespace CilJs.JSAst
{
    class JSFunctionDelcaration : JSExpression
    {
        public readonly static JSFunctionDelcaration Empty = new JSFunctionDelcaration();

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

            emitter.EmitNewLineAndIndentation();

            emitter.EmitString("{");
            emitter.Formatting.IncreaseIndentation();

            {
                var variables = GetChildrenRecursive(a => a == this || !(a is JSFunctionDelcaration)) // do not descend any other functions
                    .OfType<JSVariableDelcaration>()
                    .Select(v => v.Name)
                    .Distinct();

                foreach (var v in variables)
                {
                    emitter.EmitNewLineAndIndentation();

                    emitter.EmitString("var ");
                    emitter.EmitString(v);
                    emitter.EmitString(";");
                }
                
                if (Body != null)
                {
                    var lastPos = 0L;

                    foreach (var p in Body)
                    {
                        if (emitter.Position != lastPos)
                            emitter.EmitNewLineAndIndentation();

                        lastPos = emitter.Position;

                        emitter.Emit(p);
                    }
                }
            }
            
            emitter.Formatting.DecreaseIndentation();

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
