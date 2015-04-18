var asm1;(function (asm)
{
    asm.FullName = "MethodInfoInvoke.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* System.String A.X(String)*/
    asm.x600000b = function X(arg0, arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  MethodInfoInvoke.cs:12:5*/
        /* IL_01: ldarg.1  */
        /* IL_02: call Void Log(System.Object) */
        asm1.x6000001(arg1);
        /* IL_07: nop  */
        /* IL_08: ldarg.0  */
        /* IL_09: ldfld String Y */
        /* IL_0E: ldarg.1  */
        /* IL_0F: call String Concat(System.String, System.String) */
        /* IL_14: stloc.0  */
        loc0 = asm0.x60001bb(arg0.AY,arg1);
        /* IL_17: ldloc.0  */
        /* IL_18: ret  */
        return loc0;
    };;
    /*  A..ctor(String)*/
    asm.x600000a = function _ctor(arg0, arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: nop  MethodInfoInvoke.cs:7:5*/
        /* IL_08: ldarg.0  */
        /* IL_09: ldarg.1  */
        /* IL_0A: stfld String Y */
        arg0.AY = arg1;
        /* IL_0F: nop  MethodInfoInvoke.cs:9:5*/
        /* IL_10: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000c_init = function ()
    {
        (asm1.A().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        CILJS.init_base_types();
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function Main()
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
        var __pos__;
        var loc0;
        var loc1;
        t0 = asm1.A();
        t1 = (asm0)["System.Object"]();
        __pos__ = 0x0;
        /* IL_00: nop  MethodInfoInvoke.cs:23:5*/
        /* IL_01: ldtoken A */
        /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_0B: callvirt MethodInfo[] GetMethods() */
        /* IL_10: ldc.i4.0  */
        /* IL_11: ldelem.ref  */
        /* IL_12: stloc.0  */
        loc0 = CILJS.ldelem_ref((((asm0.x60000e1(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60000f1"])())(asm0.x60000e1(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),(0|0));
        /* IL_13: ldloc.0  MethodInfoInvoke.cs:25:9*/
        st_0B = loc0;
        /* IL_14: ldstr Hello */
        /* IL_19: newobj Void .ctor(System.String) */
        st_0C = CILJS.newobj(t0,asm1.x600000a,[null, CILJS.new_string("Hello")]);
        /* IL_1E: ldc.i4.1  */
        /* IL_1F: newarr System.Object */
        /* IL_24: stloc.1  */
        loc1 = CILJS.new_array(t1,(1|0));
        /* IL_25: ldloc.1  */
        st_08 = loc1;
        /* IL_26: ldc.i4.0  */
        st_09 = (0|0);
        /* IL_27: ldstr World */
        st_0A = CILJS.new_string("World");
        /* IL_2C: stelem.ref  */
        CILJS.stelem_ref(st_08,st_09,st_0A);
        /* IL_2D: ldloc.1  */
        st_0D = loc1;
        /* IL_2E: callvirt Object Invoke(System.Object, System.Object[]) */
        st_0E = asm0.x6000046(st_0B,st_0C,st_0D);
        /* IL_33: call Void Log(System.Object) */
        asm1.x6000001(st_0E);
        /* IL_38: nop  */
        /* IL_39: ret  MethodInfoInvoke.cs:26:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000d = function _ctor(arg0)
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
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1, "x600000b", "X"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.AY = null;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
