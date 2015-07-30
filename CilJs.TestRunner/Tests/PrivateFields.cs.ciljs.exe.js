var asm2; (function (asm)
{
    asm.FullName = "PrivateFields.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Int32 A.get_AX()*/
    asm.x6000001 = function get_AX(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32 x*/
        /* IL_06: ret */
        return arg0.Ax;
    };;
    /* System.Void A.set_AX(Int32)*/
    asm.x6000002 = function set_AX(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Int32 x*/
        arg0.Ax = arg1;
        /* IL_07: ret */
        return ;
    };;
    /*  A..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Int32 B.get_BX()*/
    asm.x6000004 = function get_BX(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32 x*/
        /* IL_06: ret */
        return arg0.Bx;
    };;
    /* System.Void B.set_BX(Int32)*/
    asm.x6000005 = function set_BX(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Int32 x*/
        arg0.Bx = arg1;
        /* IL_07: ret */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm2.x6000003(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000007_init = function ()
    {
        (asm2.B().init)();
        asm.x6000007 = asm.x6000007_;
    };;
    asm.x6000007 = function ()
    {
        asm.x6000007_init.apply(this,arguments);
        return asm.x6000007_.apply(this,arguments);
    };;
    asm.x6000007_ = function Main()
    {
        var t0;
        var t1;
        var loc0;
        CILJS.init_base_types();
        t0 = asm2.B();
        t1 = (asm0)["System.Int32"]();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = CILJS.newobj(t0,asm2.x6000006,[null]);
        /* IL_06: ldloc.0 */
        /* IL_07: ldc.i4.s 123*/
        /* IL_09: callvirt Void set_AX(System.Int32)*/
        asm2.x6000002(loc0,(123|0));
        /* IL_0E: ldloc.0 */
        /* IL_0F: ldc.i4 321*/
        /* IL_14: callvirt Void set_BX(System.Int32)*/
        asm2.x6000005(loc0,(321|0));
        /* IL_19: ldloc.0 */
        /* IL_1A: callvirt Int32 get_AX()*/
        /* IL_1F: box System.Int32*/
        /* IL_24: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm2.x6000001(loc0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_29: ldloc.0 */
        /* IL_2A: callvirt Int32 get_BX()*/
        /* IL_2F: box System.Int32*/
        /* IL_34: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm2.x6000004(loc0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_39: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000008 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm2, "x6000001", "get_AX"],
                    [asm2, "x6000002", "set_AX"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.Ax = 0;
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return new (asm2.A())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[
                    [asm2, "x6000004", "get_BX"],
                    [asm2, "x6000005", "set_BX"]
                ],asm2.A(),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.Bx = 0;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000007;
})(asm2 || (asm2 = {}));
