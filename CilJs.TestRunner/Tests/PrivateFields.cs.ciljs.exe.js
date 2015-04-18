var asm1;(function (asm)
{
    asm.FullName = "PrivateFields.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* System.Int32 A.get_AX()*/
    asm.x600000a = function get_AX(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  PrivateFields.cs:6:25*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldfld Int32 x */
        /* IL_07: stloc.0  */
        loc0 = arg0.Ax;
        /* IL_0A: ldloc.0  */
        /* IL_0B: ret  */
        return loc0;
    };;
    /* System.Void A.set_AX(Int32)*/
    asm.x600000b = function set_AX(arg0, arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  PrivateFields.cs:6:43*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldarg.1  */
        /* IL_03: stfld Int32 x */
        arg0.Ax = arg1;
        /* IL_08: ret  PrivateFields.cs:6:56*/
        return ;
    };;
    /*  A..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Int32 B.get_BX()*/
    asm.x600000d = function get_BX(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  PrivateFields.cs:13:25*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldfld Int32 x */
        /* IL_07: stloc.0  */
        loc0 = arg0.Bx;
        /* IL_0A: ldloc.0  */
        /* IL_0B: ret  */
        return loc0;
    };;
    /* System.Void B.set_BX(Int32)*/
    asm.x600000e = function set_BX(arg0, arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  PrivateFields.cs:13:43*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldarg.1  */
        /* IL_03: stfld Int32 x */
        arg0.Bx = arg1;
        /* IL_08: ret  PrivateFields.cs:13:56*/
        return ;
    };;
    /*  B..ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x600000c(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000010_init = function ()
    {
        (asm1.B().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        CILJS.init_base_types();
        asm.x6000010_init.apply(this,arguments);
        return asm.x6000010_.apply(this,arguments);
    };;
    asm.x6000010_ = function Main()
    {
        var t0;
        var t1;
        var __pos__;
        var loc0;
        t0 = asm1.B();
        t1 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        /* IL_00: nop  PrivateFields.cs:19:5*/
        /* IL_01: newobj Void .ctor() */
        /* IL_06: stloc.0  */
        loc0 = CILJS.newobj(t0,asm1.x600000f,[null]);
        /* IL_07: ldloc.0  */
        /* IL_08: ldc.i4.s 123 */
        /* IL_0A: callvirt Void set_AX(System.Int32) */
        asm1.x600000b(loc0,(123|0));
        /* IL_0F: nop  */
        /* IL_10: ldloc.0  */
        /* IL_11: ldc.i4 321 */
        /* IL_16: callvirt Void set_BX(System.Int32) */
        asm1.x600000e(loc0,(321|0));
        /* IL_1B: nop  */
        /* IL_1C: ldloc.0  */
        /* IL_1D: callvirt Int32 get_AX() */
        /* IL_22: box System.Int32 */
        /* IL_27: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm1.x600000a(loc0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_2C: nop  */
        /* IL_2D: ldloc.0  */
        /* IL_2E: callvirt Int32 get_BX() */
        /* IL_33: box System.Int32 */
        /* IL_38: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm1.x600000d(loc0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_3D: nop  */
        /* IL_3E: ret  PrivateFields.cs:27:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000011 = function _ctor(arg0)
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
                    [asm1, "x600000a", "get_AX"],
                    [asm1, "x600000b", "set_AX"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.Ax = 0;
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return new (asm1.A())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[
                    [asm1, "x600000d", "get_BX"],
                    [asm1, "x600000e", "set_BX"]
                ],asm1.A(),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
