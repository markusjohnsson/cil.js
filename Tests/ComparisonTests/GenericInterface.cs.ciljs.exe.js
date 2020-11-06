var asm1;(function (asm)
{
    asm.FullName = "GenericInterface.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Void A.NonGeneric()*/
    asm.x6000004 = function NonGeneric(arg0)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldstr A.NonGeneric */
        /* IL_06: ldc.i4.0  */
        /* IL_07: newarr System.Object */
        /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
        asm0.x60000a2(CILJS.new_string("A.NonGeneric"),CILJS.new_array(t0,(0|0)));
        /* IL_11: nop  */
        /* IL_12: ret  */
        return ;
    };;
    /* System.Void A.GenericArg(Int32)*/
    asm.x6000005 = function GenericArg(arg0, arg1)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldstr A.GenericArg */
        /* IL_06: ldc.i4.0  */
        /* IL_07: newarr System.Object */
        /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
        asm0.x60000a2(CILJS.new_string("A.GenericArg"),CILJS.new_array(t0,(0|0)));
        /* IL_11: nop  */
        /* IL_12: ldarg.0  */
        /* IL_13: ldarg.1  */
        /* IL_14: stfld Int32 field */
        arg0.Afield = arg1;
        /* IL_19: ret  */
        return ;
    };;
    /* System.Int32 A.GenericReturn()*/
    asm.x6000006 = function GenericReturn(arg0)
    {
        var t0;
        var loc0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldstr A.GenericReturn */
        /* IL_06: ldc.i4.0  */
        /* IL_07: newarr System.Object */
        /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
        asm0.x60000a2(CILJS.new_string("A.GenericReturn"),CILJS.new_array(t0,(0|0)));
        /* IL_11: nop  */
        /* IL_12: ldarg.0  */
        /* IL_13: ldfld Int32 field */
        /* IL_18: stloc.0  */
        loc0 = arg0.Afield;
        /* IL_1B: ldloc.0  */
        /* IL_1C: ret  */
        return loc0;
    };;
    /*  A..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* System.Void B`1.NonGeneric()*/
    asm.x6000008 = function NonGeneric(arg0)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldstr B.NonGeneric */
        /* IL_06: ldc.i4.0  */
        /* IL_07: newarr System.Object */
        /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
        asm0.x60000a2(CILJS.new_string("B.NonGeneric"),CILJS.new_array(t0,(0|0)));
        /* IL_11: nop  */
        /* IL_12: ret  */
        return ;
    };;
    /* System.Void B`1.GenericArg(T)*/
    asm.x6000009 = function GenericArg(arg0, arg1)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldstr B.NonGeneric */
        /* IL_06: ldc.i4.0  */
        /* IL_07: newarr System.Object */
        /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
        asm0.x60000a2(CILJS.new_string("B.NonGeneric"),CILJS.new_array(t0,(0|0)));
        /* IL_11: nop  */
        /* IL_12: ldarg.0  */
        /* IL_13: ldarg.1  */
        /* IL_14: stfld T field */
        arg0.B_1field = arg1;
        /* IL_19: ret  */
        return ;
    };;
    /* T B`1.GenericReturn()*/
    asm.x600000a = function GenericReturn(arg0)
    {
        var t0;
        var loc0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldstr B.GenericReturn */
        /* IL_06: ldc.i4.0  */
        /* IL_07: newarr System.Object */
        /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
        asm0.x60000a2(CILJS.new_string("B.GenericReturn"),CILJS.new_array(t0,(0|0)));
        /* IL_11: nop  */
        /* IL_12: ldarg.0  */
        /* IL_13: ldfld T field */
        /* IL_18: stloc.0  */
        loc0 = arg0.B_1field;
        /* IL_1B: ldloc.0  */
        /* IL_1C: ret  */
        return loc0;
    };;
    /*  B`1..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000c_init = function ()
    {
        (asm1.A().init)();
        ((asm1)["B`1"]((asm0)["System.String"]()).init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        asm.x600000c_init();
        return asm.x600000c_();
    };;
    asm.x600000c_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        CILJS.init_base_types();
        t0 = asm1.A();
        t1 = (asm0)["System.Int32"]();
        t2 = (asm0)["System.String"]();
        t3 = (asm1)["B`1"](t2);
        /* IL_00: nop  */
        /* IL_01: newobj Void .ctor() */
        /* IL_06: ldc.i4 12345 */
        /* IL_0B: call Void Run[System.Int32](I`1[System.Int32], System.Int32) */
        (asm1.x600000d((asm0)["System.Int32"]()))(CILJS.newobj(t0,asm1.x6000007,[null]),(12345|0));
        /* IL_10: nop  */
        /* IL_11: newobj Void .ctor() */
        /* IL_16: ldstr Hello */
        /* IL_1B: call Void Run[System.String](I`1[System.String], System.String) */
        (asm1.x600000d((asm0)["System.String"]()))(CILJS.newobj(t3,asm1.x600000b,[null]),CILJS.new_string("Hello"));
        /* IL_20: nop  */
        /* IL_21: ret  */
        return ;
    };
    /* static System.Void Program.Run<T>(I`1,T)*/
    asm.x600000d_init = function (T)
    {
        return function (arg0, arg1)
        {
            ((asm1)["I`1"](T).init)();
        };
    };;
    asm.x600000d = function (T)
    {
        return function (arg0, arg1)
        {
            (asm.x600000d_init(T))(arg0,arg1);
            return (asm.x600000d_(T))(arg0,arg1);
        };
    };;
    asm.x600000d_ = function (T)
    {
        return function Run(arg0, arg1)
        {
            var t0;
            var t1;
            t0 = T;
            t1 = (asm1)["I`1"](t0);
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: callvirt Void NonGeneric() */
            (((arg0.ifacemap)[t1])[t0].x6000001)(CILJS.convert_box_to_pointer_as_needed(arg0));
            /* IL_07: nop  */
            /* IL_08: ldarg.0  */
            /* IL_09: ldarg.1  */
            /* IL_0A: callvirt Void GenericArg(T) */
            (((arg0.ifacemap)[t1])[t0].x6000002)(CILJS.convert_box_to_pointer_as_needed(arg0),arg1);
            /* IL_0F: nop  */
            /* IL_10: ldarg.0  */
            /* IL_11: callvirt T GenericReturn() */
            /* IL_16: box T */
            /* IL_1B: call Void WriteLine(System.Object) */
            asm0.x60000a1(CILJS.box((((arg0.ifacemap)[t1])[t0].x6000003)(CILJS.convert_box_to_pointer_as_needed(arg0)),t0));
            /* IL_20: nop  */
            /* IL_21: ret  */
            return ;
        };
    };
    /*  Program..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    (asm)["I`1"] = CILJS.declare_type(
        "I_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"I`1",false,false,true,true,false,[],[
                    [asm1, "x6000001", "NonGeneric"],
                    [asm1, "x6000002", "GenericArg"],
                    [asm1, "x6000003", "GenericReturn"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000002",null);
            (this.GenericArguments)["asm1.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000002<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm1.x6000001","asm1.x6000001");
            CILJS.declare_virtual(this,"asm1.x6000002","asm1.x6000002");
            CILJS.declare_virtual(this,"asm1.x6000003","asm1.x6000003");
        },
        "function I_1() { c.init(); }");
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1, "x6000004", "NonGeneric"],
                    [asm1, "x6000005", "GenericArg"],
                    [asm1, "x6000006", "GenericReturn"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm1.x6000004","asm1.x6000004");
            CILJS.declare_virtual(this,"asm1.x6000005","asm1.x6000005");
            CILJS.declare_virtual(this,"asm1.x6000006","asm1.x6000006");
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
            CILJS.implement_interface(
                this,
                [(asm1)["I`1"]((asm0)["System.Int32"]()), (asm0)["System.Int32"]()],
                [
                    ["x6000001", "asm1.x6000004"],
                    ["x6000002", "asm1.x6000005"],
                    ["x6000003", "asm1.x6000006"]
                ]);
        },
        "function A() { c.init();this.Afield = 0 }");
    (asm)["B`1"] = CILJS.declare_type(
        "B_1",
        ["T"],
        function (T)
        {
            return (asm0)["System.Object"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B`1",false,false,false,true,false,[],[
                    [asm1, "x6000008", "NonGeneric"],
                    [asm1, "x6000009", "GenericArg"],
                    [asm1, "x600000a", "GenericReturn"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            (this.GenericArguments)["asm1.t2000004"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000004<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm1.x6000008","asm1.x6000008");
            CILJS.declare_virtual(this,"asm1.x6000009","asm1.x6000009");
            CILJS.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
            CILJS.implement_interface(
                this,
                [(asm1)["I`1"](T), T],
                [
                    ["x6000001", "asm1.x6000008"],
                    ["x6000002", "asm1.x6000009"],
                    ["x6000003", "asm1.x600000a"]
                ]);
        },
        "function B_1() { c.init();this.B_1field = T.Default }");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
if (typeof module != "undefined"){
    module.exports = asm1;
}
//# sourceMappingURL=GenericInterface.cs.ciljs.exe.js.map
