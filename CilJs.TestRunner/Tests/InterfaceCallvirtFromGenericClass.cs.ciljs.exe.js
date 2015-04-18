var asm1;(function (asm)
{
    asm.FullName = "InterfaceCallvirtFromGenericClass.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* System.Int32 D.Get()*/
    asm.x600000b = function Get(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  InterfaceCallvirtFromGenericClass.cs:10:22*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldfld Int32 x */
        /* IL_07: stloc.0  */
        loc0 = arg0.x;
        /* IL_0A: ldloc.0  */
        /* IL_0B: ret  */
        return loc0;
    };;
    /*  D..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Void C`1.X(T)*/
    asm.x600000d_init = function ()
    {
        (asm1.I2().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function (arg0, arg1)
    {
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function X(arg0, arg1)
    {
        var t0;
        var t1;
        var __pos__;
        t0 = asm1.I2();
        t1 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        /* IL_00: nop  InterfaceCallvirtFromGenericClass.cs:16:5*/
        /* IL_01: ldarga.s 1 */
        /* IL_09: callvirt Int32 Get() */
        /* IL_0E: box System.Int32 */
        /* IL_13: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((arg1.ifacemap || (((arguments)[0].constructor.GenericArguments)["asm1.t2000009"])[0].prototype.ifacemap)[t0].x600000a)())(CILJS.dereference_pointer_as_needed({
                            'w': function (v)
                            {
                                arg1 = v;
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
        /* IL_18: nop  */
        /* IL_19: ret  InterfaceCallvirtFromGenericClass.cs:18:5*/
        return ;
    };
    /*  C`1..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000f_init = function ()
    {
        (asm1.D().init)();
        ((asm1)["C`1"](asm1.D()).init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        CILJS.init_base_types();
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function Main()
    {
        var t0;
        var t1;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var __pos__;
        var loc0;
        t0 = asm1.D();
        t1 = (asm1)["C`1"](t0);
        __pos__ = 0x0;
        /* IL_00: nop  InterfaceCallvirtFromGenericClass.cs:24:5*/
        /* IL_01: newobj Void .ctor() InterfaceCallvirtFromGenericClass.cs:25:9*/
        st_03 = CILJS.newobj(t1,asm1.x600000e,[null]);
        /* IL_06: newobj Void .ctor() */
        /* IL_0B: stloc.0  */
        loc0 = CILJS.newobj(t0,asm1.x600000c,[null]);
        /* IL_0C: ldloc.0  */
        st_01 = loc0;
        /* IL_0D: ldc.i4.s 101 */
        st_02 = (101|0);
        /* IL_0F: stfld Int32 x */
        st_01.x = st_02;
        /* IL_14: ldloc.0  */
        st_04 = loc0;
        /* IL_15: call Void X(D) */
        asm1.x600000d(st_03,st_04);
        /* IL_1A: nop  */
        /* IL_1B: ret  InterfaceCallvirtFromGenericClass.cs:26:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000010 = function _ctor(arg0)
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
    asm.I = CILJS.declare_type(
        "I",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"I",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
        });
    asm.I2 = CILJS.declare_type(
        "I2",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"I2",false,false,true,false,false,[],[
                    [asm1, "x600000a", "Get"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
        });
    asm.D = CILJS.declare_type(
        "D",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[
                    [asm1, "x600000b", "Get"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            CILJS.implement_interface(
                this,
                [asm1.I2()],
                {
                    'x600000a': function (){ return asm1.x600000b;}
                });
            this.prototype.x = 0;
        });
    (asm)["C`1"] = CILJS.declare_type(
        "C_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C`1",false,false,false,true,false,[],[
                    [asm1, "x600000d", "X"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000009");
            (this.GenericArguments)["asm1.t2000009"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000009<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            CILJS.implement_interface(
                this,
                [asm1.I()],
                {});
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
