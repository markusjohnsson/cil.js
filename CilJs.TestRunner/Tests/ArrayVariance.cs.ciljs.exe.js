var asm2;(function (asm)
{
    asm.FullName = "ArrayVariance.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  B..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000002_init = function ()
    {
        (asm2.I().init)();
        ((asm0)["System.Array`1"](asm2.I()).init)();
        (asm2.B().init)();
        asm.x6000002 = asm.x6000002_;
    };;
    asm.x6000002 = function ()
    {
        asm.x6000002_init.apply(this,arguments);
        return asm.x6000002_.apply(this,arguments);
    };;
    asm.x6000002_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var loc0;
        CILJS.init_base_types();
        t0 = asm2.I();
        t1 = (asm0)["System.Array`1"](t0);
        t2 = asm2.B();
        /* IL_00: ldc.i4.1  */
        /* IL_01: newarr I */
        /* IL_06: stloc.0  */
        loc0 = CILJS.new_array(t0,(1|0));
        /* IL_07: ldloc.0  */
        /* IL_08: call Void M(System.Object) */
        asm2.x6000003(loc0);
        /* IL_0D: ldloc.0  */
        /* IL_0E: castclass I[] */
        /* IL_13: ldc.i4.0  */
        /* IL_14: ldelem.ref  */
        /* IL_15: castclass B */
        /* IL_1A: ldfld String X */
        /* IL_1F: call Void Log(System.Object) */
        asm1.x6000001(CILJS.cast_class(CILJS.ldelem_ref(CILJS.cast_class(loc0,t1),(0|0)),t2).X);
        /* IL_24: ret  */
        return ;
    };
    /* static System.Void Program.M(Object)*/
    asm.x6000003_init = function ()
    {
        ((asm0)["System.Array`1"]((asm0)["System.Object"]()).init)();
        (asm2.B().init)();
        asm.x6000003 = asm.x6000003_;
    };;
    asm.x6000003 = function (arg0)
    {
        asm.x6000003_init.apply(this,arguments);
        return asm.x6000003_.apply(this,arguments);
    };;
    asm.x6000003_ = function M(arg0)
    {
        var t0;
        var t1;
        var t2;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Object"]();
        t1 = (asm0)["System.Array`1"](t0);
        t2 = asm2.B();
        /* IL_00: ldarg.0  */
        /* IL_01: castclass System.Object[] */
        /* IL_06: stloc.0  */
        loc0 = CILJS.cast_class(arg0,t1);
        /* IL_07: ldloc.0  */
        st_05 = loc0;
        /* IL_08: ldc.i4.0  */
        st_06 = (0|0);
        /* IL_09: newobj Void .ctor() */
        /* IL_0E: stloc.1  */
        loc1 = CILJS.newobj(t2,asm2.x6000001,[null]);
        /* IL_0F: ldloc.1  */
        st_03 = loc1;
        /* IL_10: ldstr X */
        st_04 = CILJS.new_string("X");
        /* IL_15: stfld String X */
        st_03.X = st_04;
        /* IL_1A: ldloc.1  */
        st_07 = loc1;
        /* IL_1B: stelem.ref  */
        CILJS.stelem_ref(st_05,st_06,st_07);
        /* IL_1C: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.I = CILJS.declare_type(
        "I",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"I",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.I()],
                {});
            this.prototype.X = null;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000002;
})(asm2 || (asm2 = {}));
