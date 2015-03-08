var asm1; (function (asm)
{
    asm.FullName = "ArrayVariance.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static Void Main()*/
    asm.x600000d_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.I().init)();
        ((asm0)["System.Array`1"](asm1.I()).init)();
        (asm1.B().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function ()
    {
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var loc0;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.I();
        t2 = (asm0)["System.Array`1"](t1);
        t3 = asm1.B();
        /* IL_00: ldc.i4.1 */
        /* IL_01: newarr I*/
        /* IL_06: stloc.0 */
        loc0 = BLR.new_array(t1,(1|0));
        /* IL_07: ldloc.0 */
        /* IL_08: call Void M(System.Object)*/
        asm1.x600000e(loc0);
        /* IL_0D: ldloc.0 */
        /* IL_0E: castclass I[]*/
        /* IL_13: ldc.i4.0 */
        /* IL_14: ldelem.ref */
        /* IL_15: castclass B*/
        /* IL_1A: ldfld String X*/
        /* IL_1F: call Void Log(System.Object)*/
        asm1.x6000001(BLR.cast_class(BLR.ldelem_ref(BLR.cast_class(loc0,t2),(0|0)),t3).X);
        /* IL_24: ret */
        return ;
    };
    /* static Void M(System.Object)*/
    asm.x600000e_init = function ()
    {
        ((asm0)["System.Object"]().init)();
        ((asm0)["System.Array`1"]((asm0)["System.Object"]()).init)();
        (asm1.B().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function (arg0)
    {
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function M(arg0)
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
        t2 = asm1.B();
        /* IL_00: ldarg.0 */
        /* IL_01: castclass System.Object[]*/
        /* IL_06: stloc.0 */
        loc0 = BLR.cast_class(arg0,t1);
        /* IL_07: ldloc.0 */
        st_05 = loc0;
        /* IL_08: ldc.i4.0 */
        st_06 = (0|0);
        /* IL_09: newobj Void .ctor()*/
        /* IL_0E: stloc.1 */
        loc1 = BLR.newobj(t2,asm1.x600000c,[null]);
        /* IL_0F: ldloc.1 */
        st_03 = loc1;
        /* IL_10: ldstr X*/
        st_04 = BLR.new_string("X");
        /* IL_15: stfld String X*/
        st_03.X = st_04;
        /* IL_1A: ldloc.1 */
        st_07 = loc1;
        /* IL_1B: stelem.ref */
        BLR.stelem_ref(st_05,st_06,st_07);
        /* IL_1C: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
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
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.I = BLR.declare_type(
        "I",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"I",false,false,true,false,false,[],[],null,BLR.is_inst_interface(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
        });
    asm.B = BLR.declare_type(
        "B",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.I()],
                {});
            this.prototype.X = null;
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
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000d;
})(asm1 || (asm1 = {}));
