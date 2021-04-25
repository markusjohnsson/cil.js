using CilJs.Ast;
using CilJs.JSAst;
using CilJs.Loading.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JsTranslation.OpTranslators
{
    class ConversionTranslator: OpTranslator
    {
        public ConversionTranslator(Context context, CilAssembly assembly, CilType type, CilMethod method, Block block, SourceMapBuilder sourceMapBuilder)
            : base(context, assembly, type, method, block, sourceMapBuilder)
        {
        }

        public JSExpression Translate(OpExpression node, List<JSExpression> inlineArgs)
        {
            var arg = node.Arguments.Single();
            var expr = ProcessInternal(arg, inlineArgs);

            var argIsInt64 = arg.ResultType == context.SystemTypes.Int64 ||
                             arg.ResultType == context.SystemTypes.UInt64;

            if (node.Instruction.OpCode.Name == "conv.u8")
            {
                if (argIsInt64)
                    return expr;
                else
                    return JSFactory.Call(JSFactory.Identifier("CILJS", "convU8"), expr);
            }

            if (node.Instruction.OpCode.Name == "conv.i8")
            {
                if (argIsInt64)
                    return expr;
                else
                    return JSFactory.Call(JSFactory.Identifier("CILJS", "convI8"), expr);
            }

            if (argIsInt64)
            {
                if (node.Instruction.OpCode.Name == "conv.r.un")
                    return JSFactory.Call(JSFactory.Identifier("CILJS", "toNumberUnsigned"), expr);
                else
                    return JSFactory.Call(JSFactory.Identifier("CILJS", "toNumberSigned"), expr);
            }

            if (arg.ResultType.IsGenericType && arg.ResultType.GetGenericTypeDefinition() == context.SystemTypes.ManagedPointer)
            {
                // conversion from managed pointer to unmanaged pointer... do nothing
                return expr;
            }
            
            if (IsIntegerType(node.ResultType))
                return JSFactory.Truncate(expr);
            else
                return expr;
        }
    }
}
