using System.Collections.Generic;

namespace Braille.Ast
{
    class ExceptionNode : OpNode
    {
        public List<VariableInfo> StoreLocations = new List<VariableInfo>();
    }
}
