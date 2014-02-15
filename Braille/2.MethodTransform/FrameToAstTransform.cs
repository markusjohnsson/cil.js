using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Braille.MethodTransform
{
    class FrameToAstTransform
    {
        public JSStatement Process(Frame frame)
        {
            return new JSStatement { Expression = ProcessInternal(frame) };
        }

        private JSExpression ProcessInternal(Frame frame)
        {
            if (frame == null)
                return new JSEmptyExpression();

            var opc = frame.Instruction.OpCode.Name;

            var i = opc.IndexOf(".");
            var opc_ = i > 0 ? opc.Substring(0, i) : opc;

            switch (opc_)
            {
                case "add":
                    return new JSBinaryExpression
                    {
                        Left = ProcessInternal(frame.Values.First()),
                        Right = ProcessInternal(frame.Values.Last()),
                        Operator = "+"
                    };
                case "br":
                    if ((byte)frame.Instruction.Data != 0)
                        throw new NotSupportedException();
                    return new JSEmptyExpression();
                case "call":
                    {
                        var mi = ((MethodInfo)frame.Instruction.Data);
                        return new JSCallExpression
                        {
                            Function = new JSIdentifier { Name = mi.DeclaringType.FullName + "." + mi.Name },
                            Arguments = ProcessList(frame.Values)
                        };
                    }
                case "callvirt":
                    {
                        var mi = ((MethodInfo)frame.Instruction.Data);
                        return new JSCallExpression
                        {
                            Function = new JSIdentifier { Name = mi.DeclaringType.FullName + "." + mi.Name },
                            Arguments = ProcessList(frame.Values)
                        };
                    }
                case "ldarg":
                    return new JSIdentifier
                    {
                        Name = "arguments[" + opc.Substring("ldarg.".Length) + "]"
                    };
                case "ldloc":
                    return new JSIdentifier
                    {
                        Name = opc.Substring(2).Replace(".", "")
                    };
                case "ldstr":
                    return new JSStringLiteral
                    {
                        Value = (string)frame.Instruction.Data
                    };
                case "mul":
                    return new JSBinaryExpression
                    {
                        Left = ProcessInternal(frame.Values.First()),
                        Right = ProcessInternal(frame.Values.Last()),
                        Operator = "*"
                    };
                case "newobj":
                    var ctor = (ConstructorInfo)frame.Instruction.Data;
                    return new JSNewExpression
                    {
                        Constructor = new JSIdentifier { Name = ctor.DeclaringType.FullName },
                        Arguments = ProcessList(frame.Values)
                    };
                case "nop":
                    return new JSEmptyExpression();
                case "pop":
                    return ProcessInternal(frame.Values.Single());
                case "ret":
                    return new JSReturnExpression
                    {
                        Expression = ProcessInternal(frame.Values.SingleOrDefault())
                    };
                case "stloc":
                    return new JSVariableDelcaration
                    {
                        Name = opc.Substring(2).Replace(".", ""),
                        Value = ProcessInternal(frame.Values.Single())
                    };
                case "switch":
                    return new JSLineComment
                    {
                        Text = "Switch statements not implmented"
                    };
                default:
                    throw new NotImplementedException();
            }
        }

        private IEnumerable<JSExpression> ProcessList(IEnumerable<Frame> list)
        {
            foreach (var i in list)
                yield return ProcessInternal(i);
        }
    }
}
