using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class Formatting
    {
        private int indentationLevel;
        
        public void IncreaseIndentation() { indentationLevel++; UpdateIndentation(); }
        public void DecreaseIndentation() { indentationLevel--; UpdateIndentation(); }

        private string indent = string.Empty;
        
        private void UpdateIndentation()
        {
            indent = new string(' ', 4 * indentationLevel);
        }

        public string Indentation { get { return indent; } }

        public string NewLine { get; set; }

        public Formatting()
        {
            NewLine = Environment.NewLine;
        }
    }

    abstract class JSExpression 
    {
        public sealed override string ToString()
        {
            using (var writer = new StringWriter())
            {
                Emit(new Emitter(new Formatting(), writer));
                return writer.ToString();
            }
        }

        public abstract void Emit(Emitter emitter);

        public abstract IEnumerable<JSExpression> GetChildren();

        public IEnumerable<JSExpression> GetChildrenRecursive(Func<JSExpression, bool> descend)
        {
            if (!descend(this))
                yield break;

            foreach (var x in GetChildren())
            {
                if (x != null)
                {
                    yield return x;

                    foreach (var y in x.GetChildrenRecursive(descend))
                        yield return y;
                }
            }
        }

        public JSStatement ToStatement()
        {
            return new JSExpressionStatement(this);
        }

    }
}
