using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.Test
{
    class JsImportAttribute : Attribute
    {
        public JsImportAttribute(string function)
        {
            Function = function;
        }

        public string Function { get; set; }
    }
}
