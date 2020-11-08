var asm1;(function (asm)
{
    asm.FullName = "Structs.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001_init = function ()
    {
        (asm1.A().init)();
        asm.x6000001 = asm.x6000001_;
    };;
    asm.x6000001 = function ()
    {
        asm.x6000001_init();
        return asm.x6000001_();
    };;
    asm.x6000001_ = function Main()
    {
        var t0;
        var loc0;
        CILJS.init_base_types();
        t0 = asm1.A();
        loc0 = new (asm1.A())();
        /* IL_00: nop  */
        /* IL_01: ldloca.s 0 */
        /* IL_04: initobj A */
        loc0 = new t0();
        /* IL_09: ldloca.s 0 */
        /* IL_0B: ldc.i4 123456789 */
        /* IL_10: stfld Int32 Value */
        loc0.Value = 123456789;
        /* IL_15: ldloc.0  */
        /* IL_16: call Void Print(A) */
        asm1.x6000006(CILJS.clone_value(loc0));
        /* IL_1B: nop  */
        /* IL_1C: ldloc.0  */
        /* IL_1D: call Void Mutate(A) */
        asm1.x6000002(CILJS.clone_value(loc0));
        /* IL_22: nop  */
        /* IL_23: ldloc.0  */
        /* IL_24: call Void Print(A) */
        asm1.x6000006(CILJS.clone_value(loc0));
        /* IL_29: nop  */
        /* IL_2A: ldloc.0  */
        /* IL_2B: box A */
        /* IL_30: call Void MutateBoxed(System.Object) */
        asm1.x6000003(CILJS.make_box(CILJS.clone_value(loc0),t0));
        /* IL_35: nop  */
        /* IL_36: ldloc.0  */
        /* IL_37: call Void Print(A) */
        asm1.x6000006(CILJS.clone_value(loc0));
        /* IL_3C: nop  */
        /* IL_3D: ldloc.0  */
        /* IL_3E: call Void MutateGeneric[A](A) */
        (asm1.x6000004(asm1.A()))(CILJS.clone_value(loc0));
        /* IL_43: nop  */
        /* IL_44: ldloc.0  */
        /* IL_45: call Void Print(A) */
        asm1.x6000006(CILJS.clone_value(loc0));
        /* IL_4A: nop  */
        /* IL_4B: ret  */
        return ;
    };
    /* static System.Void Program.Mutate(A)*/
    asm.x6000002 = function Mutate(arg0)
    {
        var loc0;
        /* IL_00: nop  */
        /* IL_01: ldarga.s 0 */
        /* IL_03: ldc.i4.s 111 */
        /* IL_05: stfld Int32 Value */
        arg0.Value = 111;
        /* IL_0A: ldarg.0  */
        /* IL_0B: stloc.0  */
        loc0 = CILJS.clone_value(arg0);
        /* IL_0C: ldloca.s 0 */
        /* IL_0E: ldc.i4 222 */
        /* IL_13: stfld Int32 Value */
        loc0.Value = 222;
        /* IL_18: ldarg.0  */
        /* IL_19: call Void Print(A) */
        asm1.x6000006(CILJS.clone_value(arg0));
        /* IL_1E: nop  */
        /* IL_1F: ldloc.0  */
        /* IL_20: call Void Print(A) */
        asm1.x6000006(CILJS.clone_value(loc0));
        /* IL_25: nop  */
        /* IL_26: ret  */
        return ;
    };;
    /* static System.Void Program.MutateBoxed(Object)*/
    asm.x6000003 = function MutateBoxed(arg0)
    {
        var loc0;
        var loc1;
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: unbox.any A */
        /* IL_07: stloc.0  */
        loc0 = CILJS.clone_value(CILJS.unbox_any(arg0,asm1.A()));
        /* IL_08: ldloca.s 0 */
        /* IL_0A: ldc.i4 333 */
        /* IL_0F: stfld Int32 Value */
        loc0.Value = 333;
        /* IL_14: ldarg.0  */
        /* IL_15: unbox.any A */
        /* IL_1A: stloc.1  */
        loc1 = CILJS.clone_value(CILJS.unbox_any(arg0,asm1.A()));
        /* IL_1B: ldloca.s 1 */
        /* IL_1D: ldc.i4 444 */
        /* IL_22: stfld Int32 Value */
        loc1.Value = 444;
        /* IL_27: ldloc.0  */
        /* IL_28: call Void Print(A) */
        asm1.x6000006(CILJS.clone_value(loc0));
        /* IL_2D: nop  */
        /* IL_2E: ldloc.1  */
        /* IL_2F: call Void Print(A) */
        asm1.x6000006(CILJS.clone_value(loc1));
        /* IL_34: nop  */
        /* IL_35: ret  */
        return ;
    };;
    /* static System.Void Program.MutateGeneric<T>(T)*/
    asm.x6000004 = function (T)
    {
        return function MutateGeneric(arg0)
        {
            var t0;
            var loc0;
            var loc1;
            t0 = T;
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: box T */
            /* IL_07: unbox.any A */
            /* IL_0C: stloc.0  */
            loc0 = CILJS.clone_value(CILJS.unbox_any(CILJS.box(arg0,t0),asm1.A()));
            /* IL_0D: ldloca.s 0 */
            /* IL_0F: ldc.i4 555 */
            /* IL_14: stfld Int32 Value */
            loc0.Value = 555;
            /* IL_19: ldarg.0  */
            /* IL_1A: box T */
            /* IL_1F: unbox.any A */
            /* IL_24: stloc.1  */
            loc1 = CILJS.clone_value(CILJS.unbox_any(CILJS.box(arg0,t0),asm1.A()));
            /* IL_25: ldloca.s 1 */
            /* IL_27: ldc.i4 666 */
            /* IL_2C: stfld Int32 Value */
            loc1.Value = 666;
            /* IL_31: ldloc.0  */
            /* IL_32: call Void Print(A) */
            asm1.x6000006(CILJS.clone_value(loc0));
            /* IL_37: nop  */
            /* IL_38: ldloc.1  */
            /* IL_39: call Void Print(A) */
            asm1.x6000006(CILJS.clone_value(loc1));
            /* IL_3E: nop  */
            /* IL_3F: ret  */
            return ;
        };
    };;
    /* static System.Void Program.MutateField(A)*/
    asm.x6000005_init = function (arg0)
    {
        (asm1.Program().init)();
        asm.x6000005 = asm.x6000005_;
    };;
    asm.x6000005 = function (arg0)
    {
        asm.x6000005_init(arg0);
        return asm.x6000005_(arg0);
    };;
    asm.x6000005_ = function MutateField(arg0)
    {
        var t0;
        t0 = asm1.Program();
        /* IL_00: nop  */
        /* IL_01: ldarga.s 0 */
        /* IL_03: ldc.i4 777 */
        /* IL_08: stfld Int32 Value */
        arg0.Value = 777;
        /* IL_0D: ldarg.0  */
        /* IL_0E: stsfld A sfield */
        t0.sfield = arg0;
        /* IL_13: ldsflda A sfield */
        /* IL_18: ldc.i4 888 */
        /* IL_1D: stfld Int32 Value */
        t0.sfield.Value = 888;
        /* IL_22: ldarg.0  */
        /* IL_23: call Void Print(A) */
        asm1.x6000006(CILJS.clone_value(arg0));
        /* IL_28: nop  */
        /* IL_29: ldsfld A sfield */
        /* IL_2E: call Void Print(A) */
        asm1.x6000006(CILJS.clone_value(t0.sfield));
        /* IL_33: nop  */
        /* IL_34: ret  */
        return ;
    };
    /* static System.Void Program.Print(A)*/
    asm.x6000006 = function Print(arg0)
    {
        var t0;
        t0 = asm0["System.Int32"]();
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: ldfld Int32 Value */
        /* IL_07: box System.Int32 */
        /* IL_0C: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(arg0.Value,t0));
        /* IL_11: nop  */
        /* IL_12: ret  */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
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
            CILJS.init_type(this,asm,"A",true,false,false,false,false,[],[],asm0["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm1.t2000002",new (asm1.A())());
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x6000148");
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function A() { c.init();this.Value = 0 }");
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return asm0["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.sfield = new (asm1.A())();
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000001;
})(asm1 || (asm1 = {}));
if (typeof module != "undefined"){
    module.exports = asm1;
}
//# sourceMappingURL=Structs.cs.ciljs.exe.js.map
