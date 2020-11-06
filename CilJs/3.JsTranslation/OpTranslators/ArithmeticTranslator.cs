using CilJs.Ast;
using CilJs.JSAst;
using CilJs.Loading.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JsTranslation.OpTranslators
{
    class ArithmeticTranslator: OpTranslator
    {
        public ArithmeticTranslator(Context context, CilAssembly assembly, CilType type, CilMethod method, Block block, SourceMapBuilder sourceMapBuilder)
            : base(context, assembly, type, method, block, sourceMapBuilder)
        {
        }

        public JSExpression Translate(OpExpression node, List<JSExpression> inlineArgs)
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
                            ProcessInternal(node.Arguments.First(), inlineArgs),
                            ProcessInternal(node.Arguments.Last(), inlineArgs));
                    }
                    else
                    {
                        var expr = new JSBinaryExpression
                        {
                            Left = ProcessInternal(node.Arguments.First(), inlineArgs),
                            Right = ProcessInternal(node.Arguments.Last(), inlineArgs),
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
                            ProcessInternal(node.Arguments.First(), inlineArgs),
                            ProcessInternal(node.Arguments.Last(), inlineArgs));
                    }
                    else
                    {
                        return new JSBinaryExpression
                        {
                            Left = ProcessInternal(node.Arguments.First(), inlineArgs),
                            Right = ProcessInternal(node.Arguments.Last(), inlineArgs),
                            Operator = "&"
                        };
                    }
                case "div":
                case "div.un":
                    if (IsUInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "UInt64_Division", inlineArgs);
                    }
                    else if (IsInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "Int64_Division", inlineArgs);
                    }
                    else
                    {
                        var divExpression =
                            new JSBinaryExpression
                            {
                                Left = ProcessInternal(node.Arguments.First(), inlineArgs),
                                Right = ProcessInternal(node.Arguments.Last(), inlineArgs),
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
                        return CreateXInt64BinaryOperation(node, "XInt64_Multiplication", inlineArgs);
                    }
                    else
                    {
                        return new JSBinaryExpression
                        {
                            Left = ProcessInternal(node.Arguments.First(), inlineArgs),
                            Right = ProcessInternal(node.Arguments.Last(), inlineArgs),
                            Operator = "*"
                        };
                    }
                case "neg":
                    if (node.ResultType == context.SystemTypes.Int64)
                    {
                        return JSFactory.Call(
                            JSFactory.Identifier("asm0", "Int64_UnaryNegation"),
                            ProcessInternal(node.Arguments.First(), inlineArgs));
                    }
                    else
                    {
                        return new JSUnaryExpression
                        {
                            Operator = "-",
                            Operand = ProcessInternal(node.Arguments.Single(), inlineArgs)
                        };
                    }
                case "not":
                    if (node.ResultType == context.SystemTypes.Int64)
                    {
                        return JSFactory.Call(
                            JSFactory.Identifier("asm0", "XInt64_OnesComplement"),
                            ProcessInternal(node.Arguments.First(), inlineArgs));
                    }
                    else
                    {
                        return new JSUnaryExpression
                        {
                            Operator = "~",
                            Operand = ProcessInternal(node.Arguments.Single(), inlineArgs)
                        };
                    }
                case "or":
                    if (IsUInt64Operation(node) || IsInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "XInt64_BitwiseOr", inlineArgs);
                    }
                    else
                    {
                        return new JSBinaryExpression
                        {
                            Left = ProcessInternal(node.Arguments.First(), inlineArgs),
                            Right = ProcessInternal(node.Arguments.Last(), inlineArgs),
                            Operator = "|"
                        };
                    }
                case "rem":
                case "rem.un":
                    if (IsUInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "UInt64_Modulus", inlineArgs);
                    }
                    else if (IsInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "Int64_Modulus", inlineArgs);
                    }
                    else
                    {
                        return new JSBinaryExpression
                        {
                            Left = ProcessInternal(node.Arguments.First(), inlineArgs),
                            Right = ProcessInternal(node.Arguments.Last(), inlineArgs),
                            Operator = "%"
                        };
                    }
                case "shl":
                    if (IsUInt64Operation(node) || IsInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "XInt64_LeftShift", inlineArgs);
                    }
                    else
                    {
                        return new JSBinaryExpression
                        {
                            Left = ProcessInternal(node.Arguments.First(), inlineArgs),
                            Right = ProcessInternal(node.Arguments.Last(), inlineArgs),
                            Operator = "<<"
                        };
                    }
                case "shr":
                    if (IsUInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "UInt64_RightShift", inlineArgs);
                    }
                    else if (IsInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "Int64_RightShift", inlineArgs);
                    }
                    else
                    {
                        return new JSBinaryExpression
                        {
                            Left = ProcessInternal(node.Arguments.First(), inlineArgs),
                            Right = ProcessInternal(node.Arguments.Last(), inlineArgs),
                            Operator = ">>"
                        };
                    }
                case "shr.un":
                    return new JSBinaryExpression
                    {
                        Left = ProcessInternal(node.Arguments.First(), inlineArgs),
                        Right = ProcessInternal(node.Arguments.Last(), inlineArgs),
                        Operator = ">>>"
                    };
                case "sub":
                    if (IsUInt64Operation(node) || IsInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "XInt64_Subtraction", inlineArgs);
                    }
                    else
                    {
                        var expr = new JSBinaryExpression
                        {
                            Left = ProcessInternal(node.Arguments.First(), inlineArgs),
                            Right = ProcessInternal(node.Arguments.Last(), inlineArgs),
                            Operator = "-"
                        } as JSExpression;

                        if (IsIntegerType(node.ResultType))
                            expr = JSFactory.Truncate(expr);

                        return expr;
                    }
                case "xor":
                    if (IsUInt64Operation(node) || IsInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "XInt64_ExclusiveOr", inlineArgs);
                    }
                    else
                    {
                        var expr = new JSBinaryExpression
                        {
                            Left = ProcessInternal(node.Arguments.First(), inlineArgs),
                            Right = ProcessInternal(node.Arguments.Last(), inlineArgs),
                            Operator = "^"
                        } as JSExpression;
                        
                        return expr;
                    }
                default:
                    throw new NotSupportedException(node.Instruction.OpCode.Name);
            }
        }


    }
}
