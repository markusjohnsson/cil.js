var asm1; (function (asm)
{
    asm.FullName = "NewslotMethod.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* Void M()*/
    asm.x600000c = function M(arg0)
    {
        /* IL_00: ldstr a*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("a"));
        /* IL_0A: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void M()*/
    asm.x600000e = function M(arg0)
    {
        /* IL_00: ldstr b*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("b"));
        /* IL_0A: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x600000d)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void M()*/
    asm.x6000010 = function M(arg0)
    {
        /* IL_00: ldstr c*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("c"));
        /* IL_0A: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000011 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x600000f)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x6000012_init = function ()
    {
        (((asm0)["System.ValueType"])().init)();
        ((asm1.Z)().init)();
        asm.x6000012 = asm.x6000012_;
    };;
    asm.x6000012 = function ()
    {
        (asm.x6000012_init.apply)(this,arguments);
        return (asm.x6000012_.apply)(this,arguments);
    };;
    asm.x6000012_ = function Main()
    {
        var t0;
        var t1;
        var loc0;
        var loc1;
        var loc2;
        t0 = ((asm0)["System.ValueType"])();
        t1 = (asm1.Z)();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = (BLR.newobj)(t1,asm1.x6000011,[
            null
        ]);
        /* IL_06: ldloc.0 */
        /* IL_07: callvirt Void M()*/
        (asm1.x6000010)(loc0);
        /* IL_0C: ldloc.0 */
        /* IL_0D: stloc.1 */
        loc1 = loc0;
        /* IL_0E: ldloc.1 */
        /* IL_0F: callvirt Void M()*/
        (((loc1.vtable)["asm1.x600000c"])())(loc1);
        /* IL_14: ldloc.0 */
        /* IL_15: stloc.2 */
        loc2 = loc0;
        /* IL_16: ldloc.2 */
        /* IL_17: callvirt Void M()*/
        (((loc2.vtable)["asm1.x600000c"])())(loc2);
        /* IL_1C: ret */
        return ;
    };
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
    asm.X = (BLR.declare_type)("X",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"X",asm,false,false,false,false,false,[],[
            [
                asm1,
                "x600000c",
                "M"
            ]
        ],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000007");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm1.x600000c","asm1.x600000c");
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.Y = (BLR.declare_type)("Y",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Y",asm,false,false,false,false,false,[],[
            [
                asm1,
                "x600000e",
                "M"
            ]
        ],(asm1.X)(),(BLR.is_inst_default)(this),Array,"asm1.t2000008");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm1.x600000c","asm1.x600000e");
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new ((asm1.X)())();
    },[]);
    asm.Z = (BLR.declare_type)("Z",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Z",asm,false,false,false,false,false,[],[
            [
                asm1,
                "x6000010",
                "M"
            ]
        ],(asm1.Y)(),(BLR.is_inst_default)(this),Array,"asm1.t2000009");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm1.x600000c","asm1.x600000e");
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new ((asm1.Y)())();
    },[]);
    asm.Program = (BLR.declare_type)("Program",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t200000a");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.entryPoint = asm.x6000012;
})(asm1 || (asm1 = {}));
