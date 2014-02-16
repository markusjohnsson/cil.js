using Braille.AssemblyTransform;
using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.MethodTransform
{
    class Block
    {
        public List<Frame> Frames { get; set; }
    }

    class InsertFrameLabelsTask
    {
        public void Process(IEnumerable<Frame> method)
        {
            InternalProcess(method);
        }

        private void InternalProcess(IEnumerable<Frame> method)
        {
            foreach (var f in method)
            {
                switch (f.Instruction.OpCode.Name)
                {
                    case "br":
                        {
                            var targetPosition = GetTargetPosition(f.Instruction);
                            var targetFrame = method.Where(f2 => f2.ContainsPosition(targetPosition)).First();
                            targetFrame.IsLabel = true;
                        }
                        break;
                    case "br.s":
                        {
                            var targetPosition = GetTargetPosition(f.Instruction);
                            var targetFrame = method.Where(f2 => f2.ContainsPosition(targetPosition)).First();
                            targetFrame.IsLabel = true;
                        }
                        break;
                }
            }
        }
        
        private int GetTargetPosition(ILInstruction i)
        {
            int data;
            if (i.Data is byte)
                data = (byte)i.Data;
            else
                data = (int)i.Data;

            return 1 + i.Position + i.Size + data;
        }

    }
}
