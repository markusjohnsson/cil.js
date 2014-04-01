using Braille.Ast;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Type = IKVM.Reflection.Type;

namespace Braille.Analysis
{
    class TypeInference
    {
        private Universe universe;

        public TypeInference(Universe universe)
        {
            this.universe = universe;
        }

        public void InferTypes(CilMethod method, IEnumerable<OpExpression> opAst)
        {
            foreach (var op in opAst)
            {
                if (op.PushCount == 0)
                    continue;

                op.ResultType = InferType(method, op);

                foreach (var loc in op.StoreLocations)
                    loc.ResultType = MergeTypes(loc.ResultType, op.ResultType);
            }

            UpdateVariables(opAst);
        }

        private IKVM.Reflection.Type InferType(CilMethod method, OpExpression op)
        {
            var opc = op.Instruction.OpCode.Name;

            var i = opc.IndexOf(".");
            var opc_ = i > 0 ? opc.Substring(0, i) : opc;

            switch (opc_)
            {
                case "add":
                case "and":
                    return InferBinaryArithmeticType(op);
                case "box":
                    return universe.GetType("System.Object");
                case "call":
                case "callvirt":
                    {
                        var mb = ((MethodBase)op.Instruction.Data);

                        var mi = mb as MethodInfo;

                        if (mi != null)
                            return mi.ReturnType;

                        return null;
                    }
                case "castclass":
                    return (IKVM.Reflection.Type)op.Instruction.Data;
                case "ceq":
                case "cgt":
                case "clt":
                    return universe.GetType("System.Boolean");
                case "conv":
                    var t =
                        opc == "conv.i1" ? "System.Int32" :
                        opc == "conv.i2" ? "System.Int32" :
                        opc == "conv.i4" ? "System.Int32" :
                        opc == "conv.i8" ? "System.Int64" :
                        opc == "conv.r4" ? "System.Single" :
                        opc == "conv.r8" ? "System.Double" :
                        opc == "conv.u1" ? "System.Int32" :
                        opc == "conv.u2" ? "System.Int32" :
                        opc == "conv.u4" ? "System.Int32" :
                        opc == "conv.u8" ? "System.Int64" :
                        opc == "conv.i" ? "System.Int32" :
                        opc == "conv.u" ? "System.Int32" :
                        opc == "conv.r.un" ? "System.Single" : null;

                    return universe.GetType(t);
                case "div":
                case "div.un":
                    return InferBinaryArithmeticType(op);
                case "dup":
                    return op.StackBefore.Last().Type;
                case "endfinally":
                    return null;
                case "initobj":
                    return (Type)op.Instruction.Data;
                case "isinst":
                    return (Type)op.Instruction.Data;
                case "ldarg":
                    {
                        var id = "";
                        if (op.Instruction.Data != null)
                            id = op.Instruction.Data.ToString();
                        else
                            id = opc.Replace(".s", ".").Replace(".", "").Substring("ldarg".Length);

                        var idx = int.Parse(id);

                        if (false == method.ReflectionMethod.IsStatic)
                        {
                            if (idx == 0)
                                return method.ReflectionMethod.DeclaringType;
                            else
                                idx -= 1;
                        }

                        return method.ReflectionMethod.GetParameters()[idx].ParameterType;
                    }
                case "ldarga":
                    return universe.GetType("System.IntPtr");
                case "ldc":
                    if (opc.StartsWith("ldc.i4"))
                    {
                        return universe.GetType("System.Int32");
                    }
                    else if (opc.StartsWith("ldc.i8"))
                    {
                        return universe.GetType("System.Int64");
                    }
                    else if (opc.StartsWith("ldc.r8"))
                    {
                        return universe.GetType("System.Double");
                    }
                    else
                    {
                        return universe.GetType("System.Single");
                    }
                case "ldelem":
                    return (Type)op.Instruction.Data;
                case "ldelema":
                    return universe.GetType("System.IntPtr");
                case "ldfld":
                    return ((FieldInfo)op.Instruction.Data).FieldType;
                case "ldftn":
                    return universe.GetType("System.IntPtr");
                case "ldlen":
                    return universe.GetType("System.UInt32");
                case "ldloc":
                    {
                        var id = "";
                        if (op.Instruction.Data != null)
                            id = op.Instruction.Data.ToString();
                        id = opc.Substring(5).Replace(".s", ".").Replace(".", "") + id;

                        return method.ReflectionMethod.GetMethodBody().LocalVariables[int.Parse(id)].LocalType;
                    }
                case "ldloca":
                    return universe.GetType("System.IntPtr");
                case "ldnull":
                    return universe.GetType("System.Null");
                case "ldobj":
                    return (Type)op.Instruction.Data;
                case "ldsfld":
                    return ((FieldInfo)op.Instruction.Data).FieldType;
                case "ldflda":
                    return universe.GetType("System.IntPtr");
                case "ldstr":
                    return universe.GetType("System.String");
                case "ldtoken":
                    return universe.GetType("System.Reflection.MemberInfo");
                case "mul":
                    return InferBinaryArithmeticType(op);
                case "newarr":
                    return ((Type)op.Instruction.Data).MakeArrayType();
                case "newobj":
                    return ((ConstructorInfo)op.Instruction.Data).DeclaringType;
                case "nop":
                    return null;
                case "or":
                    return InferBinaryArithmeticType(op);
                case "pop":
                    return null;
                case "rem":
                case "rem.un":
                    return InferBinaryArithmeticType(op);
                case "ret":
                    return null;
                case "shl":
                case "shr":
                case "shr.un":
                    return InferBinaryArithmeticType(op);
                case "stelem":
                case "stind":
                case "stloc":
                case "stfld":
                case "stsfld":
                    return null;
                case "sub":
                    return InferBinaryArithmeticType(op);
                case "throw":
                    return null;
                case "unbox":
                    return (Type)op.Instruction.Data;
                default:
                    return null;
            }
        }

        private IKVM.Reflection.Type InferBinaryArithmeticType(OpExpression op)
        {
            var a = op.Arguments.First().ResultType;
            var b = op.Arguments.Last().ResultType;

            if (a == b)
                return a;
            else
                throw new NotSupportedException();
        }

        void UpdateVariables(IEnumerable<OpExpression> opInfos)
        {
            foreach (var opInfo in opInfos)
            {
                if (opInfo.StackBefore == null)
                    continue;

                foreach (var usage in opInfo.StackBefore.Skip(opInfo.StackBefore.Count() - opInfo.GetRealPopCount()))
                {
                    Type type = null;

                    foreach (var def in usage.Definitions)
                    {
                        type = MergeTypes(type, def.ResultType);
                    }

                    usage.Type = type;

                }
            }
        }

        private static Type MergeTypes(Type type, Type newType)
        {

            if (type == null)
            {
                type = newType;
            }
            else if (newType.IsAssignableFrom(type))
            {
                type = newType;
            }
            else if (type.IsAssignableFrom(newType))
            {
                //type = type;
            }
            else if (type.IsClass && newType.IsClass)
            {
                var ss = type.GetTypeChain().Reverse(); // System.Object, ..., X, ..., type
                var ts = newType.GetTypeChain().Reverse(); // System.Object, ..., Y, ..., newType

                type = Enumerable
                    .Zip(ss, ts, Tuple.Create)
                    .Where(t => t.Item1 == t.Item2)
                    .Last()
                    .Item1;
            }
            else
            {
                throw new InvalidOperationException("Cannot determine type");
            }
            return type;
        }
    }
}
