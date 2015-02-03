var asm1; (function (asm)
{
    asm.FullName = "Initobj.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static T CreateDefault[T]()*/
    asm.x600000d = function (T)
    {
        return function CreateDefault()
        {
            var t0;
            var loc0;
            t0 = T;
            loc0 = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            /* IL_00: ldloca.s 0*/
            /* IL_03: initobj T*/
            ({
                'w': function ()
                {
                    loc0 = (arguments)[0];
                },
                'r': function ()
                {
                    return loc0;
                }
            }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
            /* IL_08: ldloc.0 */
            /* IL_09: ret */
            return loc0;
        };
    };;
    /* static Void Main()*/
    asm.x600000e_init = function ()
    {
        (((asm0)["System.ValueType"])().init)();
        (((asm0)["System.Int32"])().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        (asm.x600000e_init.apply)(this,arguments);
        return (asm.x600000e_.apply)(this,arguments);
    };;
    asm.x600000e_ = function Main()
    {
        var t0;
        var t1;
        t0 = ((asm0)["System.ValueType"])();
        t1 = ((asm0)["System.Int32"])();
        /* IL_00: ldc.i4.0 */
        /* IL_01: box System.Int32*/
        /* IL_06: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (0|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_0B: ldnull */
        /* IL_0C: call Void Log(System.Object)*/
        (asm1.x6000001)(null);
        /* IL_11: ldnull */
        /* IL_12: call Void Log(System.Object)*/
        (asm1.x6000001)(null);
        /* IL_17: ret */
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
        (BLR.init_type)(this,"A",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000007");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
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
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
