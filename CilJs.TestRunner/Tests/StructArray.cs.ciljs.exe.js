var asm2; (function (asm)
{
    asm.FullName = "StructArray.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001_init = function ()
    {
        (asm2.A().init)();
        asm.x6000001 = asm.x6000001_;
    };;
    asm.x6000001 = function ()
    {
        asm.x6000001_init.apply(this,arguments);
        return asm.x6000001_.apply(this,arguments);
    };;
    asm.x6000001_ = function Main()
    {
        var t0;
        var loc0;
        CILJS.init_base_types();
        t0 = asm2.A();
        /* IL_00: ldc.i4.1 */
        /* IL_01: newarr A*/
        /* IL_06: stloc.0 */
        loc0 = CILJS.new_array(t0,(1|0));
        /* IL_07: ldloc.0 */
        /* IL_08: call Void Populate(A[])*/
        asm2.x6000004(loc0);
        /* IL_0D: ldloc.0 */
        /* IL_0E: call Void Print(A[])*/
        asm2.x6000003(loc0);
        /* IL_13: ldloc.0 */
        /* IL_14: call Void PrintAsObject(System.Object)*/
        asm2.x6000002(loc0);
        /* IL_19: ret */
        return ;
    };
    /* static System.Void Program.PrintAsObject(Object)*/
    asm.x6000002_init = function ()
    {
        (asm2.A().init)();
        ((asm0)["System.Array`1"](asm2.A()).init)();
        asm.x6000002 = asm.x6000002_;
    };;
    asm.x6000002 = function (arg0)
    {
        asm.x6000002_init.apply(this,arguments);
        return asm.x6000002_.apply(this,arguments);
    };;
    asm.x6000002_ = function PrintAsObject(arg0)
    {
        var t0;
        var t1;
        var t2;
        t0 = asm2.A();
        t1 = (asm0)["System.Array`1"](t0);
        t2 = (asm0)["System.Int32"]();
        /* IL_00: ldarg.0 */
        /* IL_01: castclass A[]*/
        /* IL_06: ldc.i4.0 */
        /* IL_07: ldelema A*/
        /* IL_0C: ldobj A*/
        /* IL_11: ldfld Int32 X*/
        /* IL_16: box System.Int32*/
        /* IL_1B: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (CILJS.cast_class(arg0,t1).jsarr)[(0|0)].X,
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_20: ret */
        return ;
    };
    /* static System.Void Program.Print(A[])*/
    asm.x6000003 = function Print(arg0)
    {
        var t0;
        t0 = (asm0)["System.Int32"]();
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
    };;
    /* static System.Void Program.Populate(A[])*/
    asm.x6000004_init = function ()
    {
        (asm2.A().init)();
        asm.x6000004 = asm.x6000004_;
    };;
    asm.x6000004 = function (arg0)
    {
        asm.x6000004_init.apply(this,arguments);
        return asm.x6000004_.apply(this,arguments);
    };;
    asm.x6000004_ = function Populate(arg0)
    {
        var t0;
        var loc0;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        t0 = asm2.A();
        loc0 = new (asm2.A())();
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
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
            CILJS.init_type(this,asm,"A",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.X = 0;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000001;
})(asm2 || (asm2 = {}));
