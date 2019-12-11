using CilJs.Ast;
using CilJs.JSAst;
using CilJs.JsTranslation.OpTranslators;
using CilJs.Loading.Model;
using Managed.Reflection;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using Type = Managed.Reflection.Type;

namespace CilJs.JsTranslation
{
    /// <summary>
    /// Translates individual OpExpressions into JavaScript AST.
    /// </summary>
    class OpTranslator : AbstractTranslator
    {
        protected CilAssembly assembly;
        protected CilType type;
        protected CilMethod method;
        protected List<CilAssembly> world;
        protected Block block;

        public OpTranslator(Context context, CilAssembly assembly, CilType type, CilMethod method, Block block)
            : base(context)
        {
            this.world = context.Assemblies;
            this.assembly = assembly;
            this.type = type;
            this.method = method;
            this.block = block;
        }

        private IEnumerable<Type> RequireFieldInitTypes(OpExpression node)
        {
            foreach (var n in node.RequireFieldInitTypes)
                yield return n;
            foreach (var a in node.Arguments.OfType<OpExpression>())
                foreach (var t in RequireFieldInitTypes(a))
                    yield return t;
        }

        public IEnumerable<JSStatement> Process(OpExpression node)
        {
            var thisScope = GetThisScope(method.ReflectionMethod, type.ReflectionType);

            foreach (var t in RequireFieldInitTypes(node).Distinct())
            {
                // call static initializers
                var cctor = GetFieldInit(t, thisScope);
                if (cctor != null)
                    yield return cctor;
            }

            if (context.Settings.OutputILComments)
            {
                yield return GetILAsComment(node);
            }

            var opc = node.Instruction.OpCode.Name;

            if (node.Prefixes.Any())
            {
                yield return JSFactory.Statement(
                    new JSLineComment
                    {
                        Text = "warning: ignoring prefixes " + string.Join(",", node.Prefixes.Select(o => o.OpCode.Name))
                    });
            }

            switch (opc)
            {
                case "br":
                case "br.s":
                    foreach (var statement in CreateJumpTo(GetTargetPosition(node.Instruction)))
                        yield return statement;
                    break;

                case "beq":
                case "beq.s":
                    yield return CreateComparisonBranch(node, "===");
                    break;

                case "bge":
                case "bge.s":
                case "bge.un":
                case "bge.un.s":
                    yield return CreateComparisonBranch(node, ">=");
                    break;

                case "bgt":
                case "bgt.s":
                case "bgt.un":
                case "bgt.un.s":
                    yield return CreateComparisonBranch(node, ">");
                    break;

                case "ble":
                case "ble.s":
                case "ble.un":
                case "ble.un.s":
                    yield return CreateComparisonBranch(node, "<=");
                    break;

                case "blt":
                case "blt.s":
                case "blt.un":
                case "blt.un.s":
                    yield return CreateComparisonBranch(node, "<");
                    break;

                case "brtrue":
                case "brtrue.s":
                    yield return new JSIfStatement
                    {
                        Condition = ProcessInternal(node.Arguments.Single()),
                        Statements = CreateJumpTo(GetTargetPosition(node.Instruction))
                    };
                    break;

                case "brfalse":
                case "brfalse.s":
                    yield return new JSIfStatement
                    {
                        Condition = new JSUnaryExpression
                        {
                            Operator = "!",
                            Operand = ProcessInternal(node.Arguments.Single())
                        },
                        Statements = CreateJumpTo(GetTargetPosition(node.Instruction))
                    };
                    break;

                case "bne":
                case "bne.s":
                case "bne.un":
                case "bne.un.s":
                    yield return CreateComparisonBranch(node, "!=");
                    break;
                case "endfinally":
                    yield return JSFactory
                        .Assignment(
                            new JSIdentifier { Name = "in_block" },
                            new JSBoolLiteral { Value = false })
                        .ToStatement();
                    yield return JSFactory
                        .Assignment(
                            new JSIdentifier { Name = "__pos__" },
                            new JSIdentifier { Name = "__finally_continuation__" })
                        .ToStatement();
                    yield return new JSContinueExpression().ToStatement();
                    break;
                case "leave":
                case "leave.s":
                    var target = GetTargetPosition(node.Instruction);
                    if (target < block.From || target > block.To)
                    {
                        yield return JSFactory
                            .Assignment(
                                new JSIdentifier { Name = "in_block" },
                                new JSBoolLiteral { Value = false })
                            .ToStatement();
                    }
                    yield return JSFactory
                        .Assignment(
                            new JSIdentifier { Name = "__pos__" },
                            new JSNumberLiteral { Value = target, IsHex = true })
                        .ToStatement();
                    yield return new JSContinueExpression().ToStatement();
                    break;
                case "switch":

                    yield return new JSExpressionStatement
                    {
                        Expression = new JSVariableDelcaration
                        {
                            Name = "__switch_value__",
                            Value = WrapInUnsigned(true, ProcessInternal(node.Arguments.Single()))
                        }
                    };

                    yield return new JSIfStatement
                    {
                        Condition = new JSBinaryExpression
                        {
                            Left = new JSIdentifier { Name = "__switch_value__" },
                            Operator = ">=",
                            Right = new JSNumberLiteral { Value = ((int[])node.Instruction.Data).Length, IsHex = true }
                        },
                        Statements = CreateJumpTo(GetTargetPosition(node.Instruction))
                    };

                    yield return new JSExpressionStatement
                    {
                        Expression = new JSVariableDelcaration
                        {
                            Name = "__jmp__",
                            Value = new JSArrayLiteral { Values = ((int[])node.Instruction.Data).Select(d => new JSNumberLiteral { Value = d, IsHex = true }) }
                        }
                    };

                    yield return JSFactory
                        .Assignment(
                            new JSIdentifier
                            {
                                Name = "__pos__"
                            },
                            new JSBinaryExpression
                            {
                                Left = new JSNumberLiteral { Value = GetTargetPosition(node.Instruction), IsHex = true },
                                Operator = "+",
                                Right = new JSArrayLookupExpression
                                {
                                    Array = new JSIdentifier { Name = "__jmp__" },
                                    Indexer = new JSIdentifier { Name = "__switch_value__" }
                                }
                            })
                        .ToStatement();

                    yield return new JSExpressionStatement
                    {
                        Expression = new JSContinueExpression()
                    };
                    break;

                default:

                    var expression = ProcessInternal(node);

                    yield return new JSExpressionStatement
                    {
                        Expression = WrapInStore(node.StoreLocations, expression)
                    };
                    break;
            }

        }

        private static List<JSStatement> CreateJumpTo(double target)
        {
            return new List<JSStatement> {
                JSFactory.Statement(
                    JSFactory
                        .Assignment(
                            new JSIdentifier
                            {
                                Name = "__pos__"
                            },
                            new JSNumberLiteral { Value = target, IsHex = true })),
                JSFactory.Statement(new JSContinueExpression())
            };
        }

        private JSStatement GetFieldInit(Type t, JSExpression thisScope)
        {
            var cctors = t.GetConstructors(BindingFlags.Static | BindingFlags.Public | BindingFlags.NonPublic);
            if (cctors.Any())
            {
                return new JSCallExpression
                {
                    // GetMethodAccessor(mi, this.method.ReflectionMethod, this.type.ReflectionType, thisScope)
                    Function = GetMethodAccessor(cctors[0], this.method.ReflectionMethod, this.type.ReflectionType, thisScope)
                }
                .ToStatement();
            }

            return null;
        }

        private static string DebugInfo(OpExpression op)
        {
            return string.Empty;
        }

        private static JSStatement GetILAsComment(OpExpression node)
        {
            var il = node.PrefixTraversal().OrderBy(i => i.Position).Select(op => op.Instruction.ToString() + " " + DebugInfo(node));

            return JSFactory
                .Statement(
                    new JSLineComment
                    {
                        Text = string.Join("\n", il)
                    });
        }

        protected JSExpression CreateXInt64BinaryOperation(OpExpression node, string functionName, List<JSExpression> inlineArgs)
        {
            return JSFactory.Call(
                JSFactory.Identifier("asm0", functionName),
                ProcessInternal(node.Arguments.First(), inlineArgs),
                ProcessInternal(node.Arguments.Last(), inlineArgs));
        }

        protected bool IsFloatingPointOperation(OpExpression frame)
        {
            return
                frame.Arguments.First().ResultType == context.SystemTypes.Single ||
                frame.Arguments.First().ResultType == context.SystemTypes.Double;
        }

        protected bool IsUInt64Operation(OpExpression frame)
        {
            return frame.Arguments.First().ResultType == context.SystemTypes.UInt64;
        }

        protected bool IsInt64Operation(OpExpression frame)
        {
            return frame.Arguments.First().ResultType == context.SystemTypes.Int64;
        }

        private JSExpression WrapInStore(List<VariableInfo> storeTos, JSExpression computation)
        {
            var expression = computation;

            foreach (var storeTo in storeTos)
            {
                expression = JSFactory.LocalVariableAssignment(storeTo.Name, expression);
            }

            return expression;
        }

        private JSIfStatement CreateComparisonBranch(OpExpression node, string op)
        {
            JSExpression condition;
            var isUnsigned = node.Instruction.OpCode.Name.Contains(".un") &&
                false == IsFloatingPointOperation(node);

            if (IsInt64Operation(node) || IsUInt64Operation(node))
            {
                bool reverse = false;
                string opFunction;
                switch (op)
                {
                    case "<": opFunction = isUnsigned ? "UInt64_LessThan" : "Int64_LessThan"; break;
                    case ">": opFunction = isUnsigned ? "UInt64_GreaterThan" : "Int64_GreaterThan"; break;
                    case "<=": opFunction = isUnsigned ? "UInt64_GreaterThan" : "Int64_GreaterThan"; reverse = true; break;
                    case ">=": opFunction = isUnsigned ? "UInt64_LessThan" : "Int64_LessThan"; reverse = true; break;
                    default: throw new NotSupportedException();
                }

                var left = reverse ? ProcessInternal(node.Arguments.Last()) : ProcessInternal(node.Arguments.First());
                var right = reverse ? ProcessInternal(node.Arguments.First()) : ProcessInternal(node.Arguments.Last());

                condition = JSFactory.Call(JSFactory.Identifier("asm0", opFunction), left, right);
            }
            else
            {
                condition = new JSBinaryExpression
                {
                    Left = WrapInUnsigned(isUnsigned, ProcessInternal(node.Arguments.First())),
                    Right = WrapInUnsigned(isUnsigned, ProcessInternal(node.Arguments.Last())),
                    Operator = op
                };
            }

            return new JSIfStatement
            {
                Condition = condition,
                Statements = CreateJumpTo(GetTargetPosition(node.Instruction))
            };
        }

        protected static JSExpression WrapInUnsigned(bool isUnsigned, JSExpression expression)
        {
            if (isUnsigned)
                return JSFactory.Call(JSFactory.Identifier("CILJS", "unsigned_value"), expression);
            else
                return expression;
        }

        private int GetTargetPosition(OpInstruction i)
        {
            int data;
            if (i.Data is byte)
                data = (sbyte)(byte)i.Data;
            else if (i.Data is int)
                data = (int)i.Data;
            else
                data = 0;

            return 1 + i.Position + i.Size + data;
        }

        protected JSExpression ProcessInternal(Node innode, List<JSExpression> inlineArgs = null)
        {
            var varInfo = innode as VariableInfo;

            if (varInfo != null)
            {
                return new JSIdentifier { Name = varInfo.Name };
            }

            var node = innode as OpExpression;

            if (node == null || node.Instruction == null)
                return new JSEmptyExpression();

            var thisScope = GetThisScope(method.ReflectionMethod, type.ReflectionType);

            var opc = node.Instruction.OpCode.Name;

            var i = opc.IndexOf(".");
            var opc_ = i > 0 ? opc.Substring(0, i) : opc;

            switch (opc_)
            {
                case "add":
                case "and":
                case "div":
                case "div.un":
                case "mul":
                case "neg":
                case "not":
                case "or":
                case "rem":
                case "rem.un":
                case "shl":
                case "shr":
                case "shr.un":
                case "sub":
                case "xor":
                    return new ArithmeticTranslator(context, assembly, type, method, block).Translate(node, inlineArgs);

                case "box":
                    {
                        var d = (Type)node.Instruction.Data;
                        var value = ProcessInternal(node.Arguments.Single(), inlineArgs);
                        var originalValue = value;

                        if (d.IsGenericParameter)
                        {
                            return new JSCallExpression
                            {
                                Function = JSFactory.Identifier("CILJS", "box"),
                                Arguments = { value, GetTypeAccessor(d, thisScope) }
                            };
                        }

                        var isNullable = d.IsGenericType && d.GetGenericTypeDefinition().FullName.StartsWith("System.Nullable`1");

                        if (isNullable)
                        {
                            d = d.GetGenericArguments()[0];
                            value = JSFactory.Identifier(value, "value");
                        }

                        var boxed = JSFactory.Call(
                            JSFactory.Identifier("CILJS", "make_box"),
                            CloneValueTypeIfNeeded(value, d),
                            GetTypeAccessor(d, thisScope));

                        if (isNullable)
                        {
                            return new JSConditionalExpression
                            {
                                Condition = JSFactory.Identifier(originalValue, "has_value"),
                                TrueValue = boxed,
                                FalseValue = new JSNullLiteral()
                            };
                        }
                        else if (d.IsValueType)
                        {
                            return boxed;
                        }
                        else
                        {
                            return value;
                        }
                    }
                case "call":
                    {
                        var mi = ((MethodBase)node.Instruction.Data);

                        if (mi.DeclaringType.FullName == "System.Object" &&
                            mi is ConstructorInfo &&
                            mi.GetParameters().Length == 0)
                        {
                            return new JSEmptyExpression();
                        }

                        var args = ProcessList(node.Arguments, inlineArgs).ToList();

                        var replacement = CilMethod.GetReplacement(mi);

                        if (replacement != null && replacement.Kind == ReplacementKind.Raw)
                        {
                            return new JSTemplatedRawExpression
                            {
                                TemplateString = replacement.Replacement,
                                Arguments = args
                            };
                        }

                        return new JSCallExpression
                        {
                            Function = GetMethodAccessor(mi, this.method.ReflectionMethod, this.type.ReflectionType, thisScope),
                            Arguments = args
                        };
                    }
                case "callvirt":
                    {
                        var mi = ((MethodBase)node.Instruction.Data);

                        var arglist = ProcessList(node.Arguments, inlineArgs).ToList();

                        var replacement = CilMethod.GetReplacement(mi);

                        if (replacement != null && replacement.Kind == ReplacementKind.Raw)
                        {
                            return new JSTemplatedRawExpression
                            {
                                TemplateString = replacement.Replacement,
                                Arguments = arglist
                            };
                        }

                        if (mi.Name == "Invoke" && mi.DeclaringType.BaseType.FullName == "System.MulticastDelegate")
                        {
                            return new JSConditionalExpression
                            {
                                Condition = JSFactory.Identifier(arglist.First(), "_target"),
                                TrueValue =
                                    new JSCallExpression
                                    {
                                        Function = JSFactory.Identifier(arglist.First(), "_methodPtr"),
                                        Arguments = arglist.Skip(1).StartWith(JSFactory.Identifier(arglist.First(), "_target")).ToList()
                                    },
                                FalseValue =
                                    new JSCallExpression
                                    {
                                        Function = JSFactory.Identifier(arglist.First(), "_methodPtr"),
                                        Arguments = arglist.Skip(1).ToList()
                                    }
                            };
                        }

                        var cilMethod = context.LookupMethod(mi);
                        if (cilMethod != null && cilMethod.CanInline)
                        {
                            return ProcessInternal(cilMethod
                                .Block
                                .Ast
                                .OfType<OpExpression>()
                                .Single()
                                .Arguments
                                .Single(),
                                arglist);
                            //break;
                        }

                        var thisArg = arglist[0];
                        JSExpression alternateThisArg = null;

                        var firstArgNode = node.Arguments.First();

                        if (firstArgNode.ResultType != null)
                        {
                            if (mi.IsVirtual && (
                                firstArgNode.ResultType.IsInterface ||
                                firstArgNode.ResultType == context.SystemTypes.Object))
                            {
                                // from: II.13.3 Methods of value types
                                //
                                // The CLI shall convert a boxed value type into a managed pointer to the 
                                // unboxed value type when a boxed value type is passed as the this pointer 
                                // to a virtual method whose implementation is provided by the unboxed value type.

                                arglist[0] = JSFactory.Call(JSFactory.Identifier("CILJS", "convert_box_to_pointer_as_needed"), arglist[0]);
                            }
                            else if (
                                firstArgNode.ResultType.IsGenericType &&
                                firstArgNode.ResultType.GetGenericTypeDefinition() == context.SystemTypes.ManagedPointer)
                            {
                                var pointerTargetType = firstArgNode.ResultType.GetGenericArguments().First();

                                if (mi.IsVirtual)
                                {
                                    thisArg = UnwrapReader(thisArg);
                                    alternateThisArg = JSFactory.Identifier(
                                        GetTypeAccessor(pointerTargetType, thisScope),
                                        "prototype");

                                    if (pointerTargetType.IsGenericParameter)
                                    {
                                        arglist[0] = JSFactory.Call(JSFactory.Identifier("CILJS", "dereference_pointer_as_needed"), arglist[0]);
                                    }
                                }
                                else
                                {
                                    thisArg = UnwrapReader(thisArg);
                                    arglist[0] = JSFactory.Call(
                                        JSFactory.Identifier("CILJS", "box"),
                                        thisArg,
                                        GetTypeAccessor(pointerTargetType, thisScope));
                                }
                            }
                        }

                        JSExpression accessor;
                        if (mi.DeclaringType.IsInterface)
                            accessor = GetInterfaceMethodAccessor(thisArg, alternateThisArg, thisScope, mi);
                        else if (mi.IsVirtual)
                            accessor = GetVirtualMethodAccessor(thisArg, alternateThisArg, (MethodInfo)mi);
                        else
                            accessor = GetUnboundMethodAccessor(mi);

                        return new JSCallExpression
                        {
                            Function = BindGenericMethodArguments(accessor, mi, this.method.ReflectionMethod, this.type.ReflectionType, thisScope),
                            Arguments = arglist
                        };
                    }
                case "castclass":
                    {
                        var expr = ProcessInternal(node.Arguments.Single(), inlineArgs);
                        var targetType = (Type)node.Instruction.Data;

                        if (targetType.FullName == "System.MulticastDelegate")
                            return expr;

                        return JSFactory.Call(JSFactory.Identifier("CILJS", "cast_class"), expr, GetTypeAccessor(targetType, thisScope));
                    }

                case "ceq":
                case "cgt":
                case "clt":
                    return new ComparisonTranslator(context, assembly, type, method, block).Translate(node, inlineArgs);

                case "conv":
                    return new ConversionTranslator(context, assembly, type, method, block).Translate(node, inlineArgs);

                case "dup":
                    return ProcessInternal(node.Arguments.Single(), inlineArgs);
                case "initobj":
                    {
                        var typeTok = (Type)node.Instruction.Data;
                        var typeExpr = GetTypeAccessor(typeTok, thisScope);

                        var target = ProcessInternal(node.Arguments.Single(), inlineArgs);

                        JSExpression value;

                        if (false == typeTok.IsGenericParameter)
                        {
                            value = typeTok.IsValueType ?
                                typeTok.IsPrimitive ? JSFactory.Literal(0) : new JSNewExpression { Constructor = typeExpr } :
                                new JSNullLiteral();
                        }
                        else
                        {
                            value = new JSConditionalExpression
                            {
                                Condition = JSFactory.Identifier(typeExpr, "IsValueType"),
                                TrueValue = new JSConditionalExpression
                                {
                                    Condition = JSFactory.Identifier(typeExpr, "IsPrimitive"),
                                    TrueValue = JSFactory.Literal(0),
                                    FalseValue = new JSNewExpression
                                    {
                                        Constructor = typeExpr
                                    }
                                },
                                FalseValue = new JSNullLiteral()
                            };
                        }

                        return UnwrapAndWrite(target, value);
                    }
                case "isinst":
                    {
                        var targetType = (Type)node.Instruction.Data;
                        return new JSCallExpression
                        {
                            Function = new JSPropertyAccessExpression { Host = GetTypeAccessor(targetType, thisScope), Property = "IsInst" },
                            Arguments = new List<JSExpression> { ProcessInternal(node.Arguments.Single(), inlineArgs) }
                        };
                    }
                case "ldarg":
                    {
                        var id = "";
                        if (node.Instruction.Data != null)
                            id = node.Instruction.Data.ToString();

                        var idx = opc.Replace(".s", ".").Replace(".", "").Substring("ldarg".Length) + id;

                        if (inlineArgs != null)
                        {
                            return inlineArgs[int.Parse(idx)];
                        }

                        var result = new JSIdentifier
                        {
                            Name = "arg" + idx //"__args__[" + idx + "]"
                        } as JSExpression;

                        return result;
                    }
                case "ldarga":
                    {
                        var id = "";
                        if (node.Instruction.Data != null)
                            id = node.Instruction.Data.ToString();

                        var idx = opc.Replace(".s", ".").Replace(".", "").Substring("ldarga".Length) + id;

                        if (inlineArgs != null)
                        {
                            return WrapInReaderWriter(inlineArgs[int.Parse(idx)]);
                        }

                        return WrapInReaderWriter(new JSIdentifier
                        {
                            Name = "arg" + idx //"__args__[" +  + "]"
                        });
                    }
                case "ldc":
                    if (opc.StartsWith("ldc.i4"))
                    {
                        if (opc == "ldc.i4")
                            return new JSNumberLiteral
                            {
                                Value = (int)node.Instruction.Data,
                                TypeHint = TypeHint.Integer
                            };
                        else if (opc == "ldc.i4.s")
                            return new JSNumberLiteral
                            {
                                Value = (int)(sbyte)(byte)node.Instruction.Data,
                                TypeHint = TypeHint.Integer
                            };
                        else if (opc == "ldc.i4.m1")
                            return new JSNumberLiteral
                            {
                                Value = -1,
                                TypeHint = TypeHint.Integer
                            };
                        else //if (opc.StartsWith("ldc.i4"))
                            return new JSNumberLiteral
                            {
                                Value = int.Parse(opc.Substring("ldc.i4.".Length)),
                                TypeHint = TypeHint.Integer
                            };
                    }
                    else if (opc.StartsWith("ldc.i8"))
                    {
                        long value;

                        if (opc == "ldc.i8")
                            value = (long)node.Instruction.Data;
                        else if (opc == "ldc.i8.s")
                            value = (long)(byte)node.Instruction.Data;
                        else if (opc == "ldc.i8.m1")
                            value = -1L;
                        else //if (opc.StartsWith("ldc.i8"))
                            value = long.Parse(opc.Substring("ldc.i8.".Length));

                        var uvalue = (ulong)value;
                        var high = JSFactory.HexLiteral((uint)((uvalue & 0xffffffff00000000UL) >> 32));
                        var low = JSFactory.HexLiteral((uint)(uvalue & 0xffffffffUL));

                        return MakeLongValue(low, high);
                    }
                    else if (opc.StartsWith("ldc.r8"))
                    {
                        switch (opc)
                        {
                            case "ldc.r8":
                                return new JSNumberLiteral
                                {
                                    Value = (double)node.Instruction.Data,
                                    TypeHint = TypeHint.Float
                                };
                            case "ldc.r8.s":
                                return new JSNumberLiteral
                                {
                                    Value = (double)(byte)node.Instruction.Data,
                                    TypeHint = TypeHint.Float
                                };
                            case "ldc.r8.m1":
                                return new JSNumberLiteral
                                {
                                    Value = -1L,
                                    TypeHint = TypeHint.Float
                                };
                            default:
                                return new JSNumberLiteral
                                {
                                    Value = double.Parse(opc.Substring("ldc.r8.".Length)),
                                    TypeHint = TypeHint.Float
                                };
                        }
                    }
                    else
                    {
                        if (opc == "ldc.r4")
                            return new JSNumberLiteral
                            {
                                Value = (float)node.Instruction.Data,
                                TypeHint = TypeHint.Float
                            };
                        else if (opc == "ldc.r4.s")
                            return new JSNumberLiteral
                            {
                                Value = (float)(byte)node.Instruction.Data,
                                TypeHint = TypeHint.Float
                            };
                        else if (opc == "ldc.r4.m1")
                            return new JSNumberLiteral
                            {
                                Value = -1L,
                                TypeHint = TypeHint.Float
                            };
                        else //if (opc.StartsWith("ldc.r4"))
                            return new JSNumberLiteral
                            {
                                Value = float.Parse(opc.Substring("ldc.r4.".Length)),
                                TypeHint = TypeHint.Float
                            };
                    }
                case "ldelem":
                    {
                        var array = ProcessInternal(node.Arguments.First(), inlineArgs);
                        var index = ProcessInternal(node.Arguments.Last(), inlineArgs);

                        if (opc == "ldelem.ref")
                        {
                            return JSFactory.Call(JSFactory.Identifier("CILJS.ldelem_ref"), array, index);
                        }
                        else
                        {
                            return new JSArrayLookupExpression
                            {
                                Array = new JSPropertyAccessExpression { Host = array, Property = "jsarr" },
                                Indexer = index
                            };
                        }
                    }
                case "ldelema":
                    return WrapInReaderWriter(new JSArrayLookupExpression
                    {
                        Array = new JSPropertyAccessExpression { Host = ProcessInternal(node.Arguments.First(), inlineArgs), Property = "jsarr" },
                        Indexer = ProcessInternal(node.Arguments.Last(), inlineArgs)
                    });
                case "ldfld":
                    {
                        var fieldInfo = (FieldInfo)node.Instruction.Data;
                        var argument = node.Arguments.Single();
                        var argExpression = ProcessInternal(argument, inlineArgs);

                        var source = DereferenceIfNeeded(argument, argExpression);

                        return JSFactory.Identifier(source, GetTranslatedFieldName(fieldInfo));
                    }
                case "ldflda":
                    {
                        var fieldInfo = (FieldInfo)node.Instruction.Data;
                        var argument = node.Arguments.Single();
                        var argExpression = ProcessInternal(argument, inlineArgs);

                        var source = DereferenceIfNeeded(argument, argExpression);
                        return WrapInReaderWriter(JSFactory.Identifier(source, GetTranslatedFieldName(fieldInfo)));
                    }
                case "ldind":
                    return UnwrapReader(ProcessInternal(node.Arguments.Single(), inlineArgs));

                case "ldftn":
                    {
                        var target = ((LoadFunctionNode)node).Target;
                        var methodBase = target.ReflectionMethod;

                        if (target.NeedInitializer &&

                            // optimization not working if initializer happens to use type's generic args..
                            !target.ReflectionMethod.DeclaringType.IsGenericType)
                        {
                            return new JSCallExpression
                            {
                                Function = new JSFunctionDelcaration
                                {
                                    Body =
                                    {
                                        new JSCallExpression
                                        {
                                            Function = JSFactory.Identifier(
                                                GetAssemblyIdentifier(methodBase.DeclaringType),
                                                GetMethodIdentifier(methodBase) + "_init")
                                        }.ToStatement(),
                                        new JSReturnExpression
                                        {
                                            Expression = GetMethodAccessor(methodBase, this.method.ReflectionMethod, this.type.ReflectionType, thisScope)
                                        }.ToStatement()
                                    }
                                }
                            };
                        }
                        else
                        {
                            return GetMethodAccessor(methodBase, this.method.ReflectionMethod, this.type.ReflectionType, thisScope);
                        }
                    }
                case "ldvirtftn":
                    {
                        var thisArg = ProcessInternal(node.Arguments.Single(), inlineArgs);
                        var mi = (MethodInfo)node.Instruction.Data;
                        var acc = GetVirtualMethodAccessor(thisArg, null, mi);
                        return BindGenericMethodArguments(acc, mi, method.ReflectionMethod, type.ReflectionType, thisScope);
                    }
                case "ldlen":
                    return JSFactory.Identifier(ProcessInternal(node.Arguments.Single(), inlineArgs), "jsarr", "length");
                case "ldloc":
                    {
                        var id = "";
                        if (node.Instruction.Data != null)
                            id = node.Instruction.Data.ToString();

                        return new JSIdentifier
                        {
                            Name = opc.Substring(2).Replace(".s", ".").Replace(".", "") + id
                        };
                    }
                case "ldloca":
                    {
                        var id = "";
                        if (node.Instruction.Data != null)
                            id = node.Instruction.Data.ToString();

                        var ifier = new JSIdentifier
                        {
                            Name = opc.Substring(2).Replace("a.", ".").Replace(".s", ".").Replace(".", "") + id
                        };

                        return WrapInReaderWriter(ifier);
                    }
                case "ldnull":
                    return new JSNullLiteral();
                case "ldobj":
                    return UnwrapReader(ProcessInternal(node.Arguments.Single(), inlineArgs));
                case "ldsfld":
                    {
                        var field = (FieldInfo)node.Instruction.Data;
                        return JSFactory
                            .Identifier(GetTypeAccessor(field.DeclaringType, thisScope), field.Name);
                    }
                case "ldsflda":
                    {
                        var field = (FieldInfo)node.Instruction.Data;
                        var jsprop = JSFactory
                            .Identifier(GetTypeAccessor(field.DeclaringType, thisScope), field.Name);
                        return WrapInReaderWriter(jsprop);
                    }
                case "ldstr":
                    return new JSCallExpression
                    {
                        Function = JSFactory.Identifier("CILJS", "new_string"),
                        Arguments =
                        {
                            new JSStringLiteral
                            {
                                Value = (string)node.Instruction.Data
                            }
                        }
                    };
                case "ldtoken":
                    {
                        string typeName = null;
                        JSExpression value = null;

                        if (node.Instruction.Data is FieldInfo)
                        {
                            typeName = "System.RuntimeFieldHandle";

                            var fieldInfo = node.Instruction.Data as FieldInfo;

                            value = new JSObjectLiteral
                            {
                                Properties = new Dictionary<string, JSExpression>
                                {
                                    { "type", GetTypeAccessor(fieldInfo.DeclaringType, thisScope) },
                                    { "field", new JSStringLiteral { Value = GetTranslatedFieldName(fieldInfo) } }
                                }
                            };
                        }
                        else if (node.Instruction.Data is RuntimeMethodHandle)
                        {
                            typeName = "System.RuntimeMethodHandle";

                            var methodInfo = node.Instruction.Data as MethodInfo;

                            value = new JSObjectLiteral
                            {
                                Properties = new Dictionary<string, JSExpression>
                                {
                                    { "type", GetTypeAccessor(methodInfo.DeclaringType, thisScope) },
                                    { "field", new JSStringLiteral { Value = methodInfo.Name } }
                                }
                            };
                        }
                        else if (node.Instruction.Data is Type)
                        {
                            typeName = "System.RuntimeTypeHandle";
                            value = GetTypeAccessor(node.Instruction.Data as Type, thisScope);
                        }
                        else
                        {
                            throw new NotImplementedException();
                        }

                        var handleType = GetTypeAccessor(
                            this.context.ReflectionUniverse.GetType(typeName),
                            thisScope);

                        return new JSCallExpression
                        {
                            Function = JSFactory.Identifier("CILJS", "new_handle"),
                            Arguments =
                            {
                                handleType,
                                value
                            }
                        };
                    }
                case "newarr":
                    var length = ProcessInternal(node.Arguments.First(), inlineArgs);
                    var elementType = (Type)node.Instruction.Data;

                    return new JSCallExpression
                    {
                        Function = JSFactory.Identifier("CILJS", "new_array"),
                        Arguments =
                        {
                            GetTypeAccessor(elementType, thisScope),
                            length
                        }
                    };
                case "newobj":
                    {
                        var ctor = (ConstructorInfo)node.Instruction.Data;
                        var argList = ProcessList(node.Arguments).StartWith(new JSNullLiteral()); // leave room for "this"

                        var newobj = JSFactory.Call(
                            JSFactory.Identifier("CILJS", "newobj"),
                            GetTypeAccessor(ctor.DeclaringType, thisScope),
                            GetMethodAccessor(ctor, this.method.ReflectionMethod),
                            JSFactory.Array(true, argList.ToArray()));

                        return newobj;
                    }
                case "nop":
                    return new JSEmptyExpression();

                case "pop":
                    if (node.Arguments.OfType<OpExpression>().Any())
                        return ProcessInternal(node.Arguments.Single(), inlineArgs);
                    else
                        return new JSEmptyExpression();

                case "ret":
                    return new JSReturnExpression
                    {
                        Expression = ProcessInternal(node.Arguments.SingleOrDefault(), inlineArgs)
                    };
                case "starg":
                    {
                        var id = "";
                        if (node.Instruction.Data != null)
                            id = node.Instruction.Data.ToString();

                        var idx = opc.Replace(".s", ".").Replace(".", "").Substring("ldarg".Length) + id;
                        var result = new JSIdentifier
                        {
                            Name = "arg" + idx //"__args__[" + idx + "]"
                        } as JSExpression;

                        return JSFactory.Assignment(result, ProcessInternal(node.Arguments.SingleOrDefault(), inlineArgs));
                    }
                case "stelem":
                    {
                        var array = ProcessInternal(node.Arguments.First(), inlineArgs);
                        var index = ProcessInternal(node.Arguments.Skip(1).First(), inlineArgs);
                        var element = ProcessInternal(node.Arguments.Last(), inlineArgs);

                        if (opc == "stelem.ref")
                        {
                            return JSFactory.Call(JSFactory.Identifier("CILJS", "stelem_ref"), array, index, element);
                        }

                        return JSFactory
                            .Assignment(
                                new JSArrayLookupExpression
                                {
                                    Array = new JSPropertyAccessExpression { Host = array, Property = "jsarr" },
                                    Indexer = index
                                },
                                element);
                    }
                case "stind":
                    return new JSCallExpression
                    {
                        Function = new JSPropertyAccessExpression
                        {
                            Host = ProcessInternal(node.Arguments.First(), inlineArgs),
                            Property = "w"
                        },
                        Arguments = new List<JSExpression>
                        {
                            ProcessInternal(node.Arguments.Last(), inlineArgs)
                        }
                    };
                case "stobj":
                    return new JSCallExpression
                    {
                        Function = new JSPropertyAccessExpression
                        {
                            Host = ProcessInternal(node.Arguments.First(), inlineArgs),
                            Property = "w"
                        },
                        Arguments = new List<JSExpression>
                        {
                            ProcessInternal(node.Arguments.Last(), inlineArgs)
                        }
                    };
                case "stloc":
                    {
                        var id = "";
                        if (node.Instruction.Data != null)
                            id = node.Instruction.Data.ToString();

                        return new JSVariableDelcaration
                        {
                            Name = opc.Substring(2).Replace(".s", ".").Replace(".", "") + id,
                            Value = CloneValueTypeIfNeeded(ProcessInternal(node.Arguments.Single(), inlineArgs), node.Arguments.Single().ResultType)
                        };
                    }
                case "stfld":
                    {
                        var target = ProcessInternal(node.Arguments.First(), inlineArgs);
                        var fieldInfo = (FieldInfo)node.Instruction.Data;
                        var host = (fieldInfo.DeclaringType.IsValueType) ?
                            UnwrapReader(target) :
                            target;

                        return JSFactory
                            .Assignment(
                                new JSPropertyAccessExpression
                                {
                                    Host = host,
                                    Property = GetTranslatedFieldName(fieldInfo)
                                },
                                ProcessInternal(node.Arguments.Last(), inlineArgs));
                    }
                case "stsfld":
                    {
                        var field = (FieldInfo)node.Instruction.Data;
                        return JSFactory
                            .Assignment(JSFactory
                                .Identifier(
                                    GetTypeAccessor(field.DeclaringType, thisScope),
                                    field.Name),
                                ProcessInternal(node.Arguments.Last(), inlineArgs));
                    }
                case "throw":
                    return new JSThrowExpression
                    {
                        Expression = ProcessInternal(node.Arguments.Single(), inlineArgs)
                    };
                case "unbox":
                    var ttype = (Type)node.Instruction.Data;
                    var prop = ProcessInternal(node.Arguments.Single(), inlineArgs);
                    if (opc == "unbox.any")
                        return new JSCallExpression
                        {
                            Function = JSFactory.Identifier("CILJS", "unbox_any"),
                            Arguments =
                            {
                                prop,
                                GetTypeAccessor(ttype, thisScope)
                            }
                        };
                    else
                        return new JSPropertyAccessExpression
                        {
                            Host = prop,
                            Property = "boxed"
                        };
                default:
                    return new JSLineComment
                    {
                        Text = opc + ": opcode not implmented"
                    };
            }
        }

        private static JSExpression MakeLongValue(JSExpression low, JSExpression high)
        {
            return new JSNewExpression
            {
                Constructor = JSFactory.Identifier("Uint32Array"),
                Arguments =
                {
                    JSFactory.Array(low, high)
                }
            };
        }

        protected bool IsIntegerType(Type type)
        {
            return
                type.IsPrimitive &&
                !(type == context.SystemTypes.Single ||
                  type == context.SystemTypes.Double);
        }

        private JSExpression GetTypeAccessor(Type typeTok, JSExpression thisScope)
        {
            return GetTypeIdentifier(typeTok, this.method.ReflectionMethod, this.type.ReflectionType, thisScope, method.ReferencedTypes);
        }

        private JSExpression DereferenceIfNeeded(Node argument, JSExpression argExpression)
        {
            if (argument.ResultType == null)
                return argExpression;

            return IsManagedPointer(argument.ResultType) ?
                UnwrapReader(argExpression) :
                argExpression;
        }

        private bool IsManagedPointer(Type type)
        {
            return type.IsGenericType && type.GetGenericTypeDefinition() == context.ReflectionUniverse.GetType("CilJs.Runtime.ManagedPointer`1");
        }

        private static JSExpression CloneValueTypeIfNeeded(JSExpression value, Type type)
        {

            if (type != null && type.IsValueType && !type.IsPrimitive &&
                type.GetCustomAttributesData().All(d => d.AttributeType.Name != "JsNoCopyAttribute"))
            {
                return new JSCallExpression
                {
                    Function = JSFactory.Identifier("CILJS", "clone_value"),
                    Arguments = { value }
                };
            }
            else
                return value;
        }

        private JSExpression GetInterfaceMethodAccessor(JSExpression thisArg, JSExpression alternateThisArg, JSExpression thisScope, MethodBase mi)
        {
            // Interface maps are structured like this
            //
            //  {
            //     // key: interface identifier, value: method map
            //     "interfaceX": {
            //        // key: interface method identifier, value: function returning method implementation identifier
            //        "asm0.x60000001": function () { return asm0.x60000104; },
            //        "asm0.x60000004": function () { return asm0.x60000106; }
            //     }
            //  }
            //
            // The references are wrapped in functions because the value of asm0.xAAAAAAAA might 
            // be updated by the method initialization function, which initialize types that the method depends on. 
            //
            // We might be able to change this later and just store the reference to the actual method implementation.
            // To accomplish this, we need to call the method init function when the vtable or interface map is created.
            //
            //
            // For generic interfaces, ifacemap is a tree
            //
            //    interface X<S, T> { void M(); }
            //    class Y : X<int, string>, X<int, boolean> { void M(); }
            //
            //  {
            //     // key: interface identifier, value: method map
            //     "typeX": {
            //         "typeInt": {
            //             "typeString": { ... method map },
            //             "typeBoolean": { ... method map }
            //         }
            //     }
            //  }
            //
            // Method lookup becomes:
            //
            //    (((((loc1.ifacemap)[X])[S])[T]).x6000123)()

            JSExpression host;

            if (alternateThisArg != null)
            {
                host = new JSBinaryExpression
                {
                    Left = new JSPropertyAccessExpression
                    {
                        Host = thisArg,
                        Property = "ifacemap"
                    },
                    Operator = "||",
                    Right = new JSPropertyAccessExpression
                    {
                        Host = alternateThisArg,
                        Property = "ifacemap"
                    }
                };
            }
            else
            {
                host = new JSPropertyAccessExpression
                {
                    Host = thisArg,
                    Property = "ifacemap"
                };
            }

            var function = new JSArrayLookupExpression
            {
                Array = host,
                Indexer = GetTypeAccessor(mi.DeclaringType, thisScope)
            };


            if (mi.DeclaringType.IsGenericType)
            {
                foreach (var i in mi.DeclaringType.GenericTypeArguments)
                {
                    function = new JSArrayLookupExpression
                    {
                        Array = function,
                        Indexer = GetTypeAccessor(i, thisScope: thisScope)
                    };
                }
            }

            return new JSPropertyAccessExpression
            {
                Host = function,
                Property = GetMethodIdentifier(mi)
            };
        }

        private JSExpression GetVirtualMethodAccessor(JSExpression thisArg, JSExpression alternateThisArg, MethodInfo mi)
        {
            // Ideally, vtables are dictionaries of function references:
            //
            //  {
            //      "asm0.x60000001": asm0.x60000104,
            //      "asm0.x60000004": asm0.x60000106,
            //      ...
            //  }
            //
            // Because the implementation function might have an initializer, we use a trampoline that calls
            // the initializer if it exists, before replacing itself witht the actual implementation.

            JSExpression host;

            if (alternateThisArg != null)
            {
                host = new JSBinaryExpression
                {
                    Left = new JSPropertyAccessExpression
                    {
                        Host = thisArg,
                        Property = "vtable"
                    },
                    Operator = "||",
                    Right = new JSPropertyAccessExpression
                    {
                        Host = alternateThisArg,
                        Property = "vtable"
                    }
                };
            }
            else
            {
                host = new JSPropertyAccessExpression
                {
                    Host = thisArg,
                    Property = "vtable"
                };
            }

            return new JSPropertyAccessExpression
            {
                Host = host,
                Property = GetVirtualMethodIdentifier(mi)
            };
        }

        private JSExpression UnwrapReader(JSExpression expression)
        {
            var wrapped = expression as ReaderWriter;
            if (wrapped != null)
                return wrapped.WrappedExpression;
            else
                return new JSCallExpression { Function = JSFactory.Identifier(expression, "r") };
        }

        private static JSExpression UnwrapAndWrite(JSExpression target, JSExpression value)
        {
            var wrapped = target as ReaderWriter;

            if (wrapped != null)
                return JSFactory.Assignment(wrapped.WrappedExpression, value);

            return new JSCallExpression
            {
                Function = new JSPropertyAccessExpression
                {
                    Host = target,
                    Property = "w"
                },
                Arguments =
                {
                    value
                }
            };
        }

        private class ReaderWriter : JSObjectLiteral
        {
            public JSExpression WrappedExpression { get; private set; }

            public ReaderWriter(JSExpression ifier)
            {
                WrappedExpression = ifier;

                Properties = new Dictionary<string, JSExpression>
                {
                    {
                        "w",
                        new JSFunctionDelcaration
                        {
                            Body =
                            {
                                JSFactory.Assignment(ifier, JSFactory.Identifier("v")).ToStatement()
                            },
                            Parameters = { new JSFunctionParameter { Name = "v" } }
                        }
                    },
                    {
                        "r",
                        new JSFunctionDelcaration
                        {
                            Body =
                            {
                                new JSReturnExpression {Expression = ifier}.ToStatement()
                            }
                        }
                    }
                };
            }

        }

        private static JSExpression WrapInReaderWriter(JSExpression ifier)
        {
            return new ReaderWriter(ifier);
        }

        private IEnumerable<JSExpression> ProcessList(IEnumerable<Node> list, List<JSExpression> inlineArgs = null)
        {
            foreach (var i in list)
            {
                yield return CloneValueTypeIfNeeded(ProcessInternal(i, inlineArgs), i.ResultType);
            }
        }

    }
}
