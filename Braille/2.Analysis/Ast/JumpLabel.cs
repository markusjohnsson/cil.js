
namespace Braille.Ast
{
    class JumpLabel: Node
    {
        public int Position;

        public bool IntruducesBranching;

        public JumpLabel(int position, bool intruducesBranching)
        {
            Position = position;
            IntruducesBranching = intruducesBranching;
        }
    }
}
