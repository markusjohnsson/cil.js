using System.Collections.Generic;

namespace Braille.Ast
{
    class OpBlock : OpNode
    {
        public OpBlockType Type;
        public string ExceptionType { get; set; }
        List<OpNode> Nodes;
    }
}
