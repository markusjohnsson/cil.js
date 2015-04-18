var asm1;(function (asm)
{
    asm.FullName = "RefParameters.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /*  C..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.X(Int32&)*/
    asm.x600000b = function X(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  RefParameters.cs:8:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldc.i4.2  */
        /* IL_03: stind.i4  */
        arg0.w((2|0));
        /* IL_04: ret  RefParameters.cs:10:5*/
        return ;
    };;
    /* static System.Void Program.Y(A&)*/
    asm.x600000c_init = function ()
    {
        (asm1.A().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function (arg0)
    {
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function Y(arg0)
    {
        var t0;
        var loc0;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var __pos__;
        t0 = asm1.A();
        loc0 = new (asm1.A())();
        __pos__ = 0x0;
        /* IL_00: nop  RefParameters.cs:13:5*/
        /* IL_01: ldarg.0  RefParameters.cs:14:9*/
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
        /* IL_18: ret  RefParameters.cs:15:5*/
        return ;
    };
    /* static System.Void Program.Z(C&)*/
    asm.x600000d_init = function ()
    {
        (asm1.C().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function (arg0)
    {
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function Z(arg0)
    {
        var t0;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var __pos__;
        var loc0;
        t0 = asm1.C();
        __pos__ = 0x0;
        /* IL_00: nop  RefParameters.cs:18:5*/
        /* IL_01: ldarg.0  RefParameters.cs:19:9*/
        st_03 = arg0;
        /* IL_02: newobj Void .ctor() */
        /* IL_07: stloc.0  */
        loc0 = CILJS.newobj(t0,asm1.x600000a,[null]);
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
        /* IL_11: ret  RefParameters.cs:20:5*/
        return ;
    };
    /* static System.Void Program.Main()*/
    asm.x600000e_init = function ()
    {
        (asm1.A().init)();
        (asm1.C().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        CILJS.init_base_types();
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var loc3;
        var __pos__;
        var loc0;
        var loc1;
        var loc4;
        var loc2;
        t0 = asm1.A();
        t1 = asm1.C();
        t2 = (asm0)["System.Int32"]();
        loc3 = new (asm1.A())();
        __pos__ = 0x0;
        /* IL_00: nop  RefParameters.cs:23:5*/
        /* IL_01: ldc.i4.1  */
        /* IL_02: stloc.0  */
        loc0 = (1|0);
        /* IL_03: ldloca.s 3 */
        /* IL_06: initobj A */
        loc3 = new t0();
        /* IL_0B: ldloca.s 3 */
        /* IL_0D: ldc.i4.1  */
        /* IL_0E: stfld Int32 U */
        loc3.U = (1|0);
        /* IL_13: ldloc.3  */
        /* IL_14: stloc.1  */
        loc1 = loc3;
        /* IL_15: newobj Void .ctor() */
        /* IL_1A: stloc.s 4 */
        loc4 = CILJS.newobj(t1,asm1.x600000a,[null]);
        /* IL_1C: ldloc.s 4 */
        /* IL_1E: ldc.i4.1  */
        /* IL_1F: stfld Int32 V */
        loc4.V = (1|0);
        /* IL_24: ldloc.s 4 */
        /* IL_26: stloc.2  */
        loc2 = loc4;
        /* IL_27: ldloca.s 0 */
        /* IL_29: call Void X(System.Int32&) */
        asm1.x600000b({
                'w': function (v)
                {
                    loc0 = v;
                },
                'r': function ()
                {
                    return loc0;
                }
            });
        /* IL_2E: nop  */
        /* IL_2F: ldloca.s 1 */
        /* IL_31: call Void Y(A&) */
        asm1.x600000c({
                'w': function (v)
                {
                    loc1 = v;
                },
                'r': function ()
                {
                    return loc1;
                }
            });
        /* IL_36: nop  */
        /* IL_37: ldloca.s 2 */
        /* IL_39: call Void Z(C&) */
        asm1.x600000d({
                'w': function (v)
                {
                    loc2 = v;
                },
                'r': function ()
                {
                    return loc2;
                }
            });
        /* IL_3E: nop  */
        /* IL_3F: ldloc.0  */
        /* IL_40: box System.Int32 */
        /* IL_45: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': loc0,
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_4A: nop  */
        /* IL_4B: ldloca.s 1 */
        /* IL_4D: ldfld Int32 U */
        /* IL_52: box System.Int32 */
        /* IL_57: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': loc1.U,
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_5C: nop  */
        /* IL_5D: ldloc.2  */
        /* IL_5E: ldfld Int32 V */
        /* IL_63: box System.Int32 */
        /* IL_68: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': loc2.V,
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_6D: nop  */
        /* IL_6E: ret  RefParameters.cs:35:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000f = function _ctor(arg0)
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
            CILJS.init_type(this,asm,"A",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.U = 0;
        });
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.V = 0;
        });
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
