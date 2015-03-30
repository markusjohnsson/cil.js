var asm1; (function (asm)
{
    asm.FullName = "Delegate.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* System.String Foo.Invoke(Int32)*/
    asm.x600000b = BLR.delegate_invoke;;
    /* System.IAsyncResult Foo.BeginInvoke(Int32,AsyncCallback,Object)*/
    asm.x600000c = BLR.delegate_begin_invoke;;
    /* System.String Foo.EndInvoke(IAsyncResult)*/
    asm.x600000d = BLR.delegate_end_invoke;;
    /*  Foo..ctor(Object,IntPtr)*/
    asm.x600000a = BLR.delegate_ctor;;
    /* static System.String Program.X(Int32)*/
    asm.x600000e = function X(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  Delegate.cs:7:5*/
        /* IL_01: ldstr RESULT! */
        /* IL_06: stloc.0  */
        loc0 = BLR.new_string("RESULT!");
        /* IL_09: ldloc.0  */
        /* IL_0A: ret  */
        return loc0;
    };;
    /* static System.String Program.Y(Int32)*/
    asm.x600000f = function Y(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  Delegate.cs:12:5*/
        /* IL_01: ldstr FOO! */
        /* IL_06: stloc.0  */
        loc0 = BLR.new_string("FOO!");
        /* IL_09: ldloc.0  */
        /* IL_0A: ret  */
        return loc0;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000010_init = function ()
    {
        (asm1.Foo().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        BLR.init_base_types();
        asm.x6000010_init.apply(this,arguments);
        return asm.x6000010_.apply(this,arguments);
    };;
    asm.x6000010_ = function Main()
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = asm1.Foo();
        __pos__ = 0x0;
        /* IL_00: nop  Delegate.cs:17:5*/
        /* IL_01: ldnull  */
        /* IL_03: ldftn String X(System.Int32) */
        /* IL_08: newobj Void .ctor(System.Object, System.IntPtr) */
        /* IL_0D: stloc.0  */
        loc0 = BLR.newobj(t0,asm1.x600000a,[null, null, asm1.x600000e]);
        /* IL_0E: ldloc.0  */
        /* IL_0F: call Void CallDelegate(Foo) */
        asm1.x6000011(loc0);
        /* IL_14: nop  */
        /* IL_15: ldstr f, f */
        /* IL_1A: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("f, f"));
        /* IL_1F: nop  */
        /* IL_20: ldloc.0  */
        /* IL_21: ldloc.0  */
        /* IL_22: call Void TestEquality(Foo, Foo) */
        asm1.x6000012(loc0,loc0);
        /* IL_27: nop  */
        /* IL_28: ldstr f, X */
        /* IL_2D: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("f, X"));
        /* IL_32: nop  */
        /* IL_33: ldloc.0  */
        /* IL_34: ldnull  */
        /* IL_36: ldftn String X(System.Int32) */
        /* IL_3B: newobj Void .ctor(System.Object, System.IntPtr) */
        /* IL_40: call Void TestEquality(Foo, Foo) */
        asm1.x6000012(loc0,BLR.newobj(t0,asm1.x600000a,[null, null, asm1.x600000e]));
        /* IL_45: nop  */
        /* IL_46: ldstr f, Y */
        /* IL_4B: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("f, Y"));
        /* IL_50: nop  */
        /* IL_51: ldloc.0  */
        /* IL_52: ldnull  */
        /* IL_54: ldftn String Y(System.Int32) */
        /* IL_59: newobj Void .ctor(System.Object, System.IntPtr) */
        /* IL_5E: call Void TestEquality(Foo, Foo) */
        asm1.x6000012(loc0,BLR.newobj(t0,asm1.x600000a,[null, null, asm1.x600000f]));
        /* IL_63: nop  */
        /* IL_64: ldstr f, null */
        /* IL_69: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("f, null"));
        /* IL_6E: nop  */
        /* IL_6F: ldloc.0  */
        /* IL_70: ldnull  */
        /* IL_71: call Void TestEquality(Foo, Foo) */
        asm1.x6000012(loc0,null);
        /* IL_76: nop  */
        /* IL_77: ldstr null, null */
        /* IL_7C: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("null, null"));
        /* IL_81: nop  */
        /* IL_82: ldnull  */
        /* IL_83: ldnull  */
        /* IL_84: call Void TestEquality(Foo, Foo) */
        asm1.x6000012(null,null);
        /* IL_89: nop  */
        /* IL_8A: ret  Delegate.cs:36:5*/
        return ;
    };
    /* static System.Void Program.CallDelegate(Foo)*/
    asm.x6000011 = function CallDelegate(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  Delegate.cs:39:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldc.i4.s 123 */
        /* IL_04: callvirt String Invoke(System.Int32) */
        /* IL_09: call Void Log(System.Object) */
        asm1.x6000001(arg0._methodPtr.apply(null,((arg0._target) ? ([
                    arg0._target,
                    (123|0)
                ]) : ([
                    (123|0)
                ]))));
        /* IL_0E: nop  */
        /* IL_0F: ret  Delegate.cs:41:5*/
        return ;
    };;
    /* static System.Void Program.TestEquality(Foo,Foo)*/
    asm.x6000012 = function TestEquality(arg0,arg1)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.Boolean"]();
        __pos__ = 0x0;
        /* IL_00: nop  Delegate.cs:44:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldarg.1  */
        /* IL_03: call Boolean op_Equality(System.Delegate, System.Delegate) */
        /* IL_08: box System.Boolean */
        /* IL_0D: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000068(arg0,arg1),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_12: nop  */
        /* IL_13: ldarg.0  */
        /* IL_14: ldarg.1  */
        /* IL_15: call Boolean op_Inequality(System.Delegate, System.Delegate) */
        /* IL_1A: box System.Boolean */
        /* IL_1F: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000069(arg0,arg1),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_24: nop  */
        /* IL_25: ret  Delegate.cs:47:5*/
        return ;
    };;
    /*  Program..ctor()*/
    asm.x6000013 = function _ctor(arg0)
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
    asm.Foo = BLR.declare_type(
        "Foo",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Foo",false,false,false,false,false,[],[
                    [asm1, "x600000b", "Invoke"],
                    [asm1, "x600000c", "BeginInvoke"],
                    [asm1, "x600000d", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            BLR.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
            BLR.declare_virtual(this,"asm1.x600000d","asm1.x600000d");
            BLR.declare_virtual(this,"asm0.x6000066","asm0.x600006f");
            BLR.declare_virtual(this,"asm0.x6000065","asm0.x6000070");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
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
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
