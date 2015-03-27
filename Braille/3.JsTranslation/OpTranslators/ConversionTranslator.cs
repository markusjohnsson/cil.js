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
        public ConversionTranslator(Context context, CilAssembly assembly, CilType type, CilMethod method, Block block)
            : base(context, assembly, type, method, block)
        {
        }

        public JSExpression Translate(OpExpression node)
        {
            var arg = node.Arguments.Single();
            var expr = ProcessInternal(arg);

            var argIsInt64 = arg.ResultType == context.SystemTypes.Int64 ||
                             arg.ResultType == context.SystemTypes.UInt64;

            if (node.Instruction.OpCode.Name == "conv.u8")
            {
                if (argIsInt64)
                    return expr;
                else
                    return JSFactory.Call(JSFactory.Identifier("BLR", "conv_u8"), expr);
            }

            if (node.Instruction.OpCode.Name == "conv.i8")
            {
                if (argIsInt64)
                    return expr;
                else
                    return JSFactory.Call(JSFactory.Identifier("BLR", "conv_i8"), expr);
            }

            if (argIsInt64)
            {
                if (node.Instruction.OpCode.Name == "conv.r.un")
                    return JSFactory.Call(JSFactory.Identifier("BLR", "to_number_unsigned"), expr);
                else
                    return JSFactory.Call(JSFactory.Identifier("BLR", "to_number_signed"), expr);
            }
            
            if (IsIntegerType(node.ResultType))
                return JSFactory.Truncate(expr);
            else
                return expr;
        }
    }
}
