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
    /* static System.Void Program.Main()*/
    asm.x6000009_init = function ()
    {
        (asm1["Program+<>c"]().init)();
        (asm1["FuncX`2"](asm0["System.Object"](),asm0["System.Object"]()).init)();
        (asm1["FuncX`2"](asm0["System.Int32"](),asm0["System.Object"]()).init)();
        (asm1["FuncX`2"](asm0["System.String"](),asm0["System.Object"]()).init)();
        asm.x6000009 = asm.x6000009_;
    };;
    asm.x6000009 = function ()
    {
        asm.x6000009_init();
        return asm.x6000009_();
    };;
    asm.x6000009_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var in_block_0;
        var __pos__;
        var loc0;
        CILJS.init_base_types();
        t0 = asm1["Program+<>c"]();
        t1 = asm0["System.Object"]();
        t2 = asm1["FuncX`2"](t1,t1);
        t3 = asm0["System.Int32"]();
        t4 = asm1["FuncX`2"](t3,t1);
        t5 = asm0["System.String"]();
        t6 = asm1["FuncX`2"](t5,t1);
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                asm1.x600000e();
                /* IL_01: ldsfld FuncX`2 <>9__0_0 */
                st_00 = t0["<>9__0_0"];
                /* IL_06: dup  */
                st_07 = st_02 = st_01 = st_00;
                /* IL_07: brtrue.s IL_20 */
                
                if (st_01){
                    __pos__ = 0x20;
                    continue;
                }
                /* IL_09: pop  */
                asm1.x600000e();
                /* IL_0A: ldsfld <>c <>9 */
                st_03 = t0["<>9"];
                /* IL_10: ldftn Object <Main>b__0_0(System.Object) */
                st_04 = asm1.x6000010;
                /* IL_15: newobj Void .ctor(System.Object, System.IntPtr) */
                st_05 = CILJS.newobj(t2,asm1.x6000001,[null, st_03, st_04]);
                /* IL_1A: dup  */
                st_07 = st_06 = st_05;
                asm1.x600000e();
                /* IL_1B: stsfld FuncX`2 <>9__0_0 */
                t0["<>9__0_0"] = st_06;
                case 0x20:
                /* IL_20: stloc.0  */
                loc0 = st_07;
                /* IL_21: ldstr Lambda: */
                /* IL_26: ldc.i4.0  */
                /* IL_27: newarr System.Object */
                /* IL_2C: call Void WriteLine(System.String, System.Object[]) */
                asm0.x60000a2(CILJS.new_string("Lambda:"),CILJS.new_array(t1,0));
                /* IL_31: nop  */
                /* IL_32: ldloc.0  */
                /* IL_33: call Void WriteType(System.Delegate) */
                asm1.x600000d(loc0);
                /* IL_38: nop  */
                /* IL_39: ldstr Method (object): */
                /* IL_3E: ldc.i4.0  */
                /* IL_3F: newarr System.Object */
                /* IL_44: call Void WriteLine(System.String, System.Object[]) */
                asm0.x60000a2(CILJS.new_string("Method (object):"),CILJS.new_array(t1,0));
                /* IL_49: nop  */
                /* IL_4A: ldnull  */
                /* IL_4C: ldftn Object MethodObj(System.Object) */
                /* IL_51: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_56: call Void WriteType(System.Delegate) */
                asm1.x600000d(CILJS.newobj(t2,asm1.x6000001,[null, null, asm1.x600000a]));
                /* IL_5B: nop  */
                /* IL_5C: ldstr Method (object): */
                /* IL_61: ldc.i4.0  */
                /* IL_62: newarr System.Object */
                /* IL_67: call Void WriteLine(System.String, System.Object[]) */
                asm0.x60000a2(CILJS.new_string("Method (object):"),CILJS.new_array(t1,0));
                /* IL_6C: nop  */
                /* IL_6D: ldnull  */
                /* IL_6F: ldftn Object MethodInt(System.Int32) */
                /* IL_74: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_79: call Void WriteType(System.Delegate) */
                asm1.x600000d(CILJS.newobj(t4,asm1.x6000001,[null, null, asm1.x600000b]));
                /* IL_7E: nop  */
                /* IL_7F: ldstr Method (object): */
                /* IL_84: ldc.i4.0  */
                /* IL_85: newarr System.Object */
                /* IL_8A: call Void WriteLine(System.String, System.Object[]) */
                asm0.x60000a2(CILJS.new_string("Method (object):"),CILJS.new_array(t1,0));
                /* IL_8F: nop  */
                /* IL_90: ldnull  */
                /* IL_92: ldftn Object MethodString(System.String) */
                /* IL_97: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_9C: call Void WriteType(System.Delegate) */
                asm1.x600000d(CILJS.newobj(t6,asm1.x6000001,[null, null, asm1.x600000c]));
                /* IL_A1: nop  */
                /* IL_A2: ret  */
                return ;
            }
        }
    };
    /* static System.Object Program.MethodObj(Object)*/
    asm.x600000a = function MethodObj(arg0)
    {
        var loc0;
        /* IL_00: nop  */
        /* IL_01: ldnull  */
        /* IL_02: stloc.0  */
        loc0 = null;
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /* static System.Object Program.MethodInt(Int32)*/
    asm.x600000b = function MethodInt(arg0)
    {
        var loc0;
        /* IL_00: nop  */
        /* IL_01: ldnull  */
        /* IL_02: stloc.0  */
        loc0 = null;
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /* static System.Object Program.MethodString(String)*/
    asm.x600000c = function MethodString(arg0)
    {
        var loc0;
        /* IL_00: nop  */
        /* IL_01: ldnull  */
        /* IL_02: stloc.0  */
        loc0 = null;
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /* static System.Void Program.WriteType(Delegate)*/
    asm.x600000d_init = function (arg0)
    {
        (asm1["FuncX`1"](asm0["System.Object"]()).init)();
        (asm1["FuncX`2"](asm0["System.Object"](),asm0["System.Object"]()).init)();
        (asm1["FuncX`2"](asm0["System.String"](),asm0["System.Object"]()).init)();
        (asm1["FuncX`2"](asm0["System.Int32"](),asm0["System.Object"]()).init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function (arg0)
    {
        asm.x600000d_init(arg0);
        return asm.x600000d_(arg0);
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
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        t0 = asm0["System.Object"]();
        t1 = asm1["FuncX`1"](t0);
        t2 = asm1["FuncX`2"](t0,t0);
        t3 = asm0["System.String"]();
        t4 = asm1["FuncX`2"](t3,t0);
        t5 = asm0["System.Int32"]();
        t6 = asm1["FuncX`2"](t5,t0);
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                /* IL_01: ldarg.0  */
                /* IL_02: isinst FuncX`1[System.Object] */
                /* IL_07: ldnull  */
                /* IL_09: cgt.un  */
                /* IL_0A: stloc.0  */
                loc0 = ((t1.IsInst(arg0) !== null) ? 1 : 0);
                /* IL_0B: ldloc.0  */
                /* IL_0C: brfalse.s IL_21 */
                
                if ((!(loc0))){
                    __pos__ = 0x21;
                    continue;
                }
                /* IL_0E: nop  */
                /* IL_0F: ldstr FuncX<object> */
                /* IL_14: ldc.i4.0  */
                /* IL_15: newarr System.Object */
                /* IL_1A: call Void WriteLine(System.String, System.Object[]) */
                asm0.x60000a2(CILJS.new_string("FuncX<object>"),CILJS.new_array(t0,0));
                /* IL_1F: nop  */
                /* IL_20: nop  */
                case 0x21:
                /* IL_21: ldarg.0  */
                /* IL_22: isinst FuncX`2[System.Object,System.Object] */
                /* IL_27: ldnull  */
                /* IL_29: cgt.un  */
                /* IL_2A: stloc.1  */
                loc1 = ((t2.IsInst(arg0) !== null) ? 1 : 0);
                /* IL_2B: ldloc.1  */
                /* IL_2C: brfalse.s IL_41 */
                
                if ((!(loc1))){
                    __pos__ = 0x41;
                    continue;
                }
                /* IL_2E: nop  */
                /* IL_2F: ldstr FuncX<object, object> */
                /* IL_34: ldc.i4.0  */
                /* IL_35: newarr System.Object */
                /* IL_3A: call Void WriteLine(System.String, System.Object[]) */
                asm0.x60000a2(CILJS.new_string("FuncX<object, object>"),CILJS.new_array(t0,0));
                /* IL_3F: nop  */
                /* IL_40: nop  */
                case 0x41:
                /* IL_41: ldarg.0  */
                /* IL_42: isinst FuncX`2[System.String,System.Object] */
                /* IL_47: ldnull  */
                /* IL_49: cgt.un  */
                /* IL_4A: stloc.2  */
                loc2 = ((t4.IsInst(arg0) !== null) ? 1 : 0);
                /* IL_4B: ldloc.2  */
                /* IL_4C: brfalse.s IL_61 */
                
                if ((!(loc2))){
                    __pos__ = 0x61;
                    continue;
                }
                /* IL_4E: nop  */
                /* IL_4F: ldstr FuncX<string, object> */
                /* IL_54: ldc.i4.0  */
                /* IL_55: newarr System.Object */
                /* IL_5A: call Void WriteLine(System.String, System.Object[]) */
                asm0.x60000a2(CILJS.new_string("FuncX<string, object>"),CILJS.new_array(t0,0));
                /* IL_5F: nop  */
                /* IL_60: nop  */
                case 0x61:
                /* IL_61: ldarg.0  */
                /* IL_62: isinst FuncX`2[System.Int32,System.Object] */
                /* IL_67: ldnull  */
                /* IL_69: cgt.un  */
                /* IL_6A: stloc.3  */
                loc3 = ((t6.IsInst(arg0) !== null) ? 1 : 0);
                /* IL_6B: ldloc.3  */
                /* IL_6C: brfalse.s IL_81 */
                
                if ((!(loc3))){
                    __pos__ = 0x81;
                    continue;
                }
                /* IL_6E: nop  */
                /* IL_6F: ldstr FuncX<int, object> */
                /* IL_74: ldc.i4.0  */
                /* IL_75: newarr System.Object */
                /* IL_7A: call Void WriteLine(System.String, System.Object[]) */
                asm0.x60000a2(CILJS.new_string("FuncX<int, object>"),CILJS.new_array(t0,0));
                /* IL_7F: nop  */
                /* IL_80: nop  */
                case 0x81:
                /* IL_81: ret  */
                return ;
            }
        }
    };
    /* System.Object <>c.<Main>b__0_0(Object)*/
    asm.x6000010 = function _Main_b__0_0(arg0, arg1)
    {
        /* IL_00: ldnull  */
        /* IL_01: ret  */
        return null;
    };;
    /* static  <>c..cctor()*/
    asm.x600000e_init = function ()
    {
        (asm1["Program+<>c"]().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        asm.x600000e_init();
        return asm.x600000e_();
    };;
    asm.x600000e_ = function _cctor()
    {
        var t0;
        
        if (asm1["Program+<>c"]().FieldsInitialized){
            return;
        }
        asm1["Program+<>c"]().FieldsInitialized = true;
        t0 = asm1["Program+<>c"]();
        asm1.x600000e();
        /* IL_00: newobj Void .ctor() */
        /* IL_05: stsfld <>c <>9 */
        t0["<>9"] = CILJS.newobj(t0,asm1.x600000f,[null]);
        /* IL_0A: ret  */
        return ;
    };
    /*  <>c..ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    asm["FuncX`2"] = CILJS.declare_type(
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
                ],asm0["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            (this.GenericArguments)["asm1.t2000002"] = [T, TResult];
            this.GenericTypeMetadataName = ("asm1.t2000002<" + ((T.GenericTypeMetadataName + TResult.GenericTypeMetadataName) + ">"));
            CILJS.declare_virtual(this,"asm1.x6000002","asm1.x6000002");
            CILJS.declare_virtual(this,"asm1.x6000003","asm1.x6000003");
            CILJS.declare_virtual(this,"asm1.x6000004","asm1.x6000004");
            CILJS.declare_virtual(this,"asm0.x600006b","asm0.x60000e0");
            CILJS.declare_virtual(this,"asm0.x600006a","asm0.x60000e1");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x600006c");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x600006f");
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
        },
        "function FuncX_2() { c.init();this._invocationList = null;this._methodPtr = null;this._target = null }");
    asm["FuncX`1"] = CILJS.declare_type(
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
                ],asm0["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            (this.GenericArguments)["asm1.t2000003"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000003<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm1.x6000006","asm1.x6000006");
            CILJS.declare_virtual(this,"asm1.x6000007","asm1.x6000007");
            CILJS.declare_virtual(this,"asm1.x6000008","asm1.x6000008");
            CILJS.declare_virtual(this,"asm0.x600006b","asm0.x60000e0");
            CILJS.declare_virtual(this,"asm0.x600006a","asm0.x60000e1");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x600006c");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x600006f");
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
        },
        "function FuncX_1() { c.init();this._invocationList = null;this._methodPtr = null;this._target = null }");
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return asm0["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function Program() { c.init(); }");
    asm["Program+<>c"] = CILJS.declare_type(
        "__c",
        [],
        function ()
        {
            return asm0["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program+<>c",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
            this["<>9"] = null;
            this["<>9__0_0"] = null;
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function __c() { c.init(); }");
    asm.entryPoint = asm.x6000009;
})(asm1 || (asm1 = {}));
if (typeof module != "undefined"){
    module.exports = asm1;
}
//# sourceMappingURL=IsInstDelegate.cs.ciljs.exe.js.map
