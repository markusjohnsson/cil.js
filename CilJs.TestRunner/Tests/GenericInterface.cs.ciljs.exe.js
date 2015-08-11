var asm1;(function (asm)
{
    asm.FullName = "GenericInterface.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Void A.NonGeneric()*/
    asm.x6000004 = function NonGeneric(arg0)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: ldstr A.NonGeneric */
        /* IL_05: ldc.i4.0  */
        /* IL_06: newarr System.Object */
        /* IL_0B: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("A.NonGeneric"),CILJS.new_array(t0,(0|0)));
        /* IL_10: ret  */
        return ;
    };;
    /* System.Void A.GenericArg(Int32)*/
    asm.x6000005 = function GenericArg(arg0, arg1)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: ldstr A.GenericArg */
        /* IL_05: ldc.i4.0  */
        /* IL_06: newarr System.Object */
        /* IL_0B: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("A.GenericArg"),CILJS.new_array(t0,(0|0)));
        /* IL_10: ldarg.0  */
        /* IL_11: ldarg.1  */
        /* IL_12: stfld Int32 field */
        arg0.Afield = arg1;
        /* IL_17: ret  */
        return ;
    };;
    /* System.Int32 A.GenericReturn()*/
    asm.x6000006 = function GenericReturn(arg0)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: ldstr A.GenericReturn */
        /* IL_05: ldc.i4.0  */
        /* IL_06: newarr System.Object */
        /* IL_0B: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("A.GenericReturn"),CILJS.new_array(t0,(0|0)));
        /* IL_10: ldarg.0  */
        /* IL_11: ldfld Int32 field */
        /* IL_16: ret  */
        return arg0.Afield;
    };;
    /*  A..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Void B`1.NonGeneric()*/
    asm.x6000008 = function NonGeneric(arg0)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: ldstr B.NonGeneric */
        /* IL_05: ldc.i4.0  */
        /* IL_06: newarr System.Object */
        /* IL_0B: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("B.NonGeneric"),CILJS.new_array(t0,(0|0)));
        /* IL_10: ret  */
        return ;
    };;
    /* System.Void B`1.GenericArg(T)*/
    asm.x6000009 = function GenericArg(arg0, arg1)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: ldstr B.NonGeneric */
        /* IL_05: ldc.i4.0  */
        /* IL_06: newarr System.Object */
        /* IL_0B: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("B.NonGeneric"),CILJS.new_array(t0,(0|0)));
        /* IL_10: ldarg.0  */
        /* IL_11: ldarg.1  */
        /* IL_12: stfld T field */
        arg0.B_1field = arg1;
        /* IL_17: ret  */
        return ;
    };;
    /* T B`1.GenericReturn()*/
    asm.x600000a = function GenericReturn(arg0)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: ldstr B.GenericReturn */
        /* IL_05: ldc.i4.0  */
        /* IL_06: newarr System.Object */
        /* IL_0B: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("B.GenericReturn"),CILJS.new_array(t0,(0|0)));
        /* IL_10: ldarg.0  */
        /* IL_11: ldfld T field */
        /* IL_16: ret  */
        return arg0.B_1field;
    };;
    /*  B`1..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
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
        /* IL_00: newobj Void .ctor() */
        /* IL_05: ldc.i4 12345 */
        /* IL_0A: call Void Run[System.Int32](I`1[System.Int32], System.Int32) */
        (asm1.x600000d((asm0)["System.Int32"]()))(CILJS.newobj(t0,asm1.x6000007,[null]),(12345|0));
        /* IL_0F: newobj Void .ctor() */
        /* IL_14: ldstr Hello */
        /* IL_19: call Void Run[System.String](I`1[System.String], System.String) */
        (asm1.x600000d((asm0)["System.String"]()))(CILJS.newobj(t3,asm1.x600000b,[null]),CILJS.new_string("Hello"));
        /* IL_1E: ret  */
        return ;
    };
    /* static System.Void Program.Run<T>(I`1,T)*/
    asm.x600000d_init = function (T)
    {
        return function ()
        {
            ((asm1)["I`1"](T).init)();
        };
    };;
    asm.x600000d = function (T)
    {
        return function (arg0, arg1)
        {
            (asm.x600000d_init(T).apply)(this,arguments);
            return (asm.x600000d_(T).apply)(this,arguments);
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
            /* IL_00: ldarg.0  */
            /* IL_01: callvirt Void NonGeneric() */
            ((((arg0.ifacemap)[t1])[t0].x6000001)())(CILJS.convert_box_to_pointer_as_needed(arg0));
            /* IL_06: ldarg.0  */
            /* IL_07: ldarg.1  */
            /* IL_08: callvirt Void GenericArg(T) */
            ((((arg0.ifacemap)[t1])[t0].x6000002)())(CILJS.convert_box_to_pointer_as_needed(arg0),arg1);
            /* IL_0D: ldarg.0  */
            /* IL_0E: callvirt T GenericReturn() */
            /* IL_13: box T */
            /* IL_18: call Void WriteLine(System.Object) */
            asm0.x600005a(CILJS.box(((((arg0.ifacemap)[t1])[t0].x6000003)())(CILJS.convert_box_to_pointer_as_needed(arg0)),t0));
            /* IL_1D: ret  */
            return ;
        };
    };
    /*  Program..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000002");
            (this.GenericArguments)["asm1.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000002<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm1.x6000001","asm1.x6000001");
            CILJS.declare_virtual(this,"asm1.x6000002","asm1.x6000002");
            CILJS.declare_virtual(this,"asm1.x6000003","asm1.x6000003");
        });
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
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm1.x6000004","asm1.x6000004");
            CILJS.declare_virtual(this,"asm1.x6000005","asm1.x6000005");
            CILJS.declare_virtual(this,"asm1.x6000006","asm1.x6000006");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm1)["I`1"]((asm0)["System.Int32"]()), (asm0)["System.Int32"]()],
                {
                    'x6000001': function (){ return asm1.x6000004;},
                    'x6000002': function (){ return asm1.x6000005;},
                    'x6000003': function (){ return asm1.x6000006;}
                });
            this.prototype.Afield = 0;
        });
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
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            (this.GenericArguments)["asm1.t2000004"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000004<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm1.x6000008","asm1.x6000008");
            CILJS.declare_virtual(this,"asm1.x6000009","asm1.x6000009");
            CILJS.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm1)["I`1"](T), T],
                {
                    'x6000001': function (){ return asm1.x6000008;},
                    'x6000002': function (){ return asm1.x6000009;},
                    'x6000003': function (){ return asm1.x600000a;}
                });
            this.prototype.B_1field = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
        });
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005");
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
