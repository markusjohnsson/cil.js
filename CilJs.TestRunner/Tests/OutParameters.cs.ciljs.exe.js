var asm1;(function (asm)
{
    asm.FullName = "OutParameters.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  C..ctor()*/
    asm.x6000001 = function _ctor(arg0)
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
    /* static System.Void Program.X(Int32&)*/
    asm.x6000002 = function X(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldc.i4.2  */
                /* IL_03: stind.i4  */
                arg0.w((2|0));
                /* IL_04: ret  */
                return ;
            }
        }
    };;
    /* static System.Void Program.Y(A&)*/
    asm.x6000003_init = function (arg0)
    {
        (asm1.A().init)();
        asm.x6000003 = asm.x6000003_;
    };;
    asm.x6000003 = function (arg0)
    {
        asm.x6000003_init(arg0);
        return asm.x6000003_(arg0);
    };;
    asm.x6000003_ = function Y(arg0)
    {
        var t0;
        var loc0;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var in_block_0;
        var __pos__;
        t0 = asm1.A();
        loc0 = new (asm1.A())();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                st_03 = arg0;
                /* IL_02: ldloca.s 0 */
                /* IL_05: initobj A */
                loc0 = new t0();
                /* IL_0A: ldloca.s 0 */
                st_01 = {
                    'w': function (v)
                    {
                        loc0 = v;
                    },
                    'r': function ()
                    {
                        return loc0;
                    }
                };
                /* IL_0C: ldc.i4.3  */
                st_02 = (3|0);
                /* IL_0D: stfld Int32 U */
                st_01.r().U = st_02;
                /* IL_12: ldloc.0  */
                st_04 = loc0;
                /* IL_13: stobj A */
                st_03.w(st_04);
                /* IL_18: ret  */
                return ;
            }
        }
    };
    /* static System.Void Program.Z(C&)*/
    asm.x6000004_init = function (arg0)
    {
        (asm1.C().init)();
        asm.x6000004 = asm.x6000004_;
    };;
    asm.x6000004 = function (arg0)
    {
        asm.x6000004_init(arg0);
        return asm.x6000004_(arg0);
    };;
    asm.x6000004_ = function Z(arg0)
    {
        var t0;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = asm1.C();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                st_03 = arg0;
                /* IL_02: newobj Void .ctor() */
                /* IL_07: stloc.0  */
                loc0 = CILJS.newobj(t0,asm1.x6000001,[null]);
                /* IL_08: ldloc.0  */
                st_01 = loc0;
                /* IL_09: ldc.i4.4  */
                st_02 = (4|0);
                /* IL_0A: stfld Int32 V */
                st_01.V = st_02;
                /* IL_0F: ldloc.0  */
                st_04 = loc0;
                /* IL_10: stind.ref  */
                st_03.w(st_04);
                /* IL_11: ret  */
                return ;
            }
        }
    };
    /* static System.Void Program.Main()*/
    asm.x6000005 = function Main()
    {
        var t0;
        var loc0;
        var loc1;
        var loc2;
        var in_block_0;
        var __pos__;
        CILJS.init_base_types();
        t0 = (asm0)["System.Int32"]();
        loc0 = 0;
        loc1 = new (asm1.A())();
        loc2 = null;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldloca.s 0 */
                /* IL_03: call Void X(System.Int32&) */
                asm1.x6000002({
                        'w': function (v)
                        {
                            loc0 = v;
                        },
                        'r': function ()
                        {
                            return loc0;
                        }
                    });
                /* IL_08: nop  */
                
                /* IL_09: ldloca.s 1 */
                /* IL_0B: call Void Y(A&) */
                asm1.x6000003({
                        'w': function (v)
                        {
                            loc1 = v;
                        },
                        'r': function ()
                        {
                            return loc1;
                        }
                    });
                /* IL_10: nop  */
                
                /* IL_11: ldloca.s 2 */
                /* IL_13: call Void Z(C&) */
                asm1.x6000004({
                        'w': function (v)
                        {
                            loc2 = v;
                        },
                        'r': function ()
                        {
                            return loc2;
                        }
                    });
                /* IL_18: nop  */
                
                /* IL_19: ldloc.0  */
                /* IL_1A: box System.Int32 */
                /* IL_1F: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box(loc0,t0));
                /* IL_24: nop  */
                
                /* IL_25: ldloc.1  */
                /* IL_26: ldfld Int32 U */
                /* IL_2B: box System.Int32 */
                /* IL_30: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box(loc1.U,t0));
                /* IL_35: nop  */
                
                /* IL_36: ldloc.2  */
                /* IL_37: ldfld Int32 V */
                /* IL_3C: box System.Int32 */
                /* IL_41: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box(loc2.V,t0));
                /* IL_46: nop  */
                
                /* IL_47: ret  */
                return ;
            }
        }
    };;
    /*  Program..ctor()*/
    asm.x6000006 = function _ctor(arg0)
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
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm1.t2000002",new (asm1.A())());
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function A() { c.init();this.U = 0 }");
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function C() { c.init();this.V = 0 }");
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000005;
})(asm1 || (asm1 = {}));
