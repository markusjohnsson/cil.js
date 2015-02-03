var asm1; (function (asm)
{
    asm.FullName = "StructInterface.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* Void Foo()*/
    asm.x600000d = function Foo(arg0)
    {
        /* IL_00: ldstr Foo*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("Foo"));
        /* IL_0A: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x600000e_init = function ()
    {
        (((asm0)["System.ValueType"])().init)();
        ((asm1.S)().init)();
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
        var loc0;
        var loc1;
        t0 = ((asm0)["System.ValueType"])();
        t1 = (asm1.S)();
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
        /* IL_08: ldloc.0 */
        /* IL_09: box S*/
        /* IL_0E: stloc.1 */
        loc1 = {
            'boxed': (BLR.clone_value)(loc0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        };
        /* IL_0F: ldloc.1 */
        /* IL_10: call Void Run(I)*/
        (asm1.x600000f)(loc1);
        /* IL_15: ret */
        return ;
    };
    /* static Void Run(I)*/
    asm.x600000f_init = function ()
    {
        ((asm1.I)().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function (arg0)
    {
        (asm.x600000f_init.apply)(this,arguments);
        return (asm.x600000f_.apply)(this,arguments);
    };;
    asm.x600000f_ = function Run(arg0)
    {
        var t0;
        t0 = (asm1.I)();
        /* IL_00: ldarg.0 */
        /* IL_01: callvirt Void Foo()*/
        (((arg0.ifacemap)[t0].x600000c)())((BLR.convert_box_to_pointer_as_needed)(arg0));
        /* IL_06: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x6000010 = function _ctor(arg0)
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
    asm.I = (BLR.declare_type)("I",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"I",asm,false,false,true,false,false,[],[
            [
                asm1,
                "x600000c",
                "Foo"
            ]
        ],null,(BLR.is_inst_interface)(this),Array,"asm1.t2000007");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm1.x600000c","asm1.x600000c");
    },function ()
    {
        return {};
    },[]);
    asm.S = (BLR.declare_type)("S",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"S",asm,true,false,false,false,false,[],[
            [
                asm1,
                "x600000d",
                "Foo"
            ]
        ],((asm0)["System.ValueType"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000008");
        this.Interfaces = [
            (asm1.I)()
        ];
        (BLR.declare_virtual)(this,"asm1.x600000d","asm1.x600000d");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000016");
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
        (BLR.tree_set)([
            (asm1.I)()
        ],this.prototype.ifacemap,{
            'x600000c': function ()
            {
                return asm1.x600000d;
            }
        });
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
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
