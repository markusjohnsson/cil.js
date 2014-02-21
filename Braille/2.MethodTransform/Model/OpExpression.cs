using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Braille.MethodTransform
{
    class OpExpression
    {
        public OpInstruction Instruction;
        public List<OpExpression> Values = new List<OpExpression>();

        public bool IsLabel { get; set; }

        internal bool ContainsPosition(int position)
        {
            if (Instruction == null)
                return false;
            return (Instruction.Position == position) || Values.Any(v => v.ContainsPosition(position));
        }
        internal int GetStartPosition()
        {
            if (Values.Any())
                return Math.Min(Instruction.Position, Values.Min(v => v.GetStartPosition()));
            else if (Instruction != null)
                return Instruction.Position;
            else
                return -1;
        }

        public ExceptionHandlingClause Handler { get; set; }

        public IEnumerable<OpExpression> Postfix()
        {
            foreach (var val in Values)
                foreach (var c in val.Postfix().Where(x => x != null))
                    yield return c;

            yield return this;
        }
    }
}
