var asm2;(function (asm)
{
    asm.FullName = "iface7.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Int32 Base.TestMono.IBase.Do()*/
    asm.x6000002 = function TestMono_IBase_Do(arg0)
    {
        /* IL_00: ldc.i4.1  */
        /* IL_01: ldarg.0  */
        /* IL_02: callvirt Int32 Do() */
        /* IL_07: add  */
        /* IL_08: ret  */
        return ((1|0) + ((arg0.vtable)["asm2.x6000003"]())(arg0)) | (0|0);
    };;
    /* System.Int32 Base.Do()*/
    asm.x6000003 = function Do(arg0)
    {
        /* IL_00: ldc.i4.1  */
        /* IL_01: ret  */
        return (1|0);
    };;
    /*  Base..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  Derived..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm2.x6000004(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Int32 Class1.Main(String[])*/
    asm.x6000006_init = function ()
    {
        ((asm2)["TestMono.Derived"]().init)();
        ((asm2)["TestMono.IBase"]().init)();
        ((asm2)["TestMono.Base"]().init)();
        asm.x6000006 = asm.x6000006_;
    };;
    asm.x6000006 = function (arg0)
    {
        asm.x6000006_init.apply(this,arguments);
        return asm.x6000006_.apply(this,arguments);
    };;
    asm.x6000006_ = function Main(arg0)
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
        CILJS.init_base_types();
        t0 = (asm2)["TestMono.Derived"]();
        t1 = (asm2)["TestMono.IBase"]();
        t2 = (asm2)["TestMono.Base"]();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: newobj Void .ctor() */
                /* IL_05: stloc.0  */
                loc0 = CILJS.newobj(t0,asm2.x6000005,[null]);
                /* IL_06: ldloc.0  */
                /* IL_07: callvirt Int32 Do() */
                /* IL_0C: ldc.i4.2  */
                /* IL_0D: beq.s IL_11 */
                
                if ((((loc0.ifacemap)[t1].x6000001)())(CILJS.convert_box_to_pointer_as_needed(loc0)) === (2|0)){
                    __pos__ = 0x11;
                    continue;
                }
                /* IL_0F: ldc.i4.1  */
                /* IL_10: ret  */
                return (1|0);
                case 0x11:
                /* IL_11: ldloc.0  */
                /* IL_12: stloc.1  */
                loc1 = loc0;
                /* IL_13: ldloc.1  */
                /* IL_14: callvirt Int32 Do() */
                /* IL_19: ldc.i4.2  */
                /* IL_1A: beq.s IL_1E */
                
                if ((((loc1.ifacemap)[t1].x6000001)())(CILJS.convert_box_to_pointer_as_needed(loc1)) === (2|0)){
                    __pos__ = 0x1E;
                    continue;
                }
                /* IL_1C: ldc.i4.2  */
                /* IL_1D: ret  */
                return (2|0);
                case 0x1E:
                /* IL_1E: ldloc.0  */
                /* IL_1F: castclass TestMono.Derived */
                /* IL_24: stloc.2  */
                loc2 = CILJS.cast_class(loc0,t0);
                /* IL_25: ldloc.2  */
                /* IL_26: callvirt Int32 Do() */
                /* IL_2B: ldc.i4.1  */
                /* IL_2C: beq.s IL_30 */
                
                if (((loc2.vtable)["asm2.x6000003"]())(loc2) === (1|0)){
                    __pos__ = 0x30;
                    continue;
                }
                /* IL_2E: ldc.i4.3  */
                /* IL_2F: ret  */
                return (3|0);
                case 0x30:
                /* IL_30: ldloc.0  */
                /* IL_31: castclass TestMono.Base */
                /* IL_36: stloc.3  */
                loc3 = CILJS.cast_class(loc0,t2);
                /* IL_37: ldloc.3  */
                /* IL_38: callvirt Int32 Do() */
                /* IL_3D: ldc.i4.1  */
                /* IL_3E: beq.s IL_42 */
                
                if (((loc3.vtable)["asm2.x6000003"]())(loc3) === (1|0)){
                    __pos__ = 0x42;
                    continue;
                }
                /* IL_40: ldc.i4.4  */
                /* IL_41: ret  */
                return (4|0);
                case 0x42:
                /* IL_42: ldc.i4.0  */
                /* IL_43: ret  */
                return (0|0);
            }
        }
    };
    /*  Class1..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    (asm)["TestMono.IBase"] = CILJS.declare_type(
        "IBase",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestMono.IBase",false,false,true,false,false,[],[
                    [asm2, "x6000001", "Do"]
                ],null,CILJS.is_inst_interface(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm2.x6000001","asm2.x6000001");
        });
    (asm)["TestMono.IDerived"] = CILJS.declare_type(
        "IDerived",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestMono.IDerived",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.implement_interface(
                this,
                [(asm2)["TestMono.IBase"]()],
                null);
        });
    (asm)["TestMono.Base"] = CILJS.declare_type(
        "Base",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestMono.Base",false,false,false,false,false,[],[
                    [asm2, "x6000003", "Do"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm2.x6000002","asm2.x6000002");
            CILJS.declare_virtual(this,"asm2.x6000003","asm2.x6000003");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm2)["TestMono.IBase"]()],
                {
                    'x6000001': function (){ return asm2.x6000002;}
                });
        });
    (asm)["TestMono.Derived"] = CILJS.declare_type(
        "Derived",
        [],
        function ()
        {
            return (asm2)["TestMono.Base"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestMono.Derived",false,false,false,false,false,[],[],(asm2)["TestMono.Base"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm2.x6000003","asm2.x6000003");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm2)["TestMono.IDerived"]()],
                {});
            CILJS.implement_interface(
                this,
                [(asm2)["TestMono.IBase"]()],
                {
                    'x6000001': function (){ return asm2.x6000002;}
                });
        });
    (asm)["TestMono.Class1"] = CILJS.declare_type(
        "Class1",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestMono.Class1",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000006");
            this.GenericTypeMetadataName = "asm2.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000006;
})(asm2 || (asm2 = {}));
