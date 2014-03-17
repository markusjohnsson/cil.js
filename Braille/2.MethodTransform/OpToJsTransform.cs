using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Braille.MethodTransform
{
    class OpToJsTransform
    {
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
                    yield return CreateComparisonBranch(node, "=");
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
                                    Operator = "==",
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
                    Operator = "==="
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
                            Operator = op,
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

        // uh-oh, I can has state?
        HashSet<OpExpression> processedDups = new HashSet<OpExpression>();

        private JSExpression ProcessInternal(OpNode node)
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
                    return WrapInStore(
                        frame.StoreLocations,
                        new JSBinaryExpression
                        {
                            Left = ProcessInternal(frame.Arguments.First()),
                            Right = ProcessInternal(frame.Arguments.Last()),
                            Operator = "+"
                        });
                case "and":
                    return new JSBinaryExpression
                    {
                        Left = ProcessInternal(frame.Arguments.First()),
                        Right = ProcessInternal(frame.Arguments.Last()),
                        Operator = "&"
                    };
                case "box":
                    return new JSObjectLiteral
                    {
                        Properties = new Dictionary<string, JSExpression>
                        {
                            { 
                                "boxed", ProcessInternal(frame.Arguments.Single()) 
                            }
                        }
                    };
                case "call":
                    {
                        var mi = ((MethodBase)frame.Instruction.Data);

                        JSExpression thisArg;

                        return new JSCallExpression
                        {
                            Function = GetMethodAccessor(mi),
                            Arguments = ProcessList(frame.Arguments)
                        };
                    }
                case "callvirt":
                    {
                        var mi = ((MethodBase)frame.Instruction.Data);
                        return new JSCallExpression
                        {
                            Function = GetVirtualMethodAccessor(mi),
                            Arguments = ProcessList(frame.Arguments)
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
                case "isinst":
                    return new JSBinaryExpression
                    {
                        Left = ProcessInternal(frame.Arguments.Single()),
                        Operator = "instanceof",
                        Right = CreateTypeIdentifier((Type)frame.Instruction.Data)
                    };
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
                    return new JSPropertyAccessExpression
                    {
                        Host = ProcessInternal(frame.Arguments.Single()),
                        Property = ((FieldInfo)frame.Instruction.Data).Name
                    };
                case "ldftn":
                    var method = (MethodBase)frame.Instruction.Data;
                    return new JSPropertyAccessExpression
                    {
                        Host = CreateTypeIdentifier(method.DeclaringType),
                        Property = method.Name
                    };
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
                            Host = CreateTypeIdentifier(field.DeclaringType),
                            Property = (string)field.Name
                        };
                    }
                case "ldflda":
                    {
                        var field = (FieldInfo)frame.Instruction.Data;
                        return WrapInReaderWriter(new JSArrayLookupExpression
                        {
                            Array = CreateTypeIdentifier(field.DeclaringType),
                            Indexer = new JSStringLiteral
                            {
                                Value = (string)field.Name
                            }
                        });
                    }
                case "ldstr":
                    return new JSStringLiteral
                    {
                        Value = (string)frame.Instruction.Data
                    };
                case "ldtoken":
                    return new JSNullLiteral { };
                case "leave":
                    return new JSBreakExpression();
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

                        return new JSNewExpression
                        {
                            Constructor = CreateTypeIdentifier(ctor.DeclaringType),
                            Arguments = ProcessList(frame.Arguments)
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
                            Property = "write"
                        },
                        Arguments = new[] 
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
                    return new JSBinaryExpression
                    {
                        Left = new JSArrayLookupExpression
                        {
                            Array = ProcessInternal(frame.Arguments.First()),
                            Indexer = new JSStringLiteral
                            {
                                Value = (string)((FieldInfo)frame.Instruction.Data).Name
                            }
                        },
                        Right = ProcessInternal(frame.Arguments.Last()),
                        Operator = "="
                    };
                case "stsfld":
                    {
                        var field = (FieldInfo)frame.Instruction.Data;
                        return new JSBinaryExpression
                        {
                            Left = new JSArrayLookupExpression
                            {
                                Array = CreateTypeIdentifier(field.DeclaringType),
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
                    return new JSPropertyAccessExpression
                    {
                        Host = ProcessInternal(frame.Arguments.Single()),
                        Property = "boxed"
                    };
                default:
                    return new JSLineComment
                    {
                        Text = opc + ": opcode not implmented"
                    };
            }
        }

        private JSPropertyAccessExpression GetVirtualMethodAccessor(MethodBase mi)
        {
            return new JSPropertyAccessExpression
            {
                Host = CreateTypeIdentifier(mi.DeclaringType),
                Property = mi.Name
            };
        }

        private JSExpression GetMethodAccessor(MethodBase mi)
        {
            var attribs = mi.GetCustomAttributes(false);
            if (attribs.Length != 0)
            {
                var importAttrib = attribs
                    .Where(a => a.GetType().Name == "JsImportAttribute")
                    .LastOrDefault();

                if (importAttrib != null)
                {
                    var replacement = (string)importAttrib
                        .GetType()
                        .GetProperty("Function")
                        .GetValue(importAttrib, null);

                    return new JSIdentifier
                    {
                        Name = replacement
                    };
                }
            }

            return new JSPropertyAccessExpression
            {
                Host = GetAssemblyIdentifier(mi.DeclaringType),
                Property = "x" + mi.MetadataToken.ToString("x")
            };
        }

        List<string> assemblies = new List<string>();

        private JSExpression CreateTypeIdentifier(Type type)
        {
            return new JSPropertyAccessExpression
            {
                Host = GetAssemblyIdentifier(type),
                Property = type.Namespace + "." + type.Name
            };
        }

        private JSIdentifier GetAssemblyIdentifier(Type type)
        {
            //var idx = assemblies.IndexOf(type.Assembly.FullName);

            //if (idx == -1)
            //{
            //    idx = assemblies.Count;
            //    assemblies.Add(type.Assembly.FullName);
            //}

            JSIdentifier asmId = new JSIdentifier { Name = "asm"  };
            return asmId;
        }

        private static JSObjectLiteral WrapInReaderWriter(JSExpression ifier)
        {
            return new JSObjectLiteral
            {
                Properties = new Dictionary<string, JSExpression>
                {
                    { 
                        "write", 
                        new JSFunctionDelcaration 
                        { 
                            Body = new JSStatement [] 
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
                        "read", 
                        new JSFunctionDelcaration 
                        { 
                            Body = new JSStatement [] 
                            { 
                                new JSStatement { Expression = new JSReturnExpression { Expression = ifier } }
                            }
                        }
                    }
                }
            };
        }

        private IEnumerable<JSExpression> ProcessList(IEnumerable<OpNode> list)
        {
            foreach (var i in list)
                yield return ProcessInternal(i);
        }

        //public IEnumerable<JSStatement> GetExpressionAsComment(OpExpression expr, int lvl = 0)
        //{
        //    yield return new JSStatement
        //    {
        //        Expression = new JSLineComment
        //        {
        //            Text = string.Format("{0:x}\t{2}{1}", expr.Instruction.Position, expr.Instruction.ToString(), new string(' ', lvl))
        //        }
        //    };

        //    foreach (var x in expr.Arguments)
        //    {
        //        if (x.Instruction == null)
        //            continue;

        //        foreach (var c in GetExpressionAsComment(x, lvl+1))
        //        {
        //            yield return c;
        //        }
        //    }
        //}
    }
}
