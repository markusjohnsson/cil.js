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
        public IEnumerable<Frame> Process(IEnumerable<Frame> method)
        {
            foreach (var f in method)
            {
                switch (f.Instruction.OpCode.Name)
                {
                    case "br":
                        {
                            var targetPosition = 1 + f.Instruction.Position + f.Instruction.Size + (int)f.Instruction.Data;
                            var targetFrame = method.Where(f2 => f2.ContainsPosition(targetPosition)).First();
                            targetFrame.IsLabel = true;
                        }
                        break;
                    case "br.s":
                        {
                            var targetPosition = 1 + f.Instruction.Position + f.Instruction.Size + (byte)f.Instruction.Data;
                            var targetFrame = method.Where(f2 => f2.ContainsPosition(targetPosition)).First();
                            targetFrame.IsLabel = true;
                        }
                        break;
                    default:
                        //yield return f;
                        break;
                }


                yield return f;
            }
        }
    }
}
