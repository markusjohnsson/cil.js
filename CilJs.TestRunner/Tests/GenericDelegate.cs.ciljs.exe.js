var asm2; (function (asm)
{
    asm.FullName = "GenericDelegate.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* TResult MFunc`2.Invoke(T)*/
    asm.x6000002 = CILJS.delegate_invoke;;
    /* System.IAsyncResult MFunc`2.BeginInvoke(T,AsyncCallback,Object)*/
    asm.x6000003 = CILJS.delegate_begin_invoke;;
    /* TResult MFunc`2.EndInvoke(IAsyncResult)*/
    asm.x6000004 = CILJS.delegate_end_invoke;;
    /*  MFunc`2..ctor(Object,IntPtr)*/
    asm.x6000001 = CILJS.delegate_ctor;;
    /*  IntWrapper..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  StringWrapper..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000007_init = function ()
    {
        (asm2.Program().init)();
        (asm2.IntWrapper().init)();
        (asm2.StringWrapper().init)();
        ((asm2)["MFunc`2"](asm2.IntWrapper(),asm2.StringWrapper()).init)();
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
        var t2;
        var t3;
        var in_block_0;
        var __pos__;
        CILJS.init_base_types();
        t0 = asm2.Program();
        t1 = asm2.IntWrapper();
        t2 = asm2.StringWrapper();
        t3 = (asm2)["MFunc`2"](t1,t2);
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldsfld MFunc`2 CS$<>9__CachedAnonymousMethodDelegate2*/
                /* IL_05: brtrue.s IL_18*/
                
                if ((t0)["CS$<>9__CachedAnonymousMethodDelegate2"]){
                    __pos__ = 0x18;
                    continue;
                }
                /* IL_07: ldnull */
                /* IL_09: ldftn StringWrapper <Main>b__1(IntWrapper)*/
                /* IL_0E: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_13: stsfld MFunc`2 CS$<>9__CachedAnonymousMethodDelegate2*/
                (t0)["CS$<>9__CachedAnonymousMethodDelegate2"] = CILJS.newobj(t3,asm2.x6000001,[null, null, (function ()
                        {
                            asm2.x600000a_init();
                            return asm2.x600000a;
                        })()]);
                case 0x18:
                /* IL_18: ldsfld MFunc`2 CS$<>9__CachedAnonymousMethodDelegate2*/
                /* IL_1D: call Void CallDelegate(MFunc`2[IntWrapper,StringWrapper])*/
                asm2.x6000008((t0)["CS$<>9__CachedAnonymousMethodDelegate2"]);
                /* IL_22: ret */
                return ;
            }
        }
    };
    /* static System.Void Program.CallDelegate(MFunc`2)*/
    asm.x6000008_init = function ()
    {
        (asm2.IntWrapper().init)();
        asm.x6000008 = asm.x6000008_;
    };;
    asm.x6000008 = function (arg0)
    {
        asm.x6000008_init.apply(this,arguments);
        return asm.x6000008_.apply(this,arguments);
    };;
    asm.x6000008_ = function CallDelegate(arg0)
    {
        var t0;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var loc0;
        t0 = asm2.IntWrapper();
        /* IL_00: ldarg.0 */
        st_03 = arg0;
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: stloc.0 */
        loc0 = CILJS.newobj(t0,asm2.x6000005,[null]);
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
    asm.x600000a_init = function ()
    {
        (asm2.StringWrapper().init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function (arg0)
    {
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function _Main_b__1(arg0)
    {
        var t0;
        var loc0;
        t0 = asm2.StringWrapper();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = CILJS.newobj(t0,asm2.x6000006,[null]);
        /* IL_06: ldloc.0 */
        /* IL_07: ldstr Result*/
        /* IL_0C: stfld String Value*/
        loc0.Value = CILJS.new_string("Result");
        /* IL_11: ldloc.0 */
        /* IL_12: ret */
        return loc0;
    };
    /*  Program..ctor()*/
    asm.x6000009 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    (asm)["MFunc`2"] = CILJS.declare_type(
        "MFunc_2",
        ["T", "TResult"],
        function (T,TResult)
        {
            return {};
        },
        function (T,TResult)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"MFunc`2",false,false,false,true,false,[],[
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
            CILJS.init_type(this,asm,"IntWrapper",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
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
            CILJS.init_type(this,asm,"StringWrapper",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            (this)["CS$<>9__CachedAnonymousMethodDelegate2"] = null;
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000007;
})(asm2 || (asm2 = {}));
