
using System;
using System.Reflection.Emit;
namespace Braille.MethodTransform
{
    class OpInstruction
    { 
        public System.Reflection.Emit.OpCode OpCode { get; set; }

        public object Data { get; set; }

        public override string ToString()
        {
            object data = Data;

            if (OpCode.FlowControl == FlowControl.Branch ||
                OpCode.FlowControl == FlowControl.Cond_Branch)
            {
                if (OpCode.Name != "switch")
                {
                    data = string.Format("IL_{0:X2}", GetBranchData());
                }
            }
            
            return string.Format("IL_{0:X2}: {1} {2}", Position, OpCode, data);
        }

        private int GetBranchData()
        {
            if (Data is byte)
                return (1 + Position + Size + (sbyte)(byte)Data);
            else
                return 1 + Position + Size + (int)Data;
        }


        public int Position { get; set; }

        public int Size { get; set; }

    }
}
