var asm1; (function (asm)
{
    asm.FullName = "Closure.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* String get_Prop()*/
    asm.x600000c = function get_Prop(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld String <Prop>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["A<Prop>k__BackingField"];
    };;
    /* Void set_Prop(System.String)*/
    asm.x600000d = function set_Prop(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld String <Prop>k__BackingField*/
        (arg0)["A<Prop>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void Invoke()*/
    asm.x6000010 = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    /* Void .ctor(System.Object, System.IntPtr)*/
    asm.x600000f = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    /* static Void Main()*/
    asm.x6000011_init = function ()
    {
        (((asm0)["System.ValueType"])().init)();
        (((asm1)["Program+<>c__DisplayClass2"])().init)();
        ((asm1.A)().init)();
        ((asm1.X)().init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function ()
    {
        (asm.x6000011_init.apply)(this,arguments);
        return (asm.x6000011_.apply)(this,arguments);
    };;
    asm.x6000011_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var loc2;
        var loc1;
        var loc0;
        t0 = ((asm0)["System.ValueType"])();
        t1 = ((asm1)["Program+<>c__DisplayClass2"])();
        t2 = (asm1.A)();
        t3 = (asm1.X)();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.2 */
        loc2 = (BLR.newobj)(t1,asm1.x6000013,[
            null
        ]);
        /* IL_06: ldloc.2 */
        st_04 = loc2;
        /* IL_07: newobj Void .ctor()*/
        /* IL_0C: stloc.1 */
        loc1 = (BLR.newobj)(t2,asm1.x600000e,[
            null
        ]);
        /* IL_0D: ldloc.1 */
        st_02 = loc1;
        /* IL_0E: ldstr hello*/
        st_03 = (BLR.new_string)("hello");
        /* IL_13: callvirt Void set_Prop(System.String)*/
        (asm1.x600000d)(st_02,st_03);
        /* IL_18: ldloc.1 */
        st_05 = loc1;
        /* IL_19: stfld A a*/
        st_04.a = st_05;
        /* IL_1E: ldloc.2 */
        /* IL_1F: ldnull */
        /* IL_20: stfld A b*/
        loc2.b = null;
        /* IL_25: ldloc.2 */
        /* IL_27: ldftn Void <Main>b__1()*/
        /* IL_2C: newobj Void .ctor(System.Object, System.IntPtr)*/
        /* IL_31: stloc.0 */
        loc0 = (BLR.newobj)(t3,asm1.x600000f,[
            null,
            loc2,
            asm1.x6000014
        ]);
        /* IL_32: ldloc.0 */
        /* IL_33: callvirt Void Invoke()*/
        (loc0._methodPtr.apply)(null,((loc0._target) ? ([
            loc0._target
        ]) : ([])));
        /* IL_38: ldloc.2 */
        /* IL_39: ldfld A b*/
        /* IL_3E: callvirt String get_Prop()*/
        /* IL_43: call Void Log(System.Object)*/
        (asm1.x6000001)((asm1.x600000c)(loc2.b));
        /* IL_48: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void <Main>b__1()*/
    asm.x6000014 = function _Main_b__1(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld A a*/
        /* IL_07: stfld A b*/
        arg0.b = arg0.a;
        /* IL_0C: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000013 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.TestLog = (BLR.declare_type)("TestLog",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"TestLog",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000002");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.TestHelper = (BLR.declare_type)("TestHelper",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"TestHelper",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000006");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.A = (BLR.declare_type)("A",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"A",asm,false,false,false,false,false,[],[
            [
                asm1,
                "x600000c",
                "get_Prop"
            ],
            [
                asm1,
                "x600000d",
                "set_Prop"
            ]
        ],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000007");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
        (this.prototype)["A<Prop>k__BackingField"] = null;
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.X = (BLR.declare_type)("X",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"X",asm,false,false,false,false,false,[],[
            [
                asm1,
                "x6000010",
                "Invoke"
            ]
        ],((asm0)["System.MulticastDelegate"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000008");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm1.x6000010","asm1.x6000010");
        (BLR.declare_virtual)(this,"asm0.x6000073","asm0.x600007c");
        (BLR.declare_virtual)(this,"asm0.x6000072","asm0.x600007d");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000074");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000077");
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        this.prototype._invocationList = null;
        this.prototype._methodPtr = null;
        this.prototype._target = null;
    },function ()
    {
        return {};
    },[]);
    asm.Program = (BLR.declare_type)("Program",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000009");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    (asm)["Program+<>c__DisplayClass2"] = (BLR.declare_type)("__c__DisplayClass2",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Program+<>c__DisplayClass2",asm,false,false,false,false,false,[],[
            [
                asm1,
                "x6000014",
                "<Main>b__1"
            ]
        ],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t200000a");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
        this.prototype.a = null;
        this.prototype.b = null;
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
