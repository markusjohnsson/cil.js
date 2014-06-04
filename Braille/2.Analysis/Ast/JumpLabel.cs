
namespace Braille.Ast
{
    class JumpLabel: Node
    {
        public int Position;

        public JumpLabel(int position)
        {
            Position = position;
        }
    }
}
