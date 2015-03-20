var asm1; (function (asm)
{
    asm.FullName = "StructArray.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000a_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.A().init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function ()
    {
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Main()
    {
        var t0;
        var t1;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.A();
        __pos__ = 0x0;
        /* IL_00: ldc.i4.1 */
        /* IL_01: newarr A*/
        /* IL_06: stloc.0 */
        loc0 = BLR.new_array(t1,(1|0));
        /* IL_07: ldloc.0 */
        /* IL_08: call Void Populate(A[])*/
        asm1.x600000d(loc0);
        /* IL_0D: ldloc.0 */
        /* IL_0E: call Void Print(A[])*/
        asm1.x600000c(loc0);
        /* IL_13: ldloc.0 */
        /* IL_14: call Void PrintAsObject(System.Object)*/
        asm1.x600000b(loc0);
        /* IL_19: ret */
        return ;
    };
    /* static System.Void Program.PrintAsObject(Object)*/
    asm.x600000b_init = function ()
    {
        (asm1.A().init)();
        ((asm0)["System.Array`1"](asm1.A()).init)();
        ((asm0)["System.Int32"]().init)();
        asm.x600000b = asm.x600000b_;
    };;
    asm.x600000b = function (arg0)
    {
        asm.x600000b_init.apply(this,arguments);
        return asm.x600000b_.apply(this,arguments);
    };;
    asm.x600000b_ = function PrintAsObject(arg0)
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        t0 = asm1.A();
        t1 = (asm0)["System.Array`1"](t0);
        t2 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: castclass A[]*/
        /* IL_06: ldc.i4.0 */
        /* IL_07: ldelema A*/
        /* IL_0C: ldobj A*/
        /* IL_11: ldfld Int32 X*/
        /* IL_16: box System.Int32*/
        /* IL_1B: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (BLR.cast_class(arg0,t1).jsarr)[(0|0)].X,
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_20: ret */
        return ;
    };
    /* static System.Void Program.Print(A[])*/
    asm.x600000c_init = function ()
    {
        ((asm0)["System.Int32"]().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function (arg0)
    {
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function Print(arg0)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.0 */
        /* IL_02: ldelema A*/
        /* IL_07: ldfld Int32 X*/
        /* IL_0C: box System.Int32*/
        /* IL_11: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (arg0.jsarr)[(0|0)].X,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_16: ret */
        return ;
    };
    /* static System.Void Program.Populate(A[])*/
    asm.x600000d_init = function ()
    {
        (asm1.A().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function (arg0)
    {
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function Populate(arg0)
    {
        var t0;
        var loc0;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var __pos__;
        t0 = asm1.A();
        loc0 = new (asm1.A())();
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.0 */
        /* IL_02: ldelema A*/
        st_05 = {
            'w': function (v)
            {
                (arg0.jsarr)[(0|0)] = v;
            },
            'r': function ()
            {
                return (arg0.jsarr)[(0|0)];
            }
        };
        /* IL_07: ldloca.s 0*/
        /* IL_0A: initobj A*/
        loc0 = new t0();
        /* IL_0F: ldloca.s 0*/
        st_03 = {
            'w': function (v)
            {
                loc0 = v;
            },
            'r': function ()
            {
                return loc0;
            }
        };
        /* IL_11: ldc.i4.s 123*/
        st_04 = (123|0);
        /* IL_13: stfld Int32 X*/
        st_03.r().X = st_04;
        /* IL_18: ldloc.0 */
        st_06 = loc0;
        /* IL_19: stobj A*/
        st_05.w(st_06);
        /* IL_1E: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
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
            this.prototype.X = 0;
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));
