using CilJs.Ast;
using CilJs.JSAst;
using CilJs.Loading.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JsTranslation.OpTranslators
{
    class ComparisonTranslator: OpTranslator
    {
        public ComparisonTranslator(Context context, CilAssembly assembly, CilType type, CilMethod method, Block block, SourceMapBuilder sourceMapBuilder)
            : base(context, assembly, type, method, block, sourceMapBuilder)
        {
        }

        public JSExpression Translate(OpExpression node, List<JSExpression> inlineArgs)
        {
            var opc = node.Instruction.OpCode.Name;

            var i = opc.IndexOf(".");
            var opc_ = i > 0 ? opc.Substring(0, i) : opc;

            var isUnsigned = opc.Contains(".un");

            switch (opc_)
            {
                case "ceq":
                    if (IsUInt64Operation(node) || IsInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "XInt64_Equality", inlineArgs);
                    }
                    else
                    {
                        return new JSConditionalExpression
                        {
                            Condition = new JSBinaryExpression
                            {
                                Left = ProcessInternal(node.Arguments.First(), inlineArgs),
                                Right = ProcessInternal(node.Arguments.Last(), inlineArgs),
                                Operator = "==="
                            },
                            TrueValue = new JSNumberLiteral { Value = 1 },
                            FalseValue = new JSNumberLiteral { Value = 0 }
                        };
                    }
                case "cgt":
                    if (opc == "cgt.un" && node.Arguments.Last().ResultType == context.SystemTypes.Null)
                    {
                        // we should consider using Number(0) instead of 'null' 

                        return new JSConditionalExpression
                        {
                            Condition = new JSBinaryExpression
                            {
                                Left = ProcessInternal(node.Arguments.First(), inlineArgs),
                                Right = ProcessInternal(node.Arguments.Last(), inlineArgs),
                                Operator = "!=="
                            },
                            TrueValue = new JSNumberLiteral { Value = 1 },
                            FalseValue = new JSNumberLiteral { Value = 0 }
                        };
                    }
                    else
                    {
                        if (IsUInt64Operation(node) || IsInt64Operation(node))
                        {
                            if (opc == "cgt.un")
                                return CreateXInt64BinaryOperation(node, "UInt64_GreaterThan", inlineArgs);
                            else
                                return CreateXInt64BinaryOperation(node, "Int64_GreaterThan", inlineArgs);
                        }
                        else
                        {
                            return new JSConditionalExpression
                            {
                                Condition = new JSBinaryExpression
                                {
                                    Left = WrapInUnsigned(isUnsigned, ProcessInternal(node.Arguments.First(), inlineArgs)),
                                    Right = WrapInUnsigned(isUnsigned, ProcessInternal(node.Arguments.Last(), inlineArgs)),
                                    Operator = ">"
                                },
                                TrueValue = new JSNumberLiteral { Value = 1 },
                                FalseValue = new JSNumberLiteral { Value = 0 }
                            };
                        }
                    }

                case "clt":
                    if (IsUInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "UInt64_LessThan", inlineArgs);
                    }
                    else if (IsInt64Operation(node))
                    {
                        return CreateXInt64BinaryOperation(node, "Int64_LessThan", inlineArgs);
                    }
                    else
                    {
                        return new JSConditionalExpression
                        {
                            Condition = new JSBinaryExpression
                            {
                                Left = WrapInUnsigned(isUnsigned, ProcessInternal(node.Arguments.First(), inlineArgs)),
                                Right = WrapInUnsigned(isUnsigned, ProcessInternal(node.Arguments.Last(), inlineArgs)),
                                Operator = "<"
                            },
                            TrueValue = new JSNumberLiteral { Value = 1 },
                            FalseValue = new JSNumberLiteral { Value = 0 }
                        };
                    }
                default:
                    throw new NotSupportedException(node.Instruction.OpCode.Name);
            }
        }
    }
}
