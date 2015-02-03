var asm1; (function (asm)
{
    asm.FullName = "Events.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static Void add_MyEvent(System.EventHandler)*/
    asm.x600000c_init = function ()
    {
        ((asm1.Program)().init)();
        (((asm0)["System.EventHandler"])().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function (arg0)
    {
        (asm.x600000c_init.apply)(this,arguments);
        return (asm.x600000c_.apply)(this,arguments);
    };;
    asm.x600000c_ = function add_MyEvent(arg0)
    {
        var t0;
        var t1;
        t0 = (asm1.Program)();
        t1 = ((asm0)["System.EventHandler"])();
        /* IL_00: ldsfld EventHandler MyEvent*/
        /* IL_05: ldarg.0 */
        /* IL_06: call Delegate Combine(System.Delegate, System.Delegate)*/
        /* IL_0B: castclass System.EventHandler*/
        /* IL_10: stsfld EventHandler MyEvent*/
        (t0)["MyEvent"] = (BLR.cast_class)((asm0.x6000070)(t0.MyEvent,arg0),t1);
        /* IL_15: ret */
        return ;
    };
    /* static Void remove_MyEvent(System.EventHandler)*/
    asm.x600000d_init = function ()
    {
        ((asm1.Program)().init)();
        (((asm0)["System.EventHandler"])().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function (arg0)
    {
        (asm.x600000d_init.apply)(this,arguments);
        return (asm.x600000d_.apply)(this,arguments);
    };;
    asm.x600000d_ = function remove_MyEvent(arg0)
    {
        var t0;
        var t1;
        t0 = (asm1.Program)();
        t1 = ((asm0)["System.EventHandler"])();
        /* IL_00: ldsfld EventHandler MyEvent*/
        /* IL_05: ldarg.0 */
        /* IL_06: call Delegate Remove(System.Delegate, System.Delegate)*/
        /* IL_0B: castclass System.EventHandler*/
        /* IL_10: stsfld EventHandler MyEvent*/
        (t0)["MyEvent"] = (BLR.cast_class)((asm0.x6000071)(t0.MyEvent,arg0),t1);
        /* IL_15: ret */
        return ;
    };
    /* static Void Main()*/
    asm.x600000e_init = function ()
    {
        (((asm0)["System.ValueType"])().init)();
        ((asm1.Program)().init)();
        (((asm0)["System.EventHandler"])().init)();
        (((asm0)["System.Object"])().init)();
        (((asm0)["System.EventArgs"])().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        (asm.x600000e_init.apply)(this,arguments);
        return (asm.x600000e_.apply)(this,arguments);
    };;
    asm.x600000e_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var __pos_0__;
        t0 = ((asm0)["System.ValueType"])();
        t1 = (asm1.Program)();
        t2 = ((asm0)["System.EventHandler"])();
        t3 = ((asm0)["System.Object"])();
        t4 = ((asm0)["System.EventArgs"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldsfld EventHandler CS$<>9__CachedAnonymousMethodDelegate1*/
                /* IL_05: brtrue.s IL_18*/
                
                if ((t1)["CS$<>9__CachedAnonymousMethodDelegate1"]){
                    __pos_0__ = 0x18;
                    continue;
                }
                /* IL_07: ldnull */
                /* IL_09: ldftn Void <Main>b__0(System.Object, System.EventArgs)*/
                /* IL_0E: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_13: stsfld EventHandler CS$<>9__CachedAnonymousMethodDelegate1*/
                (t1)["CS$<>9__CachedAnonymousMethodDelegate1"] = (BLR.newobj)(t2,asm0.x6000121,[
                    null,
                    null,
                    asm1.x6000011
                ]);
                case 0x18:
                /* IL_18: ldsfld EventHandler CS$<>9__CachedAnonymousMethodDelegate1*/
                /* IL_1D: call Void add_MyEvent(System.EventHandler)*/
                (asm1.x600000c)((t1)["CS$<>9__CachedAnonymousMethodDelegate1"]);
                /* IL_22: ldnull */
                /* IL_24: ldftn Void Handler(System.Object, System.EventArgs)*/
                /* IL_29: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_2E: call Void add_MyEvent(System.EventHandler)*/
                (asm1.x600000c)((BLR.newobj)(t2,asm0.x6000121,[
                    null,
                    null,
                    asm1.x600000f
                ]));
                (asm0.x6000120)();
                /* IL_33: ldsfld EventHandler MyEvent*/
                /* IL_38: newobj Void .ctor()*/
                /* IL_3D: newobj Void .ctor()*/
                /* IL_42: callvirt Void Invoke(System.Object, System.EventArgs)*/
                (t1.MyEvent._methodPtr.apply)(null,((t1.MyEvent._target) ? ([
                    t1.MyEvent._target,
                    (BLR.newobj)(t3,asm0.x600000c,[
                        null
                    ]),
                    (BLR.newobj)(t4,asm0.x600011f,[
                        null
                    ])
                ]) : ([
                    (BLR.newobj)(t3,asm0.x600000c,[
                        null
                    ]),
                    (BLR.newobj)(t4,asm0.x600011f,[
                        null
                    ])
                ])));
                /* IL_47: ldnull */
                /* IL_49: ldftn Void Handler(System.Object, System.EventArgs)*/
                /* IL_4E: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_53: call Void remove_MyEvent(System.EventHandler)*/
                (asm1.x600000d)((BLR.newobj)(t2,asm0.x6000121,[
                    null,
                    null,
                    asm1.x600000f
                ]));
                (asm0.x6000120)();
                /* IL_58: ldsfld EventHandler MyEvent*/
                /* IL_5D: newobj Void .ctor()*/
                /* IL_62: newobj Void .ctor()*/
                /* IL_67: callvirt Void Invoke(System.Object, System.EventArgs)*/
                (t1.MyEvent._methodPtr.apply)(null,((t1.MyEvent._target) ? ([
                    t1.MyEvent._target,
                    (BLR.newobj)(t3,asm0.x600000c,[
                        null
                    ]),
                    (BLR.newobj)(t4,asm0.x600011f,[
                        null
                    ])
                ]) : ([
                    (BLR.newobj)(t3,asm0.x600000c,[
                        null
                    ]),
                    (BLR.newobj)(t4,asm0.x600011f,[
                        null
                    ])
                ])));
                /* IL_6C: ret */
                return ;
            }
        }
    };
    /* static Void Handler(System.Object, System.EventArgs)*/
    asm.x600000f = function Handler(arg0,arg1)
    {
        /* IL_00: ldstr Second*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("Second"));
        /* IL_0A: ret */
        return ;
    };;
    /* static Void <Main>b__0(System.Object, System.EventArgs)*/
    asm.x6000011 = function _Main_b__0(arg0,arg1)
    {
        /* IL_00: ldstr First*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("First"));
        /* IL_0A: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.TestLog = (BLR.declare_type)("TestLog",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"TestLog",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000002");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.TestHelper = (BLR.declare_type)("TestHelper",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"TestHelper",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000006");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.Program = (BLR.declare_type)("Program",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000007");
        this.MyEvent = null;
        (this)["CS$<>9__CachedAnonymousMethodDelegate1"] = null;
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
