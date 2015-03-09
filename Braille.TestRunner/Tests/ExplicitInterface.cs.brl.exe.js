var asm1; (function (asm)
{
    asm.FullName = "ExplicitInterface.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static Void Main(System.String[])*/
    asm.x600000c_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        ((asm1)["Program+X"]().init)();
        ((asm1)["Program+C"]().init)();
        ((asm0)["System.Int32"]().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function (arg0)
    {
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function Main(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var loc0;
        var loc1;
        t0 = (asm0)["System.ValueType"]();
        t1 = (asm1)["Program+X"]();
        t2 = (asm1)["Program+C"]();
        t3 = (asm0)["System.Int32"]();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = BLR.newobj(t1,asm1.x6000013,[null]);
        /* IL_06: newobj Void .ctor()*/
        /* IL_0B: stloc.1 */
        loc1 = BLR.newobj(t2,asm1.x6000011,[null]);
        /* IL_0C: ldloc.0 */
        /* IL_0D: ldloc.1 */
        /* IL_0E: callvirt Void F[System.Int32](Program+I`1[System.Int32])*/
        (asm1.x6000012((asm0)["System.Int32"]()))(loc0,loc1);
        /* IL_13: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void Program.I<System.Int32>.M()*/
    asm.x600000f = function Program_I_System_Int32__M(arg0)
    {
        /* IL_00: ldstr int*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(BLR.new_string("int"));
        /* IL_0A: ret */
        return ;
    };;
    /* Void Program.I<System.String>.M()*/
    asm.x6000010 = function Program_I_System_String__M(arg0)
    {
        /* IL_00: ldstr string*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(BLR.new_string("string"));
        /* IL_0A: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000011 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void F[T](Program+I`1[T])*/
    asm.x6000012_init = function (T)
    {
        return function ()
        {
            ((asm1)["Program+I`1"](T).init)();
        };
    };;
    asm.x6000012 = function (T)
    {
        return function (arg0,arg1)
        {
            (asm.x6000012_init(T).apply)(this,arguments);
            return (asm.x6000012_(T).apply)(this,arguments);
        };
    };;
    asm.x6000012_ = function (T)
    {
        return function F(arg0,arg1)
        {
            var t0;
            var t1;
            t0 = T;
            t1 = (asm1)["Program+I`1"](t0);
            /* IL_00: ldarg.1 */
            /* IL_01: callvirt Void M()*/
            ((((arg1.ifacemap)[t1])[t0].x600000e)())(BLR.convert_box_to_pointer_as_needed(arg1));
            /* IL_06: ret */
            return ;
        };
    };
    /* Void .ctor()*/
    asm.x6000013 = function _ctor(arg0)
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
    asm.TestHelper = BLR.declare_type(
        "TestHelper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestHelper",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["Program+I`1"] = BLR.declare_type(
        "I_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program+I`1",false,false,true,true,false,[],[
                    [asm1, "x600000e", "M"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000008");
            (this.GenericArguments)["asm1.t2000008"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000008<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm1.x600000e","asm1.x600000e");
        });
    (asm)["Program+C"] = BLR.declare_type(
        "C",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program+C",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
            BLR.declare_virtual(this,"asm1.x6000010","asm1.x6000010");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm1)["Program+I`1"]((asm0)["System.Int32"]()), (asm0)["System.Int32"]()],
                {
                    'x600000e': function (){ return asm1.x600000f;}
                });
            BLR.implement_interface(
                this,
                [(asm1)["Program+I`1"]((asm0)["System.String"]()), (asm0)["System.String"]()],
                {
                    'x600000e': function (){ return asm1.x6000010;}
                });
        });
    (asm)["Program+X"] = BLR.declare_type(
        "X",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program+X",false,false,false,false,false,[],[
                    [asm1, "x6000012", "F"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
