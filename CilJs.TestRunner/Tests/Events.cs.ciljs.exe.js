var asm2;(function (asm)
{
    asm.FullName = "Events.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.add_MyEvent(EventHandler)*/
    asm.x6000001_init = function ()
    {
        (asm2.Program().init)();
        ((asm0)["System.EventHandler"]().init)();
        asm.x6000001 = asm.x6000001_;
    };;
    asm.x6000001 = function (arg0)
    {
        asm.x6000001_init.apply(this,arguments);
        return asm.x6000001_.apply(this,arguments);
    };;
    asm.x6000001_ = function add_MyEvent(arg0)
    {
        var t0;
        var t1;
        t0 = asm2.Program();
        t1 = (asm0)["System.EventHandler"]();
        /* IL_00: ldsfld EventHandler MyEvent */
        /* IL_05: ldarg.0  */
        /* IL_06: call Delegate Combine(System.Delegate, System.Delegate) */
        /* IL_0B: castclass System.EventHandler */
        /* IL_10: stsfld EventHandler MyEvent */
        (t0)["MyEvent"] = CILJS.cast_class(asm0.x600005d(t0.MyEvent,arg0),t1);
        /* IL_15: ret  */
        return ;
    };
    /* static System.Void Program.remove_MyEvent(EventHandler)*/
    asm.x6000002_init = function ()
    {
        (asm2.Program().init)();
        ((asm0)["System.EventHandler"]().init)();
        asm.x6000002 = asm.x6000002_;
    };;
    asm.x6000002 = function (arg0)
    {
        asm.x6000002_init.apply(this,arguments);
        return asm.x6000002_.apply(this,arguments);
    };;
    asm.x6000002_ = function remove_MyEvent(arg0)
    {
        var t0;
        var t1;
        t0 = asm2.Program();
        t1 = (asm0)["System.EventHandler"]();
        /* IL_00: ldsfld EventHandler MyEvent */
        /* IL_05: ldarg.0  */
        /* IL_06: call Delegate Remove(System.Delegate, System.Delegate) */
        /* IL_0B: castclass System.EventHandler */
        /* IL_10: stsfld EventHandler MyEvent */
        (t0)["MyEvent"] = CILJS.cast_class(asm0.x600005e(t0.MyEvent,arg0),t1);
        /* IL_15: ret  */
        return ;
    };
    /* static System.Void Program.Main()*/
    asm.x6000003_init = function ()
    {
        (asm2.Program().init)();
        ((asm0)["System.EventHandler"]().init)();
        ((asm0)["System.EventArgs"]().init)();
        asm.x6000003 = asm.x6000003_;
    };;
    asm.x6000003 = function ()
    {
        asm.x6000003_init.apply(this,arguments);
        return asm.x6000003_.apply(this,arguments);
    };;
    asm.x6000003_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var in_block_0;
        var __pos__;
        CILJS.init_base_types();
        t0 = asm2.Program();
        t1 = (asm0)["System.EventHandler"]();
        t2 = (asm0)["System.Object"]();
        t3 = (asm0)["System.EventArgs"]();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldsfld EventHandler CS$<>9__CachedAnonymousMethodDelegate1 */
                /* IL_05: brtrue.s IL_18 */
                
                if ((t0)["CS$<>9__CachedAnonymousMethodDelegate1"]){
                    __pos__ = 0x18;
                    continue;
                }
                /* IL_07: ldnull  */
                /* IL_09: ldftn Void <Main>b__0(System.Object, System.EventArgs) */
                /* IL_0E: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_13: stsfld EventHandler CS$<>9__CachedAnonymousMethodDelegate1 */
                (t0)["CS$<>9__CachedAnonymousMethodDelegate1"] = CILJS.newobj(t1,asm0.x6000072,[null, null, asm2.x6000006]);
                case 0x18:
                /* IL_18: ldsfld EventHandler CS$<>9__CachedAnonymousMethodDelegate1 */
                /* IL_1D: call Void add_MyEvent(System.EventHandler) */
                asm2.x6000001((t0)["CS$<>9__CachedAnonymousMethodDelegate1"]);
                /* IL_22: ldnull  */
                /* IL_24: ldftn Void Handler(System.Object, System.EventArgs) */
                /* IL_29: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_2E: call Void add_MyEvent(System.EventHandler) */
                asm2.x6000001(CILJS.newobj(t1,asm0.x6000072,[null, null, asm2.x6000004]));
                asm0.x6000071();
                /* IL_33: ldsfld EventHandler MyEvent */
                /* IL_38: newobj Void .ctor() */
                /* IL_3D: newobj Void .ctor() */
                /* IL_42: callvirt Void Invoke(System.Object, System.EventArgs) */
                t0.MyEvent._methodPtr.apply(null,((t0.MyEvent._target) ? ([
                        t0.MyEvent._target,
                        CILJS.newobj(t2,asm0.x60000f4,[null]),
                        CILJS.newobj(t3,asm0.x6000070,[null])
                    ]) : ([
                        CILJS.newobj(t2,asm0.x60000f4,[null]),
                        CILJS.newobj(t3,asm0.x6000070,[null])
                    ])));
                /* IL_47: ldnull  */
                /* IL_49: ldftn Void Handler(System.Object, System.EventArgs) */
                /* IL_4E: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_53: call Void remove_MyEvent(System.EventHandler) */
                asm2.x6000002(CILJS.newobj(t1,asm0.x6000072,[null, null, asm2.x6000004]));
                asm0.x6000071();
                /* IL_58: ldsfld EventHandler MyEvent */
                /* IL_5D: newobj Void .ctor() */
                /* IL_62: newobj Void .ctor() */
                /* IL_67: callvirt Void Invoke(System.Object, System.EventArgs) */
                t0.MyEvent._methodPtr.apply(null,((t0.MyEvent._target) ? ([
                        t0.MyEvent._target,
                        CILJS.newobj(t2,asm0.x60000f4,[null]),
                        CILJS.newobj(t3,asm0.x6000070,[null])
                    ]) : ([
                        CILJS.newobj(t2,asm0.x60000f4,[null]),
                        CILJS.newobj(t3,asm0.x6000070,[null])
                    ])));
                /* IL_6C: ret  */
                return ;
            }
        }
    };
    /* static System.Void Program.Handler(Object,EventArgs)*/
    asm.x6000004 = function Handler(arg0, arg1)
    {
        /* IL_00: ldstr Second */
        /* IL_05: call Void Log(System.Object) */
        asm1.x6000001(CILJS.new_string("Second"));
        /* IL_0A: ret  */
        return ;
    };;
    /* static System.Void Program.<Main>b__0(Object,EventArgs)*/
    asm.x6000006 = function _Main_b__0(arg0, arg1)
    {
        /* IL_00: ldstr First */
        /* IL_05: call Void Log(System.Object) */
        asm1.x6000001(CILJS.new_string("First"));
        /* IL_0A: ret  */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.MyEvent = null;
            (this)["CS$<>9__CachedAnonymousMethodDelegate1"] = null;
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000003;
})(asm2 || (asm2 = {}));
