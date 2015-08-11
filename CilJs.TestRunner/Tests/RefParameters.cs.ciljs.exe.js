var asm1;(function (asm)
{
    asm.FullName = "RefParameters.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  C..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.X(Int32&)*/
    asm.x6000002 = function X(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldc.i4.2  */
        /* IL_02: stind.i4  */
        arg0.w((2|0));
        /* IL_03: ret  */
        return ;
    };;
    /* static System.Void Program.Y(A&)*/
    asm.x6000003_init = function ()
    {
        (asm1.A().init)();
        asm.x6000003 = asm.x6000003_;
    };;
    asm.x6000003 = function (arg0)
    {
        asm.x6000003_init.apply(this,arguments);
        return asm.x6000003_.apply(this,arguments);
    };;
    asm.x6000003_ = function Y(arg0)
    {
        var t0;
        var loc0;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        t0 = asm1.A();
        loc0 = new (asm1.A())();
        /* IL_00: ldarg.0  */
        st_03 = arg0;
        /* IL_01: ldloca.s 0 */
        /* IL_04: initobj A */
        loc0 = new t0();
        /* IL_09: ldloca.s 0 */
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
        /* IL_0B: ldc.i4.3  */
        st_02 = (3|0);
        /* IL_0C: stfld Int32 U */
        st_01.r().U = st_02;
        /* IL_11: ldloc.0  */
        st_04 = loc0;
        /* IL_12: stobj A */
        st_03.w(st_04);
        /* IL_17: ret  */
        return ;
    };
    /* static System.Void Program.Z(C&)*/
    asm.x6000004_init = function ()
    {
        (asm1.C().init)();
        asm.x6000004 = asm.x6000004_;
    };;
    asm.x6000004 = function (arg0)
    {
        asm.x6000004_init.apply(this,arguments);
        return asm.x6000004_.apply(this,arguments);
    };;
    asm.x6000004_ = function Z(arg0)
    {
        var t0;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        t0 = asm1.C();
        /* IL_00: ldarg.0  */
        st_03 = arg0;
        /* IL_01: newobj Void .ctor() */
        /* IL_06: stloc.0  */
        loc0 = CILJS.newobj(t0,asm1.x6000001,[null]);
        /* IL_07: ldloc.0  */
        st_01 = loc0;
        /* IL_08: ldc.i4.4  */
        st_02 = (4|0);
        /* IL_09: stfld Int32 V */
        st_01.V = st_02;
        /* IL_0E: ldloc.0  */
        st_04 = loc0;
        /* IL_0F: stind.ref  */
        st_03.w(st_04);
        /* IL_10: ret  */
        return ;
    };
    /* static System.Void Program.Main()*/
    asm.x6000005_init = function ()
    {
        (asm1.A().init)();
        (asm1.C().init)();
        asm.x6000005 = asm.x6000005_;
    };;
    asm.x6000005 = function ()
    {
        asm.x6000005_init.apply(this,arguments);
        return asm.x6000005_.apply(this,arguments);
    };;
    asm.x6000005_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var loc3;
        var loc0;
        var loc1;
        var loc4;
        var loc2;
        CILJS.init_base_types();
        t0 = asm1.A();
        t1 = asm1.C();
        t2 = (asm0)["System.Int32"]();
        loc3 = new (asm1.A())();
        /* IL_00: ldc.i4.1  */
        /* IL_01: stloc.0  */
        loc0 = (1|0);
        /* IL_02: ldloca.s 3 */
        /* IL_05: initobj A */
        loc3 = new t0();
        /* IL_0A: ldloca.s 3 */
        /* IL_0C: ldc.i4.1  */
        /* IL_0D: stfld Int32 U */
        loc3.U = (1|0);
        /* IL_12: ldloc.3  */
        /* IL_13: stloc.1  */
        loc1 = loc3;
        /* IL_14: newobj Void .ctor() */
        /* IL_19: stloc.s 4 */
        loc4 = CILJS.newobj(t1,asm1.x6000001,[null]);
        /* IL_1B: ldloc.s 4 */
        /* IL_1D: ldc.i4.1  */
        /* IL_1E: stfld Int32 V */
        loc4.V = (1|0);
        /* IL_23: ldloc.s 4 */
        /* IL_25: stloc.2  */
        loc2 = loc4;
        /* IL_26: ldloca.s 0 */
        /* IL_28: call Void X(System.Int32&) */
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
        /* IL_2D: ldloca.s 1 */
        /* IL_2F: call Void Y(A&) */
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
        /* IL_34: ldloca.s 2 */
        /* IL_36: call Void Z(C&) */
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
        /* IL_3B: ldloc.0  */
        /* IL_3C: box System.Int32 */
        /* IL_41: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': loc0,
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_46: ldloca.s 1 */
        /* IL_48: ldfld Int32 U */
        /* IL_4D: box System.Int32 */
        /* IL_52: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': loc1.U,
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_57: ldloc.2  */
        /* IL_58: ldfld Int32 V */
        /* IL_5D: box System.Int32 */
        /* IL_62: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': loc2.V,
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_67: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
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
            CILJS.init_type(this,asm,"A",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.U = 0;
        });
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
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.V = 0;
        });
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000005;
})(asm1 || (asm1 = {}));
