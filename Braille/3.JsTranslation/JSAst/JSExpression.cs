using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class Formatting
    {
        private int indentationLevel;
        
        public void IncreaseIndentation() { indentationLevel++; UpdateIndentation(); }
        public void DecreaseIndentation() { indentationLevel--; UpdateIndentation(); }

        private string indent;
        
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
        public override string ToString()
        {
            return ToString(new Formatting());
        }

        public abstract string ToString(Formatting formatting);

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
