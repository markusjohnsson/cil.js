var asm1; (function (asm)
{
    asm.FullName = "IsInstDelegate.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* TResult FuncX`2.Invoke(T)*/
    asm.x600000b = CILJS.delegate_invoke;;
    /* System.IAsyncResult FuncX`2.BeginInvoke(T,AsyncCallback,Object)*/
    asm.x600000c = CILJS.delegate_begin_invoke;;
    /* TResult FuncX`2.EndInvoke(IAsyncResult)*/
    asm.x600000d = CILJS.delegate_end_invoke;;
    /*  FuncX`2..ctor(Object,IntPtr)*/
    asm.x600000a = CILJS.delegate_ctor;;
    /* T FuncX`1.Invoke()*/
    asm.x600000f = CILJS.delegate_invoke;;
    /* System.IAsyncResult FuncX`1.BeginInvoke(AsyncCallback,Object)*/
    asm.x6000010 = CILJS.delegate_begin_invoke;;
    /* T FuncX`1.EndInvoke(IAsyncResult)*/
    asm.x6000011 = CILJS.delegate_end_invoke;;
    /*  FuncX`1..ctor(Object,IntPtr)*/
    asm.x600000e = CILJS.delegate_ctor;;
    /* static System.Void Program.Main(String[])*/
    asm.x6000012_init = function ()
    {
        (asm1.Program().init)();
        ((asm1)["FuncX`2"]((asm0)["System.Object"](),(asm0)["System.Object"]()).init)();
        ((asm1)["FuncX`2"]((asm0)["System.Int32"](),(asm0)["System.Object"]()).init)();
        ((asm1)["FuncX`2"]((asm0)["System.String"](),(asm0)["System.Object"]()).init)();
        asm.x6000012 = asm.x6000012_;
    };;
    asm.x6000012 = function (arg0)
    {
        CILJS.init_base_types();
        asm.x6000012_init.apply(this,arguments);
        return asm.x6000012_.apply(this,arguments);
    };;
    asm.x6000012_ = function Main(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        t0 = asm1.Program();
        t1 = (asm0)["System.Object"]();
        t2 = (asm1)["FuncX`2"](t1,t1);
        t3 = (asm0)["System.Int32"]();
        t4 = (asm1)["FuncX`2"](t3,t1);
        t5 = (asm0)["System.String"]();
        t6 = (asm1)["FuncX`2"](t5,t1);
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
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
                (t0)["CS$<>9__CachedAnonymousMethodDelegate1"] = CILJS.newobj(t2,asm1.x600000a,[null, null, asm1.x6000017]);
                case 0x18:
                /* IL_18: ldsfld FuncX`2 CS$<>9__CachedAnonymousMethodDelegate1*/
                /* IL_1D: stloc.0 */
                loc0 = (t0)["CS$<>9__CachedAnonymousMethodDelegate1"];
                /* IL_1E: ldstr Lambda:*/
                /* IL_23: call Void Log(System.Object)*/
                asm1.x6000001(CILJS.new_string("Lambda:"));
                /* IL_28: ldloc.0 */
                /* IL_29: call Void WriteType(System.Delegate)*/
                asm1.x6000016(loc0);
                /* IL_2E: ldstr Method (object):*/
                /* IL_33: call Void Log(System.Object)*/
                asm1.x6000001(CILJS.new_string("Method (object):"));
                /* IL_38: ldnull */
                /* IL_3A: ldftn Object MethodObj(System.Object)*/
                /* IL_3F: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_44: call Void WriteType(System.Delegate)*/
                asm1.x6000016(CILJS.newobj(t2,asm1.x600000a,[null, null, asm1.x6000013]));
                /* IL_49: ldstr Method (object):*/
                /* IL_4E: call Void Log(System.Object)*/
                asm1.x6000001(CILJS.new_string("Method (object):"));
                /* IL_53: ldnull */
                /* IL_55: ldftn Object MethodInt(System.Int32)*/
                /* IL_5A: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_5F: call Void WriteType(System.Delegate)*/
                asm1.x6000016(CILJS.newobj(t4,asm1.x600000a,[null, null, asm1.x6000014]));
                /* IL_64: ldstr Method (object):*/
                /* IL_69: call Void Log(System.Object)*/
                asm1.x6000001(CILJS.new_string("Method (object):"));
                /* IL_6E: ldnull */
                /* IL_70: ldftn Object MethodString(System.String)*/
                /* IL_75: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_7A: call Void WriteType(System.Delegate)*/
                asm1.x6000016(CILJS.newobj(t6,asm1.x600000a,[null, null, asm1.x6000015]));
                /* IL_7F: ret */
                return ;
            }
        }
    };
    /* static System.Object Program.MethodObj(Object)*/
    asm.x6000013 = function MethodObj(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldnull */
        /* IL_01: ret */
        return null;
    };;
    /* static System.Object Program.MethodInt(Int32)*/
    asm.x6000014 = function MethodInt(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldnull */
        /* IL_01: ret */
        return null;
    };;
    /* static System.Object Program.MethodString(String)*/
    asm.x6000015 = function MethodString(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldnull */
        /* IL_01: ret */
        return null;
    };;
    /* static System.Void Program.WriteType(Delegate)*/
    asm.x6000016_init = function ()
    {
        ((asm1)["FuncX`1"]((asm0)["System.Object"]()).init)();
        ((asm1)["FuncX`2"]((asm0)["System.Object"](),(asm0)["System.Object"]()).init)();
        ((asm1)["FuncX`2"]((asm0)["System.String"](),(asm0)["System.Object"]()).init)();
        ((asm1)["FuncX`2"]((asm0)["System.Int32"](),(asm0)["System.Object"]()).init)();
        asm.x6000016 = asm.x6000016_;
    };;
    asm.x6000016 = function (arg0)
    {
        asm.x6000016_init.apply(this,arguments);
        return asm.x6000016_.apply(this,arguments);
    };;
    asm.x6000016_ = function WriteType(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        t0 = (asm0)["System.Object"]();
        t1 = (asm1)["FuncX`1"](t0);
        t2 = (asm1)["FuncX`2"](t0,t0);
        t3 = (asm0)["System.String"]();
        t4 = (asm1)["FuncX`2"](t3,t0);
        t5 = (asm0)["System.Int32"]();
        t6 = (asm1)["FuncX`2"](t5,t0);
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
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
    asm.x6000017 = function _Main_b__0(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldnull */
        /* IL_01: ret */
        return null;
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
                    [asm1, "x600000b", "Invoke"],
                    [asm1, "x600000c", "BeginInvoke"],
                    [asm1, "x600000d", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            (this.GenericArguments)["asm1.t2000006"] = [T, TResult];
            this.GenericTypeMetadataName = ("asm1.t2000006<" + ((T.GenericTypeMetadataName + TResult.GenericTypeMetadataName) + ">"));
            CILJS.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            CILJS.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
            CILJS.declare_virtual(this,"asm1.x600000d","asm1.x600000d");
            CILJS.declare_virtual(this,"asm0.x6000066","asm0.x600006f");
            CILJS.declare_virtual(this,"asm0.x6000065","asm0.x6000070");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
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
                    [asm1, "x600000f", "Invoke"],
                    [asm1, "x6000010", "BeginInvoke"],
                    [asm1, "x6000011", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            (this.GenericArguments)["asm1.t2000007"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000007<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
            CILJS.declare_virtual(this,"asm1.x6000010","asm1.x6000010");
            CILJS.declare_virtual(this,"asm1.x6000011","asm1.x6000011");
            CILJS.declare_virtual(this,"asm0.x6000066","asm0.x600006f");
            CILJS.declare_virtual(this,"asm0.x6000065","asm0.x6000070");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
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
            (this)["CS$<>9__CachedAnonymousMethodDelegate1"] = null;
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000012;
})(asm1 || (asm1 = {}));
