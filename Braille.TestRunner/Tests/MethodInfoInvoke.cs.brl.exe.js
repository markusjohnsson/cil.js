var asm1; (function (asm)
{
    asm.FullName = "MethodInfoInvoke.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.String A.X(String)*/
    asm.x600000b = function X(arg0,arg1)
    {
        /* IL_00: ldarg.1 */
        /* IL_01: call Void Log(System.Object)*/
        asm1.x6000001(arg1);
        /* IL_06: ldarg.0 */
        /* IL_07: ldfld String Y*/
        /* IL_0C: ldarg.1 */
        /* IL_0D: call String Concat(System.String, System.String)*/
        /* IL_12: ret */
        return asm0.x6000177(arg0.AY,arg1);
    };;
    /*  A..ctor(String)*/
    asm.x600000a = function _ctor(arg0,arg1)
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
    asm.x600000c_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.A().init)();
        ((asm0)["System.Object"]().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var st_08;
        var st_09;
        var st_0A;
        var st_0B;
        var st_0C;
        var st_0D;
        var st_0E;
        var loc0;
        var loc1;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.A();
        t2 = (asm0)["System.Object"]();
        /* IL_00: ldtoken A*/
        /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_0A: callvirt MethodInfo[] GetMethods()*/
        /* IL_0F: ldc.i4.0 */
        /* IL_10: ldelem.ref */
        /* IL_11: stloc.0 */
        loc0 = BLR.ldelem_ref((((asm0.x60000b3(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).vtable)["asm0.x60000c3"])())(asm0.x60000b3(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))),(0|0));
        /* IL_12: ldloc.0 */
        st_0B = loc0;
        /* IL_13: ldstr Hello*/
        /* IL_18: newobj Void .ctor(System.String)*/
        st_0C = BLR.newobj(t1,asm1.x600000a,[null, BLR.new_string("Hello")]);
        /* IL_1D: ldc.i4.1 */
        /* IL_1E: newarr System.Object*/
        /* IL_23: stloc.1 */
        loc1 = BLR.new_array(t2,(1|0));
        /* IL_24: ldloc.1 */
        st_08 = loc1;
        /* IL_25: ldc.i4.0 */
        st_09 = (0|0);
        /* IL_26: ldstr World*/
        st_0A = BLR.new_string("World");
        /* IL_2B: stelem.ref */
        BLR.stelem_ref(st_08,st_09,st_0A);
        /* IL_2C: ldloc.1 */
        st_0D = loc1;
        /* IL_2D: callvirt Object Invoke(System.Object, System.Object[])*/
        st_0E = asm0.x6000046(st_0B,st_0C,st_0D);
        /* IL_32: call Void Log(System.Object)*/
        asm1.x6000001(st_0E);
        /* IL_37: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000d = function _ctor(arg0)
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
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1, "x600000b", "X"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.AY = null;
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
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
