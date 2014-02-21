using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSVariableDelcaration : JSExpression
    {
        private string _Name;
        public string Name
        {
            get
            {
                return _Name;
            }
            set
            {
                if (value == "locs")
                    throw new NotSupportedException();
                _Name = value;
            }
        }
        public JSExpression Value { get; set; }

        public override string ToString()
        {
            if (Value == null)
                return string.Format("var {0}", Name);
            else
                return string.Format("var {0} = {1}", Name, Value.ToString());
        }
    }
}
