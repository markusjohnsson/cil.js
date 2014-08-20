using Braille.Ast;
using Braille.JSAst;
using Braille.JsTranslation.OpTranslators;
using Braille.Loading.Model;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Type = IKVM.Reflection.Type;

namespace Braille.JsTranslation
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

        public OpTranslator(Context context, CilAssembly assembly, CilType type, CilMethod method)
            : base(context)
        {
            this.world = context.Assemblies;
            this.assembly = assembly;
            this.type = type;
            this.method = method;
        }

        public IEnumerable<JSStatement> Process(OpExpression node)
        {

            yield return GetILAsComment(node);

            var opc = node.Instruction.OpCode.Name;

            if (node.Prefixes.Any())
            {
                yield return JSFactory.Statement(
                    new JSLineComment
                    {
                        Text = "ignoring prefixes " + string.Join(",", node.Prefixes.Select(o => o.OpCode.Name))
                    });
            }

            var thisScope = GetThisScope(method.ReflectionMethod, type.ReflectionType);

            switch (opc)
            {
                case "br":
                case "br.s":
                    yield return JSFactory.Statement(
                        new JSBinaryExpression
                        {
                            Left = new JSIdentifier
                            {
                                Name = "__pos__"
                            },
                            Operator = "=",
                            Right = new JSNumberLiteral { Value = GetTargetPosition(node.Instruction), IsHex = true }
                        });
                    yield return JSFactory.Statement(new JSContinueExpression());
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
                        Statements = {
                            JSFactory.Statement(
                                JSFactory
                                    .Assignment(
                                        new JSIdentifier
                                        {
                                            Name = "__pos__"
                                        },
                                        new JSNumberLiteral { Value = GetTargetPosition(node.Instruction), IsHex = true })),
                            JSFactory.Statement(new JSContinueExpression())
                        }
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
                        Statements = {
                            JSFactory.Statement(
                                JSFactory
                                    .Assignment(
                                        new JSIdentifier
                                        {
                                            Name = "__pos__"
                                        },
                                        new JSNumberLiteral { Value = GetTargetPosition(node.Instruction), IsHex = true })),
                            JSFactory.Statement(new JSContinueExpression())
                        }
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
                            new JSIdentifier { Name = "__pos__" },
                            new JSNumberLiteral { Value = -1 })
                        .ToStatement();
                    yield return new JSBreakExpression().ToStatement();
                    break;
                case "leave":
                case "leave.s":
                    yield return JSFactory
                        .Assignment(
                            new JSIdentifier { Name = "__pos__" },
                            new JSNumberLiteral { Value = -1 })
                        .ToStatement();
                    yield return JSFactory
                        .Assignment(
                            new JSIdentifier { Name = "__outer_pos__" },
                            new JSNumberLiteral { Value = GetTargetPosition(node.Instruction), IsHex = true })
                        .ToStatement();
                    yield return new JSBreakExpression().ToStatement();
                    break;
                case "switch":

                    yield return new JSExpressionStatement
                    {
                        Expression = new JSVariableDelcaration
                        {
                            Name = "__switch_value__",
                            Value = ProcessInternal(node.Arguments.Single())
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
                        Statements = 
                        {
                            JSFactory
                                .Assignment(
                                    new JSIdentifier
                                    {
                                        Name = "__pos__"
                                    },
                                    new JSNumberLiteral { Value = GetTargetPosition(node.Instruction), IsHex = true })
                                .ToStatement(),
                            new JSExpressionStatement
                            {
                                Expression = new JSContinueExpression()
                            }       
                        }
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

                    var expressions = ProcessInternal(node);

                    yield return new JSExpressionStatement
                    {
                        Expression = WrapInStore(node.StoreLocations, expressions)
                    };
                    break;
            }

        }

        private static JSStatement GetILAsComment(OpExpression node)
        {
            var il = node.PrefixTraversal().OrderBy(i => i.Position);

            return JSFactory
                .Statement(
                    new JSLineComment
                    {
                        Text = string.Join("\n", il)
                    });
        }

        protected JSExpression CreateXInt64BinaryOperation(OpExpression node, string functionName)
        {
            return JSFactory.Call(
                JSFactory.Identifier("asm0", functionName),
                ProcessInternal(node.Arguments.First()),
                ProcessInternal(node.Arguments.Last()));
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
                expression = JSFactory.Assignment(storeTo.Name, expression);
            }

            return expression;
        }

        private JSIfStatement CreateComparisonBranch(OpExpression frame, string op)
        {
            return new JSIfStatement
            {
                Condition = new JSBinaryExpression
                {
                    Left = ProcessInternal(frame.Arguments.First()),
                    Right = ProcessInternal(frame.Arguments.Last()),
                    Operator = op
                },
                Statements = 
                {
                    JSFactory
                        .Assignment(
                            "__pos__",
                            new JSNumberLiteral { Value = GetTargetPosition(frame.Instruction), IsHex = true })
                        .ToStatement(),
                    new JSExpressionStatement
                    {
                        Expression = new JSContinueExpression()
                    }       
                }
            };
        }

        private double GetTargetPosition(OpInstruction i)
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

        protected JSExpression ProcessInternal(Node innode)
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
                case "or":
                case "rem":
                case "rem.un":
                case "shl":
                case "shr":
                case "shr.un":
                case "sub":
                    return new ArithmeticTranslator(context, assembly, type, method).Translate(node);

                case "box":
                    {
                        var d = (Type)node.Instruction.Data;
                        var value = ProcessInternal(node.Arguments.Single());
                        var originalValue = value;

                        if (d.IsGenericParameter)
                        {
                            return new JSCallExpression
                            {
                                Function = JSFactory.Identifier("box"),
                                Arguments = { value, GetTypeAccessor(d, thisScope) }
                            };
                        }

                        var isNullable = d.IsGenericType && d.GetGenericTypeDefinition().FullName.StartsWith("System.Nullable`1");

                        if (isNullable)
                        {
                            d = d.GetGenericArguments()[0];
                            value = JSFactory.Identifier(value, "value");
                        }

                        var boxed = new JSObjectLiteral
                        {
                            Properties = new Dictionary<string, JSExpression>
                            {
                                { "boxed", CloneValueTypeIfNeeded(value, d) },
                                { "type",  GetTypeAccessor(d, thisScope) },
                                { "vtable",  JSFactory.Identifier(GetTypeAccessor(d, thisScope), "prototype", "vtable") }
                            }
                        };

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

                        var args = ProcessList(node.Arguments).ToList();

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

                        var arglist = ProcessList(node.Arguments).ToList();

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
                            return new JSCallExpression
                            {
                                Function = JSFactory.Identifier(arglist.First(), "_methodPtr", "apply"),
                                Arguments = {
                                    new JSNullLiteral(),
                                    new JSConditionalExpression
                                    {   
                                        Condition = JSFactory.Identifier(arglist.First(), "_target"),
                                        TrueValue = new JSArrayLiteral { Values = arglist.Skip(1).StartWith(JSFactory.Identifier(arglist.First(), "_target")).ToList() },
                                        FalseValue = new JSArrayLiteral { Values = arglist.Skip(1).ToList() }
                                    }
                                }
                            };
                        }

                        var originalThisArg = arglist[0];

                        if (mi.IsVirtual &&
                            node.Arguments.First().ResultType == context.SystemTypes.Object)
                        {
                            // from: II.13.3 Methods of value types
                            //
                            // The CLI shall convert a boxed value type into a managed pointer to the 
                            // unboxed value type when a boxed value type is passed as the this pointer 
                            // to a virtual method whose implementation is provided by the unboxed value type.

                            arglist[0] = JSFactory.Call(JSFactory.Identifier("convert_box_to_pointer_as_needed"), arglist[0]);
                        }

                        return new JSCallExpression
                        {
                            Function =
                                mi.DeclaringType.IsInterface
                                    ? GetInterfaceMethodAccessor(originalThisArg, thisScope, mi) :
                                mi.IsVirtual
                                    ? GetVirtualMethodAccessor(originalThisArg, (MethodInfo)mi) :
                                      GetMethodAccessor(mi, this.method.ReflectionMethod),
                            Arguments = arglist
                        };
                    }
                case "castclass":
                    {
                        var expr = ProcessInternal(node.Arguments.Single());
                        var targetType = (Type)node.Instruction.Data;

                        if (targetType.FullName == "System.MulticastDelegate")
                            return expr;

                        return JSFactory.Call(JSFactory.RawExpression("cast_class"), expr, GetTypeAccessor(targetType, thisScope));
                    }
                
                case "ceq":
                case "cgt":
                case "clt":
                    return new ComparisonTranslator(context, assembly, type, method).Translate(node);

                case "conv":
                    return new ConversionTranslator(context, assembly, type, method).Translate(node);
                
                case "dup":
                    return ProcessInternal(node.Arguments.Single());
                case "initobj":
                    {
                        var typeTok = (Type)node.Instruction.Data;
                        var typeExpr = GetTypeAccessor(typeTok, thisScope);

                        return new JSConditionalExpression
                        {
                            Condition = JSFactory.Identifier(typeExpr, "IsValueType"),
                            TrueValue = new JSCallExpression
                            {
                                Function = new JSPropertyAccessExpression
                                {
                                    Host = ProcessInternal(node.Arguments.Single()),
                                    Property = "w"
                                },
                                Arguments = 
                                {
                                    new JSNewExpression 
                                    {
                                        Constructor = typeExpr
                                    }
                                }
                            },
                            FalseValue = new JSNullLiteral()
                        };
                    }
                case "isinst":
                    {
                        var targetType = (Type)node.Instruction.Data;
                        return new JSCallExpression
                        {
                            Function = new JSPropertyAccessExpression { Host = GetTypeAccessor(targetType, thisScope), Property = "IsInst" },
                            Arguments = new List<JSExpression> { ProcessInternal(node.Arguments.Single()) }
                        };

                    }
                case "ldarg":
                    {
                        var id = "";
                        if (node.Instruction.Data != null)
                            id = node.Instruction.Data.ToString();

                        var idx = opc.Replace(".s", ".").Replace(".", "").Substring("ldarg".Length) + id;
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
                        var high = JSFactory.Hex((uint)((uvalue & 0xffffffff00000000UL) >> 32));
                        var low = JSFactory.Hex((uint)(uvalue & 0xffffffffUL));

                        return MakeLongValue(low, high);
                    }
                    else if (opc.StartsWith("ldc.r8"))
                    {
                        if (opc == "ldc.r8")
                            return new JSNumberLiteral
                            {
                                Value = (double)node.Instruction.Data,
                                TypeHint = TypeHint.Float
                            };
                        else if (opc == "ldc.r8.s")
                            return new JSNumberLiteral
                            {
                                Value = (double)(byte)node.Instruction.Data,
                                TypeHint = TypeHint.Float
                            };
                        else if (opc == "ldc.r8.m1")
                            return new JSNumberLiteral
                            {
                                Value = -1L,
                                TypeHint = TypeHint.Float
                            };
                        else //if (opc.StartsWith("ldc.r8"))
                            return new JSNumberLiteral
                            {
                                Value = double.Parse(opc.Substring("ldc.r8.".Length)),
                                TypeHint = TypeHint.Float
                            };
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
                    return new JSArrayLookupExpression
                    {
                        Array = new JSPropertyAccessExpression { Host = ProcessInternal(node.Arguments.First()), Property = "jsarr" },
                        Indexer = ProcessInternal(node.Arguments.Last())
                    };
                case "ldelema":
                    return WrapInReaderWriter(new JSArrayLookupExpression
                    {
                        Array = new JSPropertyAccessExpression { Host = ProcessInternal(node.Arguments.First()), Property = "jsarr" },
                        Indexer = ProcessInternal(node.Arguments.Last())
                    });
                case "ldfld":
                    {
                        var fieldInfo = (FieldInfo)node.Instruction.Data;
                        var argument = node.Arguments.Single();
                        var argExpression = ProcessInternal(argument);

                        var source = DereferenceIfNeeded(argument, argExpression);

                        return new JSPropertyAccessExpression
                        {
                            Host = source,
                            Property = GetTranslatedFieldName(type, fieldInfo)
                        };
                    }
                case "ldflda":
                    {
                        var field = (FieldInfo)node.Instruction.Data;
                        return WrapInReaderWriter(new JSArrayLookupExpression
                        {
                            Array = GetTypeAccessor(field.DeclaringType, thisScope),
                            Indexer = new JSStringLiteral
                            {
                                Value = (string)field.Name
                            }
                        });
                    }
                case "ldind":
                    return JSFactory.Call(JSFactory.Identifier(ProcessInternal(node.Arguments.Single()), "r"));
                    //return new JSPropertyAccessExpression
                    //{
                    //    Host = ProcessInternal(node.Arguments.Single()),
                    //    Property = "boxed"
                    //};
                case "ldftn":
                    {
                        var target = ((LoadFunctionNode)node).Target;
                        var methodBase = target.ReflectionMethod;

                        if (target.NeedInitializer)
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
                                            Expression = GetMethodAccessor(methodBase, this.method.ReflectionMethod) 
                                        }.ToStatement()
                                    }
                                }
                            };
                        }
                        else
                        {
                            return GetMethodAccessor(methodBase, this.method.ReflectionMethod);
                        }
                    }
                case "ldlen":
                    return JSFactory.Identifier(ProcessInternal(node.Arguments.Single()), "jsarr", "length");
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
                    return ProcessInternal(node.Arguments.Single());
                case "ldsfld":
                    {
                        var field = (FieldInfo)node.Instruction.Data;
                        return new JSPropertyAccessExpression
                        {
                            Host = GetTypeAccessor(field.DeclaringType, thisScope),
                            Property = (string)field.Name
                        };
                    }
                case "ldstr":
                    return new JSCallExpression
                    {
                        Function = JSFactory.Identifier("new_string"),
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
                                    { "field", new JSStringLiteral { Value = fieldInfo.Name } }
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
                            Function = JSFactory.Identifier("new_handle"),
                            Arguments = 
                            { 
                                handleType,
                                value
                            }
                        };
                    }
                case "newarr":
                    var length = ProcessInternal(node.Arguments.First());
                    var elementType = (Type)node.Instruction.Data;

                    return new JSCallExpression
                    {
                        Function = JSFactory.Identifier("new_array"),
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
                            JSFactory.Identifier("newobj"),
                            GetTypeAccessor(ctor.DeclaringType, thisScope),
                            GetMethodAccessor(ctor, this.method.ReflectionMethod),
                            JSFactory.Array(argList.ToArray()));

                        return newobj;
                    }
                case "nop":
                    return new JSEmptyExpression();

                case "pop":
                    if (node.Arguments.OfType<OpExpression>().Any())
                        return ProcessInternal(node.Arguments.Single());
                    else
                        return new JSEmptyExpression();

                case "ret":
                    return new JSReturnExpression
                    {
                        Expression = ProcessInternal(node.Arguments.SingleOrDefault())
                    };
                case "stelem":
                    return JSFactory
                        .Assignment(
                            new JSArrayLookupExpression
                            {
                                Array = new JSPropertyAccessExpression { Host = ProcessInternal(node.Arguments.First()), Property = "jsarr" },
                                Indexer = ProcessInternal(node.Arguments.Skip(1).First())
                            },
                            ProcessInternal(node.Arguments.Last()));
                case "stind":
                    return new JSCallExpression
                    {
                        Function = new JSPropertyAccessExpression
                        {
                            Host = ProcessInternal(node.Arguments.First()),
                            Property = "w"
                        },
                        Arguments = new List<JSExpression>
                        {
                            ProcessInternal(node.Arguments.Last())
                        }
                    };
                case "stobj":
                    return new JSCallExpression
                    {
                        Function = new JSPropertyAccessExpression
                        {
                            Host = ProcessInternal(node.Arguments.First()),
                            Property = "w"
                        },
                        Arguments = new List<JSExpression>
                        {
                            ProcessInternal(node.Arguments.Last())
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
                            Value = ProcessInternal(node.Arguments.Single())
                        };
                    }
                case "stfld":
                    {
                        var target = ProcessInternal(node.Arguments.First());
                        var fieldInfo = (FieldInfo)node.Instruction.Data;
                        var host = (fieldInfo.DeclaringType.IsValueType) ?
                            new JSCallExpression { Function = new JSPropertyAccessExpression { Host = target, Property = "r" } } :
                            target;

                        return JSFactory
                            .Assignment(
                                new JSPropertyAccessExpression
                                {
                                    Host = host,
                                    Property = GetTranslatedFieldName(type, fieldInfo)
                                },
                                ProcessInternal(node.Arguments.Last()));
                    }
                case "stsfld":
                    {
                        var field = (FieldInfo)node.Instruction.Data;
                        return JSFactory
                            .Assignment(
                                new JSArrayLookupExpression
                                {
                                    Array = GetTypeAccessor(field.DeclaringType, thisScope),
                                    Indexer = new JSStringLiteral
                                    {
                                        Value = (string)field.Name
                                    }
                                },
                                ProcessInternal(node.Arguments.Last()));
                    }
                case "throw":
                    return new JSThrowExpression
                    {
                        Expression = ProcessInternal(node.Arguments.Single())
                    };
                case "unbox":
                    var ttype = (Type)node.Instruction.Data;
                    var prop = ProcessInternal(node.Arguments.Single());
                    if (opc == "unbox.any")
                        return new JSCallExpression
                        {
                            Function = JSFactory.Identifier("unbox_any"),
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
            var idx = method.ReferencedTypes.IndexOf(typeTok);
            if (idx == -1)
                return GetTypeIdentifier(typeTok, this.method.ReflectionMethod, this.type.ReflectionType, thisScope);
            else
                return JSFactory.Identifier("t" + idx);
        }

        private JSExpression DereferenceIfNeeded(Node argument, JSExpression argExpression)
        {
            if (argument.ResultType == null)
                return argExpression;

            return IsManagedPointer(argument.ResultType) ?
                Dereference(argExpression) :
                argExpression;
        }

        private static JSCallExpression Dereference(JSExpression argExpression)
        {
            return new JSCallExpression { Function = new JSPropertyAccessExpression { Host = argExpression, Property = "r" } };
        }

        private bool IsManagedPointer(Type type)
        {
            return type.IsGenericType && type.GetGenericTypeDefinition() == context.ReflectionUniverse.GetType("Braille.Runtime.ManagedPointer`1");
        }

        private static JSExpression CloneValueTypeIfNeeded(JSExpression value, Type type)
        {

            if (type != null && type.IsValueType && !type.IsPrimitive &&
                !type.GetCustomAttributesData().Where(d => d.AttributeType.Name == "JsNoCopyAttribute").Any())
            {
                return new JSCallExpression
                {
                    Function = JSFactory.Identifier("clone_value"),
                    Arguments = { value }
                };
            }
            else
                return value;
        }

        private JSExpression GetInterfaceMethodAccessor(JSExpression thisArg, JSExpression thisScope, MethodBase mi)
        {
            // vtables and interface maps are dictionaries of function references:
            //
            //  {
            //      "asm0.x60000001": function () { return asm0.x60000104; },
            //      "asm0.x60000004": function () { return asm0.x60000106; }
            //  }
            //
            // The references are wrapped in functions because the value of asm0.xAAAAAAAA might 
            // be updated by the method initialization function, which types that the method depends on. 
            //
            // We might be able to change this later and just store the reference to the actual method implementation.
            // To accomplish this, we need to call the init function when the vtable or interface map is created.

            return new JSCallExpression
            {
                Function = new JSPropertyAccessExpression
                {
                    Host = new JSArrayLookupExpression
                    {
                        Array = thisArg,
                        Indexer = GetTypeAccessor(mi.DeclaringType, thisScope)
                    },
                    Property = GetMethodIdentifier(mi)
                }
            };
        }

        private JSExpression GetVirtualMethodAccessor(JSExpression thisArg, MethodInfo mi)
        {
            // vtables and interface maps are dictionaries of function references:
            //
            //  {
            //      "asm0.x60000001": function () { return asm0.x60000104; },
            //      "asm0.x60000004": function () { return asm0.x60000106; }
            //  }
            //
            // The references are wrapped in functions because the value of asm0.xAAAAAAAA might 
            // be updated by the method initialization function, which types that the method depends on. 
            //
            // We might be able to change this later and just store the reference to the actual method implementation.
            // To accomplish this, we need to call the init function when the vtable or interface map is created.

            return new JSCallExpression
            {
                Function = new JSPropertyAccessExpression
                {
                    Host = new JSPropertyAccessExpression
                    {
                        Host = thisArg,
                        Property = "vtable"
                    },
                    Property = GetVirtualMethodIdentifier(mi)
                }
            };
        }

        private static JSExpression WrapInReaderWriter(JSExpression ifier)
        {
            return new JSObjectLiteral
            {
                Properties = new Dictionary<string, JSExpression>
                {
                    { 
                        "w", 
                        new JSFunctionDelcaration 
                        { 
                            Body =
                            { 
                                JSFactory
                                    .Assignment(
                                        ifier, 
                                        new JSArrayLookupExpression 
                                        {
                                            Array = new JSIdentifier 
                                            { 
                                                Name = "arguments" 
                                            }, 
                                            Indexer = new JSNumberLiteral 
                                            { 
                                                Value = 0 
                                            } 
                                        })
                                    .ToStatement()
                            }
                        }
                    },
                    {
                        "r", 
                        new JSFunctionDelcaration 
                        { 
                            Body = 
                            { 
                                new JSExpressionStatement { Expression = new JSReturnExpression { Expression = ifier } }
                            }
                        }
                    }
                }
            };
        }

        private IEnumerable<JSExpression> ProcessList(IEnumerable<Node> list)
        {
            foreach (var i in list)
            {
                yield return CloneValueTypeIfNeeded(ProcessInternal(i), i.ResultType);
            }
        }

    }
}
