var asm1; (function (asm)
{
    asm.FullName = "OutParameters.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
        /* IL_00: nop  OutParameters.cs:8:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldc.i4.2  */
        /* IL_03: stind.i4  */
        arg0.w((2|0));
        /* IL_04: ret  OutParameters.cs:10:5*/
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
        /* IL_00: nop  OutParameters.cs:13:5*/
        /* IL_01: ldarg.0  OutParameters.cs:14:9*/
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
        /* IL_18: ret  OutParameters.cs:15:5*/
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
        /* IL_00: nop  OutParameters.cs:18:5*/
        /* IL_01: ldarg.0  OutParameters.cs:19:9*/
        st_03 = arg0;
        /* IL_02: newobj Void .ctor() */
        /* IL_07: stloc.0  */
        loc0 = BLR.newobj(t0,asm1.x600000a,[null]);
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
        /* IL_11: ret  OutParameters.cs:20:5*/
        return ;
    };
    /* static System.Void Program.Main()*/
    asm.x600000e_init = function ()
    {
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        BLR.init_base_types();
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function Main()
    {
        var t0;
        var loc0;
        var loc1;
        var loc2;
        var __pos__;
        t0 = (asm0)["System.Int32"]();
        loc0 = 0;
        loc1 = new (asm1.A())();
        loc2 = null;
        __pos__ = 0x0;
        /* IL_00: nop  OutParameters.cs:23:5*/
        /* IL_01: ldloca.s 0 */
        /* IL_03: call Void X(System.Int32&) */
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
        /* IL_08: nop  */
        /* IL_09: ldloca.s 1 */
        /* IL_0B: call Void Y(A&) */
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
        /* IL_10: nop  */
        /* IL_11: ldloca.s 2 */
        /* IL_13: call Void Z(C&) */
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
        /* IL_18: nop  */
        /* IL_19: ldloc.0  */
        /* IL_1A: box System.Int32 */
        /* IL_1F: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': loc0,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_24: nop  */
        /* IL_25: ldloca.s 1 */
        /* IL_27: ldfld Int32 U */
        /* IL_2C: box System.Int32 */
        /* IL_31: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': loc1.U,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_36: nop  */
        /* IL_37: ldloc.2  */
        /* IL_38: ldfld Int32 V */
        /* IL_3D: box System.Int32 */
        /* IL_42: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': loc2.V,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_47: nop  */
        /* IL_48: ret  OutParameters.cs:35:5*/
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
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.U = 0;
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
            BLR.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.V = 0;
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
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
