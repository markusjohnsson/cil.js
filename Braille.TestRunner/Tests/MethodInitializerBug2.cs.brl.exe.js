var asm1; (function (asm)
{
    asm.FullName = "MethodInitializerBug2.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  A`1..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void B`1.Foo(Object)*/
    asm.x600000b_init = function ()
    {
        ((asm0)["System.Array`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t2000007"])[0]).init)();
        ((asm1)["A`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t2000007"])[0]).init)();
    };;
    asm.x600000b = function (arg0,arg1)
    {
        asm.x600000b_init.apply(this,arguments);
        return asm.x600000b_.apply(this,arguments);
    };;
    asm.x600000b_ = function Foo(arg0,arg1)
    {
        var t0;
        var t1;
        var t2;
        var __pos_0__;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t2000007"])[0];
        t1 = (asm0)["System.Array`1"](t0);
        t2 = (asm1)["A`1"](t0);
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarg.1 */
                /* IL_01: isinst T[]*/
                /* IL_06: brfalse.s IL_14*/
                
                if ((!(t1.IsInst(arg1)))){
                    __pos_0__ = 0x14;
                    continue;
                }
                /* IL_08: ldarg.0 */
                /* IL_09: ldarg.1 */
                /* IL_0A: castclass T[]*/
                /* IL_0F: stfld T[] Array*/
                arg0.Array = BLR.cast_class(arg1,t1);
                case 0x14:
                /* IL_14: ldarg.1 */
                /* IL_15: isinst A`1[T]*/
                /* IL_1A: brfalse.s IL_28*/
                
                if ((!(t2.IsInst(arg1)))){
                    __pos_0__ = 0x28;
                    continue;
                }
                /* IL_1C: ldarg.0 */
                /* IL_1D: ldarg.1 */
                /* IL_1E: castclass A`1[T]*/
                /* IL_23: stfld A`1 Value*/
                arg0.Value = BLR.cast_class(arg1,t2);
                case 0x28:
                /* IL_28: ret */
                return ;
            }
        }
    };
    /*  B`1..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  C..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  D..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000f_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.C().init)();
        ((asm1)["B`1"](asm1.C()).init)();
        ((asm0)["System.Boolean"]().init)();
        (asm1.D().init)();
        ((asm1)["B`1"](asm1.D()).init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var loc0;
        var loc1;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.C();
        t2 = (asm1)["B`1"](t1);
        t3 = (asm0)["System.Boolean"]();
        t4 = asm1.D();
        t5 = (asm1)["B`1"](t4);
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = BLR.newobj(t2,asm1.x600000c,[null]);
        /* IL_06: ldloc.0 */
        /* IL_07: ldnull */
        /* IL_08: callvirt Void Foo(System.Object)*/
        asm1.x600000b(loc0,null);
        /* IL_0D: ldloc.0 */
        /* IL_0E: ldfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_13: ldnull */
        /* IL_15: ceq */
        /* IL_16: box System.Boolean*/
        /* IL_1B: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((loc0.Value === null) ? (1) : (0)),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_20: ldloc.0 */
        /* IL_21: ldfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_26: ldnull */
        /* IL_28: ceq */
        /* IL_29: box System.Boolean*/
        /* IL_2E: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((loc0.Array === null) ? (1) : (0)),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_33: newobj Void .ctor()*/
        /* IL_38: stloc.1 */
        loc1 = BLR.newobj(t5,asm1.x600000c,[null]);
        /* IL_39: ldloc.1 */
        /* IL_3A: ldnull */
        /* IL_3B: callvirt Void Foo(System.Object)*/
        asm1.x600000b(loc1,null);
        /* IL_40: ldloc.1 */
        /* IL_41: ldfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_46: ldnull */
        /* IL_48: ceq */
        /* IL_49: box System.Boolean*/
        /* IL_4E: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((loc1.Value === null) ? (1) : (0)),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_53: ldloc.1 */
        /* IL_54: ldfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_59: ldnull */
        /* IL_5B: ceq */
        /* IL_5C: box System.Boolean*/
        /* IL_61: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((loc1.Array === null) ? (1) : (0)),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_66: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
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
    (asm)["A`1"] = BLR.declare_type(
        "A_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            (this.GenericArguments)["asm1.t2000006"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000006<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["B`1"] = BLR.declare_type(
        "B_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"B`1",false,false,false,true,false,[],[
                    [asm1, "x600000b", "Foo"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            (this.GenericArguments)["asm1.t2000007"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000007<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.Value = null;
            this.prototype.Array = null;
        });
    asm.C = BLR.declare_type(
        "C",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.D = BLR.declare_type(
        "D",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
