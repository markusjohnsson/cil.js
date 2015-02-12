var asm1; (function (asm)
{
    asm.FullName = "RefParameters.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static Void Log(System.Object)*/
    asm.x6000001 = braille_test_log;;
    /* Void .ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void X(System.Int32&)*/
    asm.x600000d = function X(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.2 */
        /* IL_02: stind.i4 */
        arg0.w((2|0));
        /* IL_03: ret */
        return ;
    };;
    /* static Void Y(A&)*/
    asm.x600000e_init = function ()
    {
        (asm1.A().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function (arg0)
    {
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function Y(arg0)
    {
        var t0;
        var loc0;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        t0 = asm1.A();
        loc0 = new (asm1.A())();
        /* IL_00: ldarg.0 */
        st_03 = arg0;
        /* IL_01: ldloca.s 0*/
        /* IL_04: initobj A*/
        loc0 = new t0();
        /* IL_09: ldloca.s 0*/
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
        /* IL_0B: ldc.i4.3 */
        st_02 = (3|0);
        /* IL_0C: stfld Int32 U*/
        st_01.r().U = st_02;
        /* IL_11: ldloc.0 */
        st_04 = loc0;
        /* IL_12: stobj A*/
        st_03.w(st_04);
        /* IL_17: ret */
        return ;
    };
    /* static Void Z(C&)*/
    asm.x600000f_init = function ()
    {
        (asm1.C().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function (arg0)
    {
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function Z(arg0)
    {
        var t0;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        t0 = asm1.C();
        /* IL_00: ldarg.0 */
        st_03 = arg0;
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: stloc.0 */
        loc0 = BLR.newobj(t0,asm1.x600000c,[null]);
        /* IL_07: ldloc.0 */
        st_01 = loc0;
        /* IL_08: ldc.i4.4 */
        st_02 = (4|0);
        /* IL_09: stfld Int32 V*/
        st_01.V = st_02;
        /* IL_0E: ldloc.0 */
        st_04 = loc0;
        /* IL_0F: stind.ref */
        st_03.w(st_04);
        /* IL_10: ret */
        return ;
    };
    /* static Void Main()*/
    asm.x6000010_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.A().init)();
        (asm1.C().init)();
        ((asm0)["System.Int32"]().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        asm.x6000010_init.apply(this,arguments);
        return asm.x6000010_.apply(this,arguments);
    };;
    asm.x6000010_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var loc3;
        var loc0;
        var loc1;
        var loc4;
        var loc2;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.A();
        t2 = asm1.C();
        t3 = (asm0)["System.Int32"]();
        loc3 = new (asm1.A())();
        /* IL_00: ldc.i4.1 */
        /* IL_01: stloc.0 */
        loc0 = (1|0);
        /* IL_02: ldloca.s 3*/
        /* IL_05: initobj A*/
        loc3 = new t1();
        /* IL_0A: ldloca.s 3*/
        /* IL_0C: ldc.i4.1 */
        /* IL_0D: stfld Int32 U*/
        loc3.U = (1|0);
        /* IL_12: ldloc.3 */
        /* IL_13: stloc.1 */
        loc1 = loc3;
        /* IL_14: newobj Void .ctor()*/
        /* IL_19: stloc.s 4*/
        loc4 = BLR.newobj(t2,asm1.x600000c,[null]);
        /* IL_1B: ldloc.s 4*/
        /* IL_1D: ldc.i4.1 */
        /* IL_1E: stfld Int32 V*/
        loc4.V = (1|0);
        /* IL_23: ldloc.s 4*/
        /* IL_25: stloc.2 */
        loc2 = loc4;
        /* IL_26: ldloca.s 0*/
        /* IL_28: call Void X(System.Int32&)*/
        asm1.x600000d({
                'w': function (v)
                {
                    loc0 = v;
                },
                'r': function ()
                {
                    return loc0;
                }
            });
        /* IL_2D: ldloca.s 1*/
        /* IL_2F: call Void Y(A&)*/
        asm1.x600000e({
                'w': function (v)
                {
                    loc1 = v;
                },
                'r': function ()
                {
                    return loc1;
                }
            });
        /* IL_34: ldloca.s 2*/
        /* IL_36: call Void Z(C&)*/
        asm1.x600000f({
                'w': function (v)
                {
                    loc2 = v;
                },
                'r': function ()
                {
                    return loc2;
                }
            });
        /* IL_3B: ldloc.0 */
        /* IL_3C: box System.Int32*/
        /* IL_41: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': loc0,
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_46: ldloca.s 1*/
        /* IL_48: ldfld Int32 U*/
        /* IL_4D: box System.Int32*/
        /* IL_52: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': loc1.U,
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_57: ldloc.2 */
        /* IL_58: ldfld Int32 V*/
        /* IL_5D: box System.Int32*/
        /* IL_62: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': loc2.V,
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_67: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x6000011 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.TestHelper = BLR.declare_type(
        "TestHelper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestHelper",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
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
            BLR.init_type(this,asm,"A",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm1.t2000007");
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
            BLR.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
