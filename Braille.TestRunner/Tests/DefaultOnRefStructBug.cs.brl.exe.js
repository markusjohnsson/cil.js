var asm1;(function (asm)
{
    asm.FullName = "DefaultOnRefStructBug.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Void A`1.Reset()*/
    asm.x600000a = function Reset(arg0)
    {
        var t0;
        var __pos__;
        t0 = ((((arguments)[0].r)().constructor.GenericArguments)["asm1.t2000006"])[0];
        __pos__ = 0x0;
        /* IL_00: nop  DefaultOnRefStructBug.cs:7:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldflda T X */
        /* IL_08: initobj T */
        arg0.r().X = ((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null));
        /* IL_0D: ret  DefaultOnRefStructBug.cs:9:5*/
        return ;
    };;
    /*  B..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000c_init = function ()
    {
        ((asm1)["A`1"]((asm0)["System.Int32"]()).init)();
        (asm1.B().init)();
        ((asm1)["A`1"](asm1.B()).init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        BLR.init_base_types();
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var loc0;
        var loc1;
        var st_0F;
        var st_13;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        t0 = (asm0)["System.Int32"]();
        t1 = (asm1)["A`1"](t0);
        t2 = asm1.B();
        t3 = (asm1)["A`1"](t2);
        loc0 = new ((asm1)["A`1"]((asm0)["System.Int32"]()))();
        loc1 = new ((asm1)["A`1"](asm1.B()))();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  DefaultOnRefStructBug.cs:17:5*/
                
                /* IL_01: ldloca.s 0 */
                /* IL_04: initobj A`1[System.Int32] */
                loc0 = new t1();
                /* IL_09: ldloca.s 0 */
                /* IL_0B: ldc.i4.s 123 */
                /* IL_0D: stfld IKVM.Reflection.GenericFieldInstance */
                loc0.X = (123|0);
                /* IL_12: ldloca.s 0 */
                /* IL_14: ldfld IKVM.Reflection.GenericFieldInstance */
                /* IL_19: box System.Int32 */
                /* IL_1E: call Void Log(System.Object) */
                asm1.x6000001({
                        'boxed': loc0.X,
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    });
                /* IL_23: nop  */
                
                /* IL_24: ldloca.s 0 */
                /* IL_26: call Void Reset() */
                asm1.x600000a({
                        'w': function (v)
                        {
                            loc0 = v;
                        },
                        'r': function ()
                        {
                            return loc0;
                        }
                    });
                /* IL_2B: nop  */
                
                /* IL_2C: ldloca.s 0 */
                /* IL_2E: ldfld IKVM.Reflection.GenericFieldInstance */
                /* IL_33: box System.Int32 */
                /* IL_38: call Void Log(System.Object) */
                asm1.x6000001({
                        'boxed': loc0.X,
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    });
                /* IL_3D: nop  */
                
                /* IL_3E: ldloca.s 1 */
                /* IL_41: initobj A`1[B] */
                loc1 = new t3();
                /* IL_46: ldloca.s 1 */
                /* IL_48: newobj Void .ctor() */
                /* IL_4D: stfld IKVM.Reflection.GenericFieldInstance */
                loc1.X = BLR.newobj(t2,asm1.x600000b,[null]);
                /* IL_52: ldloca.s 1 */
                /* IL_54: ldfld IKVM.Reflection.GenericFieldInstance */
                /* IL_59: brfalse.s IL_62 */
                
                if ((!(loc1.X))){
                    __pos__ = 0x62;
                    continue;
                }
                /* IL_5B: ldstr false */
                st_0F = BLR.new_string("false");
                /* IL_60: br.s IL_67 */
                __pos__ = 0x67;
                continue;
                case 0x62:
                /* IL_62: ldstr true */
                st_0F = BLR.new_string("true");
                case 0x67:
                /* IL_67: nop  */
                
                /* IL_68: call Void Log(System.Object) */
                asm1.x6000001(st_0F);
                /* IL_6D: nop  */
                
                /* IL_6E: ldloca.s 1 */
                /* IL_70: call Void Reset() */
                asm1.x600000a({
                        'w': function (v)
                        {
                            loc1 = v;
                        },
                        'r': function ()
                        {
                            return loc1;
                        }
                    });
                /* IL_75: nop  */
                
                /* IL_76: ldloca.s 1 */
                /* IL_78: ldfld IKVM.Reflection.GenericFieldInstance */
                /* IL_7D: brfalse.s IL_86 */
                
                if ((!(loc1.X))){
                    __pos__ = 0x86;
                    continue;
                }
                /* IL_7F: ldstr false */
                st_13 = BLR.new_string("false");
                /* IL_84: br.s IL_8B */
                __pos__ = 0x8B;
                continue;
                case 0x86:
                /* IL_86: ldstr true */
                st_13 = BLR.new_string("true");
                case 0x8B:
                /* IL_8B: nop  */
                
                /* IL_8C: call Void Log(System.Object) */
                asm1.x6000001(st_13);
                /* IL_91: nop  */
                
                /* IL_92: ret  DefaultOnRefStructBug.cs:29:5*/
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
            this.GenericTypeMetadataName = "asm1.t2000002";
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
                    [asm1, "x600000a", "Reset"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm1.t2000006");
            (this.GenericArguments)["asm1.t2000006"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000006<" + (T.GenericTypeMetadataName + ">"));
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
            BLR.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
