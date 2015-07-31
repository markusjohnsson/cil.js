var asm2; (function (asm)
{
    asm.FullName = "InterfaceCallvirtFromGenericClass.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Int32 D.Get()*/
    asm.x6000002 = function Get(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32 x*/
        /* IL_06: ret */
        return arg0.x;
    };;
    /*  D..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void C`1.X(T)*/
    asm.x6000004_init = function ()
    {
        (asm2.I2().init)();
        asm.x6000004 = asm.x6000004_;
    };;
    asm.x6000004 = function (arg0,arg1)
    {
        asm.x6000004_init.apply(this,arguments);
        return asm.x6000004_.apply(this,arguments);
    };;
    asm.x6000004_ = function X(arg0,arg1)
    {
        var t0;
        var t1;
        t0 = asm2.I2();
        t1 = (asm0)["System.Int32"]();
        /* IL_00: ldarga.s 1*/
        /* IL_08: callvirt Int32 Get()*/
        /* IL_0D: box System.Int32*/
        /* IL_12: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((arg1.ifacemap || (((arguments)[0].constructor.GenericArguments)["asm2.t2000005"])[0].prototype.ifacemap)[t0].x6000001)())(CILJS.dereference_pointer_as_needed({
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
        /* IL_17: ret */
        return ;
    };
    /*  C`1..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000006_init = function ()
    {
        (asm2.D().init)();
        ((asm2)["C`1"](asm2.D()).init)();
        asm.x6000006 = asm.x6000006_;
    };;
    asm.x6000006 = function ()
    {
        asm.x6000006_init.apply(this,arguments);
        return asm.x6000006_.apply(this,arguments);
    };;
    asm.x6000006_ = function Main()
    {
        var t0;
        var t1;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        CILJS.init_base_types();
        t0 = asm2.D();
        t1 = (asm2)["C`1"](t0);
        /* IL_00: newobj Void .ctor()*/
        st_03 = CILJS.newobj(t1,asm2.x6000005,[null]);
        /* IL_05: newobj Void .ctor()*/
        /* IL_0A: stloc.0 */
        loc0 = CILJS.newobj(t0,asm2.x6000003,[null]);
        /* IL_0B: ldloc.0 */
        st_01 = loc0;
        /* IL_0C: ldc.i4.s 101*/
        st_02 = (101|0);
        /* IL_0E: stfld Int32 x*/
        st_01.x = st_02;
        /* IL_13: ldloc.0 */
        st_04 = loc0;
        /* IL_14: call Void X(D)*/
        asm2.x6000004(st_03,st_04);
        /* IL_19: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
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
            CILJS.init_type(this,asm,"I",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
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
                    [asm2, "x6000001", "Get"]
                ],null,CILJS.is_inst_interface(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm2.x6000001","asm2.x6000001");
        });
    asm.D = CILJS.declare_type(
        "D",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[
                    [asm2, "x6000002", "Get"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm2.x6000002","asm2.x6000002");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.I2()],
                {
                    'x6000001': function (){ return asm2.x6000002;}
                });
            this.prototype.x = 0;
        });
    (asm)["C`1"] = CILJS.declare_type(
        "C_1",
        ["T"],
        function (T)
        {
            return (asm0)["System.Object"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C`1",false,false,false,true,false,[],[
                    [asm2, "x6000004", "X"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            (this.GenericArguments)["asm2.t2000005"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000005<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.I()],
                {});
        });
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000006");
            this.GenericTypeMetadataName = "asm2.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000006;
})(asm2 || (asm2 = {}));
