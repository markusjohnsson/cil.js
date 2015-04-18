using System.Collections.Generic;

namespace CilJs.Ast
{
    class ExceptionNode : Node
    {
        public List<VariableInfo> StoreLocations = new List<VariableInfo>();
    }
}
