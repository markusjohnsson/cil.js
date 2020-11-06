
using Managed.Reflection;
namespace CilJs.Ast
{
    abstract class Node
    {
        public Type ResultType { get; set; }
    }

    class AnnotatedNode : Node
    {
        public Node ChildNode { get; set; }
        public string Annotation { get; set; }
    }
}