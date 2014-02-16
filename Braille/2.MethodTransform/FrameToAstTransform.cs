using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Braille.MethodTransform
{
    class FrameToAstTransform
    {
        public IEnumerable<JSStatement> Process(Frame frame)
        {
            var opc = frame.Instruction.OpCode.Name;
            
            switch (opc)
            {
                case "br":
                case "br.s":
                    yield return new JSStatement
                    {
                        Expression = new JSBinaryExpression
                        {
                            Left = new JSIdentifier
                            {
                                Name = "__braille_pos__"
                            },
                            Operator = "=",
                            Right = new JSNumberLiteral { Value = GetTargetPosition(frame.Instruction) }
                        }
                    };
                    yield return new JSStatement
                    {
                        Expression = new JSContinueExpression()
                    };
                    break;
                default:
                    yield return new JSStatement { Expression = ProcessInternal(frame) };
                    break;
            }

        }

        private double GetTargetPosition(ILInstruction i)
        {
            int data;
            if (i.Data is byte)
                data = (byte)i.Data;
            else
                data = (int)i.Data;

            return 1 + i.Position + i.Size + data;
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
                case "ldc":
                    if (opc == "ldc.i4")
                        return new JSNumberLiteral
                        {
                            Value = (int)frame.Instruction.Data
                        };
                    else if (opc == "ldc.i4.s")
                        return new JSNumberLiteral
                        {
                            Value = (int)(byte)frame.Instruction.Data
                        };
                    else if (opc == "ldc.i4.m1")
                        return new JSNumberLiteral
                        {
                            Value = -1
                        };
                    else //if (opc.StartsWith("ldc.i4"))
                        return new JSNumberLiteral 
                        {
                            Value = int.Parse(opc.Substring("ldc.i4.".Length))
                        };
                case "ldfld":
                    return new JSIdentifier
                    {
                        Name = "this['" + (string)((FieldInfo)frame.Instruction.Data).Name + "']"
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
                case "stfld":
                    return new JSBinaryExpression 
                    {
                        Left = new JSArrayLookupExpression {
                            Array = ProcessInternal(frame.Values.First()),
                            Indexer = new JSIdentifier
                            {
                                Name = (string)((FieldInfo)frame.Instruction.Data).Name
                            }
                        },
                        Right = ProcessInternal(frame.Values.Last()),
                        Operator = "="
                    };
                case "brtrue":
                case "brfalse":
                case "switch":
                default:
                    return new JSLineComment
                    {
                        Text = opc + ": opcode not implmented"
                    };
            }
        }

        private IEnumerable<JSExpression> ProcessList(IEnumerable<Frame> list)
        {
            foreach (var i in list)
                yield return ProcessInternal(i);
        }
    }
}
