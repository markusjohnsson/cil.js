var asm1;(function (asm)
{
    asm.FullName = "GenericDelegate.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
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
    /* TResult MFunc`2.Invoke(T)*/
    asm.x600000b = CILJS.delegate_invoke;;
    /* System.IAsyncResult MFunc`2.BeginInvoke(T,AsyncCallback,Object)*/
    asm.x600000c = CILJS.delegate_begin_invoke;;
    /* TResult MFunc`2.EndInvoke(IAsyncResult)*/
    asm.x600000d = CILJS.delegate_end_invoke;;
    /*  MFunc`2..ctor(Object,IntPtr)*/
    asm.x600000a = CILJS.delegate_ctor;;
    /*  IntWrapper..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  StringWrapper..ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000010_init = function ()
    {
        (asm1.Program().init)();
        (asm1.IntWrapper().init)();
        (asm1.StringWrapper().init)();
        ((asm1)["MFunc`2"](asm1.IntWrapper(),asm1.StringWrapper()).init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        CILJS.init_base_types();
        asm.x6000010_init.apply(this,arguments);
        return asm.x6000010_.apply(this,arguments);
    };;
    asm.x6000010_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        t0 = asm1.Program();
        t1 = asm1.IntWrapper();
        t2 = asm1.StringWrapper();
        t3 = (asm1)["MFunc`2"](t1,t2);
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  GenericDelegate.cs:17:5*/
                
                /* IL_01: ldsfld MFunc`2 CS$<>9__CachedAnonymousMethodDelegate2 */
                /* IL_06: brtrue.s IL_1B */
                
                if ((t0)["CS$<>9__CachedAnonymousMethodDelegate2"]){
                    __pos__ = 0x1B;
                    continue;
                }
                /* IL_08: ldnull  */
                /* IL_0A: ldftn StringWrapper <Main>b__1(IntWrapper) */
                /* IL_0F: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_14: stsfld MFunc`2 CS$<>9__CachedAnonymousMethodDelegate2 */
                (t0)["CS$<>9__CachedAnonymousMethodDelegate2"] = CILJS.newobj(t3,asm1.x600000a,[null, null, (function ()
                        {
                            asm1.x6000013_init();
                            return asm1.x6000013;
                        })()]);
                case 0x1B:
                /* IL_1B: ldsfld MFunc`2 CS$<>9__CachedAnonymousMethodDelegate2 */
                /* IL_20: call Void CallDelegate(MFunc`2[IntWrapper,StringWrapper]) */
                asm1.x6000011((t0)["CS$<>9__CachedAnonymousMethodDelegate2"]);
                /* IL_25: nop  */
                
                /* IL_26: ret  GenericDelegate.cs:19:5*/
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
        /* IL_00: nop  GenericDelegate.cs:22:5*/
        /* IL_01: ldarg.0  GenericDelegate.cs:23:9*/
        st_03 = arg0;
        /* IL_02: newobj Void .ctor() */
        /* IL_07: stloc.0  */
        loc0 = CILJS.newobj(t0,asm1.x600000e,[null]);
        /* IL_08: ldloc.0  */
        st_01 = loc0;
        /* IL_09: ldc.i4.s 123 */
        st_02 = (123|0);
        /* IL_0B: stfld Int32 Value */
        st_01.Value = st_02;
        /* IL_10: ldloc.0  */
        st_04 = loc0;
        /* IL_11: callvirt StringWrapper Invoke(IntWrapper) */
        st_05 = st_03._methodPtr.apply(null,((st_03._target) ? ([
                st_03._target,
                st_04
            ]) : ([
                st_04
            ])));
        /* IL_16: ldfld String Value */
        st_06 = st_05.Value;
        /* IL_1B: call Void Log(System.Object) */
        asm1.x6000001(st_06);
        /* IL_20: nop  */
        /* IL_21: ret  GenericDelegate.cs:24:5*/
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
        var loc1;
        t0 = asm1.StringWrapper();
        __pos__ = 0x0;
        /* IL_00: newobj Void .ctor() */
        /* IL_05: stloc.0  */
        loc0 = CILJS.newobj(t0,asm1.x600000f,[null]);
        /* IL_06: ldloc.0  */
        /* IL_07: ldstr Result */
        /* IL_0C: stfld String Value */
        loc0.Value = CILJS.new_string("Result");
        /* IL_11: ldloc.0  */
        /* IL_12: stloc.1  */
        loc1 = loc0;
        /* IL_15: ldloc.1  */
        /* IL_16: ret  */
        return loc1;
    };
    /*  Program..ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
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
    (asm)["MFunc`2"] = CILJS.declare_type(
        "MFunc_2",
        ["T", "TResult"],
        function (T, TResult)
        {
            return {};
        },
        function (T, TResult)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"MFunc`2",false,false,false,true,false,[],[
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
    asm.IntWrapper = CILJS.declare_type(
        "IntWrapper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"IntWrapper",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.Value = 0;
        });
    asm.StringWrapper = CILJS.declare_type(
        "StringWrapper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"StringWrapper",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.Value = null;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000009");
            (this)["CS$<>9__CachedAnonymousMethodDelegate2"] = null;
            this.GenericTypeMetadataName = "asm1.t2000009";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
