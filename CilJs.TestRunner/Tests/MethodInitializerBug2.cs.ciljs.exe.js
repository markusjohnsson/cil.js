var asm1;(function (asm)
{
    asm.FullName = "MethodInitializerBug2.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /*  A`1..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Void B`1.Foo(Object)*/
    asm.x600000b_init = function ()
    {
        ((asm0)["System.Array`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t2000007"])[0]).init)();
        ((asm1)["A`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t2000007"])[0]).init)();
    };;
    asm.x600000b = function (arg0, arg1)
    {
        asm.x600000b_init.apply(this,arguments);
        return asm.x600000b_.apply(this,arguments);
    };;
    asm.x600000b_ = function Foo(arg0, arg1)
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t2000007"])[0];
        t1 = (asm0)["System.Array`1"](t0);
        t2 = (asm1)["A`1"](t0);
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  MethodInitializerBug2.cs:10:5*/
                
                /* IL_01: ldarg.1  */
                /* IL_02: isinst T[] */
                /* IL_07: ldnull  */
                /* IL_09: cgt.un  */
                /* IL_0A: ldc.i4.0  */
                /* IL_0C: ceq  */
                /* IL_0D: stloc.0  */
                loc0 = ((((t1.IsInst(arg1) !== null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_0E: ldloc.0  */
                /* IL_0F: brtrue.s IL_1D */
                
                if (loc0){
                    __pos__ = 0x1D;
                    continue;
                }
                /* IL_11: ldarg.0  */
                /* IL_12: ldarg.1  */
                /* IL_13: castclass T[] */
                /* IL_18: stfld T[] Array */
                arg0.Array = CILJS.cast_class(arg1,t1);
                case 0x1D:
                /* IL_1D: ldarg.1  */
                /* IL_1E: isinst A`1[T] */
                /* IL_23: ldnull  */
                /* IL_25: cgt.un  */
                /* IL_26: ldc.i4.0  */
                /* IL_28: ceq  */
                /* IL_29: stloc.0  */
                loc0 = ((((t2.IsInst(arg1) !== null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_2A: ldloc.0  */
                /* IL_2B: brtrue.s IL_39 */
                
                if (loc0){
                    __pos__ = 0x39;
                    continue;
                }
                /* IL_2D: ldarg.0  */
                /* IL_2E: ldarg.1  */
                /* IL_2F: castclass A`1[T] */
                /* IL_34: stfld A`1 Value */
                arg0.Value = CILJS.cast_class(arg1,t2);
                case 0x39:
                /* IL_39: ret  MethodInitializerBug2.cs:16:5*/
                return ;
            }
        }
    };
    /*  B`1..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  D..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000f_init = function ()
    {
        (asm1.C().init)();
        ((asm1)["B`1"](asm1.C()).init)();
        (asm1.D().init)();
        ((asm1)["B`1"](asm1.D()).init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        CILJS.init_base_types();
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
        var __pos__;
        var loc0;
        var loc1;
        t0 = asm1.C();
        t1 = (asm1)["B`1"](t0);
        t2 = (asm0)["System.Boolean"]();
        t3 = asm1.D();
        t4 = (asm1)["B`1"](t3);
        __pos__ = 0x0;
        /* IL_00: nop  MethodInitializerBug2.cs:25:5*/
        /* IL_01: newobj Void .ctor() */
        /* IL_06: stloc.0  */
        loc0 = CILJS.newobj(t1,asm1.x600000c,[null]);
        /* IL_07: ldloc.0  */
        /* IL_08: ldnull  */
        /* IL_09: callvirt Void Foo(System.Object) */
        asm1.x600000b(loc0,null);
        /* IL_0E: nop  */
        /* IL_0F: ldloc.0  */
        /* IL_10: ldfld IKVM.Reflection.GenericFieldInstance */
        /* IL_15: ldnull  */
        /* IL_17: ceq  */
        /* IL_18: box System.Boolean */
        /* IL_1D: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': ((loc0.Value === null) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_22: nop  */
        /* IL_23: ldloc.0  */
        /* IL_24: ldfld IKVM.Reflection.GenericFieldInstance */
        /* IL_29: ldnull  */
        /* IL_2B: ceq  */
        /* IL_2C: box System.Boolean */
        /* IL_31: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': ((loc0.Array === null) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_36: nop  */
        /* IL_37: newobj Void .ctor() */
        /* IL_3C: stloc.1  */
        loc1 = CILJS.newobj(t4,asm1.x600000c,[null]);
        /* IL_3D: ldloc.1  */
        /* IL_3E: ldnull  */
        /* IL_3F: callvirt Void Foo(System.Object) */
        asm1.x600000b(loc1,null);
        /* IL_44: nop  */
        /* IL_45: ldloc.1  */
        /* IL_46: ldfld IKVM.Reflection.GenericFieldInstance */
        /* IL_4B: ldnull  */
        /* IL_4D: ceq  */
        /* IL_4E: box System.Boolean */
        /* IL_53: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': ((loc1.Value === null) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_58: nop  */
        /* IL_59: ldloc.1  */
        /* IL_5A: ldfld IKVM.Reflection.GenericFieldInstance */
        /* IL_5F: ldnull  */
        /* IL_61: ceq  */
        /* IL_62: box System.Boolean */
        /* IL_67: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': ((loc1.Array === null) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_6C: nop  */
        /* IL_6D: ret  MethodInitializerBug2.cs:35:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000010 = function _ctor(arg0)
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
            CILJS.init_type(this,asm,"A`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            (this.GenericArguments)["asm1.t2000006"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000006<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
                    [asm1, "x600000b", "Foo"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            (this.GenericArguments)["asm1.t2000007"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000007<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
