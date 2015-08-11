var asm1;(function (asm)
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
        /* IL_00: ldstr RESULT! */
        /* IL_05: ret  */
        return CILJS.new_string("RESULT!");
    };;
    /* static System.String Program.Y(Int32)*/
    asm.x6000006 = function Y(arg0)
    {
        /* IL_00: ldstr FOO! */
        /* IL_05: ret  */
        return CILJS.new_string("FOO!");
    };;
    /* static System.Void Program.Main()*/
    asm.x6000007_init = function ()
    {
        (asm1.Foo().init)();
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
        t0 = asm1.Foo();
        t1 = (asm0)["System.Object"]();
        /* IL_00: ldnull  */
        /* IL_02: ldftn String X(System.Int32) */
        /* IL_07: newobj Void .ctor(System.Object, System.IntPtr) */
        /* IL_0C: stloc.0  */
        loc0 = CILJS.newobj(t0,asm1.x6000001,[null, null, asm1.x6000005]);
        /* IL_0D: ldloc.0  */
        /* IL_0E: call Void CallDelegate(Foo) */
        asm1.x6000008(loc0);
        /* IL_13: ldstr f, f */
        /* IL_18: ldc.i4.0  */
        /* IL_19: newarr System.Object */
        /* IL_1E: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("f, f"),CILJS.new_array(t1,(0|0)));
        /* IL_23: ldloc.0  */
        /* IL_24: ldloc.0  */
        /* IL_25: call Void TestEquality(Foo, Foo) */
        asm1.x6000009(loc0,loc0);
        /* IL_2A: ldstr f, X */
        /* IL_2F: ldc.i4.0  */
        /* IL_30: newarr System.Object */
        /* IL_35: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("f, X"),CILJS.new_array(t1,(0|0)));
        /* IL_3A: ldloc.0  */
        /* IL_3B: ldnull  */
        /* IL_3D: ldftn String X(System.Int32) */
        /* IL_42: newobj Void .ctor(System.Object, System.IntPtr) */
        /* IL_47: call Void TestEquality(Foo, Foo) */
        asm1.x6000009(loc0,CILJS.newobj(t0,asm1.x6000001,[null, null, asm1.x6000005]));
        /* IL_4C: ldstr f, Y */
        /* IL_51: ldc.i4.0  */
        /* IL_52: newarr System.Object */
        /* IL_57: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("f, Y"),CILJS.new_array(t1,(0|0)));
        /* IL_5C: ldloc.0  */
        /* IL_5D: ldnull  */
        /* IL_5F: ldftn String Y(System.Int32) */
        /* IL_64: newobj Void .ctor(System.Object, System.IntPtr) */
        /* IL_69: call Void TestEquality(Foo, Foo) */
        asm1.x6000009(loc0,CILJS.newobj(t0,asm1.x6000001,[null, null, asm1.x6000006]));
        /* IL_6E: ldstr f, null */
        /* IL_73: ldc.i4.0  */
        /* IL_74: newarr System.Object */
        /* IL_79: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("f, null"),CILJS.new_array(t1,(0|0)));
        /* IL_7E: ldloc.0  */
        /* IL_7F: ldnull  */
        /* IL_80: call Void TestEquality(Foo, Foo) */
        asm1.x6000009(loc0,null);
        /* IL_85: ldstr null, null */
        /* IL_8A: ldc.i4.0  */
        /* IL_8B: newarr System.Object */
        /* IL_90: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("null, null"),CILJS.new_array(t1,(0|0)));
        /* IL_95: ldnull  */
        /* IL_96: ldnull  */
        /* IL_97: call Void TestEquality(Foo, Foo) */
        asm1.x6000009(null,null);
        /* IL_9C: ret  */
        return ;
    };
    /* static System.Void Program.CallDelegate(Foo)*/
    asm.x6000008 = function CallDelegate(arg0)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: ldarg.0  */
        /* IL_01: ldc.i4.s 123 */
        /* IL_03: callvirt String Invoke(System.Int32) */
        /* IL_08: ldc.i4.0  */
        /* IL_09: newarr System.Object */
        /* IL_0E: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(arg0._methodPtr.apply(null,((arg0._target) ? ([
                    arg0._target,
                    (123|0)
                ]) : ([
                    (123|0)
                ]))),CILJS.new_array(t0,(0|0)));
        /* IL_13: ret  */
        return ;
    };;
    /* static System.Void Program.TestEquality(Foo,Foo)*/
    asm.x6000009 = function TestEquality(arg0, arg1)
    {
        var t0;
        t0 = (asm0)["System.Boolean"]();
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: call Boolean op_Equality(System.Delegate, System.Delegate) */
        /* IL_07: box System.Boolean */
        /* IL_0C: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm0.x6000062(arg0,arg1),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_11: ldarg.0  */
        /* IL_12: ldarg.1  */
        /* IL_13: call Boolean op_Inequality(System.Delegate, System.Delegate) */
        /* IL_18: box System.Boolean */
        /* IL_1D: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm0.x6000063(arg0,arg1),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_22: ret  */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
                    [asm1, "x6000002", "Invoke"],
                    [asm1, "x6000003", "BeginInvoke"],
                    [asm1, "x6000004", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm1.x6000002","asm1.x6000002");
            CILJS.declare_virtual(this,"asm1.x6000003","asm1.x6000003");
            CILJS.declare_virtual(this,"asm1.x6000004","asm1.x6000004");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000007;
})(asm1 || (asm1 = {}));
