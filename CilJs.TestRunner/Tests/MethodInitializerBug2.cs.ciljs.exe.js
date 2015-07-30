var asm2; (function (asm)
{
    asm.FullName = "MethodInitializerBug2.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A`1..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void B`1.Foo(Object)*/
    asm.x6000002_init = function ()
    {
        ((asm0)["System.Array`1"]((((arguments)[0].constructor.GenericArguments)["asm2.t2000003"])[0]).init)();
        ((asm2)["A`1"]((((arguments)[0].constructor.GenericArguments)["asm2.t2000003"])[0]).init)();
    };;
    asm.x6000002 = function (arg0,arg1)
    {
        asm.x6000002_init.apply(this,arguments);
        return asm.x6000002_.apply(this,arguments);
    };;
    asm.x6000002_ = function Foo(arg0,arg1)
    {
        var t0;
        var t1;
        var t2;
        var in_block_0;
        var __pos__;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm2.t2000003"])[0];
        t1 = (asm0)["System.Array`1"](t0);
        t2 = (asm2)["A`1"](t0);
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.1 */
                /* IL_01: isinst T[]*/
                /* IL_06: brfalse.s IL_14*/
                
                if ((!(t1.IsInst(arg1)))){
                    __pos__ = 0x14;
                    continue;
                }
                /* IL_08: ldarg.0 */
                /* IL_09: ldarg.1 */
                /* IL_0A: castclass T[]*/
                /* IL_0F: stfld T[] Array*/
                arg0.Array = CILJS.cast_class(arg1,t1);
                case 0x14:
                /* IL_14: ldarg.1 */
                /* IL_15: isinst A`1[T]*/
                /* IL_1A: brfalse.s IL_28*/
                
                if ((!(t2.IsInst(arg1)))){
                    __pos__ = 0x28;
                    continue;
                }
                /* IL_1C: ldarg.0 */
                /* IL_1D: ldarg.1 */
                /* IL_1E: castclass A`1[T]*/
                /* IL_23: stfld A`1 Value*/
                arg0.Value = CILJS.cast_class(arg1,t2);
                case 0x28:
                /* IL_28: ret */
                return ;
            }
        }
    };
    /*  B`1..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  D..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000006_init = function ()
    {
        (asm2.C().init)();
        ((asm2)["B`1"](asm2.C()).init)();
        (asm2.D().init)();
        ((asm2)["B`1"](asm2.D()).init)();
        asm.x6000006 = asm.x6000006_;
    };;
    asm.x6000006 = function ()
    {
        asm.x6000006_init.apply(this,arguments);
        return asm.x6000006_.apply(this,arguments);
    };;
    asm.x6000006_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var loc0;
        var loc1;
        CILJS.init_base_types();
        t0 = asm2.C();
        t1 = (asm2)["B`1"](t0);
        t2 = (asm0)["System.Boolean"]();
        t3 = asm2.D();
        t4 = (asm2)["B`1"](t3);
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = CILJS.newobj(t1,asm2.x6000003,[null]);
        /* IL_06: ldloc.0 */
        /* IL_07: ldnull */
        /* IL_08: callvirt Void Foo(System.Object)*/
        asm2.x6000002(loc0,null);
        /* IL_0D: ldloc.0 */
        /* IL_0E: ldfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_13: ldnull */
        /* IL_15: ceq */
        /* IL_16: box System.Boolean*/
        /* IL_1B: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((loc0.Value === null) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_20: ldloc.0 */
        /* IL_21: ldfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_26: ldnull */
        /* IL_28: ceq */
        /* IL_29: box System.Boolean*/
        /* IL_2E: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((loc0.Array === null) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_33: newobj Void .ctor()*/
        /* IL_38: stloc.1 */
        loc1 = CILJS.newobj(t4,asm2.x6000003,[null]);
        /* IL_39: ldloc.1 */
        /* IL_3A: ldnull */
        /* IL_3B: callvirt Void Foo(System.Object)*/
        asm2.x6000002(loc1,null);
        /* IL_40: ldloc.1 */
        /* IL_41: ldfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_46: ldnull */
        /* IL_48: ceq */
        /* IL_49: box System.Boolean*/
        /* IL_4E: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((loc1.Value === null) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_53: ldloc.1 */
        /* IL_54: ldfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_59: ldnull */
        /* IL_5B: ceq */
        /* IL_5C: box System.Boolean*/
        /* IL_61: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((loc1.Array === null) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_66: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    (asm)["A`1"] = CILJS.declare_type(
        "A_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            (this.GenericArguments)["asm2.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000002<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["B`1"] = CILJS.declare_type(
        "B_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B`1",false,false,false,true,false,[],[
                    [asm2, "x6000002", "Foo"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            (this.GenericArguments)["asm2.t2000003"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000003<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.Value = null;
            this.prototype.Array = null;
        });
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.D = CILJS.declare_type(
        "D",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000006");
            this.GenericTypeMetadataName = "asm2.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000006;
})(asm2 || (asm2 = {}));
