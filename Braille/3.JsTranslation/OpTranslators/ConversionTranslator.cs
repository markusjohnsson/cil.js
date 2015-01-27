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
            var arg = node.Arguments.Single();
            var expr = ProcessInternal(arg);

            var isInt64 = arg.ResultType == context.SystemTypes.Int64 ||
                          arg.ResultType == context.SystemTypes.UInt64;

            if (node.Instruction.OpCode.Name == "conv.u8")
            {
                if (isInt64)
                    return expr;
                else
                    return JSFactory.Call(JSFactory.Identifier("BLR", "conv_u8"), expr);
            }

            if (node.Instruction.OpCode.Name == "conv.i8")
            {
                if (isInt64)
                    return expr;
                else
                    return JSFactory.Call(JSFactory.Identifier("BLR", "conv_i8"), expr);
            }

            if (isInt64)
                return JSFactory.Call(JSFactory.Identifier("BLR", "to_number"), expr); 

            if (IsIntegerType(node.ResultType))
                return JSFactory.Truncate(expr);
            else
                return expr;
        }
    }
}
