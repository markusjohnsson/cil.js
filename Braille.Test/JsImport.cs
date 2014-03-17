using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;

namespace Braille.Test
{
    public class JsImportAttribute : Attribute
    {
        public JsImportAttribute(string function)
        {
            Function = function;
        }

        public string Function { get; set; }

    }
}
