var asm2;(function (asm)
{
    asm.FullName = "GenericInterface.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Void A.NonGeneric()*/
    asm.x6000004 = function NonGeneric(arg0)
    {
        /* IL_00: ldstr A.NonGeneric */
        /* IL_05: call Void Log(System.Object) */
        asm1.x6000001(CILJS.new_string("A.NonGeneric"));
        /* IL_0A: ret  */
        return ;
    };;
    /* System.Void A.GenericArg(Int32)*/
    asm.x6000005 = function GenericArg(arg0, arg1)
    {
        /* IL_00: ldstr A.GenericArg */
        /* IL_05: call Void Log(System.Object) */
        asm1.x6000001(CILJS.new_string("A.GenericArg"));
        /* IL_0A: ldarg.0  */
        /* IL_0B: ldarg.1  */
        /* IL_0C: stfld Int32 field */
        arg0.Afield = arg1;
        /* IL_11: ret  */
        return ;
    };;
    /* System.Int32 A.GenericReturn()*/
    asm.x6000006 = function GenericReturn(arg0)
    {
        /* IL_00: ldstr A.GenericReturn */
        /* IL_05: call Void Log(System.Object) */
        asm1.x6000001(CILJS.new_string("A.GenericReturn"));
        /* IL_0A: ldarg.0  */
        /* IL_0B: ldfld Int32 field */
        /* IL_10: ret  */
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
        /* IL_00: ldstr B.NonGeneric */
        /* IL_05: call Void Log(System.Object) */
        asm1.x6000001(CILJS.new_string("B.NonGeneric"));
        /* IL_0A: ret  */
        return ;
    };;
    /* System.Void B`1.GenericArg(T)*/
    asm.x6000009 = function GenericArg(arg0, arg1)
    {
        /* IL_00: ldstr B.NonGeneric */
        /* IL_05: call Void Log(System.Object) */
        asm1.x6000001(CILJS.new_string("B.NonGeneric"));
        /* IL_0A: ldarg.0  */
        /* IL_0B: ldarg.1  */
        /* IL_0C: stfld T field */
        arg0.B_1field = arg1;
        /* IL_11: ret  */
        return ;
    };;
    /* T B`1.GenericReturn()*/
    asm.x600000a = function GenericReturn(arg0)
    {
        /* IL_00: ldstr B.GenericReturn */
        /* IL_05: call Void Log(System.Object) */
        asm1.x6000001(CILJS.new_string("B.GenericReturn"));
        /* IL_0A: ldarg.0  */
        /* IL_0B: ldfld T field */
        /* IL_10: ret  */
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
        (asm2.A().init)();
        ((asm2)["B`1"]((asm0)["System.String"]()).init)();
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
        t0 = asm2.A();
        t1 = (asm0)["System.Int32"]();
        t2 = (asm0)["System.String"]();
        t3 = (asm2)["B`1"](t2);
        /* IL_00: newobj Void .ctor() */
        /* IL_05: ldc.i4 12345 */
        /* IL_0A: call Void Run[System.Int32](I`1[System.Int32], System.Int32) */
        (asm2.x600000d((asm0)["System.Int32"]()))(CILJS.newobj(t0,asm2.x6000007,[null]),(12345|0));
        /* IL_0F: newobj Void .ctor() */
        /* IL_14: ldstr Hello */
        /* IL_19: call Void Run[System.String](I`1[System.String], System.String) */
        (asm2.x600000d((asm0)["System.String"]()))(CILJS.newobj(t3,asm2.x600000b,[null]),CILJS.new_string("Hello"));
        /* IL_1E: ret  */
        return ;
    };
    /* static System.Void Program.Run<T>(I`1,T)*/
    asm.x600000d_init = function (T)
    {
        return function ()
        {
            ((asm2)["I`1"](T).init)();
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
            t1 = (asm2)["I`1"](t0);
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
            /* IL_18: call Void Log(System.Object) */
            asm1.x6000001(CILJS.box(((((arg0.ifacemap)[t1])[t0].x6000003)())(CILJS.convert_box_to_pointer_as_needed(arg0)),t0));
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
                    [asm2, "x6000001", "NonGeneric"],
                    [asm2, "x6000002", "GenericArg"],
                    [asm2, "x6000003", "GenericReturn"]
                ],null,CILJS.is_inst_interface(this),Array,"asm2.t2000002");
            (this.GenericArguments)["asm2.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000002<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm2.x6000001","asm2.x6000001");
            CILJS.declare_virtual(this,"asm2.x6000002","asm2.x6000002");
            CILJS.declare_virtual(this,"asm2.x6000003","asm2.x6000003");
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
                    [asm2, "x6000004", "NonGeneric"],
                    [asm2, "x6000005", "GenericArg"],
                    [asm2, "x6000006", "GenericReturn"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm2.x6000004","asm2.x6000004");
            CILJS.declare_virtual(this,"asm2.x6000005","asm2.x6000005");
            CILJS.declare_virtual(this,"asm2.x6000006","asm2.x6000006");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm2)["I`1"]((asm0)["System.Int32"]()), (asm0)["System.Int32"]()],
                {
                    'x6000001': function (){ return asm2.x6000004;},
                    'x6000002': function (){ return asm2.x6000005;},
                    'x6000003': function (){ return asm2.x6000006;}
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
                    [asm2, "x6000008", "NonGeneric"],
                    [asm2, "x6000009", "GenericArg"],
                    [asm2, "x600000a", "GenericReturn"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            (this.GenericArguments)["asm2.t2000004"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000004<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm2.x6000008","asm2.x6000008");
            CILJS.declare_virtual(this,"asm2.x6000009","asm2.x6000009");
            CILJS.declare_virtual(this,"asm2.x600000a","asm2.x600000a");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm2)["I`1"](T), T],
                {
                    'x6000001': function (){ return asm2.x6000008;},
                    'x6000002': function (){ return asm2.x6000009;},
                    'x6000003': function (){ return asm2.x600000a;}
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x600000c;
})(asm2 || (asm2 = {}));
