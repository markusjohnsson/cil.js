
using System;
namespace Braille.MethodTransform
{
    class ILInstruction
    { 
        public System.Reflection.Emit.OpCode OpCode { get; set; }

        public object Data { get; set; }

        public override string ToString()
        {
            var result = OpCode.Name;

            if (Data != null)
                result += " " + Data.ToString();

            return result;
        }
    }
}
