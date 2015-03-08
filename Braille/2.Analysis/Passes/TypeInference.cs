using Braille.Analysis.Passes;
using Braille.Ast;
using Braille.Loading.Model;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Type = IKVM.Reflection.Type;

namespace Braille.Analysis
{
    class TypeInference: IAnalysisPass
    {
        private SystemTypes types;
 
        public TypeInference(Context context)
        {
            this.types = context.SystemTypes;
        }

        public void Run(CilMethod method)
        {
            IList<OpExpression> opAst = method.OpTree;

            var visitedTargets = new HashSet<OpExpression>();
            var processStack = new Stack<OpExpression>();
            processStack.Push(opAst.First());

            while (processStack.Any())
            {
                var op = processStack.Pop();

                if (!visitedTargets.Add(op))
                    continue; // visited already

                foreach (var t in op.Targets)
                    processStack.Push(t);

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

            var methodBody = method.MethodBody;

            switch (opc_)
            {
                case "add":
                case "and":
                    return InferBinaryArithmeticType(op);
                case "box":
                    return types.Object;
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
                    return types.Boolean; // err... should this be int?
                case "conv":
                    var t =
                        opc == "conv.i1" ? types.Int32 :
                        opc == "conv.i2" ? types.Int32 :
                        opc == "conv.i4" ? types.Int32 :
                        opc == "conv.i8" ? types.Int64 :
                        opc == "conv.r4" ? types.Single :
                        opc == "conv.r8" ? types.Double :
                        opc == "conv.u1" ? types.UInt32 :
                        opc == "conv.u2" ? types.UInt32 :
                        opc == "conv.u4" ? types.UInt32 :
                        opc == "conv.u8" ? types.UInt64 :
                        opc == "conv.i" ? types.Int32 :
                        opc == "conv.u" ? types.Int32 :
                        opc == "conv.r.un" ? types.Single : null;

                    return t;
                case "div":
                case "div.un":
                    return InferBinaryArithmeticType(op);
                case "dup":
                    return op.Targeting.First().ResultType;
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
                            {
                                if (method.ReflectionMethod.DeclaringType.IsValueType)
                                    return types.ManagedPointer.MakeGenericType(method.ReflectionMethod.DeclaringType);
                                else
                                    return method.ReflectionMethod.DeclaringType;
                            }
                            else
                                idx -= 1;
                        }

                        return method.ReflectionMethod.GetParameters()[idx].ParameterType;
                    }
                case "ldarga":
                    {
                        var idxStr = "";

                        if (op.Instruction.Data != null)
                            idxStr = op.Instruction.Data.ToString();

                        idxStr = opc.Replace(".s", ".").Replace(".", "").Substring("ldarga".Length) + idxStr;

                        var idx = int.Parse(idxStr);

                        if (method.ReflectionMethod.IsStatic == false)
                            idx--;

                        var args = method.ReflectionMethod.GetParameters();
                        var type = args[idx].ParameterType;
                        return types.ManagedPointer.MakeGenericType(type);
                    }
                case "ldc":
                    if (opc.StartsWith("ldc.i4"))
                    {
                        return types.Int32;
                    }
                    else if (opc.StartsWith("ldc.i8"))
                    {
                        return types.Int64;
                    }
                    else if (opc.StartsWith("ldc.r8"))
                    {
                        return types.Double;
                    }
                    else
                    {
                        return types.Single;
                    }
                case "ldelem":
                    switch (opc)
	                {
                        case "ldelem":
                            return (Type)op.Instruction.Data;
                        case "ldelem.ref":
                            return op.Arguments.First().ResultType.GetElementType();
                            //throw new NotImplementedException(); // array element type
                        case "ldelem.i1":
                            return types.Sbyte;
                        case "ldelem.i2":
                            return types.Int16;
                        case "ldelem.i4":
                            return types.Int32;
                        case "ldelem.i8":
                            return types.Int64;
                        case "ldelem.u1":
                            return types.Byte;
                        case "ldelem.u2":
                            return types.UInt16;
                        case "ldelem.u4":
                            return types.UInt32;
                        case "ldelem.u8":
                            return types.UInt64;
                        case "ldelem.r4":
                            return types.Single;
                        case "ldelem.r8":
                            return types.Double;
                        case "ldelem.i":
                            return types.Int32;
                        default:
                            throw new NotSupportedException();
	                }
                case "ldelema":
                    {
                        var type = (Type)op.Instruction.Data;
                        return types.ManagedPointer.MakeGenericType(type);
                    }
                case "ldfld":
                    return ((FieldInfo)op.Instruction.Data).FieldType;
                case "ldftn":
                    return types.IntPtr;
                case "ldlen":
                    return types.UInt32;
                case "ldloc":
                    {
                        var id = "";
                        if (op.Instruction.Data != null)
                            id = op.Instruction.Data.ToString();
                        id = opc.Substring(5).Replace(".s", ".").Replace(".", "") + id;

                        return methodBody.LocalVariables[int.Parse(id)].LocalType;
                    }
                case "ldloca":
                    {
                        var id = "";
                        if (op.Instruction.Data != null)
                            id = op.Instruction.Data.ToString();

                        var idx = int.Parse(opc.Substring(5).Replace("a.", ".").Replace(".s", ".").Replace(".", "") + id);

                        var type = methodBody.LocalVariables[idx].LocalType;
                        return types.ManagedPointer.MakeGenericType(type);
                    }
                case "ldnull":
                    return types.Null;
                case "ldobj":
                    return (Type)op.Instruction.Data;
                case "ldsfld":
                    return ((FieldInfo)op.Instruction.Data).FieldType;
                case "ldflda":
                    {
                        var fieldType = ((FieldInfo)op.Instruction.Data).FieldType;
                        return types.ManagedPointer.MakeGenericType(fieldType);
                    }
                case "ldstr":
                    return types.String;
                case "ldtoken":
                    return types.Object; //universe.GetType("System.Reflection.MemberInfo");
                case "mul":
                    return InferBinaryArithmeticType(op);
                case "neg":
                    return op.Arguments.First().ResultType;
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
            var int32s = new[] { types.Char, types.Sbyte, types.Int32, types.Byte, types.UInt32 };

            var a = op.Arguments.First().ResultType;
            var b = op.Arguments.Last().ResultType;

            if (int32s.Contains(a))
                a = types.Int32;

            if (int32s.Contains(b))
                b = types.Int32;

            if (a == b)
                return a;
            else if (op.Instruction.OpCode.Name.StartsWith("sh"))
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

        private Type MergeTypes(Type type, Type newType)
        {
            if (type == null)
            {
                return newType;
            }
            else if (newType == null)
            {
                return type;
            }
            else if (newType.IsAssignableFrom(type))
            {
                return newType;
            }
            else if (type.IsAssignableFrom(newType))
            {
                return type;
            }
            else if (type.IsClass && newType.IsClass)
            {
                var ss = type.GetTypeChain().Reverse(); // System.Object, ..., X, ..., type
                var ts = newType.GetTypeChain().Reverse(); // System.Object, ..., Y, ..., newType

                return Enumerable
                    .Zip(ss, ts, Tuple.Create)
                    .Where(t => t.Item1 == t.Item2)
                    .Last()
                    .Item1;
            }
            else if (type == types.Boolean && (newType == types.Int32 || newType == types.Int64))
            {
                return newType;
            }
            else if (newType == types.Boolean && (type == types.Int32 || type == types.Int64))
            {
                return type;
            }
            else if (
                (type == types.UInt32 && newType == types.Int32) ||
                (type == types.Int32 && newType == types.UInt32))
            {
                return newType;
            }
            else
            {
                throw new InvalidOperationException("Cannot determine type");
            }
        }
    }
}
