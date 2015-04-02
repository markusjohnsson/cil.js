var asm1;(function (asm)
{
    asm.FullName = "Properties.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
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
    /* System.Int32 X.get_Y()*/
    asm.x600000a = function get_Y(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld Int32 <Y>k__BackingField */
        /* IL_06: stloc.0  */
        loc0 = (arg0)["X<Y>k__BackingField"];
        /* IL_09: ldloc.0  */
        /* IL_0A: ret  */
        return loc0;
    };;
    /* System.Void X.set_Y(Int32)*/
    asm.x600000b = function set_Y(arg0, arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: stfld Int32 <Y>k__BackingField */
        (arg0)["X<Y>k__BackingField"] = arg1;
        /* IL_07: ret  */
        return ;
    };;
    /*  X..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000d_init = function ()
    {
        (asm1.X().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function ()
    {
        BLR.init_base_types();
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function Main()
    {
        var t0;
        var t1;
        var __pos__;
        var loc0;
        t0 = asm1.X();
        t1 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        /* IL_00: nop  Properties.cs:10:5*/
        /* IL_01: newobj Void .ctor() */
        /* IL_06: stloc.0  */
        loc0 = BLR.newobj(t0,asm1.x600000c,[null]);
        /* IL_07: ldloc.0  */
        /* IL_08: ldc.i4.s 123 */
        /* IL_0A: callvirt Void set_Y(System.Int32) */
        asm1.x600000b(loc0,(123|0));
        /* IL_0F: nop  */
        /* IL_10: ldloc.0  */
        /* IL_11: callvirt Int32 get_Y() */
        /* IL_16: box System.Int32 */
        /* IL_1B: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm1.x600000a(loc0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_20: nop  */
        /* IL_21: ret  Properties.cs:14:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
            this.GenericTypeMetadataName = "asm1.t2000002";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.X = BLR.declare_type(
        "X",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"X",false,false,false,false,false,[],[
                    [asm1, "x600000a", "get_Y"],
                    [asm1, "x600000b", "set_Y"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            (this.prototype)["X<Y>k__BackingField"] = 0;
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000d;
})(asm1 || (asm1 = {}));
