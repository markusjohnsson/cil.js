using Braille.Ast;
using Braille.JSAst;
using Braille.Loading.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JsTranslation.OpTranslators
{
    class ArithmeticTranslator: OpTranslator
    {
        public ArithmeticTranslator(Context context, CilAssembly assembly, CilType type, CilMethod method)
            : base(context, assembly, type, method)
        {
        }

        public JSExpression Translate(OpExpression node)
        {
            var opc = node.Instruction.OpCode.Name;

            var i = opc.IndexOf(".");
            var opc_ = i > 0 ? opc.Substring(0, i) : opc;

            switch (opc_)
            {
                case "add":
                    if (node.ResultType == context.SystemTypes.UInt64 ||
                        node.ResultType == context.SystemTypes.Int64)
                    {
                        return JSFactory.Call(
                            JSFactory.Identifier("asm0", "XInt64_Addition"),
                            ProcessInternal(node.Arguments.First()),
                            ProcessInternal(node.Arguments.Last()));
                    }
                    else
                    {
                        var expr = new JSBinaryExpression
                        {
                            Left = ProcessInternal(node.Arguments.First()),
                            Right = ProcessInternal(node.Arguments.Last()),
                            Operator = "+"
                        } as JSExpression;

                        if (IsIntegerType(node.ResultType))
                            expr = JSFactory.Truncate(expr);

                        return expr;
                    }
                case "and":
                    if (node.ResultType == context.SystemTypes.UInt64 ||
                        node.ResultType == context.SystemTypes.Int64)
                    {
                        return JSFactory.Call(
                            JSFactory.Identifier("asm0", "XInt64_BitwiseAnd"),
                            ProcessInternal(node.Arguments.First()),
                            ProcessInternal(node.Arguments.Last()));
                    }
                    else
                    {
                        return new JSBinaryExpression
                        {
                            Left = ProcessInternal(node.Arguments.First()),
                            Right = ProcessInternal(node.Arguments.Last()),
                            Operator = "&"
                        };
                    }
                case "div":
                case "div.un":
                    if (IsUInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "UInt64_Division");
                    }
                    else if (IsInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "Int64_Division");
                    }
                    else
                    {
                        var divExpression =
                            new JSBinaryExpression
                            {
                                Left = ProcessInternal(node.Arguments.First()),
                                Right = ProcessInternal(node.Arguments.Last()),
                                Operator = "/"
                            };
                        if (IsIntegerType(node.ResultType))
                        {
                            return JSFactory.Truncate(divExpression);
                        }
                        else
                        {
                            return divExpression;
                        }
                    }
                case "mul":
                    if (IsUInt64Operation(node) || IsInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "XInt64_Multiplication");
                    }
                    else
                    {
                        return new JSBinaryExpression
                        {
                            Left = ProcessInternal(node.Arguments.First()),
                            Right = ProcessInternal(node.Arguments.Last()),
                            Operator = "*"
                        };
                    }
                case "neg":
                    if (node.ResultType == context.SystemTypes.Int64)
                    {
                        return JSFactory.Call(
                            JSFactory.Identifier("asm0", "Int64_UnaryNegation"),
                            ProcessInternal(node.Arguments.First()));
                    }
                    else
                    {
                        return new JSUnaryExpression
                        {
                            Operator = "-",
                            Operand = ProcessInternal(node.Arguments.Single())
                        };
                    }
                case "or":
                    if (IsUInt64Operation(node) || IsInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "XInt64_BitwiseOr");
                    }
                    else
                    {
                        return new JSBinaryExpression
                        {
                            Left = ProcessInternal(node.Arguments.First()),
                            Right = ProcessInternal(node.Arguments.Last()),
                            Operator = "|"
                        };
                    }
                case "rem":
                case "rem.un":
                    if (IsUInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "UInt64_Modulus");
                    }
                    else if (IsInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "Int64_Modulus");
                    }
                    else
                    {
                        return new JSBinaryExpression
                        {
                            Left = ProcessInternal(node.Arguments.First()),
                            Right = ProcessInternal(node.Arguments.Last()),
                            Operator = "%"
                        };
                    }
                case "shl":
                    if (IsUInt64Operation(node) || IsInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "XInt64_LeftShift");
                    }
                    else
                    {
                        return new JSBinaryExpression
                        {
                            Left = ProcessInternal(node.Arguments.First()),
                            Right = ProcessInternal(node.Arguments.Last()),
                            Operator = "<<"
                        };
                    }
                case "shr":
                    if (IsUInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "UInt64_RightShift");
                    }
                    else if (IsInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "Int64_RightShift");
                    }
                    else
                    {
                        return new JSBinaryExpression
                        {
                            Left = ProcessInternal(node.Arguments.First()),
                            Right = ProcessInternal(node.Arguments.Last()),
                            Operator = ">>"
                        };
                    }
                case "shr.un":
                    return new JSBinaryExpression
                    {
                        Left = ProcessInternal(node.Arguments.First()),
                        Right = ProcessInternal(node.Arguments.Last()),
                        Operator = ">>>"
                    };
                case "sub":
                    if (IsUInt64Operation(node) || IsInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "XInt64_Subtraction");
                    }
                    else
                    {
                        var expr = new JSBinaryExpression
                        {
                            Left = ProcessInternal(node.Arguments.First()),
                            Right = ProcessInternal(node.Arguments.Last()),
                            Operator = "-"
                        } as JSExpression;

                        if (IsIntegerType(node.ResultType))
                            expr = JSFactory.Truncate(expr);

                        return expr;
                    }
                default:
                    throw new NotSupportedException(node.Instruction.OpCode.Name);
            }
        }


    }
}
