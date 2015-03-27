var asm1; (function (asm)
{
    asm.FullName = "GenericDelegate.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
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
    /* TResult MFunc`2.Invoke(T)*/
    asm.x600000b = BLR.delegate_invoke;;
    /* System.IAsyncResult MFunc`2.BeginInvoke(T,AsyncCallback,Object)*/
    asm.x600000c = BLR.delegate_begin_invoke;;
    /* TResult MFunc`2.EndInvoke(IAsyncResult)*/
    asm.x600000d = BLR.delegate_end_invoke;;
    /*  MFunc`2..ctor(Object,IntPtr)*/
    asm.x600000a = BLR.delegate_ctor;;
    /*  IntWrapper..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  StringWrapper..ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000010_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.Program().init)();
        (asm1.IntWrapper().init)();
        (asm1.StringWrapper().init)();
        ((asm1)["MFunc`2"](asm1.IntWrapper(),asm1.StringWrapper()).init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        asm.x6000010_init.apply(this,arguments);
        return asm.x6000010_.apply(this,arguments);
    };;
    asm.x6000010_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.Program();
        t2 = asm1.IntWrapper();
        t3 = asm1.StringWrapper();
        t4 = (asm1)["MFunc`2"](t2,t3);
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldsfld MFunc`2 CS$<>9__CachedAnonymousMethodDelegate2*/
                /* IL_05: brtrue.s IL_18*/
                
                if ((t1)["CS$<>9__CachedAnonymousMethodDelegate2"]){
                    __pos__ = 0x18;
                    continue;
                }
                /* IL_07: ldnull */
                /* IL_09: ldftn StringWrapper <Main>b__1(IntWrapper)*/
                /* IL_0E: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_13: stsfld MFunc`2 CS$<>9__CachedAnonymousMethodDelegate2*/
                (t1)["CS$<>9__CachedAnonymousMethodDelegate2"] = BLR.newobj(t4,asm1.x600000a,[null, null, (function ()
                        {
                            asm1.x6000013_init();
                            return asm1.x6000013;
                        })()]);
                case 0x18:
                /* IL_18: ldsfld MFunc`2 CS$<>9__CachedAnonymousMethodDelegate2*/
                /* IL_1D: call Void CallDelegate(MFunc`2[IntWrapper,StringWrapper])*/
                asm1.x6000011((t1)["CS$<>9__CachedAnonymousMethodDelegate2"]);
                /* IL_22: ret */
                return ;
            }
        }
    };
    /* static System.Void Program.CallDelegate(MFunc`2)*/
    asm.x6000011_init = function ()
    {
        (asm1.IntWrapper().init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function (arg0)
    {
        asm.x6000011_init.apply(this,arguments);
        return asm.x6000011_.apply(this,arguments);
    };;
    asm.x6000011_ = function CallDelegate(arg0)
    {
        var t0;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var __pos__;
        var loc0;
        t0 = asm1.IntWrapper();
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        st_03 = arg0;
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: stloc.0 */
        loc0 = BLR.newobj(t0,asm1.x600000e,[null]);
        /* IL_07: ldloc.0 */
        st_01 = loc0;
        /* IL_08: ldc.i4.s 123*/
        st_02 = (123|0);
        /* IL_0A: stfld Int32 Value*/
        st_01.Value = st_02;
        /* IL_0F: ldloc.0 */
        st_04 = loc0;
        /* IL_10: callvirt StringWrapper Invoke(IntWrapper)*/
        st_05 = st_03._methodPtr.apply(null,((st_03._target) ? ([
                st_03._target,
                st_04
            ]) : ([
                st_04
            ])));
        /* IL_15: ldfld String Value*/
        st_06 = st_05.Value;
        /* IL_1A: call Void Log(System.Object)*/
        asm1.x6000001(st_06);
        /* IL_1F: ret */
        return ;
    };
    /* static StringWrapper Program.<Main>b__1(IntWrapper)*/
    asm.x6000013_init = function ()
    {
        (asm1.StringWrapper().init)();
        asm.x6000013 = asm.x6000013_;
    };;
    asm.x6000013 = function (arg0)
    {
        asm.x6000013_init.apply(this,arguments);
        return asm.x6000013_.apply(this,arguments);
    };;
    asm.x6000013_ = function _Main_b__1(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = asm1.StringWrapper();
        __pos__ = 0x0;
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = BLR.newobj(t0,asm1.x600000f,[null]);
        /* IL_06: ldloc.0 */
        /* IL_07: ldstr Result*/
        /* IL_0C: stfld String Value*/
        loc0.Value = BLR.new_string("Result");
        /* IL_11: ldloc.0 */
        /* IL_12: ret */
        return loc0;
    };
    /*  Program..ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
    (asm)["MFunc`2"] = BLR.declare_type(
        "MFunc_2",
        ["T", "TResult"],
        function (T,TResult)
        {
            return {};
        },
        function (T,TResult)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"MFunc`2",false,false,false,true,false,[],[
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
    asm.IntWrapper = BLR.declare_type(
        "IntWrapper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"IntWrapper",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.Value = 0;
        });
    asm.StringWrapper = BLR.declare_type(
        "StringWrapper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"StringWrapper",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.Value = null;
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
            (this)["CS$<>9__CachedAnonymousMethodDelegate2"] = null;
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
