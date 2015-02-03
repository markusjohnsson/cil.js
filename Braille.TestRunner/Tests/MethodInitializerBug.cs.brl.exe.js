var asm1; (function (asm)
{
    asm.FullName = "MethodInitializerBug.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* Void .ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void .cctor()*/
    asm.x600000d_init = function (T)
    {
        return function ()
        {
            (((asm0)["Braille.Runtime.UnboundGenericParameter"])().init)();
            (((asm1)["A`1"])(T).init)();
        };
    };;
    asm.x600000d = function (T)
    {
        return function ()
        {
            ((asm.x600000d_init)(T).apply)(this,arguments);
            return ((asm.x600000d_)(T).apply)(this,arguments);
        };
    };;
    asm.x600000d_ = function (T)
    {
        return function _cctor()
        {
            var t0;
            var t1;
            var t2;
            
            if (((asm1)["A`1"])(T).FieldHasBeenInitialized){
                return;
            }
            ((asm1)["A`1"])(T).FieldHasBeenInitialized = true;
            t0 = T;
            t1 = ((asm0)["Braille.Runtime.UnboundGenericParameter"])();
            t2 = ((asm1)["A`1"])(T);
            /* IL_00: ldc.i4.0 */
            /* IL_01: newarr T*/
            /* IL_06: stsfld T[] Value*/
            (t2)["Value"] = (BLR.new_array)(t0,(0|0));
            /* IL_0B: ret */
            return ;
        };
    };
    /* Void .ctor()*/
    asm.x600000e_init = function ()
    {
        (((asm1)["A`1"])((((arguments)[0].constructor.GenericArguments)["asm1.t2000008"])[0]).init)();
    };;
    asm.x600000e = function (arg0)
    {
        (asm.x600000e_init.apply)(this,arguments);
        return (asm.x600000e_.apply)(this,arguments);
    };;
    asm.x600000e_ = function _ctor(arg0)
    {
        var t0;
        var t1;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t2000008"])[0];
        t1 = ((asm1)["A`1"])((((arguments)[0].constructor.GenericArguments)["asm1.t2000008"])[0]);
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        ((asm1.x600000d)((((arguments)[0].constructor.GenericArguments)["asm1.t2000008"])[0]))();
        /* IL_06: ldarg.0 */
        /* IL_07: ldsfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_0C: stfld T[] Value*/
        arg0.Value = t1.Value;
        /* IL_11: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
    /* static Void Main()*/
    asm.x6000011_init = function ()
    {
        (((asm0)["System.ValueType"])().init)();
        ((asm1.C)().init)();
        (((asm1)["B`1"])((asm1.C)()).init)();
        ((asm1.D)().init)();
        (((asm1)["B`1"])((asm1.D)()).init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function ()
    {
        (asm.x6000011_init.apply)(this,arguments);
        return (asm.x6000011_.apply)(this,arguments);
    };;
    asm.x6000011_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        t0 = ((asm0)["System.ValueType"])();
        t1 = (asm1.C)();
        t2 = ((asm1)["B`1"])((asm1.C)());
        t3 = (asm1.D)();
        t4 = ((asm1)["B`1"])((asm1.D)());
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: ldfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_0A: callvirt Type GetType()*/
        /* IL_0F: callvirt String get_FullName()*/
        /* IL_14: call Void Log(System.Object)*/
        (asm1.x6000001)(((((asm0.x600000a)((BLR.newobj)(t2,asm1.x600000e,[
            null
        ]).Value).vtable)["asm0.x60000ac"])())((asm0.x600000a)((BLR.newobj)(t2,asm1.x600000e,[
            null
        ]).Value)));
        /* IL_19: newobj Void .ctor()*/
        /* IL_1E: ldfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_23: callvirt Type GetType()*/
        /* IL_28: callvirt String get_FullName()*/
        /* IL_2D: call Void Log(System.Object)*/
        (asm1.x6000001)(((((asm0.x600000a)((BLR.newobj)(t4,asm1.x600000e,[
            null
        ]).Value).vtable)["asm0.x60000ac"])())((asm0.x600000a)((BLR.newobj)(t4,asm1.x600000e,[
            null
        ]).Value)));
        /* IL_32: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x6000012 = function _ctor(arg0)
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
    (asm)["A`1"] = (BLR.declare_type)("A_1",function (T)
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"A`1",asm,false,false,false,true,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000007");
        this.Value = null;
        this.Interfaces = [];
        (this.GenericArguments)["asm1.t2000007"] = [
            T
        ];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function (T)
    {
        return new (((asm0)["System.Object"])())();
    },[
        "T"
    ]);
    (asm)["B`1"] = (BLR.declare_type)("B_1",function (T)
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"B`1",asm,false,false,false,true,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000008");
        this.Interfaces = [];
        (this.GenericArguments)["asm1.t2000008"] = [
            T
        ];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
        this.prototype.Value = null;
    },function (T)
    {
        return new (((asm0)["System.Object"])())();
    },[
        "T"
    ]);
    asm.C = (BLR.declare_type)("C",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"C",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000009");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.D = (BLR.declare_type)("D",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"D",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t200000a");
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
        (BLR.init_type)(this,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t200000b");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
