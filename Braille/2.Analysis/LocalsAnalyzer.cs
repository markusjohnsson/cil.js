using Braille.Ast;
using Braille.Loading;
using IKVM.Reflection;
using IKVM.Reflection.Emit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Braille.Analysis
{
    class LocalsAnalyzer
    {
        public void Analyze(CilMethod method, IList<OpExpression> infos)
        {
            method.Locals = method
                .ReflectionMethod
                .GetMethodBody()
                .LocalVariables
                .Select(v => new LocalInfo { ReflectionObject = v })
                .ToArray();

            // TODO: this is probably not enough. need to do proper flow analysis. 

            foreach (var op in infos)
            {
                if (op.Instruction.OpCode.Name.StartsWith("stloc"))
                {
                    int id;
                    if (op.Instruction.Data != null)
                        id = int.Parse(op.Instruction.Data.ToString());
                    else
                        id = int.Parse(op.Instruction.OpCode.Name.Substring(5).Replace(".s", ".").Replace(".", ""));

                    method.Locals[id].IsAssigned = true;
                }
                else if (op.Instruction.OpCode.Name.StartsWith("ldloc"))
                {
                    int id;
                    if (op.Instruction.Data != null)
                        id = int.Parse(op.Instruction.Data.ToString());
                    else
                        id = int.Parse(op.Instruction.OpCode.Name.Substring(5).Replace(".s", ".").Replace(".", ""));

                    method.Locals[id].IsUsed = true;

                    if (!method.Locals[id].IsAssigned)
                        method.Locals[id].NeedInit = true;
                }
            }
        }
    }
}
