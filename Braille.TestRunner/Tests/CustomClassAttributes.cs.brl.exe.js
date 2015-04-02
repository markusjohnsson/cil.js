var asm1;(function (asm)
{
    asm.FullName = "CustomClassAttributes.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /*  A..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm0.x6000048(arg0);
        /* IL_06: ret  */
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
    /* System.String A2.get_P()*/
    asm.x600000c = function get_P(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld String <P>k__BackingField */
        /* IL_06: stloc.0  */
        loc0 = (arg0)["A2<P>k__BackingField"];
        /* IL_09: ldloc.0  */
        /* IL_0A: ret  */
        return loc0;
    };;
    /* System.Void A2.set_P(String)*/
    asm.x600000d = function set_P(arg0, arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: stfld String <P>k__BackingField */
        (arg0)["A2<P>k__BackingField"] = arg1;
        /* IL_07: ret  */
        return ;
    };;
    /*  A2..ctor(String)*/
    asm.x600000e = function _ctor(arg0, arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm0.x6000048(arg0);
        /* IL_06: nop  */
        /* IL_07: nop  CustomClassAttributes.cs:10:25*/
        /* IL_08: ldarg.0  */
        /* IL_09: ldarg.1  */
        /* IL_0A: call Void set_P(System.String) */
        asm1.x600000d(arg0,arg1);
        /* IL_0F: nop  */
        /* IL_10: nop  CustomClassAttributes.cs:10:34*/
        /* IL_11: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  D..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main(String[])*/
    asm.x6000011_init = function ()
    {
        (asm1.B().init)();
        (asm1.A().init)();
        (asm1.C().init)();
        (asm1.A2().init)();
        (asm1.D().init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function (arg0)
    {
        BLR.init_base_types();
        asm.x6000011_init.apply(this,arguments);
        return asm.x6000011_.apply(this,arguments);
    };;
    asm.x6000011_ = function Main(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        var loc4;
        var loc2;
        var loc3;
        t0 = asm1.B();
        t1 = (asm0)["System.Int32"]();
        t2 = asm1.A();
        t3 = (asm0)["System.Boolean"]();
        t4 = asm1.C();
        t5 = asm1.A2();
        t6 = asm1.D();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  CustomClassAttributes.cs:21:5*/
                
                /* IL_01: ldtoken B */
                /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_0B: ldc.i4.1  */
                /* IL_0C: callvirt Object[] GetCustomAttributes(System.Boolean) */
                /* IL_11: stloc.0  */
                loc0 = (((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x600003a"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)),(1|0));
                /* IL_12: ldloc.0  */
                /* IL_13: ldlen  */
                /* IL_14: conv.i4  */
                /* IL_15: box System.Int32 */
                /* IL_1A: call Void Log(System.Object) */
                asm1.x6000001({
                        'boxed': loc0.jsarr.length | (0|0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    });
                /* IL_1F: nop  */
                
                /* IL_20: ldc.i4.0  */
                /* IL_21: stloc.1  */
                loc1 = (0|0);
                /* IL_22: br.s IL_5F CustomClassAttributes.cs:16707566:0*/
                __pos__ = 0x5F;
                continue;
                case 0x24:
                /* IL_24: nop  CustomClassAttributes.cs:25:9*/
                
                /* IL_25: ldtoken A */
                /* IL_2A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_2F: ldloc.0  */
                /* IL_30: ldloc.1  */
                /* IL_31: ldelem.ref  */
                /* IL_32: callvirt Type GetType() */
                /* IL_37: callvirt Boolean Equals(System.Object) */
                /* IL_3C: box System.Boolean */
                /* IL_41: call Void Log(System.Object) */
                asm1.x6000001({
                        'boxed': (((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t2)).vtable)["asm0.x6000008"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t2)),asm0.x600000a(BLR.ldelem_ref(loc0,loc1))),
                        'type': t3,
                        'vtable': t3.prototype.vtable,
                        'ifacemap': t3.prototype.ifacemap
                    });
                /* IL_46: nop  */
                
                /* IL_47: ldloc.0  */
                /* IL_48: ldloc.1  */
                /* IL_49: ldelem.ref  */
                /* IL_4A: callvirt Type GetType() */
                /* IL_4F: callvirt String get_FullName() */
                /* IL_54: call Void Log(System.Object) */
                asm1.x6000001((((asm0.x600000a(BLR.ldelem_ref(loc0,loc1)).vtable)["asm0.x60000e0"])())(asm0.x600000a(BLR.ldelem_ref(loc0,loc1))));
                /* IL_59: nop  */
                
                /* IL_5A: nop  CustomClassAttributes.cs:28:9*/
                
                /* IL_5B: ldloc.1  */
                /* IL_5C: ldc.i4.1  */
                /* IL_5D: add  */
                /* IL_5E: stloc.1  */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x5F:
                /* IL_5F: ldloc.1  */
                /* IL_60: ldloc.0  */
                /* IL_61: ldlen  */
                /* IL_62: conv.i4  */
                /* IL_64: clt  */
                /* IL_65: stloc.s 4 */
                loc4 = ((loc1 < (loc0.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_67: ldloc.s 4 */
                /* IL_69: brtrue.s IL_24 */
                
                if (loc4){
                    __pos__ = 0x24;
                    continue;
                }
                /* IL_6B: ldtoken C */
                /* IL_70: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_75: ldc.i4.1  */
                /* IL_76: callvirt Object[] GetCustomAttributes(System.Boolean) */
                /* IL_7B: stloc.2  */
                loc2 = (((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t4)).vtable)["asm0.x600003a"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t4)),(1|0));
                /* IL_7C: ldloc.2  */
                /* IL_7D: ldc.i4.0  */
                /* IL_7E: ldelem.ref  */
                /* IL_7F: castclass A2 */
                /* IL_84: callvirt String get_P() */
                /* IL_89: call Void Log(System.Object) */
                asm1.x6000001(asm1.x600000c(BLR.cast_class(BLR.ldelem_ref(loc2,(0|0)),t5)));
                /* IL_8E: nop  */
                
                /* IL_8F: ldtoken D */
                /* IL_94: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_99: ldc.i4.1  */
                /* IL_9A: callvirt Object[] GetCustomAttributes(System.Boolean) */
                /* IL_9F: stloc.3  */
                loc3 = (((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t6)).vtable)["asm0.x600003a"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t6)),(1|0));
                /* IL_A0: ldloc.3  */
                /* IL_A1: ldlen  */
                /* IL_A2: conv.i4  */
                /* IL_A3: box System.Int32 */
                /* IL_A8: call Void Log(System.Object) */
                asm1.x6000001({
                        'boxed': loc3.jsarr.length | (0|0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    });
                /* IL_AD: nop  */
                
                /* IL_AE: ret  CustomClassAttributes.cs:35:5*/
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000012 = function _ctor(arg0)
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
    asm.A = BLR.declare_type(
        "A",
        [],
        function ()
        {
            return new ((asm0)["System.Attribute"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
            BLR.init_type(this,asm,"B",false,false,false,false,false,[
                    [
                        asm1.A(),
                        asm1.x600000a
                    ]
                ],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.A2 = BLR.declare_type(
        "A2",
        [],
        function ()
        {
            return new ((asm0)["System.Attribute"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A2",false,false,false,false,false,[],[
                    [asm1, "x600000c", "get_P"],
                    [asm1, "x600000d", "set_P"]
                ],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            (this.prototype)["A2<P>k__BackingField"] = null;
        });
    asm.C = BLR.declare_type(
        "C",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"C",false,false,false,false,false,[
                    [
                        asm1.A2(),
                        asm1.x600000e,
                        [
                            BLR.new_string("xyz")
                        ]
                    ]
                ],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.D = BLR.declare_type(
        "D",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000b");
            this.GenericTypeMetadataName = "asm1.t200000b";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
