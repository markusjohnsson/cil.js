var asm2;(function (asm)
{
    asm.FullName = "StructInterface.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Void S.Foo()*/
    asm.x6000002 = function Foo(arg0)
    {
        /* IL_00: ldstr Foo */
        /* IL_05: call Void Log(System.Object) */
        asm1.x6000001(CILJS.new_string("Foo"));
        /* IL_0A: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000003_init = function ()
    {
        (asm2.S().init)();
        asm.x6000003 = asm.x6000003_;
    };;
    asm.x6000003 = function ()
    {
        asm.x6000003_init.apply(this,arguments);
        return asm.x6000003_.apply(this,arguments);
    };;
    asm.x6000003_ = function Main()
    {
        var t0;
        var loc0;
        var loc1;
        CILJS.init_base_types();
        t0 = asm2.S();
        loc0 = new (asm2.S())();
        /* IL_00: ldloca.s 0 */
        /* IL_03: initobj S */
        loc0 = new t0();
        /* IL_08: ldloc.0  */
        /* IL_09: box S */
        /* IL_0E: stloc.1  */
        loc1 = {
            'boxed': CILJS.clone_value(loc0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        };
        /* IL_0F: ldloc.1  */
        /* IL_10: call Void Run(I) */
        asm2.x6000004(loc1);
        /* IL_15: ret  */
        return ;
    };
    /* static System.Void Program.Run(I)*/
    asm.x6000004_init = function ()
    {
        (asm2.I().init)();
        asm.x6000004 = asm.x6000004_;
    };;
    asm.x6000004 = function (arg0)
    {
        asm.x6000004_init.apply(this,arguments);
        return asm.x6000004_.apply(this,arguments);
    };;
    asm.x6000004_ = function Run(arg0)
    {
        var t0;
        t0 = asm2.I();
        /* IL_00: ldarg.0  */
        /* IL_01: callvirt Void Foo() */
        (((arg0.ifacemap)[t0].x6000001)())(CILJS.convert_box_to_pointer_as_needed(arg0));
        /* IL_06: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
            CILJS.init_type(this,asm,"I",false,false,true,false,false,[],[
                    [asm2, "x6000001", "Foo"]
                ],null,CILJS.is_inst_interface(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm2.x6000001","asm2.x6000001");
        });
    asm.S = CILJS.declare_type(
        "S",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"S",true,false,false,false,false,[],[
                    [asm2, "x6000002", "Foo"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm2.x6000002","asm2.x6000002");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.I()],
                {
                    'x6000001': function (){ return asm2.x6000002;}
                });
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000003;
})(asm2 || (asm2 = {}));
