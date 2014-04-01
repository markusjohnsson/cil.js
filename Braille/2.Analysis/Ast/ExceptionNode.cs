using System.Collections.Generic;

namespace Braille.Ast
{
    class ExceptionNode : Node
    {
        public List<VariableInfo> StoreLocations = new List<VariableInfo>();
    }
}
