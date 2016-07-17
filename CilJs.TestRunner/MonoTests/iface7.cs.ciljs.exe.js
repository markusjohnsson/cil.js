var asm1;(function (asm)
{
    asm.FullName = "iface7.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Int32 Base.TestMono.IBase.Do()*/
    asm.x6000002 = function TestMono_IBase_Do(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.1  */
                /* IL_02: ldarg.0  */
                /* IL_03: callvirt Int32 Do() */
                /* IL_08: add  */
                /* IL_09: stloc.0  */
                loc0 = ((1|0) + ((arg0.vtable)["asm1.x6000003"]())(arg0)) | (0|0);
                /* IL_0C: ldloc.0  */
                /* IL_0D: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 Base.Do()*/
    asm.x6000003 = function Do(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.1  */
                /* IL_02: stloc.0  */
                loc0 = (1|0);
                /* IL_05: ldloc.0  */
                /* IL_06: ret  */
                return loc0;
            }
        }
    };;
    /*  Base..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: call Void .ctor() */
                
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /*  Derived..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: call Void .ctor() */
                asm1.x6000004(arg0);
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /* static System.Int32 Class1.Main(String[])*/
    asm.x6000006_init = function (arg0)
    {
        ((asm1)["TestMono.Derived"]().init)();
        ((asm1)["TestMono.IBase"]().init)();
        ((asm1)["TestMono.Base"]().init)();
        asm.x6000006 = asm.x6000006_;
    };;
    asm.x6000006 = function (arg0)
    {
        asm.x6000006_init(arg0);
        return asm.x6000006_(arg0);
    };;
    asm.x6000006_ = function Main(arg0)
    {
        var t0;
        var t1;
        var t2;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc4;
        var loc5;
        var loc1;
        var loc6;
        var loc2;
        var loc7;
        var loc3;
        var loc8;
        CILJS.init_base_types();
        t0 = (asm1)["TestMono.Derived"]();
        t1 = (asm1)["TestMono.IBase"]();
        t2 = (asm1)["TestMono.Base"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: newobj Void .ctor() */
                /* IL_06: stloc.0  */
                loc0 = CILJS.newobj(t0,asm1.x6000005,[null]);
                /* IL_07: ldloc.0  */
                /* IL_08: callvirt Int32 Do() */
                /* IL_0D: ldc.i4.2  */
                /* IL_0F: ceq  */
                /* IL_10: ldc.i4.0  */
                /* IL_12: ceq  */
                /* IL_13: stloc.s 4 */
                loc4 = (((((((loc0.ifacemap)[t1].x6000001)())(CILJS.convert_box_to_pointer_as_needed(loc0)) === (2|0)) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_15: ldloc.s 4 */
                /* IL_17: brfalse.s IL_1E */
                
                if ((!(loc4))){
                    __pos__ = 0x1E;
                    continue;
                }
                /* IL_19: ldc.i4.1  */
                /* IL_1A: stloc.s 5 */
                loc5 = (1|0);
                /* IL_1C: br.s IL_78 */
                __pos__ = 0x78;
                continue;
                case 0x1E:
                /* IL_1E: ldloc.0  */
                /* IL_1F: stloc.1  */
                loc1 = loc0;
                /* IL_20: ldloc.1  */
                /* IL_21: callvirt Int32 Do() */
                /* IL_26: ldc.i4.2  */
                /* IL_28: ceq  */
                /* IL_29: ldc.i4.0  */
                /* IL_2B: ceq  */
                /* IL_2C: stloc.s 6 */
                loc6 = (((((((loc1.ifacemap)[t1].x6000001)())(CILJS.convert_box_to_pointer_as_needed(loc1)) === (2|0)) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_2E: ldloc.s 6 */
                /* IL_30: brfalse.s IL_37 */
                
                if ((!(loc6))){
                    __pos__ = 0x37;
                    continue;
                }
                /* IL_32: ldc.i4.2  */
                /* IL_33: stloc.s 5 */
                loc5 = (2|0);
                /* IL_35: br.s IL_78 */
                __pos__ = 0x78;
                continue;
                case 0x37:
                /* IL_37: ldloc.0  */
                /* IL_38: castclass TestMono.Derived */
                /* IL_3D: stloc.2  */
                loc2 = CILJS.cast_class(loc0,t0);
                /* IL_3E: ldloc.2  */
                /* IL_3F: callvirt Int32 Do() */
                /* IL_44: ldc.i4.1  */
                /* IL_46: ceq  */
                /* IL_47: ldc.i4.0  */
                /* IL_49: ceq  */
                /* IL_4A: stloc.s 7 */
                loc7 = ((((((loc2.vtable)["asm1.x6000003"]())(loc2) === (1|0)) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_4C: ldloc.s 7 */
                /* IL_4E: brfalse.s IL_55 */
                
                if ((!(loc7))){
                    __pos__ = 0x55;
                    continue;
                }
                /* IL_50: ldc.i4.3  */
                /* IL_51: stloc.s 5 */
                loc5 = (3|0);
                /* IL_53: br.s IL_78 */
                __pos__ = 0x78;
                continue;
                case 0x55:
                /* IL_55: ldloc.0  */
                /* IL_56: castclass TestMono.Base */
                /* IL_5B: stloc.3  */
                loc3 = CILJS.cast_class(loc0,t2);
                /* IL_5C: ldloc.3  */
                /* IL_5D: callvirt Int32 Do() */
                /* IL_62: ldc.i4.1  */
                /* IL_64: ceq  */
                /* IL_65: ldc.i4.0  */
                /* IL_67: ceq  */
                /* IL_68: stloc.s 8 */
                loc8 = ((((((loc3.vtable)["asm1.x6000003"]())(loc3) === (1|0)) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_6A: ldloc.s 8 */
                /* IL_6C: brfalse.s IL_73 */
                
                if ((!(loc8))){
                    __pos__ = 0x73;
                    continue;
                }
                /* IL_6E: ldc.i4.4  */
                /* IL_6F: stloc.s 5 */
                loc5 = (4|0);
                /* IL_71: br.s IL_78 */
                __pos__ = 0x78;
                continue;
                case 0x73:
                /* IL_73: ldc.i4.0  */
                /* IL_74: stloc.s 5 */
                loc5 = (0|0);
                case 0x78:
                /* IL_78: ldloc.s 5 */
                /* IL_7A: ret  */
                return loc5;
            }
        }
    };
    /*  Class1..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: call Void .ctor() */
                
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
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
                    [asm1, "x6000001", "Do"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm1.x6000001","asm1.x6000001");
        },
        "function IBase() { c.init(); }");
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
            CILJS.init_type(this,asm,"TestMono.IDerived",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.implement_interface(
                this,
                [(asm1)["TestMono.IBase"]()],
                null);
        },
        "function IDerived() { c.init(); }");
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
                    [asm1, "x6000003", "Do"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm1.x6000002","asm1.x6000002");
            CILJS.declare_virtual(this,"asm1.x6000003","asm1.x6000003");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm1)["TestMono.IBase"]()],
                {
                    'x6000001': function (){ return asm1.x6000002;}
                });
        },
        "function Base() { c.init(); }");
    (asm)["TestMono.Derived"] = CILJS.declare_type(
        "Derived",
        [],
        function ()
        {
            return (asm1)["TestMono.Base"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestMono.Derived",false,false,false,false,false,[],[],(asm1)["TestMono.Base"](),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm1.x6000003","asm1.x6000003");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm1)["TestMono.IDerived"]()],
                {});
            CILJS.implement_interface(
                this,
                [(asm1)["TestMono.IBase"]()],
                {
                    'x6000001': function (){ return asm1.x6000002;}
                });
        },
        "function Derived() { c.init(); }");
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
            CILJS.init_type(this,asm,"TestMono.Class1",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006",null);
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Class1() { c.init(); }");
    asm.entryPoint = asm.x6000006;
})(asm1 || (asm1 = {}));
