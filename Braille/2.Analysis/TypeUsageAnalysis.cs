﻿using Braille.Ast;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Type = IKVM.Reflection.Type;

namespace Braille.Analysis
{
    class TypeUsageAnalysis
    {
        private Universe universe;

        public TypeUsageAnalysis(Universe universe)
        {
            this.universe = universe;
        }

        public void FindTypes(CilMethod method, IEnumerable<OpExpression> opAst)
        {
            method.ReferencedTypes = opAst
                .SelectMany(op => FindTypes(method, op))
                .SelectMany(t => ExpandGenericTypes(t))

                // only collect types that need initialization. generic parameters should already be initialized when method is called
                .Where(t => !t.IsGenericParameter) 
                .Distinct()
                .ToArray();
        }

        private IEnumerable<Type> ExpandGenericTypes(Type t)
        {
            if (t.IsGenericType)
            {
                foreach (var genericArgument in t.GetGenericArguments())
                    foreach (var g in ExpandGenericTypes(genericArgument))
                        yield return g;
            }
            yield return t;
        }

        private IEnumerable<Type> FindTypes(CilMethod method, OpExpression op)
        {
            var opc = op.Instruction.OpCode.Name;

            var i = opc.IndexOf(".");
            var opc_ = i > 0 ? opc.Substring(0, i) : opc;

            switch (opc_)
            {
                case "box":
                    var d = (Type)op.Instruction.Data;
                        yield return d;
                    break;
                case "call":
                case "callvirt":
                    var mi = (MethodBase)op.Instruction.Data;
                    if (mi.IsGenericMethod)
                        foreach (var g in mi.GetGenericArguments())
                            yield return g;
                    break;
                case "initobj":
                case "isinst":
                case "newarr":
                    yield return (Type)op.Instruction.Data;
                    break;
                case "ldsfld":
                case "newobj":
                case "stsfld":
                    yield return ((MemberInfo)op.Instruction.Data).DeclaringType;
                    break;
                default:
                    break;
            }
        }
    }
}
