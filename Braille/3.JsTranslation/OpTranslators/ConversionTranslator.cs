using Braille.Ast;
using Braille.JSAst;
using Braille.Loading.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JsTranslation.OpTranslators
{
    class ConversionTranslator: OpTranslator
    {
        public ConversionTranslator(Context context, CilAssembly assembly, CilType type, CilMethod method)
            : base(context, assembly, type, method)
        {
        }

        public JSExpression Translate(OpExpression node)
        {
            var expr = ProcessInternal(node.Arguments.Single());

            if (node.Instruction.OpCode.Name == "conv.u8")
            {
                return JSFactory.Call(JSFactory.Identifier("conv_u8"), expr);
            }

            if (node.Instruction.OpCode.Name == "conv.i8")
            {
                return JSFactory.Call(JSFactory.Identifier("conv_i8"), expr);
            }

            if (node.ResultType == context.SystemTypes.Int64 ||
                node.ResultType == context.SystemTypes.UInt64)
            {
                throw new NotSupportedException(node.Instruction.OpCode.Name);
            }

            if (IsIntegerType(node.ResultType))
                return JSFactory.Truncate(expr);
            else
                return expr;
        }
    }
}
