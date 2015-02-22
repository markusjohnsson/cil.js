var asm1; (function (asm)
{
    asm.FullName = "IsInstDelegate.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static Void Log(System.Object)*/
    asm.x6000001 = braille_test_log;;
    /* Void .ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* TResult Invoke(T)*/
    asm.x600000d = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    /* Void .ctor(System.Object, System.IntPtr)*/
    asm.x600000c = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    /* T Invoke()*/
    asm.x600000f = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    /* Void .ctor(System.Object, System.IntPtr)*/
    asm.x600000e = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    /* static Void Main(System.String[])*/
    asm.x6000010_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.Program().init)();
        ((asm0)["System.Object"]().init)();
        ((asm1)["FuncX`2"]((asm0)["System.Object"](),(asm0)["System.Object"]()).init)();
        ((asm0)["System.Int32"]().init)();
        ((asm1)["FuncX`2"]((asm0)["System.Int32"](),(asm0)["System.Object"]()).init)();
        ((asm0)["System.String"]().init)();
        ((asm1)["FuncX`2"]((asm0)["System.String"](),(asm0)["System.Object"]()).init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function (arg0)
    {
        asm.x6000010_init.apply(this,arguments);
        return asm.x6000010_.apply(this,arguments);
    };;
    asm.x6000010_ = function Main(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        var t7;
        var __pos_0__;
        var loc0;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.Program();
        t2 = (asm0)["System.Object"]();
        t3 = (asm1)["FuncX`2"]((asm0)["System.Object"](),(asm0)["System.Object"]());
        t4 = (asm0)["System.Int32"]();
        t5 = (asm1)["FuncX`2"]((asm0)["System.Int32"](),(asm0)["System.Object"]());
        t6 = (asm0)["System.String"]();
        t7 = (asm1)["FuncX`2"]((asm0)["System.String"](),(asm0)["System.Object"]());
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldsfld FuncX`2 CS$<>9__CachedAnonymousMethodDelegate1*/
                /* IL_05: brtrue.s IL_18*/
                
                if ((t1)["CS$<>9__CachedAnonymousMethodDelegate1"]){
                    __pos_0__ = 0x18;
                    continue;
                }
                /* IL_07: ldnull */
                /* IL_09: ldftn Object <Main>b__0(System.Object)*/
                /* IL_0E: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_13: stsfld FuncX`2 CS$<>9__CachedAnonymousMethodDelegate1*/
                (t1)["CS$<>9__CachedAnonymousMethodDelegate1"] = BLR.newobj(t3,asm1.x600000c,[null, null, asm1.x6000015]);
                case 0x18:
                /* IL_18: ldsfld FuncX`2 CS$<>9__CachedAnonymousMethodDelegate1*/
                /* IL_1D: stloc.0 */
                loc0 = (t1)["CS$<>9__CachedAnonymousMethodDelegate1"];
                /* IL_1E: ldstr Lambda:*/
                /* IL_23: call Void Log(System.Object)*/
                asm1.x6000001(BLR.new_string("Lambda:"));
                /* IL_28: ldloc.0 */
                /* IL_29: call Void WriteType(System.Delegate)*/
                asm1.x6000014(loc0);
                /* IL_2E: ldstr Method (object):*/
                /* IL_33: call Void Log(System.Object)*/
                asm1.x6000001(BLR.new_string("Method (object):"));
                /* IL_38: ldnull */
                /* IL_3A: ldftn Object MethodObj(System.Object)*/
                /* IL_3F: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_44: call Void WriteType(System.Delegate)*/
                asm1.x6000014(BLR.newobj(t3,asm1.x600000c,[null, null, asm1.x6000011]));
                /* IL_49: ldstr Method (object):*/
                /* IL_4E: call Void Log(System.Object)*/
                asm1.x6000001(BLR.new_string("Method (object):"));
                /* IL_53: ldnull */
                /* IL_55: ldftn Object MethodInt(System.Int32)*/
                /* IL_5A: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_5F: call Void WriteType(System.Delegate)*/
                asm1.x6000014(BLR.newobj(t5,asm1.x600000c,[null, null, asm1.x6000012]));
                /* IL_64: ldstr Method (object):*/
                /* IL_69: call Void Log(System.Object)*/
                asm1.x6000001(BLR.new_string("Method (object):"));
                /* IL_6E: ldnull */
                /* IL_70: ldftn Object MethodString(System.String)*/
                /* IL_75: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_7A: call Void WriteType(System.Delegate)*/
                asm1.x6000014(BLR.newobj(t7,asm1.x600000c,[null, null, asm1.x6000013]));
                /* IL_7F: ret */
                return ;
            }
        }
    };
    /* static Object MethodObj(System.Object)*/
    asm.x6000011 = function MethodObj(arg0)
    {
        /* IL_00: ldnull */
        /* IL_01: ret */
        return null;
    };;
    /* static Object MethodInt(System.Int32)*/
    asm.x6000012 = function MethodInt(arg0)
    {
        /* IL_00: ldnull */
        /* IL_01: ret */
        return null;
    };;
    /* static Object MethodString(System.String)*/
    asm.x6000013 = function MethodString(arg0)
    {
        /* IL_00: ldnull */
        /* IL_01: ret */
        return null;
    };;
    /* static Void WriteType(System.Delegate)*/
    asm.x6000014_init = function ()
    {
        ((asm0)["System.Object"]().init)();
        ((asm1)["FuncX`1"]((asm0)["System.Object"]()).init)();
        ((asm1)["FuncX`2"]((asm0)["System.Object"](),(asm0)["System.Object"]()).init)();
        ((asm0)["System.String"]().init)();
        ((asm1)["FuncX`2"]((asm0)["System.String"](),(asm0)["System.Object"]()).init)();
        ((asm0)["System.Int32"]().init)();
        ((asm1)["FuncX`2"]((asm0)["System.Int32"](),(asm0)["System.Object"]()).init)();
        asm.x6000014 = asm.x6000014_;
    };;
    asm.x6000014 = function (arg0)
    {
        asm.x6000014_init.apply(this,arguments);
        return asm.x6000014_.apply(this,arguments);
    };;
    asm.x6000014_ = function WriteType(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        var __pos_0__;
        t0 = (asm0)["System.Object"]();
        t1 = (asm1)["FuncX`1"]((asm0)["System.Object"]());
        t2 = (asm1)["FuncX`2"]((asm0)["System.Object"](),(asm0)["System.Object"]());
        t3 = (asm0)["System.String"]();
        t4 = (asm1)["FuncX`2"]((asm0)["System.String"](),(asm0)["System.Object"]());
        t5 = (asm0)["System.Int32"]();
        t6 = (asm1)["FuncX`2"]((asm0)["System.Int32"](),(asm0)["System.Object"]());
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: isinst FuncX`1[System.Object]*/
                /* IL_06: brfalse.s IL_12*/
                
                if ((!(t1.IsInst(arg0)))){
                    __pos_0__ = 0x12;
                    continue;
                }
                /* IL_08: ldstr FuncX<object>*/
                /* IL_0D: call Void Log(System.Object)*/
                asm1.x6000001(BLR.new_string("FuncX<object>"));
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: isinst FuncX`2[System.Object,System.Object]*/
                /* IL_18: brfalse.s IL_24*/
                
                if ((!(t2.IsInst(arg0)))){
                    __pos_0__ = 0x24;
                    continue;
                }
                /* IL_1A: ldstr FuncX<object, object>*/
                /* IL_1F: call Void Log(System.Object)*/
                asm1.x6000001(BLR.new_string("FuncX<object, object>"));
                case 0x24:
                /* IL_24: ldarg.0 */
                /* IL_25: isinst FuncX`2[System.String,System.Object]*/
                /* IL_2A: brfalse.s IL_36*/
                
                if ((!(t4.IsInst(arg0)))){
                    __pos_0__ = 0x36;
                    continue;
                }
                /* IL_2C: ldstr FuncX<string, object>*/
                /* IL_31: call Void Log(System.Object)*/
                asm1.x6000001(BLR.new_string("FuncX<string, object>"));
                case 0x36:
                /* IL_36: ldarg.0 */
                /* IL_37: isinst FuncX`2[System.Int32,System.Object]*/
                /* IL_3C: brfalse.s IL_48*/
                
                if ((!(t6.IsInst(arg0)))){
                    __pos_0__ = 0x48;
                    continue;
                }
                /* IL_3E: ldstr FuncX<int, object>*/
                /* IL_43: call Void Log(System.Object)*/
                asm1.x6000001(BLR.new_string("FuncX<int, object>"));
                case 0x48:
                /* IL_48: ret */
                return ;
            }
        }
    };
    /* static Object <Main>b__0(System.Object)*/
    asm.x6000015 = function _Main_b__0(arg0)
    {
        /* IL_00: ldnull */
        /* IL_01: ret */
        return null;
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
    asm.TestHelper = BLR.declare_type(
        "TestHelper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestHelper",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["FuncX`2"] = BLR.declare_type(
        "FuncX_2",
        ["T", "TResult"],
        function (T,TResult)
        {
            return {};
        },
        function (T,TResult)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"FuncX`2",false,false,false,true,false,[],[
                    [asm1, "x600000d", "Invoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            (this.GenericArguments)["asm1.t2000007"] = [T, TResult];
            this.GenericTypeMetadataName = ("asm1.t2000007<" + ((T.GenericTypeMetadataName + TResult.GenericTypeMetadataName) + ">"));
            BLR.declare_virtual(this,"asm1.x600000d","asm1.x600000d");
            BLR.declare_virtual(this,"asm0.x6000074","asm0.x600007d");
            BLR.declare_virtual(this,"asm0.x6000073","asm0.x600007e");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000075");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000078");
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
                    [asm1, "x600000f", "Invoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            (this.GenericArguments)["asm1.t2000008"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000008<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
            BLR.declare_virtual(this,"asm0.x6000074","asm0.x600007d");
            BLR.declare_virtual(this,"asm0.x6000073","asm0.x600007e");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000075");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000078");
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            (this)["CS$<>9__CachedAnonymousMethodDelegate1"] = null;
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
