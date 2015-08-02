var asm2; (function (asm)
{
    asm.FullName = "MethodInfoInvoke.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.String A.X(String)*/
    asm.x6000002 = function X(arg0,arg1)
    {
        /* IL_00: ldarg.1 */
        /* IL_01: call Void Log(System.Object)*/
        asm1.x6000001(arg1);
        /* IL_06: ldarg.0 */
        /* IL_07: ldfld String Y*/
        /* IL_0C: ldarg.1 */
        /* IL_0D: call String Concat(System.String, System.String)*/
        /* IL_12: ret */
        return asm0.x6000127(arg0.AY,arg1);
    };;
    /*  A..ctor(String)*/
    asm.x6000001 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: stfld String Y*/
        arg0.AY = arg1;
        /* IL_0D: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000003_init = function ()
    {
        (asm2.A().init)();
        asm.x6000003 = asm.x6000003_;
    };;
    asm.x6000003 = function ()
    {
        asm.x6000003_init.apply(this,arguments);
        return asm.x6000003_.apply(this,arguments);
    };;
    asm.x6000003_ = function Main()
    {
        var t0;
        var t1;
        var st_08;
        var st_09;
        var st_0A;
        var st_0B;
        var st_0C;
        var st_0D;
        var st_0E;
        var loc0;
        var loc1;
        CILJS.init_base_types();
        t0 = asm2.A();
        t1 = (asm0)["System.Object"]();
        /* IL_00: ldtoken A*/
        /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_0A: callvirt MethodInfo[] GetMethods()*/
        /* IL_0F: ldc.i4.0 */
        /* IL_10: ldelem.ref */
        /* IL_11: stloc.0 */
        loc0 = CILJS.ldelem_ref((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x6000157"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),(0|0));
        /* IL_12: ldloc.0 */
        st_0B = loc0;
        /* IL_13: ldstr Hello*/
        /* IL_18: newobj Void .ctor(System.String)*/
        st_0C = CILJS.newobj(t0,asm2.x6000001,[null, CILJS.new_string("Hello")]);
        /* IL_1D: ldc.i4.1 */
        /* IL_1E: newarr System.Object*/
        /* IL_23: stloc.1 */
        loc1 = CILJS.new_array(t1,(1|0));
        /* IL_24: ldloc.1 */
        st_08 = loc1;
        /* IL_25: ldc.i4.0 */
        st_09 = (0|0);
        /* IL_26: ldstr World*/
        st_0A = CILJS.new_string("World");
        /* IL_2B: stelem.ref */
        CILJS.stelem_ref(st_08,st_09,st_0A);
        /* IL_2C: ldloc.1 */
        st_0D = loc1;
        /* IL_2D: callvirt Object Invoke(System.Object, System.Object[])*/
        st_0E = asm0.x60001ac(st_0B,st_0C,st_0D);
        /* IL_32: call Void Log(System.Object)*/
        asm1.x6000001(st_0E);
        /* IL_37: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000004 = function _ctor(arg0)
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
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm2, "x6000002", "X"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.AY = null;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000003;
})(asm2 || (asm2 = {}));
