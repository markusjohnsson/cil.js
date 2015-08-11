var asm1;(function (asm)
{
    asm.FullName = "IsInstDelegate.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* TResult FuncX`2.Invoke(T)*/
    asm.x6000002 = CILJS.delegate_invoke;;
    /* System.IAsyncResult FuncX`2.BeginInvoke(T,AsyncCallback,Object)*/
    asm.x6000003 = CILJS.delegate_begin_invoke;;
    /* TResult FuncX`2.EndInvoke(IAsyncResult)*/
    asm.x6000004 = CILJS.delegate_end_invoke;;
    /*  FuncX`2..ctor(Object,IntPtr)*/
    asm.x6000001 = CILJS.delegate_ctor;;
    /* T FuncX`1.Invoke()*/
    asm.x6000006 = CILJS.delegate_invoke;;
    /* System.IAsyncResult FuncX`1.BeginInvoke(AsyncCallback,Object)*/
    asm.x6000007 = CILJS.delegate_begin_invoke;;
    /* T FuncX`1.EndInvoke(IAsyncResult)*/
    asm.x6000008 = CILJS.delegate_end_invoke;;
    /*  FuncX`1..ctor(Object,IntPtr)*/
    asm.x6000005 = CILJS.delegate_ctor;;
    /* static System.Void Program.Main(String[])*/
    asm.x6000009_init = function ()
    {
        (asm1.Program().init)();
        ((asm1)["FuncX`2"]((asm0)["System.Object"](),(asm0)["System.Object"]()).init)();
        ((asm1)["FuncX`2"]((asm0)["System.Int32"](),(asm0)["System.Object"]()).init)();
        ((asm1)["FuncX`2"]((asm0)["System.String"](),(asm0)["System.Object"]()).init)();
        asm.x6000009 = asm.x6000009_;
    };;
    asm.x6000009 = function (arg0)
    {
        asm.x6000009_init.apply(this,arguments);
        return asm.x6000009_.apply(this,arguments);
    };;
    asm.x6000009_ = function Main(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        var in_block_0;
        var __pos__;
        var loc0;
        CILJS.init_base_types();
        t0 = asm1.Program();
        t1 = (asm0)["System.Object"]();
        t2 = (asm1)["FuncX`2"](t1,t1);
        t3 = (asm0)["System.Int32"]();
        t4 = (asm1)["FuncX`2"](t3,t1);
        t5 = (asm0)["System.String"]();
        t6 = (asm1)["FuncX`2"](t5,t1);
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldsfld FuncX`2 CS$<>9__CachedAnonymousMethodDelegate1 */
                /* IL_05: brtrue.s IL_18 */
                
                if ((t0)["CS$<>9__CachedAnonymousMethodDelegate1"]){
                    __pos__ = 0x18;
                    continue;
                }
                /* IL_07: ldnull  */
                /* IL_09: ldftn Object <Main>b__0(System.Object) */
                /* IL_0E: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_13: stsfld FuncX`2 CS$<>9__CachedAnonymousMethodDelegate1 */
                (t0)["CS$<>9__CachedAnonymousMethodDelegate1"] = CILJS.newobj(t2,asm1.x6000001,[null, null, asm1.x600000e]);
                case 0x18:
                /* IL_18: ldsfld FuncX`2 CS$<>9__CachedAnonymousMethodDelegate1 */
                /* IL_1D: stloc.0  */
                loc0 = (t0)["CS$<>9__CachedAnonymousMethodDelegate1"];
                /* IL_1E: ldstr Lambda: */
                /* IL_23: ldc.i4.0  */
                /* IL_24: newarr System.Object */
                /* IL_29: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(CILJS.new_string("Lambda:"),CILJS.new_array(t1,(0|0)));
                /* IL_2E: ldloc.0  */
                /* IL_2F: call Void WriteType(System.Delegate) */
                asm1.x600000d(loc0);
                /* IL_34: ldstr Method (object): */
                /* IL_39: ldc.i4.0  */
                /* IL_3A: newarr System.Object */
                /* IL_3F: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(CILJS.new_string("Method (object):"),CILJS.new_array(t1,(0|0)));
                /* IL_44: ldnull  */
                /* IL_46: ldftn Object MethodObj(System.Object) */
                /* IL_4B: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_50: call Void WriteType(System.Delegate) */
                asm1.x600000d(CILJS.newobj(t2,asm1.x6000001,[null, null, asm1.x600000a]));
                /* IL_55: ldstr Method (object): */
                /* IL_5A: ldc.i4.0  */
                /* IL_5B: newarr System.Object */
                /* IL_60: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(CILJS.new_string("Method (object):"),CILJS.new_array(t1,(0|0)));
                /* IL_65: ldnull  */
                /* IL_67: ldftn Object MethodInt(System.Int32) */
                /* IL_6C: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_71: call Void WriteType(System.Delegate) */
                asm1.x600000d(CILJS.newobj(t4,asm1.x6000001,[null, null, asm1.x600000b]));
                /* IL_76: ldstr Method (object): */
                /* IL_7B: ldc.i4.0  */
                /* IL_7C: newarr System.Object */
                /* IL_81: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(CILJS.new_string("Method (object):"),CILJS.new_array(t1,(0|0)));
                /* IL_86: ldnull  */
                /* IL_88: ldftn Object MethodString(System.String) */
                /* IL_8D: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_92: call Void WriteType(System.Delegate) */
                asm1.x600000d(CILJS.newobj(t6,asm1.x6000001,[null, null, asm1.x600000c]));
                /* IL_97: ret  */
                return ;
            }
        }
    };
    /* static System.Object Program.MethodObj(Object)*/
    asm.x600000a = function MethodObj(arg0)
    {
        /* IL_00: ldnull  */
        /* IL_01: ret  */
        return null;
    };;
    /* static System.Object Program.MethodInt(Int32)*/
    asm.x600000b = function MethodInt(arg0)
    {
        /* IL_00: ldnull  */
        /* IL_01: ret  */
        return null;
    };;
    /* static System.Object Program.MethodString(String)*/
    asm.x600000c = function MethodString(arg0)
    {
        /* IL_00: ldnull  */
        /* IL_01: ret  */
        return null;
    };;
    /* static System.Void Program.WriteType(Delegate)*/
    asm.x600000d_init = function ()
    {
        ((asm1)["FuncX`1"]((asm0)["System.Object"]()).init)();
        ((asm1)["FuncX`2"]((asm0)["System.Object"](),(asm0)["System.Object"]()).init)();
        ((asm1)["FuncX`2"]((asm0)["System.String"](),(asm0)["System.Object"]()).init)();
        ((asm1)["FuncX`2"]((asm0)["System.Int32"](),(asm0)["System.Object"]()).init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function (arg0)
    {
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function WriteType(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        var in_block_0;
        var __pos__;
        t0 = (asm0)["System.Object"]();
        t1 = (asm1)["FuncX`1"](t0);
        t2 = (asm1)["FuncX`2"](t0,t0);
        t3 = (asm0)["System.String"]();
        t4 = (asm1)["FuncX`2"](t3,t0);
        t5 = (asm0)["System.Int32"]();
        t6 = (asm1)["FuncX`2"](t5,t0);
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: isinst FuncX`1[System.Object] */
                /* IL_06: brfalse.s IL_18 */
                
                if ((!(t1.IsInst(arg0)))){
                    __pos__ = 0x18;
                    continue;
                }
                /* IL_08: ldstr FuncX<object> */
                /* IL_0D: ldc.i4.0  */
                /* IL_0E: newarr System.Object */
                /* IL_13: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(CILJS.new_string("FuncX<object>"),CILJS.new_array(t0,(0|0)));
                case 0x18:
                /* IL_18: ldarg.0  */
                /* IL_19: isinst FuncX`2[System.Object,System.Object] */
                /* IL_1E: brfalse.s IL_30 */
                
                if ((!(t2.IsInst(arg0)))){
                    __pos__ = 0x30;
                    continue;
                }
                /* IL_20: ldstr FuncX<object, object> */
                /* IL_25: ldc.i4.0  */
                /* IL_26: newarr System.Object */
                /* IL_2B: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(CILJS.new_string("FuncX<object, object>"),CILJS.new_array(t0,(0|0)));
                case 0x30:
                /* IL_30: ldarg.0  */
                /* IL_31: isinst FuncX`2[System.String,System.Object] */
                /* IL_36: brfalse.s IL_48 */
                
                if ((!(t4.IsInst(arg0)))){
                    __pos__ = 0x48;
                    continue;
                }
                /* IL_38: ldstr FuncX<string, object> */
                /* IL_3D: ldc.i4.0  */
                /* IL_3E: newarr System.Object */
                /* IL_43: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(CILJS.new_string("FuncX<string, object>"),CILJS.new_array(t0,(0|0)));
                case 0x48:
                /* IL_48: ldarg.0  */
                /* IL_49: isinst FuncX`2[System.Int32,System.Object] */
                /* IL_4E: brfalse.s IL_60 */
                
                if ((!(t6.IsInst(arg0)))){
                    __pos__ = 0x60;
                    continue;
                }
                /* IL_50: ldstr FuncX<int, object> */
                /* IL_55: ldc.i4.0  */
                /* IL_56: newarr System.Object */
                /* IL_5B: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(CILJS.new_string("FuncX<int, object>"),CILJS.new_array(t0,(0|0)));
                case 0x60:
                /* IL_60: ret  */
                return ;
            }
        }
    };
    /* static System.Object Program.<Main>b__0(Object)*/
    asm.x600000e = function _Main_b__0(arg0)
    {
        /* IL_00: ldnull  */
        /* IL_01: ret  */
        return null;
    };;
    (asm)["FuncX`2"] = CILJS.declare_type(
        "FuncX_2",
        ["T", "TResult"],
        function (T, TResult)
        {
            return {};
        },
        function (T, TResult)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"FuncX`2",false,false,false,true,false,[],[
                    [asm1, "x6000002", "Invoke"],
                    [asm1, "x6000003", "BeginInvoke"],
                    [asm1, "x6000004", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            (this.GenericArguments)["asm1.t2000002"] = [T, TResult];
            this.GenericTypeMetadataName = ("asm1.t2000002<" + ((T.GenericTypeMetadataName + TResult.GenericTypeMetadataName) + ">"));
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
    (asm)["FuncX`1"] = CILJS.declare_type(
        "FuncX_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"FuncX`1",false,false,false,true,false,[],[
                    [asm1, "x6000006", "Invoke"],
                    [asm1, "x6000007", "BeginInvoke"],
                    [asm1, "x6000008", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            (this.GenericArguments)["asm1.t2000003"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000003<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm1.x6000006","asm1.x6000006");
            CILJS.declare_virtual(this,"asm1.x6000007","asm1.x6000007");
            CILJS.declare_virtual(this,"asm1.x6000008","asm1.x6000008");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            (this)["CS$<>9__CachedAnonymousMethodDelegate1"] = null;
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000009;
})(asm1 || (asm1 = {}));
