var asm1; (function (asm)
{
    asm.FullName = "DefaultOnRefStructBug.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static Void Log(System.Object)*/
    asm.x6000001 = braille_test_log;;
    /* Void .ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void Reset()*/
    asm.x600000c = function Reset(arg0)
    {
        var t0;
        t0 = ((((arguments)[0].r)().constructor.GenericArguments)["asm1.t2000007"])[0];
        /* IL_00: ldarg.0 */
        /* IL_01: ldflda T X*/
        /* IL_07: initobj T*/
        ({
            'w': function ()
            {
                arg0.r().X = (arguments)[0];
            },
            'r': function ()
            {
                return arg0.r().X;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_0C: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x600000e_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        ((asm0)["System.Int32"]().init)();
        ((asm1)["A`1"]((asm0)["System.Int32"]()).init)();
        (asm1.B().init)();
        ((asm1)["A`1"](asm1.B()).init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var loc0;
        var loc1;
        var st_0F;
        var st_13;
        var __pos_0__;
        t0 = (asm0)["System.ValueType"]();
        t1 = (asm0)["System.Int32"]();
        t2 = (asm1)["A`1"]((asm0)["System.Int32"]());
        t3 = asm1.B();
        t4 = (asm1)["A`1"](asm1.B());
        loc0 = new ((asm1)["A`1"]((asm0)["System.Int32"]()))();
        loc1 = new ((asm1)["A`1"](asm1.B()))();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldloca.s 0*/
                /* IL_03: initobj A`1[System.Int32]*/
                ({
                    'w': function ()
                    {
                        loc0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc0;
                    }
                }.w)(new t2());
                /* IL_08: ldloca.s 0*/
                /* IL_0A: ldc.i4.s 123*/
                /* IL_0C: stfld IKVM.Reflection.GenericFieldInstance*/
                ({
                    'w': function ()
                    {
                        loc0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc0;
                    }
                }.r)().X = (123|0);
                /* IL_11: ldloca.s 0*/
                /* IL_13: ldfld IKVM.Reflection.GenericFieldInstance*/
                /* IL_18: box System.Int32*/
                /* IL_1D: call Void Log(System.Object)*/
                asm1.x6000001({
                        'boxed': ({
                            'w': function ()
                            {
                                loc0 = (arguments)[0];
                            },
                            'r': function ()
                            {
                                return loc0;
                            }
                        }.r)().X,
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    });
                /* IL_22: ldloca.s 0*/
                /* IL_24: call Void Reset()*/
                asm1.x600000c({
                        'w': function ()
                        {
                            loc0 = (arguments)[0];
                        },
                        'r': function ()
                        {
                            return loc0;
                        }
                    });
                /* IL_29: ldloca.s 0*/
                /* IL_2B: ldfld IKVM.Reflection.GenericFieldInstance*/
                /* IL_30: box System.Int32*/
                /* IL_35: call Void Log(System.Object)*/
                asm1.x6000001({
                        'boxed': ({
                            'w': function ()
                            {
                                loc0 = (arguments)[0];
                            },
                            'r': function ()
                            {
                                return loc0;
                            }
                        }.r)().X,
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    });
                /* IL_3A: ldloca.s 1*/
                /* IL_3D: initobj A`1[B]*/
                ({
                    'w': function ()
                    {
                        loc1 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc1;
                    }
                }.w)(new t4());
                /* IL_42: ldloca.s 1*/
                /* IL_44: newobj Void .ctor()*/
                /* IL_49: stfld IKVM.Reflection.GenericFieldInstance*/
                ({
                    'w': function ()
                    {
                        loc1 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc1;
                    }
                }.r)().X = BLR.newobj(t3,asm1.x600000d,[null]);
                /* IL_4E: ldloca.s 1*/
                /* IL_50: ldfld IKVM.Reflection.GenericFieldInstance*/
                /* IL_55: brfalse.s IL_5E*/
                
                if ((!(({
                    'w': function ()
                    {
                        loc1 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc1;
                    }
                }.r)().X))){
                    __pos_0__ = 0x5E;
                    continue;
                }
                /* IL_57: ldstr false*/
                st_0F = BLR.new_string("false");
                /* IL_5C: br.s IL_63*/
                __pos_0__ = 0x63;
                continue;
                case 0x5E:
                /* IL_5E: ldstr true*/
                st_0F = BLR.new_string("true");
                case 0x63:
                /* IL_63: call Void Log(System.Object)*/
                asm1.x6000001(st_0F);
                /* IL_68: ldloca.s 1*/
                /* IL_6A: call Void Reset()*/
                asm1.x600000c({
                        'w': function ()
                        {
                            loc1 = (arguments)[0];
                        },
                        'r': function ()
                        {
                            return loc1;
                        }
                    });
                /* IL_6F: ldloca.s 1*/
                /* IL_71: ldfld IKVM.Reflection.GenericFieldInstance*/
                /* IL_76: brfalse.s IL_7F*/
                
                if ((!(({
                    'w': function ()
                    {
                        loc1 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc1;
                    }
                }.r)().X))){
                    __pos_0__ = 0x7F;
                    continue;
                }
                /* IL_78: ldstr false*/
                st_13 = BLR.new_string("false");
                /* IL_7D: br.s IL_84*/
                __pos_0__ = 0x84;
                continue;
                case 0x7F:
                /* IL_7F: ldstr true*/
                st_13 = BLR.new_string("true");
                case 0x84:
                /* IL_84: call Void Log(System.Object)*/
                asm1.x6000001(st_13);
                /* IL_89: ret */
                return ;
            }
        }
    };
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.TestLog = BLR.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000002");
            this.Interfaces = [];
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.TestHelper = BLR.declare_type(
        "TestHelper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestHelper",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.Interfaces = [];
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["A`1"] = BLR.declare_type(
        "A_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A`1",true,false,false,true,false,[],[
                    [asm1, "x600000c", "Reset"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.Interfaces = [];
            (this.GenericArguments)["asm1.t2000007"] = [T];
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.X = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
        });
    asm.B = BLR.declare_type(
        "B",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.Interfaces = [];
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.Program = BLR.declare_type(
        "Program",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.Interfaces = [];
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
