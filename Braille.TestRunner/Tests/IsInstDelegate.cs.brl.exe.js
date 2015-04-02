var asm1;(function (asm)
{
    asm.FullName = "IsInstDelegate.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* TResult FuncX`2.Invoke(T)*/
    asm.x600000b = BLR.delegate_invoke;;
    /* System.IAsyncResult FuncX`2.BeginInvoke(T,AsyncCallback,Object)*/
    asm.x600000c = BLR.delegate_begin_invoke;;
    /* TResult FuncX`2.EndInvoke(IAsyncResult)*/
    asm.x600000d = BLR.delegate_end_invoke;;
    /*  FuncX`2..ctor(Object,IntPtr)*/
    asm.x600000a = BLR.delegate_ctor;;
    /* T FuncX`1.Invoke()*/
    asm.x600000f = BLR.delegate_invoke;;
    /* System.IAsyncResult FuncX`1.BeginInvoke(AsyncCallback,Object)*/
    asm.x6000010 = BLR.delegate_begin_invoke;;
    /* T FuncX`1.EndInvoke(IAsyncResult)*/
    asm.x6000011 = BLR.delegate_end_invoke;;
    /*  FuncX`1..ctor(Object,IntPtr)*/
    asm.x600000e = BLR.delegate_ctor;;
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
        BLR.init_base_types();
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
                /* IL_00: nop  IsInstDelegate.cs:9:5*/
                
                /* IL_01: ldsfld FuncX`2 CS$<>9__CachedAnonymousMethodDelegate1 */
                /* IL_06: brtrue.s IL_1B */
                
                if ((t0)["CS$<>9__CachedAnonymousMethodDelegate1"]){
                    __pos__ = 0x1B;
                    continue;
                }
                /* IL_08: ldnull  */
                /* IL_0A: ldftn Object <Main>b__0(System.Object) */
                /* IL_0F: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_14: stsfld FuncX`2 CS$<>9__CachedAnonymousMethodDelegate1 */
                (t0)["CS$<>9__CachedAnonymousMethodDelegate1"] = BLR.newobj(t2,asm1.x600000a,[null, null, asm1.x6000017]);
                case 0x1B:
                /* IL_1B: ldsfld FuncX`2 CS$<>9__CachedAnonymousMethodDelegate1 */
                /* IL_20: stloc.0  */
                loc0 = (t0)["CS$<>9__CachedAnonymousMethodDelegate1"];
                /* IL_21: ldstr Lambda: */
                /* IL_26: call Void Log(System.Object) */
                asm1.x6000001(BLR.new_string("Lambda:"));
                /* IL_2B: nop  */
                
                /* IL_2C: ldloc.0  */
                /* IL_2D: call Void WriteType(System.Delegate) */
                asm1.x6000016(loc0);
                /* IL_32: nop  */
                
                /* IL_33: ldstr Method (object): */
                /* IL_38: call Void Log(System.Object) */
                asm1.x6000001(BLR.new_string("Method (object):"));
                /* IL_3D: nop  */
                
                /* IL_3E: ldnull  */
                /* IL_40: ldftn Object MethodObj(System.Object) */
                /* IL_45: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_4A: call Void WriteType(System.Delegate) */
                asm1.x6000016(BLR.newobj(t2,asm1.x600000a,[null, null, asm1.x6000013]));
                /* IL_4F: nop  */
                
                /* IL_50: ldstr Method (object): */
                /* IL_55: call Void Log(System.Object) */
                asm1.x6000001(BLR.new_string("Method (object):"));
                /* IL_5A: nop  */
                
                /* IL_5B: ldnull  */
                /* IL_5D: ldftn Object MethodInt(System.Int32) */
                /* IL_62: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_67: call Void WriteType(System.Delegate) */
                asm1.x6000016(BLR.newobj(t4,asm1.x600000a,[null, null, asm1.x6000014]));
                /* IL_6C: nop  */
                
                /* IL_6D: ldstr Method (object): */
                /* IL_72: call Void Log(System.Object) */
                asm1.x6000001(BLR.new_string("Method (object):"));
                /* IL_77: nop  */
                
                /* IL_78: ldnull  */
                /* IL_7A: ldftn Object MethodString(System.String) */
                /* IL_7F: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_84: call Void WriteType(System.Delegate) */
                asm1.x6000016(BLR.newobj(t6,asm1.x600000a,[null, null, asm1.x6000015]));
                /* IL_89: nop  */
                
                /* IL_8A: ret  IsInstDelegate.cs:19:5*/
                return ;
            }
        }
    };
    /* static System.Object Program.MethodObj(Object)*/
    asm.x6000013 = function MethodObj(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  IsInstDelegate.cs:22:5*/
        /* IL_01: ldnull  */
        /* IL_02: stloc.0  */
        loc0 = null;
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /* static System.Object Program.MethodInt(Int32)*/
    asm.x6000014 = function MethodInt(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  IsInstDelegate.cs:27:5*/
        /* IL_01: ldnull  */
        /* IL_02: stloc.0  */
        loc0 = null;
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /* static System.Object Program.MethodString(String)*/
    asm.x6000015 = function MethodString(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  IsInstDelegate.cs:32:5*/
        /* IL_01: ldnull  */
        /* IL_02: stloc.0  */
        loc0 = null;
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
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
        var loc0;
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
                /* IL_00: nop  IsInstDelegate.cs:37:5*/
                
                /* IL_01: ldarg.0  */
                /* IL_02: isinst FuncX`1[System.Object] */
                /* IL_07: ldnull  */
                /* IL_09: ceq  */
                /* IL_0A: stloc.0  */
                loc0 = ((t1.IsInst(arg0) === null) ? (1) : (0));
                /* IL_0B: ldloc.0  */
                /* IL_0C: brtrue.s IL_1B */
                
                if (loc0){
                    __pos__ = 0x1B;
                    continue;
                }
                /* IL_0E: nop  IsInstDelegate.cs:39:9*/
                
                /* IL_0F: ldstr FuncX<object> */
                /* IL_14: call Void Log(System.Object) */
                asm1.x6000001(BLR.new_string("FuncX<object>"));
                /* IL_19: nop  */
                
                /* IL_1A: nop  IsInstDelegate.cs:41:9*/
                
                case 0x1B:
                /* IL_1B: ldarg.0  */
                /* IL_1C: isinst FuncX`2[System.Object,System.Object] */
                /* IL_21: ldnull  */
                /* IL_23: ceq  */
                /* IL_24: stloc.0  */
                loc0 = ((t2.IsInst(arg0) === null) ? (1) : (0));
                /* IL_25: ldloc.0  */
                /* IL_26: brtrue.s IL_35 */
                
                if (loc0){
                    __pos__ = 0x35;
                    continue;
                }
                /* IL_28: nop  IsInstDelegate.cs:43:9*/
                
                /* IL_29: ldstr FuncX<object, object> */
                /* IL_2E: call Void Log(System.Object) */
                asm1.x6000001(BLR.new_string("FuncX<object, object>"));
                /* IL_33: nop  */
                
                /* IL_34: nop  IsInstDelegate.cs:45:9*/
                
                case 0x35:
                /* IL_35: ldarg.0  */
                /* IL_36: isinst FuncX`2[System.String,System.Object] */
                /* IL_3B: ldnull  */
                /* IL_3D: ceq  */
                /* IL_3E: stloc.0  */
                loc0 = ((t4.IsInst(arg0) === null) ? (1) : (0));
                /* IL_3F: ldloc.0  */
                /* IL_40: brtrue.s IL_4F */
                
                if (loc0){
                    __pos__ = 0x4F;
                    continue;
                }
                /* IL_42: nop  IsInstDelegate.cs:47:9*/
                
                /* IL_43: ldstr FuncX<string, object> */
                /* IL_48: call Void Log(System.Object) */
                asm1.x6000001(BLR.new_string("FuncX<string, object>"));
                /* IL_4D: nop  */
                
                /* IL_4E: nop  IsInstDelegate.cs:49:9*/
                
                case 0x4F:
                /* IL_4F: ldarg.0  */
                /* IL_50: isinst FuncX`2[System.Int32,System.Object] */
                /* IL_55: ldnull  */
                /* IL_57: ceq  */
                /* IL_58: stloc.0  */
                loc0 = ((t6.IsInst(arg0) === null) ? (1) : (0));
                /* IL_59: ldloc.0  */
                /* IL_5A: brtrue.s IL_69 */
                
                if (loc0){
                    __pos__ = 0x69;
                    continue;
                }
                /* IL_5C: nop  IsInstDelegate.cs:51:9*/
                
                /* IL_5D: ldstr FuncX<int, object> */
                /* IL_62: call Void Log(System.Object) */
                asm1.x6000001(BLR.new_string("FuncX<int, object>"));
                /* IL_67: nop  */
                
                /* IL_68: nop  IsInstDelegate.cs:53:9*/
                
                case 0x69:
                /* IL_69: ret  IsInstDelegate.cs:54:5*/
                return ;
            }
        }
    };
    /* static System.Object Program.<Main>b__0(Object)*/
    asm.x6000017 = function _Main_b__0(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldnull  */
        /* IL_01: stloc.0  */
        loc0 = null;
        /* IL_04: ldloc.0  */
        /* IL_05: ret  */
        return loc0;
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
    (asm)["FuncX`2"] = BLR.declare_type(
        "FuncX_2",
        ["T", "TResult"],
        function (T, TResult)
        {
            return {};
        },
        function (T, TResult)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"FuncX`2",false,false,false,true,false,[],[
                    [asm1, "x600000b", "Invoke"],
                    [asm1, "x600000c", "BeginInvoke"],
                    [asm1, "x600000d", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            (this.GenericArguments)["asm1.t2000006"] = [T, TResult];
            this.GenericTypeMetadataName = ("asm1.t2000006<" + ((T.GenericTypeMetadataName + TResult.GenericTypeMetadataName) + ">"));
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
    (asm)["FuncX`1"] = BLR.declare_type(
        "FuncX_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"FuncX`1",false,false,false,true,false,[],[
                    [asm1, "x600000f", "Invoke"],
                    [asm1, "x6000010", "BeginInvoke"],
                    [asm1, "x6000011", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            (this.GenericArguments)["asm1.t2000007"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000007<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
            BLR.declare_virtual(this,"asm1.x6000010","asm1.x6000010");
            BLR.declare_virtual(this,"asm1.x6000011","asm1.x6000011");
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            (this)["CS$<>9__CachedAnonymousMethodDelegate1"] = null;
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000012;
})(asm1 || (asm1 = {}));
