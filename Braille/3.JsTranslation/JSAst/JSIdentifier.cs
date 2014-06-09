using Braille.JsTranslation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSIdentifier : JSExpression
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
                if (string.IsNullOrWhiteSpace(value))
                    throw new InvalidOperationException();
                _Name = value;
            }
        }

        public override string ToString()
        {
            return Name;
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }
    }
}
