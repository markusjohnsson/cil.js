var asm2; (function (asm)
{
    asm.FullName = "interface.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Double Obj.Area()*/
    asm.x6000002 = function Area(arg0)
    {
        /* IL_00: ldc.r8 0*/
        /* IL_09: ret */
        return (+0);
    };;
    /*  Obj..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Double Rect.Area()*/
    asm.x6000005 = function Area(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32 w*/
        /* IL_06: conv.r8 */
        /* IL_07: ldarg.0 */
        /* IL_08: ldfld Int32 h*/
        /* IL_0D: conv.r8 */
        /* IL_0E: mul */
        /* IL_0F: ret */
        return arg0.ObjRectw * arg0.ObjRecth;
    };;
    /*  Rect..ctor(Int32,Int32,Int32,Int32)*/
    asm.x6000004 = function _ctor(arg0,arg1,arg2,arg3,arg4)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm2.x6000003(arg0);
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: stfld Int32 x*/
        arg0.ObjRectx = arg1;
        /* IL_0D: ldarg.0 */
        /* IL_0E: ldarg.2 */
        /* IL_0F: stfld Int32 y*/
        arg0.ObjRecty = arg2;
        /* IL_14: ldarg.0 */
        /* IL_15: ldarg.3 */
        /* IL_16: stfld Int32 w*/
        arg0.ObjRectw = arg3;
        /* IL_1B: ldarg.0 */
        /* IL_1C: ldarg.s 4*/
        /* IL_1E: stfld Int32 h*/
        arg0.ObjRecth = arg4;
        /* IL_23: ret */
        return ;
    };;
    /* System.Double Circle.Area()*/
    asm.x6000007 = function Area(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32 r*/
        /* IL_06: ldarg.0 */
        /* IL_07: ldfld Int32 r*/
        /* IL_0C: mul */
        /* IL_0D: conv.r8 */
        /* IL_0E: ldc.r8 3,14159265359*/
        /* IL_17: mul */
        /* IL_18: ret */
        return (arg0.ObjCircler * arg0.ObjCircler) * (+3.14159265359);
    };;
    /*  Circle..ctor(Int32,Int32,Int32)*/
    asm.x6000006 = function _ctor(arg0,arg1,arg2,arg3)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm2.x6000003(arg0);
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: stfld Int32 x*/
        arg0.ObjCirclex = arg1;
        /* IL_0D: ldarg.0 */
        /* IL_0E: ldarg.2 */
        /* IL_0F: stfld Int32 y*/
        arg0.ObjCircley = arg2;
        /* IL_14: ldarg.0 */
        /* IL_15: ldarg.3 */
        /* IL_16: stfld Int32 r*/
        arg0.ObjCircler = arg3;
        /* IL_1B: ret */
        return ;
    };;
    /* static System.Int32 Test.Main()*/
    asm.x6000008_init = function ()
    {
        ((asm2)["Obj.Rect"]().init)();
        ((asm2)["Obj.Circle"]().init)();
        ((asm2)["Obj.Measurable"]().init)();
        asm.x6000008 = asm.x6000008_;
    };;
    asm.x6000008 = function ()
    {
        asm.x6000008_init.apply(this,arguments);
        return asm.x6000008_.apply(this,arguments);
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
        CILJS.init_base_types();
        t0 = (asm2)["Obj.Rect"]();
        t1 = (asm2)["Obj.Circle"]();
        t2 = (asm2)["Obj.Measurable"]();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldc.i4.0 */
                /* IL_01: ldc.i4.0 */
                /* IL_02: ldc.i4.s 10*/
                /* IL_04: ldc.i4.s 20*/
                /* IL_06: newobj Void .ctor(System.Int32, System.Int32, System.Int32, System.Int32)*/
                /* IL_0B: stloc.0 */
                loc0 = CILJS.newobj(t0,asm2.x6000004,[null, (0|0), (0|0), (10|0), (20|0)]);
                /* IL_0C: ldc.i4.0 */
                /* IL_0D: ldc.i4.0 */
                /* IL_0E: ldc.i4.s 20*/
                /* IL_10: newobj Void .ctor(System.Int32, System.Int32, System.Int32)*/
                /* IL_15: stloc.1 */
                loc1 = CILJS.newobj(t1,asm2.x6000006,[null, (0|0), (0|0), (20|0)]);
                /* IL_16: ldloc.0 */
                /* IL_17: callvirt Double Area()*/
                /* IL_1C: ldloc.1 */
                /* IL_1D: callvirt Double Area()*/
                /* IL_22: add */
                /* IL_23: stloc.2 */
                loc2 = ((loc0.vtable)["asm2.x6000002"]())(loc0) + ((loc1.vtable)["asm2.x6000002"]())(loc1);
                /* IL_24: ldloc.2 */
                /* IL_25: ldc.r8 0*/
                /* IL_2E: beq.s IL_32*/
                
                if (loc2 === (+0)){
                    __pos__ = 0x32;
                    continue;
                }
                /* IL_30: ldc.i4.1 */
                /* IL_31: ret */
                return (1|0);
                case 0x32:
                /* IL_32: ldloc.0 */
                /* IL_33: castclass Obj.Rect*/
                /* IL_38: callvirt Double Area()*/
                /* IL_3D: ldloc.1 */
                /* IL_3E: castclass Obj.Circle*/
                /* IL_43: callvirt Double Area()*/
                /* IL_48: add */
                /* IL_49: stloc.2 */
                loc2 = asm2.x6000005(CILJS.cast_class(loc0,t0)) + asm2.x6000007(CILJS.cast_class(loc1,t1));
                /* IL_4A: ldloc.2 */
                /* IL_4B: ldc.r8 1456,637061436*/
                /* IL_54: sub */
                /* IL_55: ldc.r8 1E-06*/
                /* IL_5E: ble.un.s IL_62*/
                
                if (CILJS.unsigned_value(loc2 - (+1456.637061436)) <= CILJS.unsigned_value((+1E-06))){
                    __pos__ = 0x62;
                    continue;
                }
                /* IL_60: ldc.i4.2 */
                /* IL_61: ret */
                return (2|0);
                case 0x62:
                /* IL_62: ldloc.0 */
                /* IL_63: callvirt Double Area()*/
                /* IL_68: ldloc.1 */
                /* IL_69: callvirt Double Area()*/
                /* IL_6E: add */
                /* IL_6F: stloc.2 */
                loc2 = (((loc0.ifacemap)[t2].x6000001)())(loc0) + (((loc1.ifacemap)[t2].x6000001)())(loc1);
                /* IL_70: ldloc.2 */
                /* IL_71: ldc.r8 0*/
                /* IL_7A: beq.s IL_7E*/
                
                if (loc2 === (+0)){
                    __pos__ = 0x7E;
                    continue;
                }
                /* IL_7C: ldc.i4.3 */
                /* IL_7D: ret */
                return (3|0);
                case 0x7E:
                /* IL_7E: ldc.i4.0 */
                /* IL_7F: ret */
                return (0|0);
            }
        }
    };
    /*  Test..ctor()*/
    asm.x6000009 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
                    [asm2, "x6000001", "Area"]
                ],null,CILJS.is_inst_interface(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm2.x6000001","asm2.x6000001");
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
                    [asm2, "x6000002", "Area"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm2.x6000002","asm2.x6000002");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm2)["Obj.Measurable"]()],
                {
                    'x6000001': function (){ return asm2.x6000002;}
                });
        });
    (asm)["Obj.Rect"] = CILJS.declare_type(
        "Rect",
        [],
        function ()
        {
            return new ((asm2)["Obj.Obj"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Obj.Rect",false,false,false,false,false,[],[
                    [asm2, "x6000005", "Area"]
                ],(asm2)["Obj.Obj"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm2.x6000002","asm2.x6000002");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm2)["Obj.Measurable"]()],
                {
                    'x6000001': function (){ return asm2.x6000002;}
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
            return new ((asm2)["Obj.Obj"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Obj.Circle",false,false,false,false,false,[],[
                    [asm2, "x6000007", "Area"]
                ],(asm2)["Obj.Obj"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm2.x6000002","asm2.x6000002");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm2)["Obj.Measurable"]()],
                {
                    'x6000001': function (){ return asm2.x6000002;}
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
            CILJS.init_type(this,asm,"Obj.Test",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000006");
            this.GenericTypeMetadataName = "asm2.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000008;
})(asm2 || (asm2 = {}));
