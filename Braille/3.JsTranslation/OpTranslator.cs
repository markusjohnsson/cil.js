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
    class OpTranslator : AbstractTranslator
    {
        private CilAssembly assembly;
        private CilType type;
        private CilMethod method;
        private List<CilAssembly> world;

        private HashSet<OpExpression> processedDups = new HashSet<OpExpression>();

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
                                Expression = new JSBinaryExpression
                                {
                                    Left = new JSIdentifier
                                    {
                                        Name = "__braille_pos__"
                                    },
                                    Operator = "=",
                                    Right = new JSNumberLiteral { Value = GetTargetPosition(node.Instruction), IsHex = true }
                                }
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
                                Expression = new JSBinaryExpression
                                {
                                    Left = new JSIdentifier
                                    {
                                        Name = "__braille_pos__"
                                    },
                                    Operator = "=",
                                    Right = new JSNumberLiteral { Value = GetTargetPosition(node.Instruction), IsHex = true }
                                }
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
                case "leave":
                case "leave.s":
                    yield return new JSBinaryExpression
                    {
                        Left = new JSIdentifier { Name = "__braille_pos__" },
                        Operator = "=",
                        Right = new JSNumberLiteral { Value = -1 }
                    }.ToStatement();
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
                            new JSStatement
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
                            },
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
                    yield return new JSStatement
                    {
                        Expression = new JSBinaryExpression
                        {
                            Left = new JSIdentifier
                            {
                                Name = "__braille_pos__"
                            },
                            Operator = "=",
                            Right = new JSBinaryExpression
                            {
                                Left = new JSNumberLiteral { Value = GetTargetPosition(node.Instruction), IsHex = true },
                                Operator = "+",
                                Right = new JSArrayLookupExpression
                                {
                                    Array = new JSIdentifier { Name = "__braille_jmp__" },
                                    Indexer = new JSIdentifier { Name = "__braille_switch_value__" }
                                }
                            }
                        }
                    };
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
                expression = new JSBinaryExpression
                {
                    Left = new JSIdentifier { Name = storeTo.Name },
                    Operator = "=",
                    Right = expression
                };
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
                    new JSStatement
                    {
                        Expression = new JSBinaryExpression
                        {
                            Left = new JSIdentifier
                            {
                                Name = "__braille_pos__"
                            },
                            Operator = "=",
                            Right = new JSNumberLiteral { Value = GetTargetPosition(frame.Instruction), IsHex = true }
                        }
                    },
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

            //if (frame.Instruction == null && frame.Handler != null )
            //{
            //    return new JSIdentifier { Name = "__braille_exception__" };
            //}

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
                        var boxed = new JSObjectLiteral
                        {
                            Properties = new Dictionary<string, JSExpression>
                            {
                                { 
                                    "boxed", 
                                    CloneValueType(value)
                                },
                                {
                                    "vtable",  JSIdentifier
                                        .Create(GetTypeIdentifier(d), "prototype", "vtable")
                                }
                            }
                        };

                        if (d.IsGenericParameter)
                        {
                            return new JSConditionalExpression
                            {
                                Condition = new JSPropertyAccessExpression(GetTypeIdentifier(d, this.method.ReflectionMethod), "IsValueType"),
                                TrueValue = boxed,
                                FalseValue = value
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

                        var replacement = CilMethod.GetReplacement(mi);

                        if (replacement != null && replacement.Kind == ReplacementKind.Raw)
                            return new JSIdentifier { Name = replacement.Replacement };

                        return new JSCallExpression
                        {
                            Function =
                                replacement != null
                                    ? JSIdentifier.Create(replacement.Replacement)
                                    : GetMethodAccessor(mi, this.method.ReflectionMethod),
                            Arguments = ProcessList(frame.Arguments).ToList()
                        };
                    }
                case "callvirt":
                    {
                        var mi = ((MethodBase)frame.Instruction.Data);

                        var arglist = ProcessList(frame.Arguments).ToList();

                        var replacement = CilMethod.GetReplacement(mi);

                        if (replacement != null && replacement.Kind == ReplacementKind.Raw)
                            return new JSIdentifier { Name = replacement.Replacement };

                        return new JSCallExpression
                        {
                            Function =
                                mi.DeclaringType.IsInterface
                                    ? GetInterfaceMethodAccessor(arglist.First(), mi) :
                                mi.IsVirtual
                                    ? GetVirtualMethodAccessor(arglist.First(), mi) :
                                replacement != null 
                                    ? JSIdentifier.Create(replacement.Replacement)
                                    : GetMethodAccessor(mi, this.method.ReflectionMethod),
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
                    {
                        // TODO: eliminate dups after analysis

                        var name = "_b_dup_" + frame.Instruction.Position;
                        if (processedDups.Add(frame))
                        {
                            return new JSVariableDelcaration
                            {
                                Name = name,
                                Value = ProcessInternal(frame.Arguments.Single())
                            };
                        }
                        else
                        {
                            return new JSIdentifier
                            {
                                Name = name
                            };
                        }
                    }
                case "endfinally":
                    return new JSEmptyExpression();
                case "initobj":
                    return new JSCallExpression
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
                                Constructor = GetTypeIdentifier((Type)frame.Instruction.Data, this.method.ReflectionMethod)
                            }
                        }
                    };
                case "isinst":
                    {
                        var targetType = (Type)frame.Instruction.Data;
                        return new JSCallExpression
                        {
                            Function = new JSPropertyAccessExpression { Host = GetTypeIdentifier(targetType, this.method.ReflectionMethod), Property = "IsInst" },
                            Arguments = new List<JSExpression> { ProcessInternal(frame.Arguments.Single()) }
                        };
                        
                    }
                case "ldarg":
                    {
                        var id = "";
                        if (frame.Instruction.Data != null)
                            id = frame.Instruction.Data.ToString();

                        return new JSIdentifier
                        {
                            Name = "__braille_args__[" + opc.Replace(".s", ".").Replace(".", "").Substring("ldarg".Length) + id + "]"
                        };
                    }
                case "ldarga":
                    {
                        var id = "";
                        if (frame.Instruction.Data != null)
                            id = frame.Instruction.Data.ToString();

                        return WrapInReaderWriter(new JSIdentifier
                        {
                            Name = "__braille_args__[" + opc.Replace(".s", ".").Replace(".", "").Substring("ldarga".Length) + id + "]"
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
                                Value = (int)(byte)frame.Instruction.Data
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
                case "ldelema":
                    return new JSArrayLookupExpression
                    {
                        Array = ProcessInternal(frame.Arguments.First()),
                        Indexer = ProcessInternal(frame.Arguments.Last())
                    };
                case "ldfld":
                    {
                        var fieldInfo = (FieldInfo)frame.Instruction.Data;
                        var arg = ProcessInternal(frame.Arguments.Single());

                        var source = fieldInfo.DeclaringType.IsValueType ?
                            new JSCallExpression { Function = new JSPropertyAccessExpression { Host = arg, Property = "r" } } :
                            arg;

                        return new JSPropertyAccessExpression
                        {
                            Host = source,
                            Property = GetTranslatedFieldName(type, fieldInfo)
                        };
                    }
                case "ldind":
                    {
                        return new JSPropertyAccessExpression
                        {
                            Host = ProcessInternal(frame.Arguments.Single()),
                            Property = "boxed"
                        };
                        //return new JSCallExpression
                        //{
                        //    Function = new JSPropertyAccessExpression
                        //    {
                        //        Host = ProcessInternal(frame.Arguments.Single()),
                        //        Property = "r"
                        //    }
                        //};
                        //Debugger.Break();
                        //return new JSEmptyExpression();
                    }
                case "ldftn":
                    var method = (MethodBase)frame.Instruction.Data;
                    return GetMethodAccessor(method, this.method.ReflectionMethod);
                case "ldlen":
                    return new JSPropertyAccessExpression
                    {
                        Host = ProcessInternal(frame.Arguments.Single()),
                        Property = "length"
                    };
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
                            Host = GetTypeIdentifier(field.DeclaringType, this.method.ReflectionMethod),
                            Property = (string)field.Name
                        };
                    }
                case "ldflda":
                    {
                        var field = (FieldInfo)frame.Instruction.Data;
                        return WrapInReaderWriter(new JSArrayLookupExpression
                        {
                            Array = GetTypeIdentifier(field.DeclaringType, this.method.ReflectionMethod),
                            Indexer = new JSStringLiteral
                            {
                                Value = (string)field.Name
                            }
                        });
                    }
                case "ldstr":
                    return new JSCallExpression
                    {
                        Function = JSIdentifier.Create("new_string"),
                        Arguments = 
                        { 
                            new JSStringLiteral
                            {
                                Value = (string)frame.Instruction.Data
                            }
                        }
                    };
                case "ldtoken":
                    return new JSNullLiteral { };
                case "mul":
                    return new JSBinaryExpression
                    {
                        Left = ProcessInternal(frame.Arguments.First()),
                        Right = ProcessInternal(frame.Arguments.Last()),
                        Operator = "*"
                    };
                case "newarr":
                    return new JSArrayLiteral { Values = new JSExpression[0] };
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
                                                Constructor = GetTypeIdentifier(ctor.DeclaringType, this.method.ReflectionMethod)
                                            }
                                        }
                                    },
                                    new JSStatement 
                                    {
                                        Expression = new JSCallExpression
                                        {
                                            Function = GetMethodAccessor(ctor, this.method.ReflectionMethod),
                                            Arguments = argList.StartWith(new JSIdentifier { Name  = "result" }).ToList()
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
                    return new JSBinaryExpression
                    {
                        Left = new JSArrayLookupExpression
                        {
                            Array = ProcessInternal(frame.Arguments.First()),
                            Indexer = ProcessInternal(frame.Arguments.Skip(1).First())
                        },
                        Operator = "=",
                        Right = ProcessInternal(frame.Arguments.Last())
                    };
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

                        return new JSBinaryExpression
                        {
                            Left = new JSPropertyAccessExpression
                            {
                                Host = host,
                                Property = GetTranslatedFieldName(type, fieldInfo)
                            },
                            Right = ProcessInternal(frame.Arguments.Last()),
                            Operator = "="
                        };
                    }
                case "stsfld":
                    {
                        var field = (FieldInfo)frame.Instruction.Data;
                        return new JSBinaryExpression
                        {
                            Left = new JSArrayLookupExpression
                            {
                                Array = GetTypeIdentifier(field.DeclaringType, this.method.ReflectionMethod),
                                Indexer = new JSStringLiteral
                                {
                                    Value = (string)field.Name
                                }
                            },
                            Right = ProcessInternal(frame.Arguments.Last()),
                            Operator = "="
                        };
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
                    var prop = ProcessInternal(frame.Arguments.Single());
                    if (opc == "unbox.any")
                        return new JSBinaryExpression
                        {
                            Left = new JSPropertyAccessExpression
                            {
                                Host = prop,
                                Property = "boxed"
                            },
                            Operator = "||",
                            Right = prop
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

        private static JSCallExpression CloneValueType(JSExpression value)
        {
            return new JSCallExpression
            {
                Function = JSIdentifier.Create("cloneValue"),
                Arguments = { value }
            };
        }

        private JSExpression GetInterfaceMethodAccessor(JSExpression thisArg, MethodBase mi)
        {
            return new JSPropertyAccessExpression
            {
                Host = new JSPropertyAccessExpression
                {
                    Host = thisArg,
                    Property = mi.DeclaringType.FullName
                },
                Property = GetMethodIdentifier(mi)
            };
        }

        private JSPropertyAccessExpression GetVirtualMethodAccessor(JSExpression thisArg, MethodBase mi)
        {
            return new JSPropertyAccessExpression
            {
                Host = new JSPropertyAccessExpression
                {
                    Host = thisArg,
                    Property = "vtable"
                },
                Property = GetMethodIdentifier(mi)
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
                                new JSStatement 
                                { 
                                    Expression = new JSBinaryExpression 
                                    { 
                                        Left = ifier, 
                                        Operator = "=", 
                                        Right = new JSArrayLookupExpression {
                                            Array = new JSIdentifier 
                                            { 
                                                Name = "arguments" 
                                            }, 
                                            Indexer = new JSNumberLiteral { 
                                                Value = 0 
                                            } 
                                        }
                                    }
                                }
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
                var element = ProcessInternal(i);
                if (i.ResultType != null && i.ResultType.IsValueType)
                    yield return CloneValueType(element);
                else
                    yield return element;
            }
        }

    }
}
