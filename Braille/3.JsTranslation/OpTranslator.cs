using Braille.Ast;
using Braille.JSAst;
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
        private CilAssembly assembly;
        private CilType type;
        private CilMethod method;
        private List<CilAssembly> world;

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

            yield return new JSStatement
            {
                Expression = new JSLineComment
                {
                    Text = node.Instruction.ToString()
                }
            };

            var opc = node.Instruction.OpCode.Name;

            if (node.Prefixes.Any())
            {
                yield return new JSStatement
                {
                    Expression = new JSLineComment
                    {
                        Text = "ignoring prefixes " + string.Join(",", node.Prefixes.Select(o => o.OpCode.Name))
                    }
                };
            }

            switch (opc)
            {
                case "br":
                case "br.s":
                    yield return new JSStatement
                    {
                        Expression = new JSBinaryExpression
                            {
                                Left = new JSIdentifier
                                {
                                    Name = "__braille_pos__"
                                },
                                Operator = "=",
                                Right = new JSNumberLiteral { Value = GetTargetPosition(node.Instruction), IsHex = true }
                            }
                    };
                    yield return new JSStatement
                    {
                        Expression = new JSContinueExpression()
                    };
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
                            new JSStatement
                            {
                                Expression = JSFactory
                                    .Assignment(
                                        new JSIdentifier
                                        {
                                            Name = "__braille_pos__"
                                        },
                                        new JSNumberLiteral { Value = GetTargetPosition(node.Instruction), IsHex = true })
                            },
                            new JSStatement
                            {
                                Expression = new JSContinueExpression()
                            }       
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
                            new JSStatement
                            {
                                Expression = JSFactory
                                    .Assignment(
                                        new JSIdentifier
                                        {
                                            Name = "__braille_pos__"
                                        },
                                        new JSNumberLiteral { Value = GetTargetPosition(node.Instruction), IsHex = true })
                            },
                            new JSStatement
                            {
                                Expression = new JSContinueExpression()
                            }       
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
                            new JSIdentifier { Name = "__braille_pos__" },
                            new JSNumberLiteral { Value = -1 })
                        .ToStatement();
                    yield return new JSBreakExpression().ToStatement();
                    break;
                case "leave":
                case "leave.s":
                    yield return JSFactory
                        .Assignment(
                            new JSIdentifier { Name = "__braille_pos__" },
                            new JSNumberLiteral { Value = -1 })
                        .ToStatement();
                    yield return JSFactory
                        .Assignment(
                            new JSIdentifier { Name = "__braille_outer_pos__" },
                            new JSNumberLiteral { Value = GetTargetPosition(node.Instruction), IsHex = true })
                        .ToStatement();
                    yield return new JSBreakExpression().ToStatement();
                    break;
                case "switch":

                    yield return new JSStatement
                    {
                        Expression = new JSVariableDelcaration
                        {
                            Name = "__braille_switch_value__",
                            Value = ProcessInternal(node.Arguments.Single())
                        }
                    };

                    yield return new JSIfStatement
                    {
                        Condition = new JSBinaryExpression
                        {
                            Left = new JSIdentifier { Name = "__braille_switch_value__" },
                            Operator = ">=",
                            Right = new JSNumberLiteral { Value = ((int[])node.Instruction.Data).Length, IsHex = true }
                        },
                        Statements = 
                        {
                            JSFactory
                                .Assignment(
                                    new JSIdentifier
                                    {
                                        Name = "__braille_pos__"
                                    },
                                    new JSNumberLiteral { Value = GetTargetPosition(node.Instruction), IsHex = true })
                                .ToStatement(),
                            new JSStatement
                            {
                                Expression = new JSContinueExpression()
                            }       
                        }
                    };
                    
                    yield return new JSStatement
                    {
                        Expression = new JSVariableDelcaration
                        {
                            Name = "__braille_jmp__",
                            Value = new JSArrayLiteral { Values = ((int[])node.Instruction.Data).Select(d => new JSNumberLiteral { Value = d, IsHex = true }) }
                        }
                    };

                    yield return JSFactory
                        .Assignment(
                            new JSIdentifier
                            {
                                Name = "__braille_pos__"
                            },
                            new JSBinaryExpression
                            {
                                Left = new JSNumberLiteral { Value = GetTargetPosition(node.Instruction), IsHex = true },
                                Operator = "+",
                                Right = new JSArrayLookupExpression
                                {
                                    Array = new JSIdentifier { Name = "__braille_jmp__" },
                                    Indexer = new JSIdentifier { Name = "__braille_switch_value__" }
                                }
                            })
                        .ToStatement();

                    yield return new JSStatement
                    {
                        Expression = new JSContinueExpression()
                    };
                    break;

                default:

                    yield return new JSStatement
                    {
                        Expression = WrapInStore(node.StoreLocations, ProcessInternal(node))
                    };
                    break;
            }

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
                            "__braille_pos__",
                            new JSNumberLiteral { Value = GetTargetPosition(frame.Instruction), IsHex = true })
                        .ToStatement(),
                    new JSStatement
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

        private JSExpression ProcessInternal(Node node)
        {
            var varInfo = node as VariableInfo;

            if (varInfo != null)
            {
                return new JSIdentifier { Name = varInfo.Name };
            }

            var frame = node as OpExpression;

            if (frame == null || frame.Instruction == null)
                return new JSEmptyExpression();

            var thisScope = GetThisScope(method.ReflectionMethod, type.ReflectionType);

            var opc = frame.Instruction.OpCode.Name;

            var i = opc.IndexOf(".");
            var opc_ = i > 0 ? opc.Substring(0, i) : opc;

            switch (opc_)
            {
                case "add":
                    return new JSBinaryExpression
                    {
                        Left = ProcessInternal(frame.Arguments.First()),
                        Right = ProcessInternal(frame.Arguments.Last()),
                        Operator = "+"
                    };
                case "and":
                    return new JSBinaryExpression
                    {
                        Left = ProcessInternal(frame.Arguments.First()),
                        Right = ProcessInternal(frame.Arguments.Last()),
                        Operator = "&"
                    };
                case "box":
                    {
                        var d = (IKVM.Reflection.Type)frame.Instruction.Data;
                        var value = ProcessInternal(frame.Arguments.Single());
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
                                { 
                                    "boxed", 
                                    CloneValueTypeIfNeeded(value, d)
                                },
                                {
                                    "vtable",  JSFactory.Identifier(GetTypeAccessor(d, thisScope), "prototype", "vtable")
                                }
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
                        var mi = ((MethodBase)frame.Instruction.Data);

                        if (mi.DeclaringType.FullName == "System.Object" &&
                            mi is ConstructorInfo &&
                            mi.GetParameters().Length == 0)
                        {
                            return new JSEmptyExpression();
                        }

                        var args = ProcessList(frame.Arguments).ToList();

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
                            Function =
                                /*
                                    replacement != null
                                        ? JSFactory.Identifier("(" + replacement.Replacement + ")")
                                        : 
                                        */
                                    GetMethodAccessor(mi, this.method.ReflectionMethod, this.type.ReflectionType, thisScope),
                            Arguments = args
                        };
                    }
                case "callvirt":
                    {
                        var mi = ((MethodBase)frame.Instruction.Data);

                        var arglist = ProcessList(frame.Arguments).ToList();

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

                        return new JSCallExpression
                        {
                            Function =
                                mi.DeclaringType.IsInterface
                                    ? GetInterfaceMethodAccessor(arglist.First(), thisScope, mi) :
                                mi.IsVirtual
                                    ? GetVirtualMethodAccessor(arglist.First(), (MethodInfo)mi) :
                                /*
                            replacement != null
                                ? JSFactory.Identifier(replacement.Replacement) :
                                 */
                                      GetMethodAccessor(mi, this.method.ReflectionMethod),
                            Arguments = arglist
                        };
                    }
                case "castclass":
                    return ProcessInternal(frame.Arguments.Single());
                case "ceq":
                    return new JSConditionalExpression
                    {
                        Condition = new JSBinaryExpression
                        {
                            Left = ProcessInternal(frame.Arguments.First()),
                            Right = ProcessInternal(frame.Arguments.Last()),
                            Operator = "==="
                        },
                        TrueValue = new JSNumberLiteral { Value = 1 },
                        FalseValue = new JSNumberLiteral { Value = 0 }
                    };
                case "cgt":
                    return new JSConditionalExpression
                    {
                        Condition = new JSBinaryExpression
                        {
                            Left = ProcessInternal(frame.Arguments.First()),
                            Right = ProcessInternal(frame.Arguments.Last()),
                            Operator = ">"
                        },
                        TrueValue = new JSNumberLiteral { Value = 1 },
                        FalseValue = new JSNumberLiteral { Value = 0 }
                    };
                case "clt":
                    return new JSConditionalExpression
                    {
                        Condition = new JSBinaryExpression
                        {
                            Left = ProcessInternal(frame.Arguments.First()),
                            Right = ProcessInternal(frame.Arguments.Last()),
                            Operator = "<"
                        },
                        TrueValue = new JSNumberLiteral { Value = 1 },
                        FalseValue = new JSNumberLiteral { Value = 0 }
                    };
                case "conv":
                    return ProcessInternal(frame.Arguments.Single());
                case "div":
                case "div.un":
                    return new JSBinaryExpression
                    {
                        Left = ProcessInternal(frame.Arguments.First()),
                        Right = ProcessInternal(frame.Arguments.Last()),
                        Operator = "/"
                    };
                case "dup":
                    return ProcessInternal(frame.Arguments.Single());
                case "initobj":
                    {
                        var typeTok = (Type)frame.Instruction.Data;
                        var typeExpr = GetTypeAccessor(typeTok, thisScope);

                        return new JSConditionalExpression
                        {
                            Condition = JSFactory.Identifier(typeExpr, "IsValueType"),
                            TrueValue = new JSCallExpression
                            {
                                Function = new JSPropertyAccessExpression
                                {
                                    Host = ProcessInternal(frame.Arguments.Single()),
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
                        var targetType = (Type)frame.Instruction.Data;
                        return new JSCallExpression
                        {
                            Function = new JSPropertyAccessExpression { Host = GetTypeAccessor(targetType, thisScope), Property = "IsInst" },
                            Arguments = new List<JSExpression> { ProcessInternal(frame.Arguments.Single()) }
                        };

                    }
                case "ldarg":
                    {
                        var id = "";
                        if (frame.Instruction.Data != null)
                            id = frame.Instruction.Data.ToString();

                        var idx = opc.Replace(".s", ".").Replace(".", "").Substring("ldarg".Length) + id;
                        var result = new JSIdentifier
                        {
                            Name = "arg" + idx //"__braille_args__[" + idx + "]"
                        } as JSExpression;

                        return result;
                    }
                case "ldarga":
                    {
                        var id = "";
                        if (frame.Instruction.Data != null)
                            id = frame.Instruction.Data.ToString();

                        var idx = opc.Replace(".s", ".").Replace(".", "").Substring("ldarga".Length) + id;

                        return WrapInReaderWriter(new JSIdentifier
                        {
                            Name = "arg" + idx //"__braille_args__[" +  + "]"
                        });
                    }
                case "ldc":
                    if (opc.StartsWith("ldc.i4"))
                    {
                        if (opc == "ldc.i4")
                            return new JSNumberLiteral
                            {
                                Value = (int)frame.Instruction.Data
                            };
                        else if (opc == "ldc.i4.s")
                            return new JSNumberLiteral
                            {
                                Value = (int)(sbyte)(byte)frame.Instruction.Data
                            };
                        else if (opc == "ldc.i4.m1")
                            return new JSNumberLiteral
                            {
                                Value = -1
                            };
                        else //if (opc.StartsWith("ldc.i4"))
                            return new JSNumberLiteral
                            {
                                Value = int.Parse(opc.Substring("ldc.i4.".Length))
                            };
                    }
                    else if (opc.StartsWith("ldc.i8"))
                    {
                        if (opc == "ldc.i8")
                            return new JSNumberLiteral
                            {
                                Value = (long)frame.Instruction.Data
                            };
                        else if (opc == "ldc.i8.s")
                            return new JSNumberLiteral
                            {
                                Value = (long)(byte)frame.Instruction.Data
                            };
                        else if (opc == "ldc.i8.m1")
                            return new JSNumberLiteral
                            {
                                Value = -1L
                            };
                        else //if (opc.StartsWith("ldc.i8"))
                            return new JSNumberLiteral
                            {
                                Value = long.Parse(opc.Substring("ldc.i8.".Length))
                            };
                    }
                    else if (opc.StartsWith("ldc.r8"))
                    {
                        if (opc == "ldc.r8")
                            return new JSNumberLiteral
                            {
                                Value = (double)frame.Instruction.Data
                            };
                        else if (opc == "ldc.r8.s")
                            return new JSNumberLiteral
                            {
                                Value = (double)(byte)frame.Instruction.Data
                            };
                        else if (opc == "ldc.r8.m1")
                            return new JSNumberLiteral
                            {
                                Value = -1L
                            };
                        else //if (opc.StartsWith("ldc.i8"))
                            return new JSNumberLiteral
                            {
                                Value = double.Parse(opc.Substring("ldc.r8.".Length))
                            };
                    }
                    else
                    {
                        if (opc == "ldc.r4")
                            return new JSNumberLiteral
                            {
                                Value = (float)frame.Instruction.Data
                            };
                        else if (opc == "ldc.r4.s")
                            return new JSNumberLiteral
                            {
                                Value = (float)(byte)frame.Instruction.Data
                            };
                        else if (opc == "ldc.r4.m1")
                            return new JSNumberLiteral
                            {
                                Value = -1L
                            };
                        else //if (opc.StartsWith("ldc.i8"))
                            return new JSNumberLiteral
                            {
                                Value = float.Parse(opc.Substring("ldc.r4.".Length))
                            };
                    }
                case "ldelem":
                    return new JSArrayLookupExpression
                    {
                        Array = new JSPropertyAccessExpression { Host = ProcessInternal(frame.Arguments.First()), Property = "jsarr" },
                        Indexer = ProcessInternal(frame.Arguments.Last())
                    };
                case "ldelema":
                    return WrapInReaderWriter(new JSArrayLookupExpression
                    {
                        Array = new JSPropertyAccessExpression { Host = ProcessInternal(frame.Arguments.First()), Property = "jsarr" },
                        Indexer = ProcessInternal(frame.Arguments.Last())
                    });
                case "ldfld":
                    {
                        var fieldInfo = (FieldInfo)frame.Instruction.Data;
                        var argument = frame.Arguments.Single();
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
                        var field = (FieldInfo)frame.Instruction.Data;
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
                    return new JSPropertyAccessExpression
                    {
                        Host = ProcessInternal(frame.Arguments.Single()),
                        Property = "boxed"
                    };
                case "ldftn":
                    {
                        var target = ((LoadFunctionNode)frame).Target;
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
                    return JSFactory.Identifier(ProcessInternal(frame.Arguments.Single()), "jsarr", "length");
                case "ldloc":
                    {
                        var id = "";
                        if (frame.Instruction.Data != null)
                            id = frame.Instruction.Data.ToString();

                        return new JSIdentifier
                        {
                            Name = opc.Substring(2).Replace(".s", ".").Replace(".", "") + id
                        };
                    }
                case "ldloca":
                    {
                        var id = "";
                        if (frame.Instruction.Data != null)
                            id = frame.Instruction.Data.ToString();

                        var ifier = new JSIdentifier
                        {
                            Name = opc.Substring(2).Replace("a.", ".").Replace(".s", ".").Replace(".", "") + id
                        };

                        return WrapInReaderWriter(ifier);
                    }
                case "ldnull":
                    return new JSNullLiteral();
                case "ldobj":
                    return ProcessInternal(frame.Arguments.Single());
                case "ldsfld":
                    {
                        var field = (FieldInfo)frame.Instruction.Data;
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
                                Value = (string)frame.Instruction.Data
                            }
                        }
                    };
                case "ldtoken":
                    {
                        string typeName = null; 
                        JSExpression value = null;

                        if (frame.Instruction.Data is FieldInfo)
                        {
                            typeName = "System.RuntimeFieldHandle";
                            
                            var fieldInfo = frame.Instruction.Data as FieldInfo;
                            
                            value = new JSObjectLiteral
                            {
                                Properties = new Dictionary<string, JSExpression> 
                                { 
                                    { "type", GetTypeAccessor(fieldInfo.DeclaringType, thisScope) }, 
                                    { "field", new JSStringLiteral { Value = fieldInfo.Name } }
                                }
                            };
                        }
                        else if (frame.Instruction.Data is RuntimeMethodHandle)
                        {
                            typeName = "System.RuntimeMethodHandle";

                            var methodInfo = frame.Instruction.Data as MethodInfo;

                            value = new JSObjectLiteral
                            {
                                Properties = new Dictionary<string, JSExpression> 
                                { 
                                    { "type", GetTypeAccessor(methodInfo.DeclaringType, thisScope) }, 
                                    { "field", new JSStringLiteral { Value = methodInfo.Name } }
                                }
                            };
                        }
                        else if (frame.Instruction.Data is Type)
                        {
                            typeName = "System.RuntimeTypeHandle";
                            value = GetTypeAccessor(frame.Instruction.Data as Type, thisScope);
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
                case "mul":
                    return new JSBinaryExpression
                    {
                        Left = ProcessInternal(frame.Arguments.First()),
                        Right = ProcessInternal(frame.Arguments.Last()),
                        Operator = "*"
                    };
                case "neg":
                    return new JSUnaryExpression
                    {
                        Operator = "-",
                        Operand = ProcessInternal(frame.Arguments.Single())
                    };
                case "newarr":
                    var length = ProcessInternal(frame.Arguments.First());
                    var elementType = (Type)frame.Instruction.Data;

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
                        var ctor = (ConstructorInfo)frame.Instruction.Data;
                        var argList = ProcessList(frame.Arguments);

                        return new JSCallExpression
                        {
                            Function = new JSFunctionDelcaration
                            {
                                Body = new List<JSStatement> 
                                {
                                    new JSStatement
                                    { 
                                        Expression = new JSVariableDelcaration 
                                        { 
                                            Name = "result", 
                                            Value = 
                                            new JSNewExpression
                                            {
                                                Constructor = new JSArrayLookupExpression
                                                { 
                                                    Array = JSFactory.Identifier("arguments"), 
                                                    Indexer = new JSNumberLiteral{ Value = 0 } 
                                                }
                                            }
                                        }
                                    },
                                    new JSStatement 
                                    {
                                        Expression = new JSCallExpression
                                        {
                                            Function = GetMethodAccessor(ctor, this.method.ReflectionMethod),
                                            Arguments = argList
                                                .StartWith(
                                                    ctor.DeclaringType.IsValueType ? 
                                                        WrapInReaderWriter(new JSIdentifier { Name = "result" }): 
                                                        new JSIdentifier { Name  = "result" })
                                                .ToList()
                                        }
                                    },
                                    new JSStatement 
                                    {
                                        Expression = new JSReturnExpression
                                        {
                                            Expression = new JSIdentifier { Name = "result" }
                                        }
                                    }
                                }
                            },
                            Arguments =
                            {
                                GetTypeAccessor(ctor.DeclaringType, thisScope)
                            }
                        };
                    }
                case "nop":
                    return new JSEmptyExpression();
                case "or":
                    return new JSBinaryExpression
                    {
                        Left = ProcessInternal(frame.Arguments.First()),
                        Right = ProcessInternal(frame.Arguments.Last()),
                        Operator = "|"
                    };
                case "pop":
                    return new JSEmptyExpression();
                //return ProcessInternal(frame.Arguments.Single());
                case "rem":
                case "rem.un":
                    return new JSBinaryExpression
                    {
                        Left = ProcessInternal(frame.Arguments.First()),
                        Right = ProcessInternal(frame.Arguments.Last()),
                        Operator = "%"
                    };
                case "ret":
                    return new JSReturnExpression
                    {
                        Expression = ProcessInternal(frame.Arguments.SingleOrDefault())
                    };
                case "shl":
                    return new JSBinaryExpression
                    {
                        Left = ProcessInternal(frame.Arguments.First()),
                        Right = ProcessInternal(frame.Arguments.Last()),
                        Operator = "<<"
                    };
                case "shr":
                    return new JSBinaryExpression
                    {
                        Left = ProcessInternal(frame.Arguments.First()),
                        Right = ProcessInternal(frame.Arguments.Last()),
                        Operator = ">>"
                    };
                case "shr.un":
                    return new JSBinaryExpression
                    {
                        Left = ProcessInternal(frame.Arguments.First()),
                        Right = ProcessInternal(frame.Arguments.Last()),
                        Operator = ">>>"
                    };
                case "stelem":
                    return JSFactory
                        .Assignment(
                            new JSArrayLookupExpression
                            {
                                Array = new JSPropertyAccessExpression { Host = ProcessInternal(frame.Arguments.First()), Property = "jsarr" },
                                Indexer = ProcessInternal(frame.Arguments.Skip(1).First())
                            },
                            ProcessInternal(frame.Arguments.Last()));
                case "stind":
                    return new JSCallExpression
                    {
                        Function = new JSPropertyAccessExpression
                        {
                            Host = ProcessInternal(frame.Arguments.First()),
                            Property = "w"
                        },
                        Arguments = new List<JSExpression>
                        {
                            ProcessInternal(frame.Arguments.Last())
                        }
                    };
                case "stobj":
                    return new JSCallExpression
                    {
                        Function = new JSPropertyAccessExpression
                        {
                            Host = ProcessInternal(frame.Arguments.First()),
                            Property = "w"
                        },
                        Arguments = new List<JSExpression>
                        {
                            ProcessInternal(frame.Arguments.Last())
                        }
                    };
                case "stloc":
                    {
                        var id = "";
                        if (frame.Instruction.Data != null)
                            id = frame.Instruction.Data.ToString();

                        return new JSVariableDelcaration
                        {
                            Name = opc.Substring(2).Replace(".s", ".").Replace(".", "") + id,
                            Value = ProcessInternal(frame.Arguments.Single())
                        };
                    }
                case "stfld":
                    {
                        var target = ProcessInternal(frame.Arguments.First());
                        var fieldInfo = (FieldInfo)frame.Instruction.Data;
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
                                ProcessInternal(frame.Arguments.Last()));
                    }
                case "stsfld":
                    {
                        var field = (FieldInfo)frame.Instruction.Data;
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
                                ProcessInternal(frame.Arguments.Last()));
                    }
                case "sub":
                    return new JSBinaryExpression
                    {
                        Left = ProcessInternal(frame.Arguments.First()),
                        Right = ProcessInternal(frame.Arguments.Last()),
                        Operator = "-"
                    };
                case "throw":
                    return new JSThrowExpression
                    {
                        Expression = ProcessInternal(frame.Arguments.Single())
                    };
                case "unbox":
                    var ttype = (Type)frame.Instruction.Data;
                    var prop = ProcessInternal(frame.Arguments.Single());
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

        private JSExpression GetTypeAccessor(Type typeTok, JSExpression thisScope)
        {
            var idx = method.ReferencedTypes.IndexOf(typeTok);
            if (idx == -1)
                return GetTypeIdentifier(typeTok, this.method.ReflectionMethod, this.type.ReflectionType, thisScope);
            else
                return JSFactory.Identifier("t" + idx);
        }

        private JSExpression DereferenceIfNeeded(VariableInfo argument, JSExpression argExpression)
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
            if (type != null && type.IsValueType && !type.IsPrimitive)

                return new JSCallExpression
                {
                    Function = JSFactory.Identifier("clone_value"),
                    Arguments = { value }
                };
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
                                new JSStatement { Expression = new JSReturnExpression { Expression = ifier } }
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
