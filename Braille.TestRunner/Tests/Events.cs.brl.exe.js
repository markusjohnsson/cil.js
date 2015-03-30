var asm1; (function (asm)
{
    asm.FullName = "Events.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static System.Void Program.add_MyEvent(EventHandler)*/
    asm.x600000a_init = function ()
    {
        (asm1.Program().init)();
        ((asm0)["System.EventHandler"]().init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function (arg0)
    {
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function add_MyEvent(arg0)
    {
        var t0;
        var t1;
        var __pos__;
        t0 = asm1.Program();
        t1 = (asm0)["System.EventHandler"]();
        __pos__ = 0x0;
        /* IL_00: ldsfld EventHandler MyEvent */
        /* IL_05: ldarg.0  */
        /* IL_06: call Delegate Combine(System.Delegate, System.Delegate) */
        /* IL_0B: castclass System.EventHandler */
        /* IL_10: stsfld EventHandler MyEvent */
        (t0)["MyEvent"] = BLR.cast_class(asm0.x6000063(t0.MyEvent,arg0),t1);
        /* IL_15: ret  */
        return ;
    };
    /* static System.Void Program.remove_MyEvent(EventHandler)*/
    asm.x600000b_init = function ()
    {
        (asm1.Program().init)();
        ((asm0)["System.EventHandler"]().init)();
        asm.x600000b = asm.x600000b_;
    };;
    asm.x600000b = function (arg0)
    {
        asm.x600000b_init.apply(this,arguments);
        return asm.x600000b_.apply(this,arguments);
    };;
    asm.x600000b_ = function remove_MyEvent(arg0)
    {
        var t0;
        var t1;
        var __pos__;
        t0 = asm1.Program();
        t1 = (asm0)["System.EventHandler"]();
        __pos__ = 0x0;
        /* IL_00: ldsfld EventHandler MyEvent */
        /* IL_05: ldarg.0  */
        /* IL_06: call Delegate Remove(System.Delegate, System.Delegate) */
        /* IL_0B: castclass System.EventHandler */
        /* IL_10: stsfld EventHandler MyEvent */
        (t0)["MyEvent"] = BLR.cast_class(asm0.x6000064(t0.MyEvent,arg0),t1);
        /* IL_15: ret  */
        return ;
    };
    /* static System.Void Program.Main()*/
    asm.x600000c_init = function ()
    {
        (asm1.Program().init)();
        ((asm0)["System.EventHandler"]().init)();
        ((asm0)["System.EventArgs"]().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        BLR.init_base_types();
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        t0 = asm1.Program();
        t1 = (asm0)["System.EventHandler"]();
        t2 = (asm0)["System.Object"]();
        t3 = (asm0)["System.EventArgs"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  Events.cs:8:5*/
                
                /* IL_01: ldsfld EventHandler CS$<>9__CachedAnonymousMethodDelegate1 */
                /* IL_06: brtrue.s IL_1B */
                
                if ((t0)["CS$<>9__CachedAnonymousMethodDelegate1"]){
                    __pos__ = 0x1B;
                    continue;
                }
                /* IL_08: ldnull  */
                /* IL_0A: ldftn Void <Main>b__0(System.Object, System.EventArgs) */
                /* IL_0F: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_14: stsfld EventHandler CS$<>9__CachedAnonymousMethodDelegate1 */
                (t0)["CS$<>9__CachedAnonymousMethodDelegate1"] = BLR.newobj(t1,asm0.x6000165,[null, null, asm1.x600000f]);
                case 0x1B:
                /* IL_1B: ldsfld EventHandler CS$<>9__CachedAnonymousMethodDelegate1 */
                /* IL_20: call Void add_MyEvent(System.EventHandler) */
                asm1.x600000a((t0)["CS$<>9__CachedAnonymousMethodDelegate1"]);
                /* IL_25: nop  */
                
                /* IL_26: ldnull  */
                /* IL_28: ldftn Void Handler(System.Object, System.EventArgs) */
                /* IL_2D: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_32: call Void add_MyEvent(System.EventHandler) */
                asm1.x600000a(BLR.newobj(t1,asm0.x6000165,[null, null, asm1.x600000d]));
                /* IL_37: nop  */
                
                asm0.x6000164();
                /* IL_38: ldsfld EventHandler MyEvent */
                /* IL_3D: newobj Void .ctor() */
                /* IL_42: newobj Void .ctor() */
                /* IL_47: callvirt Void Invoke(System.Object, System.EventArgs) */
                t0.MyEvent._methodPtr.apply(null,((t0.MyEvent._target) ? ([
                        t0.MyEvent._target,
                        BLR.newobj(t2,asm0.x600000c,[null]),
                        BLR.newobj(t3,asm0.x6000163,[null])
                    ]) : ([
                        BLR.newobj(t2,asm0.x600000c,[null]),
                        BLR.newobj(t3,asm0.x6000163,[null])
                    ])));
                /* IL_4C: nop  */
                
                /* IL_4D: ldnull  */
                /* IL_4F: ldftn Void Handler(System.Object, System.EventArgs) */
                /* IL_54: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_59: call Void remove_MyEvent(System.EventHandler) */
                asm1.x600000b(BLR.newobj(t1,asm0.x6000165,[null, null, asm1.x600000d]));
                /* IL_5E: nop  */
                
                asm0.x6000164();
                /* IL_5F: ldsfld EventHandler MyEvent */
                /* IL_64: newobj Void .ctor() */
                /* IL_69: newobj Void .ctor() */
                /* IL_6E: callvirt Void Invoke(System.Object, System.EventArgs) */
                t0.MyEvent._methodPtr.apply(null,((t0.MyEvent._target) ? ([
                        t0.MyEvent._target,
                        BLR.newobj(t2,asm0.x600000c,[null]),
                        BLR.newobj(t3,asm0.x6000163,[null])
                    ]) : ([
                        BLR.newobj(t2,asm0.x600000c,[null]),
                        BLR.newobj(t3,asm0.x6000163,[null])
                    ])));
                /* IL_73: nop  */
                
                /* IL_74: ret  Events.cs:17:5*/
                return ;
            }
        }
    };
    /* static System.Void Program.Handler(Object,EventArgs)*/
    asm.x600000d = function Handler(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  Events.cs:20:5*/
        /* IL_01: ldstr Second */
        /* IL_06: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("Second"));
        /* IL_0B: nop  */
        /* IL_0C: ret  Events.cs:22:5*/
        return ;
    };;
    /* static System.Void Program.<Main>b__0(Object,EventArgs)*/
    asm.x600000f = function _Main_b__0(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldstr First */
        /* IL_05: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("First"));
        /* IL_0A: nop  */
        /* IL_0B: ret  Events.cs:16707566:0*/
        return ;
    };;
    /*  Program..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.MyEvent = null;
            (this)["CS$<>9__CachedAnonymousMethodDelegate1"] = null;
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
