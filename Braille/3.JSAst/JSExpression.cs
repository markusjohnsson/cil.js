using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    abstract class JSExpression 
    {
        public override abstract string ToString();

        public abstract IEnumerable<JSExpression> GetChildren();

        public IEnumerable<JSExpression> GetChildrenRecursive()
        { 
            foreach (var x in GetChildren())
            {
                if (x != null)
                {
                    yield return x;
                    foreach (var y in x.GetChildrenRecursive())
                        yield return y;
                }
            }
        }

    }
}
