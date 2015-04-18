var asm1; (function (asm)
{
    asm.FullName = "GenericInterface.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void A.NonGeneric()*/
    asm.x600000d = function NonGeneric(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldstr A.NonGeneric*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("A.NonGeneric"));
        /* IL_0A: ret */
        return ;
    };;
    /* System.Void A.GenericArg(Int32)*/
    asm.x600000e = function GenericArg(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldstr A.GenericArg*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("A.GenericArg"));
        /* IL_0A: ldarg.0 */
        /* IL_0B: ldarg.1 */
        /* IL_0C: stfld Int32 field*/
        arg0.Afield = arg1;
        /* IL_11: ret */
        return ;
    };;
    /* System.Int32 A.GenericReturn()*/
    asm.x600000f = function GenericReturn(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldstr A.GenericReturn*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("A.GenericReturn"));
        /* IL_0A: ldarg.0 */
        /* IL_0B: ldfld Int32 field*/
        /* IL_10: ret */
        return arg0.Afield;
    };;
    /*  A..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void B`1.NonGeneric()*/
    asm.x6000011 = function NonGeneric(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldstr B.NonGeneric*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("B.NonGeneric"));
        /* IL_0A: ret */
        return ;
    };;
    /* System.Void B`1.GenericArg(T)*/
    asm.x6000012 = function GenericArg(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldstr B.NonGeneric*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("B.NonGeneric"));
        /* IL_0A: ldarg.0 */
        /* IL_0B: ldarg.1 */
        /* IL_0C: stfld T field*/
        arg0.B_1field = arg1;
        /* IL_11: ret */
        return ;
    };;
    /* T B`1.GenericReturn()*/
    asm.x6000013 = function GenericReturn(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldstr B.GenericReturn*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("B.GenericReturn"));
        /* IL_0A: ldarg.0 */
        /* IL_0B: ldfld T field*/
        /* IL_10: ret */
        return arg0.B_1field;
    };;
    /*  B`1..ctor()*/
    asm.x6000014 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000015_init = function ()
    {
        (asm1.A().init)();
        ((asm1)["B`1"]((asm0)["System.String"]()).init)();
        asm.x6000015 = asm.x6000015_;
    };;
    asm.x6000015 = function ()
    {
        CILJS.init_base_types();
        asm.x6000015_init.apply(this,arguments);
        return asm.x6000015_.apply(this,arguments);
    };;
    asm.x6000015_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var __pos__;
        t0 = asm1.A();
        t1 = (asm0)["System.Int32"]();
        t2 = (asm0)["System.String"]();
        t3 = (asm1)["B`1"](t2);
        __pos__ = 0x0;
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: ldc.i4 12345*/
        /* IL_0A: call Void Run[System.Int32](I`1[System.Int32], System.Int32)*/
        (asm1.x6000016((asm0)["System.Int32"]()))(CILJS.newobj(t0,asm1.x6000010,[null]),(12345|0));
        /* IL_0F: newobj Void .ctor()*/
        /* IL_14: ldstr Hello*/
        /* IL_19: call Void Run[System.String](I`1[System.String], System.String)*/
        (asm1.x6000016((asm0)["System.String"]()))(CILJS.newobj(t3,asm1.x6000014,[null]),CILJS.new_string("Hello"));
        /* IL_1E: ret */
        return ;
    };
    /* static System.Void Program.Run<T>(I`1,T)*/
    asm.x6000016_init = function (T)
    {
        return function ()
        {
            ((asm1)["I`1"](T).init)();
        };
    };;
    asm.x6000016 = function (T)
    {
        return function (arg0,arg1)
        {
            (asm.x6000016_init(T).apply)(this,arguments);
            return (asm.x6000016_(T).apply)(this,arguments);
        };
    };;
    asm.x6000016_ = function (T)
    {
        return function Run(arg0,arg1)
        {
            var t0;
            var t1;
            var __pos__;
            t0 = T;
            t1 = (asm1)["I`1"](t0);
            __pos__ = 0x0;
            /* IL_00: ldarg.0 */
            /* IL_01: callvirt Void NonGeneric()*/
            ((((arg0.ifacemap)[t1])[t0].x600000a)())(CILJS.convert_box_to_pointer_as_needed(arg0));
            /* IL_06: ldarg.0 */
            /* IL_07: ldarg.1 */
            /* IL_08: callvirt Void GenericArg(T)*/
            ((((arg0.ifacemap)[t1])[t0].x600000b)())(CILJS.convert_box_to_pointer_as_needed(arg0),arg1);
            /* IL_0D: ldarg.0 */
            /* IL_0E: callvirt T GenericReturn()*/
            /* IL_13: box T*/
            /* IL_18: call Void Log(System.Object)*/
            asm1.x6000001(CILJS.box(((((arg0.ifacemap)[t1])[t0].x600000c)())(CILJS.convert_box_to_pointer_as_needed(arg0)),t0));
            /* IL_1D: ret */
            return ;
        };
    };
    /*  Program..ctor()*/
    asm.x6000017 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
                    [asm1, "x600000a", "NonGeneric"],
                    [asm1, "x600000b", "GenericArg"],
                    [asm1, "x600000c", "GenericReturn"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000006");
            (this.GenericArguments)["asm1.t2000006"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000006<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
            CILJS.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            CILJS.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
        });
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1, "x600000d", "NonGeneric"],
                    [asm1, "x600000e", "GenericArg"],
                    [asm1, "x600000f", "GenericReturn"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm1.x600000d","asm1.x600000d");
            CILJS.declare_virtual(this,"asm1.x600000e","asm1.x600000e");
            CILJS.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            CILJS.implement_interface(
                this,
                [(asm1)["I`1"]((asm0)["System.Int32"]()), (asm0)["System.Int32"]()],
                {
                    'x600000a': function (){ return asm1.x600000d;},
                    'x600000b': function (){ return asm1.x600000e;},
                    'x600000c': function (){ return asm1.x600000f;}
                });
            this.prototype.Afield = 0;
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
                    [asm1, "x6000011", "NonGeneric"],
                    [asm1, "x6000012", "GenericArg"],
                    [asm1, "x6000013", "GenericReturn"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            (this.GenericArguments)["asm1.t2000008"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000008<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm1.x6000011","asm1.x6000011");
            CILJS.declare_virtual(this,"asm1.x6000012","asm1.x6000012");
            CILJS.declare_virtual(this,"asm1.x6000013","asm1.x6000013");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            CILJS.implement_interface(
                this,
                [(asm1)["I`1"](T), T],
                {
                    'x600000a': function (){ return asm1.x6000011;},
                    'x600000b': function (){ return asm1.x6000012;},
                    'x600000c': function (){ return asm1.x6000013;}
                });
            this.prototype.B_1field = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000015;
})(asm1 || (asm1 = {}));
