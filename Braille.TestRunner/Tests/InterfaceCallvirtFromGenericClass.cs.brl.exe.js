var asm1; (function (asm)
{
    asm.FullName = "InterfaceCallvirtFromGenericClass.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* Int32 Get()*/
    asm.x600000d = function Get(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32 x*/
        /* IL_06: ret */
        return arg0.x;
    };;
    /* Void .ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void X(T)*/
    asm.x600000f_init = function ()
    {
        (asm1.I2().init)();
        ((asm0)["System.Int32"]().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function (arg0,arg1)
    {
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function X(arg0,arg1)
    {
        var t0;
        var t1;
        t0 = asm1.I2();
        t1 = (asm0)["System.Int32"]();
        /* IL_00: ldarga.s 1*/
        /* IL_08: callvirt Int32 Get()*/
        /* IL_0D: box System.Int32*/
        /* IL_12: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((((((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0].prototype.ifacemap)[t0].x600000c)())(BLR.dereference_pointer_as_needed({
                            'w': function ()
                            {
                                arg1 = (arguments)[0];
                            },
                            'r': function ()
                            {
                                return arg1;
                            }
                        })),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_17: ret */
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
    /* static Void Main()*/
    asm.x6000011_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.D().init)();
        ((asm1)["C`1"](asm1.D()).init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function ()
    {
        asm.x6000011_init.apply(this,arguments);
        return asm.x6000011_.apply(this,arguments);
    };;
    asm.x6000011_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.D();
        t2 = (asm1)["C`1"](asm1.D());
        /* IL_00: newobj Void .ctor()*/
        st_03 = BLR.newobj(t2,asm1.x6000010,[null]);
        /* IL_05: newobj Void .ctor()*/
        /* IL_0A: stloc.0 */
        loc0 = BLR.newobj(t1,asm1.x600000e,[null]);
        /* IL_0B: ldloc.0 */
        st_01 = loc0;
        /* IL_0C: ldc.i4.s 101*/
        st_02 = (101|0);
        /* IL_0E: stfld Int32 x*/
        st_01.x = st_02;
        /* IL_13: ldloc.0 */
        st_04 = loc0;
        /* IL_14: call Void X(D)*/
        asm1.x600000f(st_03,st_04);
        /* IL_19: ret */
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
            this.Interfaces = [];
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
            this.Interfaces = [];
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
            this.Interfaces = [];
        });
    asm.I2 = BLR.declare_type(
        "I2",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"I2",false,false,true,false,false,[],[
                    [asm1, "x600000c", "Get"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000008");
            this.Interfaces = [];
            BLR.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
        });
    asm.D = BLR.declare_type(
        "D",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"D",false,false,false,false,false,[],[
                    [asm1, "x600000d", "Get"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.Interfaces = [
                asm1.I2()
            ];
            BLR.declare_virtual(this,"asm1.x600000d","asm1.x600000d");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(this,[asm1.I2()],{
                    'x600000c': function (){ return asm1.x600000d;}
                });
            this.prototype.x = 0;
        });
    (asm)["C`1"] = BLR.declare_type(
        "C_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"C`1",false,false,false,true,false,[],[
                    [asm1, "x600000f", "X"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
            this.Interfaces = [
                asm1.I()
            ];
            (this.GenericArguments)["asm1.t200000a"] = [T];
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(this,[asm1.I()],{});
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000b");
            this.Interfaces = [];
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
