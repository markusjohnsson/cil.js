var asm1;(function (asm)
{
    asm.FullName = "PrivateFields.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Int32 A.get_AX()*/
    asm.x6000001 = function get_AX(arg0)
    {
        var loc0;
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: ldfld Int32 x */
        /* IL_07: stloc.0  */
        loc0 = arg0.Ax;
        /* IL_0A: ldloc.0  */
        /* IL_0B: ret  */
        return loc0;
    };;
    /* System.Void A.set_AX(Int32)*/
    asm.x6000002 = function set_AX(arg0, arg1)
    {
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: ldarg.1  */
        /* IL_03: stfld Int32 x */
        arg0.Ax = arg1;
        /* IL_08: ret  */
        return ;
    };;
    /*  A..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* System.Int32 B.get_BX()*/
    asm.x6000004 = function get_BX(arg0)
    {
        var loc0;
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: ldfld Int32 x */
        /* IL_07: stloc.0  */
        loc0 = arg0.Bx;
        /* IL_0A: ldloc.0  */
        /* IL_0B: ret  */
        return loc0;
    };;
    /* System.Void B.set_BX(Int32)*/
    asm.x6000005 = function set_BX(arg0, arg1)
    {
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: ldarg.1  */
        /* IL_03: stfld Int32 x */
        arg0.Bx = arg1;
        /* IL_08: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000003(arg0);
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000007_init = function ()
    {
        (asm1.B().init)();
        asm.x6000007 = asm.x6000007_;
    };;
    asm.x6000007 = function ()
    {
        asm.x6000007_init();
        return asm.x6000007_();
    };;
    asm.x6000007_ = function Main()
    {
        var t0;
        var t1;
        var loc0;
        CILJS.init_base_types();
        t0 = asm1.B();
        t1 = (asm0)["System.Int32"]();
        /* IL_00: nop  */
        /* IL_01: newobj Void .ctor() */
        /* IL_06: stloc.0  */
        loc0 = CILJS.newobj(t0,asm1.x6000006,[null]);
        /* IL_07: ldloc.0  */
        /* IL_08: ldc.i4.s 123 */
        /* IL_0A: callvirt Void set_AX(System.Int32) */
        asm1.x6000002(loc0,(123|0));
        /* IL_0F: nop  */
        /* IL_10: ldloc.0  */
        /* IL_11: ldc.i4 321 */
        /* IL_16: callvirt Void set_BX(System.Int32) */
        asm1.x6000005(loc0,(321|0));
        /* IL_1B: nop  */
        /* IL_1C: ldloc.0  */
        /* IL_1D: callvirt Int32 get_AX() */
        /* IL_22: box System.Int32 */
        /* IL_27: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(asm1.x6000001(loc0),t1));
        /* IL_2C: nop  */
        /* IL_2D: ldloc.0  */
        /* IL_2E: callvirt Int32 get_BX() */
        /* IL_33: box System.Int32 */
        /* IL_38: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(asm1.x6000004(loc0),t1));
        /* IL_3D: nop  */
        /* IL_3E: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000008 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1, "x6000001", "get_AX"],
                    [asm1, "x6000002", "set_AX"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function A() { c.init();this.Ax = 0 }");
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return asm1.A();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[
                    [asm1, "x6000004", "get_BX"],
                    [asm1, "x6000005", "set_BX"]
                ],asm1.A(),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function B() { c.init();this.Bx = 0 }");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000007;
})(asm1 || (asm1 = {}));
