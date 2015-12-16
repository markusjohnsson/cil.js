var asm1;(function (asm)
{
    asm.FullName = "interface.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Double Obj.Area()*/
    asm.x6000002 = function Area(arg0)
    {
        var loc0;
        /* IL_00: nop  */
        /* IL_01: ldc.r8 0 */
        /* IL_0A: stloc.0  */
        loc0 = (+0);
        /* IL_0D: ldloc.0  */
        /* IL_0E: ret  */
        return loc0;
    };;
    /*  Obj..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* System.Double Rect.Area()*/
    asm.x6000005 = function Area(arg0)
    {
        var loc0;
        /* IL_00: nop  */
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
    asm.x6000004 = function _ctor(arg0, arg1, arg2, arg3, arg4)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000003(arg0);
        /* IL_06: nop  */
        /* IL_07: nop  */
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
        /* IL_25: ret  */
        return ;
    };;
    /* System.Double Circle.Area()*/
    asm.x6000007 = function Area(arg0)
    {
        var loc0;
        /* IL_00: nop  */
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
    asm.x6000006 = function _ctor(arg0, arg1, arg2, arg3)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000003(arg0);
        /* IL_06: nop  */
        /* IL_07: nop  */
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
        /* IL_1D: ret  */
        return ;
    };;
    /* static System.Int32 Test.Main()*/
    asm.x6000008_init = function ()
    {
        ((asm1)["Obj.Rect"]().init)();
        ((asm1)["Obj.Circle"]().init)();
        ((asm1)["Obj.Measurable"]().init)();
        asm.x6000008 = asm.x6000008_;
    };;
    asm.x6000008 = function ()
    {
        asm.x6000008_init();
        return asm.x6000008_();
    };;
    asm.x6000008_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        var loc5;
        var loc6;
        CILJS.init_base_types();
        t0 = (asm1)["Obj.Rect"]();
        t1 = (asm1)["Obj.Circle"]();
        t2 = (asm1)["Obj.Measurable"]();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.0  */
                /* IL_02: ldc.i4.0  */
                /* IL_03: ldc.i4.s 10 */
                /* IL_05: ldc.i4.s 20 */
                /* IL_07: newobj Void .ctor(System.Int32, System.Int32, System.Int32, System.Int32) */
                /* IL_0C: stloc.0  */
                loc0 = CILJS.newobj(t0,asm1.x6000004,[null, (0|0), (0|0), (10|0), (20|0)]);
                /* IL_0D: ldc.i4.0  */
                /* IL_0E: ldc.i4.0  */
                /* IL_0F: ldc.i4.s 20 */
                /* IL_11: newobj Void .ctor(System.Int32, System.Int32, System.Int32) */
                /* IL_16: stloc.1  */
                loc1 = CILJS.newobj(t1,asm1.x6000006,[null, (0|0), (0|0), (20|0)]);
                /* IL_17: ldloc.0  */
                /* IL_18: callvirt Double Area() */
                /* IL_1D: ldloc.1  */
                /* IL_1E: callvirt Double Area() */
                /* IL_23: add  */
                /* IL_24: stloc.2  */
                loc2 = ((loc0.vtable)["asm1.x6000002"]())(loc0) + ((loc1.vtable)["asm1.x6000002"]())(loc1);
                /* IL_25: ldloc.2  */
                /* IL_26: ldc.r8 0 */
                /* IL_30: ceq  */
                /* IL_31: ldc.i4.0  */
                /* IL_33: ceq  */
                /* IL_34: stloc.3  */
                loc3 = ((((loc2 === (+0)) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_35: ldloc.3  */
                /* IL_36: brfalse.s IL_3D */
                
                if ((!(loc3))){
                    __pos__ = 0x3D;
                    continue;
                }
                /* IL_38: ldc.i4.1  */
                /* IL_39: stloc.s 4 */
                loc4 = (1|0);
                /* IL_3B: br.s IL_A3 */
                __pos__ = 0xA3;
                continue;
                case 0x3D:
                /* IL_3D: ldloc.0  */
                /* IL_3E: castclass Obj.Rect */
                /* IL_43: callvirt Double Area() */
                /* IL_48: ldloc.1  */
                /* IL_49: castclass Obj.Circle */
                /* IL_4E: callvirt Double Area() */
                /* IL_53: add  */
                /* IL_54: stloc.2  */
                loc2 = asm1.x6000005(CILJS.cast_class(loc0,t0)) + asm1.x6000007(CILJS.cast_class(loc1,t1));
                /* IL_55: ldloc.2  */
                /* IL_56: ldc.r8 1456,637061436 */
                /* IL_5F: sub  */
                /* IL_60: ldc.r8 1E-06 */
                /* IL_6A: cgt  */
                /* IL_6B: stloc.s 5 */
                loc5 = (((loc2 - (+1456.637061436)) > (+1E-06)) ? 1 : 0);
                /* IL_6D: ldloc.s 5 */
                /* IL_6F: brfalse.s IL_76 */
                
                if ((!(loc5))){
                    __pos__ = 0x76;
                    continue;
                }
                /* IL_71: ldc.i4.2  */
                /* IL_72: stloc.s 4 */
                loc4 = (2|0);
                /* IL_74: br.s IL_A3 */
                __pos__ = 0xA3;
                continue;
                case 0x76:
                /* IL_76: ldloc.0  */
                /* IL_77: callvirt Double Area() */
                /* IL_7C: ldloc.1  */
                /* IL_7D: callvirt Double Area() */
                /* IL_82: add  */
                /* IL_83: stloc.2  */
                loc2 = (((loc0.ifacemap)[t2].x6000001)())(loc0) + (((loc1.ifacemap)[t2].x6000001)())(loc1);
                /* IL_84: ldloc.2  */
                /* IL_85: ldc.r8 0 */
                /* IL_8F: ceq  */
                /* IL_90: ldc.i4.0  */
                /* IL_92: ceq  */
                /* IL_93: stloc.s 6 */
                loc6 = ((((loc2 === (+0)) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_95: ldloc.s 6 */
                /* IL_97: brfalse.s IL_9E */
                
                if ((!(loc6))){
                    __pos__ = 0x9E;
                    continue;
                }
                /* IL_99: ldc.i4.3  */
                /* IL_9A: stloc.s 4 */
                loc4 = (3|0);
                /* IL_9C: br.s IL_A3 */
                __pos__ = 0xA3;
                continue;
                case 0x9E:
                /* IL_9E: ldc.i4.0  */
                /* IL_9F: stloc.s 4 */
                loc4 = (0|0);
                case 0xA3:
                /* IL_A3: ldloc.s 4 */
                /* IL_A5: ret  */
                return loc4;
            }
        }
    };
    /*  Test..ctor()*/
    asm.x6000009 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
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
                    [asm1, "x6000001", "Area"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm1.x6000001","asm1.x6000001");
        },
        "function Measurable() { c.init(); }");
    (asm)["Obj.Obj"] = CILJS.declare_type(
        "Obj",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Obj.Obj",false,false,false,false,false,[],[
                    [asm1, "x6000002", "Area"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm1.x6000002","asm1.x6000002");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm1)["Obj.Measurable"]()],
                {
                    'x6000001': function (){ return asm1.x6000002;}
                });
        },
        "function Obj() { c.init(); }");
    (asm)["Obj.Rect"] = CILJS.declare_type(
        "Rect",
        [],
        function ()
        {
            return (asm1)["Obj.Obj"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Obj.Rect",false,false,false,false,false,[],[
                    [asm1, "x6000005", "Area"]
                ],(asm1)["Obj.Obj"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm1.x6000002","asm1.x6000002");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm1)["Obj.Measurable"]()],
                {
                    'x6000001': function (){ return asm1.x6000002;}
                });
        },
        "function Rect() { c.init();this.ObjRectx = 0;this.ObjRecty = 0;this.ObjRectw = 0;this.ObjRecth = 0 }");
    (asm)["Obj.Circle"] = CILJS.declare_type(
        "Circle",
        [],
        function ()
        {
            return (asm1)["Obj.Obj"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Obj.Circle",false,false,false,false,false,[],[
                    [asm1, "x6000007", "Area"]
                ],(asm1)["Obj.Obj"](),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm1.x6000002","asm1.x6000002");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm1)["Obj.Measurable"]()],
                {
                    'x6000001': function (){ return asm1.x6000002;}
                });
        },
        "function Circle() { c.init();this.ObjCirclex = 0;this.ObjCircley = 0;this.ObjCircler = 0 }");
    (asm)["Obj.Test"] = CILJS.declare_type(
        "Test",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Obj.Test",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006",null);
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Test() { c.init(); }");
    asm.entryPoint = asm.x6000008;
})(asm1 || (asm1 = {}));
