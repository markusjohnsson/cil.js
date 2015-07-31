var asm2; (function (asm)
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
        (asm2.Program().init)();
        ((asm2)["FuncX`2"]((asm0)["System.Object"](),(asm0)["System.Object"]()).init)();
        ((asm2)["FuncX`2"]((asm0)["System.Int32"](),(asm0)["System.Object"]()).init)();
        ((asm2)["FuncX`2"]((asm0)["System.String"](),(asm0)["System.Object"]()).init)();
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
        t0 = asm2.Program();
        t1 = (asm0)["System.Object"]();
        t2 = (asm2)["FuncX`2"](t1,t1);
        t3 = (asm0)["System.Int32"]();
        t4 = (asm2)["FuncX`2"](t3,t1);
        t5 = (asm0)["System.String"]();
        t6 = (asm2)["FuncX`2"](t5,t1);
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldsfld FuncX`2 CS$<>9__CachedAnonymousMethodDelegate1*/
                /* IL_05: brtrue.s IL_18*/
                
                if ((t0)["CS$<>9__CachedAnonymousMethodDelegate1"]){
                    __pos__ = 0x18;
                    continue;
                }
                /* IL_07: ldnull */
                /* IL_09: ldftn Object <Main>b__0(System.Object)*/
                /* IL_0E: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_13: stsfld FuncX`2 CS$<>9__CachedAnonymousMethodDelegate1*/
                (t0)["CS$<>9__CachedAnonymousMethodDelegate1"] = CILJS.newobj(t2,asm2.x6000001,[null, null, asm2.x600000e]);
                case 0x18:
                /* IL_18: ldsfld FuncX`2 CS$<>9__CachedAnonymousMethodDelegate1*/
                /* IL_1D: stloc.0 */
                loc0 = (t0)["CS$<>9__CachedAnonymousMethodDelegate1"];
                /* IL_1E: ldstr Lambda:*/
                /* IL_23: call Void Log(System.Object)*/
                asm1.x6000001(CILJS.new_string("Lambda:"));
                /* IL_28: ldloc.0 */
                /* IL_29: call Void WriteType(System.Delegate)*/
                asm2.x600000d(loc0);
                /* IL_2E: ldstr Method (object):*/
                /* IL_33: call Void Log(System.Object)*/
                asm1.x6000001(CILJS.new_string("Method (object):"));
                /* IL_38: ldnull */
                /* IL_3A: ldftn Object MethodObj(System.Object)*/
                /* IL_3F: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_44: call Void WriteType(System.Delegate)*/
                asm2.x600000d(CILJS.newobj(t2,asm2.x6000001,[null, null, asm2.x600000a]));
                /* IL_49: ldstr Method (object):*/
                /* IL_4E: call Void Log(System.Object)*/
                asm1.x6000001(CILJS.new_string("Method (object):"));
                /* IL_53: ldnull */
                /* IL_55: ldftn Object MethodInt(System.Int32)*/
                /* IL_5A: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_5F: call Void WriteType(System.Delegate)*/
                asm2.x600000d(CILJS.newobj(t4,asm2.x6000001,[null, null, asm2.x600000b]));
                /* IL_64: ldstr Method (object):*/
                /* IL_69: call Void Log(System.Object)*/
                asm1.x6000001(CILJS.new_string("Method (object):"));
                /* IL_6E: ldnull */
                /* IL_70: ldftn Object MethodString(System.String)*/
                /* IL_75: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_7A: call Void WriteType(System.Delegate)*/
                asm2.x600000d(CILJS.newobj(t6,asm2.x6000001,[null, null, asm2.x600000c]));
                /* IL_7F: ret */
                return ;
            }
        }
    };
    /* static System.Object Program.MethodObj(Object)*/
    asm.x600000a = function MethodObj(arg0)
    {
        /* IL_00: ldnull */
        /* IL_01: ret */
        return null;
    };;
    /* static System.Object Program.MethodInt(Int32)*/
    asm.x600000b = function MethodInt(arg0)
    {
        /* IL_00: ldnull */
        /* IL_01: ret */
        return null;
    };;
    /* static System.Object Program.MethodString(String)*/
    asm.x600000c = function MethodString(arg0)
    {
        /* IL_00: ldnull */
        /* IL_01: ret */
        return null;
    };;
    /* static System.Void Program.WriteType(Delegate)*/
    asm.x600000d_init = function ()
    {
        ((asm2)["FuncX`1"]((asm0)["System.Object"]()).init)();
        ((asm2)["FuncX`2"]((asm0)["System.Object"](),(asm0)["System.Object"]()).init)();
        ((asm2)["FuncX`2"]((asm0)["System.String"](),(asm0)["System.Object"]()).init)();
        ((asm2)["FuncX`2"]((asm0)["System.Int32"](),(asm0)["System.Object"]()).init)();
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
        t1 = (asm2)["FuncX`1"](t0);
        t2 = (asm2)["FuncX`2"](t0,t0);
        t3 = (asm0)["System.String"]();
        t4 = (asm2)["FuncX`2"](t3,t0);
        t5 = (asm0)["System.Int32"]();
        t6 = (asm2)["FuncX`2"](t5,t0);
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: isinst FuncX`1[System.Object]*/
                /* IL_06: brfalse.s IL_12*/
                
                if ((!(t1.IsInst(arg0)))){
                    __pos__ = 0x12;
                    continue;
                }
                /* IL_08: ldstr FuncX<object>*/
                /* IL_0D: call Void Log(System.Object)*/
                asm1.x6000001(CILJS.new_string("FuncX<object>"));
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: isinst FuncX`2[System.Object,System.Object]*/
                /* IL_18: brfalse.s IL_24*/
                
                if ((!(t2.IsInst(arg0)))){
                    __pos__ = 0x24;
                    continue;
                }
                /* IL_1A: ldstr FuncX<object, object>*/
                /* IL_1F: call Void Log(System.Object)*/
                asm1.x6000001(CILJS.new_string("FuncX<object, object>"));
                case 0x24:
                /* IL_24: ldarg.0 */
                /* IL_25: isinst FuncX`2[System.String,System.Object]*/
                /* IL_2A: brfalse.s IL_36*/
                
                if ((!(t4.IsInst(arg0)))){
                    __pos__ = 0x36;
                    continue;
                }
                /* IL_2C: ldstr FuncX<string, object>*/
                /* IL_31: call Void Log(System.Object)*/
                asm1.x6000001(CILJS.new_string("FuncX<string, object>"));
                case 0x36:
                /* IL_36: ldarg.0 */
                /* IL_37: isinst FuncX`2[System.Int32,System.Object]*/
                /* IL_3C: brfalse.s IL_48*/
                
                if ((!(t6.IsInst(arg0)))){
                    __pos__ = 0x48;
                    continue;
                }
                /* IL_3E: ldstr FuncX<int, object>*/
                /* IL_43: call Void Log(System.Object)*/
                asm1.x6000001(CILJS.new_string("FuncX<int, object>"));
                case 0x48:
                /* IL_48: ret */
                return ;
            }
        }
    };
    /* static System.Object Program.<Main>b__0(Object)*/
    asm.x600000e = function _Main_b__0(arg0)
    {
        /* IL_00: ldnull */
        /* IL_01: ret */
        return null;
    };;
    (asm)["FuncX`2"] = CILJS.declare_type(
        "FuncX_2",
        ["T", "TResult"],
        function (T,TResult)
        {
            return {};
        },
        function (T,TResult)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"FuncX`2",false,false,false,true,false,[],[
                    [asm2, "x6000002", "Invoke"],
                    [asm2, "x6000003", "BeginInvoke"],
                    [asm2, "x6000004", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            (this.GenericArguments)["asm2.t2000002"] = [T, TResult];
            this.GenericTypeMetadataName = ("asm2.t2000002<" + ((T.GenericTypeMetadataName + TResult.GenericTypeMetadataName) + ">"));
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
                    [asm2, "x6000006", "Invoke"],
                    [asm2, "x6000007", "BeginInvoke"],
                    [asm2, "x6000008", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            (this.GenericArguments)["asm2.t2000003"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000003<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm2.x6000006","asm2.x6000006");
            CILJS.declare_virtual(this,"asm2.x6000007","asm2.x6000007");
            CILJS.declare_virtual(this,"asm2.x6000008","asm2.x6000008");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            (this)["CS$<>9__CachedAnonymousMethodDelegate1"] = null;
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000009;
})(asm2 || (asm2 = {}));
