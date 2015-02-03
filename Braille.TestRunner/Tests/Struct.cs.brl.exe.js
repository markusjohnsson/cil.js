var asm1; (function (asm)
{
    asm.FullName = "Struct.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static Void Main()*/
    asm.x600000c_init = function ()
    {
        (((asm0)["System.ValueType"])().init)();
        ((asm1.S)().init)();
        (((asm0)["System.Int32"])().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        (asm.x600000c_init.apply)(this,arguments);
        return (asm.x600000c_.apply)(this,arguments);
    };;
    asm.x600000c_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var loc0;
        t0 = ((asm0)["System.ValueType"])();
        t1 = (asm1.S)();
        t2 = ((asm0)["System.Int32"])();
        loc0 = new ((asm1.S)())();
        /* IL_00: ldloca.s 0*/
        /* IL_03: initobj S*/
        ({
            'w': function ()
            {
                loc0 = (arguments)[0];
            },
            'r': function ()
            {
                return loc0;
            }
        }.w)(new t1());
        /* IL_08: ldloca.s 0*/
        /* IL_0A: ldfld Int32 X*/
        /* IL_0F: box System.Int32*/
        /* IL_14: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ({
                'w': function ()
                {
                    loc0 = (arguments)[0];
                },
                'r': function ()
                {
                    return loc0;
                }
            }.r)().X,
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_19: ldloca.s 0*/
        /* IL_1B: ldfld Int32 Y*/
        /* IL_20: box System.Int32*/
        /* IL_25: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ({
                'w': function ()
                {
                    loc0 = (arguments)[0];
                },
                'r': function ()
                {
                    return loc0;
                }
            }.r)().Y,
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_2A: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x600000d = function _ctor(arg0)
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
    asm.S = (BLR.declare_type)("S",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"S",asm,true,false,false,false,false,[],[],((asm0)["System.ValueType"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000007");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000016");
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
        this.prototype.X = 0;
        this.prototype.Y = 0;
    },function ()
    {
        return {};
    },[]);
    asm.Program = (BLR.declare_type)("Program",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000008");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
