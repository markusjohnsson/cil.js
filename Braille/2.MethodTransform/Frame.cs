using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Braille.MethodTransform
{
    class Frame
    {
        public ILInstruction Instruction;
        public List<Frame> Values = new List<Frame>();

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
    }
}
