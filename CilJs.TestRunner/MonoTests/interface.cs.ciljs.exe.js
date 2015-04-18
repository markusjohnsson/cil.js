var asm1;(function (asm)
{
    asm.FullName = "interface.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
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
    /* System.Double Obj.Area()*/
    asm.x600000b = function Area(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  interface.cs:12:9*/
        /* IL_01: ldc.r8 0 */
        /* IL_0A: stloc.0  */
        loc0 = (+0);
        /* IL_0D: ldloc.0  */
        /* IL_0E: ret  */
        return loc0;
    };;
    /*  Obj..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Double Rect.Area()*/
    asm.x600000e = function Area(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  interface.cs:27:9*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldfld Int32 w */
        /* IL_07: conv.r8  */
        /* IL_08: ldarg.0  */
        /* IL_09: ldfld Int32 h */
        /* IL_0E: conv.r8  */
        /* IL_0F: mul  */
        /* IL_10: stloc.0  */
        loc0 = arg0.ObjRectw * arg0.ObjRecth;
        /* IL_13: ldloc.0  */
        /* IL_14: ret  */
        return loc0;
    };;
    /*  Rect..ctor(Int32,Int32,Int32,Int32)*/
    asm.x600000d = function _ctor(arg0, arg1, arg2, arg3, arg4)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x600000c(arg0);
        /* IL_06: nop  */
        /* IL_07: nop  interface.cs:20:9*/
        /* IL_08: ldarg.0  */
        /* IL_09: ldarg.1  */
        /* IL_0A: stfld Int32 x */
        arg0.ObjRectx = arg1;
        /* IL_0F: ldarg.0  */
        /* IL_10: ldarg.2  */
        /* IL_11: stfld Int32 y */
        arg0.ObjRecty = arg2;
        /* IL_16: ldarg.0  */
        /* IL_17: ldarg.3  */
        /* IL_18: stfld Int32 w */
        arg0.ObjRectw = arg3;
        /* IL_1D: ldarg.0  */
        /* IL_1E: ldarg.s 4 */
        /* IL_20: stfld Int32 h */
        arg0.ObjRecth = arg4;
        /* IL_25: nop  interface.cs:25:9*/
        /* IL_26: ret  */
        return ;
    };;
    /* System.Double Circle.Area()*/
    asm.x6000010 = function Area(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  interface.cs:41:9*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldfld Int32 r */
        /* IL_07: ldarg.0  */
        /* IL_08: ldfld Int32 r */
        /* IL_0D: mul  */
        /* IL_0E: conv.r8  */
        /* IL_0F: ldc.r8 3,14159265359 */
        /* IL_18: mul  */
        /* IL_19: stloc.0  */
        loc0 = (arg0.ObjCircler * arg0.ObjCircler) * (+3.14159265359);
        /* IL_1C: ldloc.0  */
        /* IL_1D: ret  */
        return loc0;
    };;
    /*  Circle..ctor(Int32,Int32,Int32)*/
    asm.x600000f = function _ctor(arg0, arg1, arg2, arg3)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x600000c(arg0);
        /* IL_06: nop  */
        /* IL_07: nop  interface.cs:35:9*/
        /* IL_08: ldarg.0  */
        /* IL_09: ldarg.1  */
        /* IL_0A: stfld Int32 x */
        arg0.ObjCirclex = arg1;
        /* IL_0F: ldarg.0  */
        /* IL_10: ldarg.2  */
        /* IL_11: stfld Int32 y */
        arg0.ObjCircley = arg2;
        /* IL_16: ldarg.0  */
        /* IL_17: ldarg.3  */
        /* IL_18: stfld Int32 r */
        arg0.ObjCircler = arg3;
        /* IL_1D: nop  interface.cs:39:9*/
        /* IL_1E: ret  */
        return ;
    };;
    /* static System.Int32 Test.Main()*/
    asm.x6000011_init = function ()
    {
        ((asm1)["Obj.Rect"]().init)();
        ((asm1)["Obj.Circle"]().init)();
        ((asm1)["Obj.Measurable"]().init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function ()
    {
        CILJS.init_base_types();
        asm.x6000011_init.apply(this,arguments);
        return asm.x6000011_.apply(this,arguments);
    };;
    asm.x6000011_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc4;
        var loc3;
        t0 = (asm1)["Obj.Rect"]();
        t1 = (asm1)["Obj.Circle"]();
        t2 = (asm1)["Obj.Measurable"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  interface.cs:48:9*/
                
                /* IL_01: ldc.i4.0  */
                /* IL_02: ldc.i4.0  */
                /* IL_03: ldc.i4.s 10 */
                /* IL_05: ldc.i4.s 20 */
                /* IL_07: newobj Void .ctor(System.Int32, System.Int32, System.Int32, System.Int32) */
                /* IL_0C: stloc.0  */
                loc0 = CILJS.newobj(t0,asm1.x600000d,[null, (0|0), (0|0), (10|0), (20|0)]);
                /* IL_0D: ldc.i4.0  */
                /* IL_0E: ldc.i4.0  */
                /* IL_0F: ldc.i4.s 20 */
                /* IL_11: newobj Void .ctor(System.Int32, System.Int32, System.Int32) */
                /* IL_16: stloc.1  */
                loc1 = CILJS.newobj(t1,asm1.x600000f,[null, (0|0), (0|0), (20|0)]);
                /* IL_17: ldloc.0  */
                /* IL_18: callvirt Double Area() */
                /* IL_1D: ldloc.1  */
                /* IL_1E: callvirt Double Area() */
                /* IL_23: add  */
                /* IL_24: stloc.2  */
                loc2 = ((loc0.vtable)["asm1.x600000b"]())(loc0) + ((loc1.vtable)["asm1.x600000b"]())(loc1);
                /* IL_25: ldloc.2  */
                /* IL_26: ldc.r8 0 */
                /* IL_30: ceq  */
                /* IL_31: stloc.s 4 */
                loc4 = ((loc2 === (+0)) ? (1) : (0));
                /* IL_33: ldloc.s 4 */
                /* IL_35: brtrue.s IL_3B */
                
                if (loc4){
                    __pos__ = 0x3B;
                    continue;
                }
                /* IL_37: ldc.i4.1  */
                /* IL_38: stloc.3  */
                loc3 = (1|0);
                /* IL_39: br.s IL_9E */
                __pos__ = 0x9E;
                continue;
                case 0x3B:
                /* IL_3B: ldloc.0  */
                /* IL_3C: castclass Obj.Rect */
                /* IL_41: callvirt Double Area() */
                /* IL_46: ldloc.1  */
                /* IL_47: castclass Obj.Circle */
                /* IL_4C: callvirt Double Area() */
                /* IL_51: add  */
                /* IL_52: stloc.2  */
                loc2 = asm1.x600000e(CILJS.cast_class(loc0,t0)) + asm1.x6000010(CILJS.cast_class(loc1,t1));
                /* IL_53: ldloc.2  */
                /* IL_54: ldc.r8 1456,637061436 */
                /* IL_5D: sub  */
                /* IL_5E: ldc.r8 1E-06 */
                /* IL_68: cgt  */
                /* IL_69: ldc.i4.0  */
                /* IL_6B: ceq  */
                /* IL_6C: stloc.s 4 */
                loc4 = (((((loc2 - (+1456.637061436)) > (+1E-06)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_6E: ldloc.s 4 */
                /* IL_70: brtrue.s IL_76 */
                
                if (loc4){
                    __pos__ = 0x76;
                    continue;
                }
                /* IL_72: ldc.i4.2  */
                /* IL_73: stloc.3  */
                loc3 = (2|0);
                /* IL_74: br.s IL_9E */
                __pos__ = 0x9E;
                continue;
                case 0x76:
                /* IL_76: ldloc.0  */
                /* IL_77: callvirt Double Area() */
                /* IL_7C: ldloc.1  */
                /* IL_7D: callvirt Double Area() */
                /* IL_82: add  */
                /* IL_83: stloc.2  */
                loc2 = (((loc0.ifacemap)[t2].x600000a)())(loc0) + (((loc1.ifacemap)[t2].x600000a)())(loc1);
                /* IL_84: ldloc.2  */
                /* IL_85: ldc.r8 0 */
                /* IL_8F: ceq  */
                /* IL_90: stloc.s 4 */
                loc4 = ((loc2 === (+0)) ? (1) : (0));
                /* IL_92: ldloc.s 4 */
                /* IL_94: brtrue.s IL_9A */
                
                if (loc4){
                    __pos__ = 0x9A;
                    continue;
                }
                /* IL_96: ldc.i4.3  */
                /* IL_97: stloc.3  */
                loc3 = (3|0);
                /* IL_98: br.s IL_9E */
                __pos__ = 0x9E;
                continue;
                case 0x9A:
                /* IL_9A: ldc.i4.0  */
                /* IL_9B: stloc.3  */
                loc3 = (0|0);
                case 0x9E:
                /* IL_9E: ldloc.3  */
                /* IL_9F: ret  */
                return loc3;
            }
        }
    };
    /*  Test..ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.TestLog = CILJS.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["Obj.Measurable"] = CILJS.declare_type(
        "Measurable",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Obj.Measurable",false,false,true,false,false,[],[
                    [asm1, "x600000a", "Area"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
        });
    (asm)["Obj.Obj"] = CILJS.declare_type(
        "Obj",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Obj.Obj",false,false,false,false,false,[],[
                    [asm1, "x600000b", "Area"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            CILJS.implement_interface(
                this,
                [(asm1)["Obj.Measurable"]()],
                {
                    'x600000a': function (){ return asm1.x600000b;}
                });
        });
    (asm)["Obj.Rect"] = CILJS.declare_type(
        "Rect",
        [],
        function ()
        {
            return new ((asm1)["Obj.Obj"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Obj.Rect",false,false,false,false,false,[],[
                    [asm1, "x600000e", "Area"]
                ],(asm1)["Obj.Obj"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            CILJS.implement_interface(
                this,
                [(asm1)["Obj.Measurable"]()],
                {
                    'x600000a': function (){ return asm1.x600000b;}
                });
            this.prototype.ObjRectx = 0;
            this.prototype.ObjRecty = 0;
            this.prototype.ObjRectw = 0;
            this.prototype.ObjRecth = 0;
        });
    (asm)["Obj.Circle"] = CILJS.declare_type(
        "Circle",
        [],
        function ()
        {
            return new ((asm1)["Obj.Obj"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Obj.Circle",false,false,false,false,false,[],[
                    [asm1, "x6000010", "Area"]
                ],(asm1)["Obj.Obj"](),CILJS.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            CILJS.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            CILJS.implement_interface(
                this,
                [(asm1)["Obj.Measurable"]()],
                {
                    'x600000a': function (){ return asm1.x600000b;}
                });
            this.prototype.ObjCirclex = 0;
            this.prototype.ObjCircley = 0;
            this.prototype.ObjCircler = 0;
        });
    (asm)["Obj.Test"] = CILJS.declare_type(
        "Test",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Obj.Test",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
