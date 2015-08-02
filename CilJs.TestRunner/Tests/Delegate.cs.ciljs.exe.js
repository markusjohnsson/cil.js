var asm2; (function (asm)
{
    asm.FullName = "Delegate.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.String Foo.Invoke(Int32)*/
    asm.x6000002 = CILJS.delegate_invoke;;
    /* System.IAsyncResult Foo.BeginInvoke(Int32,AsyncCallback,Object)*/
    asm.x6000003 = CILJS.delegate_begin_invoke;;
    /* System.String Foo.EndInvoke(IAsyncResult)*/
    asm.x6000004 = CILJS.delegate_end_invoke;;
    /*  Foo..ctor(Object,IntPtr)*/
    asm.x6000001 = CILJS.delegate_ctor;;
    /* static System.String Program.X(Int32)*/
    asm.x6000005 = function X(arg0)
    {
        /* IL_00: ldstr RESULT!*/
        /* IL_05: ret */
        return CILJS.new_string("RESULT!");
    };;
    /* static System.String Program.Y(Int32)*/
    asm.x6000006 = function Y(arg0)
    {
        /* IL_00: ldstr FOO!*/
        /* IL_05: ret */
        return CILJS.new_string("FOO!");
    };;
    /* static System.Void Program.Main()*/
    asm.x6000007_init = function ()
    {
        (asm2.Foo().init)();
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
        var loc0;
        CILJS.init_base_types();
        t0 = asm2.Foo();
        /* IL_00: ldnull */
        /* IL_02: ldftn String X(System.Int32)*/
        /* IL_07: newobj Void .ctor(System.Object, System.IntPtr)*/
        /* IL_0C: stloc.0 */
        loc0 = CILJS.newobj(t0,asm2.x6000001,[null, null, asm2.x6000005]);
        /* IL_0D: ldloc.0 */
        /* IL_0E: call Void CallDelegate(Foo)*/
        asm2.x6000008(loc0);
        /* IL_13: ldstr f, f*/
        /* IL_18: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("f, f"));
        /* IL_1D: ldloc.0 */
        /* IL_1E: ldloc.0 */
        /* IL_1F: call Void TestEquality(Foo, Foo)*/
        asm2.x6000009(loc0,loc0);
        /* IL_24: ldstr f, X*/
        /* IL_29: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("f, X"));
        /* IL_2E: ldloc.0 */
        /* IL_2F: ldnull */
        /* IL_31: ldftn String X(System.Int32)*/
        /* IL_36: newobj Void .ctor(System.Object, System.IntPtr)*/
        /* IL_3B: call Void TestEquality(Foo, Foo)*/
        asm2.x6000009(loc0,CILJS.newobj(t0,asm2.x6000001,[null, null, asm2.x6000005]));
        /* IL_40: ldstr f, Y*/
        /* IL_45: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("f, Y"));
        /* IL_4A: ldloc.0 */
        /* IL_4B: ldnull */
        /* IL_4D: ldftn String Y(System.Int32)*/
        /* IL_52: newobj Void .ctor(System.Object, System.IntPtr)*/
        /* IL_57: call Void TestEquality(Foo, Foo)*/
        asm2.x6000009(loc0,CILJS.newobj(t0,asm2.x6000001,[null, null, asm2.x6000006]));
        /* IL_5C: ldstr f, null*/
        /* IL_61: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("f, null"));
        /* IL_66: ldloc.0 */
        /* IL_67: ldnull */
        /* IL_68: call Void TestEquality(Foo, Foo)*/
        asm2.x6000009(loc0,null);
        /* IL_6D: ldstr null, null*/
        /* IL_72: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("null, null"));
        /* IL_77: ldnull */
        /* IL_78: ldnull */
        /* IL_79: call Void TestEquality(Foo, Foo)*/
        asm2.x6000009(null,null);
        /* IL_7E: ret */
        return ;
    };
    /* static System.Void Program.CallDelegate(Foo)*/
    asm.x6000008 = function CallDelegate(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.s 123*/
        /* IL_03: callvirt String Invoke(System.Int32)*/
        /* IL_08: call Void Log(System.Object)*/
        asm1.x6000001(arg0._methodPtr.apply(null,((arg0._target) ? ([
                    arg0._target,
                    (123|0)
                ]) : ([
                    (123|0)
                ]))));
        /* IL_0D: ret */
        return ;
    };;
    /* static System.Void Program.TestEquality(Foo,Foo)*/
    asm.x6000009 = function TestEquality(arg0,arg1)
    {
        var t0;
        t0 = (asm0)["System.Boolean"]();
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: call Boolean op_Equality(System.Delegate, System.Delegate)*/
        /* IL_07: box System.Boolean*/
        /* IL_0C: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000062(arg0,arg1),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_11: ldarg.0 */
        /* IL_12: ldarg.1 */
        /* IL_13: call Boolean op_Inequality(System.Delegate, System.Delegate)*/
        /* IL_18: box System.Boolean*/
        /* IL_1D: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000063(arg0,arg1),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_22: ret */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.Foo = CILJS.declare_type(
        "Foo",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Foo",false,false,false,false,false,[],[
                    [asm2, "x6000002", "Invoke"],
                    [asm2, "x6000003", "BeginInvoke"],
                    [asm2, "x6000004", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm2.x6000002","asm2.x6000002");
            CILJS.declare_virtual(this,"asm2.x6000003","asm2.x6000003");
            CILJS.declare_virtual(this,"asm2.x6000004","asm2.x6000004");
            CILJS.declare_virtual(this,"asm0.x6000060","asm0.x60000d5");
            CILJS.declare_virtual(this,"asm0.x600005f","asm0.x60000d6");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000061");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000064");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000007;
})(asm2 || (asm2 = {}));
