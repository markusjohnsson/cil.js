namespace CilJs.Ast
{
    class JumpLabel : Node
    {
        public int Position;

        public bool IntruducesBranching;

        public JumpLabel(int position, bool intruducesBranching)
        {
            Position = position;
            IntruducesBranching = intruducesBranching;
        }

        public override string ToString()
        {
            return $"{string.Format("IL_{0:X2}", Position)}: Label";
        }
    }
}
