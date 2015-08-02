var asm2; (function (asm)
{
    asm.FullName = "ExplicitInterface.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main(String[])*/
    asm.x6000001_init = function ()
    {
        ((asm2)["Program+X"]().init)();
        ((asm2)["Program+C"]().init)();
        asm.x6000001 = asm.x6000001_;
    };;
    asm.x6000001 = function (arg0)
    {
        asm.x6000001_init.apply(this,arguments);
        return asm.x6000001_.apply(this,arguments);
    };;
    asm.x6000001_ = function Main(arg0)
    {
        var t0;
        var t1;
        var t2;
        var loc0;
        var loc1;
        CILJS.init_base_types();
        t0 = (asm2)["Program+X"]();
        t1 = (asm2)["Program+C"]();
        t2 = (asm0)["System.Int32"]();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = CILJS.newobj(t0,asm2.x6000008,[null]);
        /* IL_06: newobj Void .ctor()*/
        /* IL_0B: stloc.1 */
        loc1 = CILJS.newobj(t1,asm2.x6000006,[null]);
        /* IL_0C: ldloc.0 */
        /* IL_0D: ldloc.1 */
        /* IL_0E: callvirt Void F[System.Int32](Program+I`1[System.Int32])*/
        (asm2.x6000007((asm0)["System.Int32"]()))(loc0,loc1);
        /* IL_13: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void C.Program.I<System.Int32>.M()*/
    asm.x6000004 = function Program_I_System_Int32__M(arg0)
    {
        /* IL_00: ldstr int*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("int"));
        /* IL_0A: ret */
        return ;
    };;
    /* System.Void C.Program.I<System.String>.M()*/
    asm.x6000005 = function Program_I_System_String__M(arg0)
    {
        /* IL_00: ldstr string*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("string"));
        /* IL_0A: ret */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void X.F<T>(I`1)*/
    asm.x6000007_init = function (T)
    {
        return function ()
        {
            ((asm2)["Program+I`1"](T).init)();
        };
    };;
    asm.x6000007 = function (T)
    {
        return function (arg0,arg1)
        {
            (asm.x6000007_init(T).apply)(this,arguments);
            return (asm.x6000007_(T).apply)(this,arguments);
        };
    };;
    asm.x6000007_ = function (T)
    {
        return function F(arg0,arg1)
        {
            var t0;
            var t1;
            t0 = T;
            t1 = (asm2)["Program+I`1"](t0);
            /* IL_00: ldarg.1 */
            /* IL_01: callvirt Void M()*/
            ((((arg1.ifacemap)[t1])[t0].x6000003)())(CILJS.convert_box_to_pointer_as_needed(arg1));
            /* IL_06: ret */
            return ;
        };
    };
    /*  X..ctor()*/
    asm.x6000008 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["Program+I`1"] = CILJS.declare_type(
        "I_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program+I`1",false,false,true,true,false,[],[
                    [asm2, "x6000003", "M"]
                ],null,CILJS.is_inst_interface(this),Array,"asm2.t2000003");
            (this.GenericArguments)["asm2.t2000003"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000003<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm2.x6000003","asm2.x6000003");
        });
    (asm)["Program+C"] = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program+C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm2.x6000004","asm2.x6000004");
            CILJS.declare_virtual(this,"asm2.x6000005","asm2.x6000005");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm2)["Program+I`1"]((asm0)["System.Int32"]()), (asm0)["System.Int32"]()],
                {
                    'x6000003': function (){ return asm2.x6000004;}
                });
            CILJS.implement_interface(
                this,
                [(asm2)["Program+I`1"]((asm0)["System.String"]()), (asm0)["System.String"]()],
                {
                    'x6000003': function (){ return asm2.x6000005;}
                });
        });
    (asm)["Program+X"] = CILJS.declare_type(
        "X",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program+X",false,false,false,false,false,[],[
                    [asm2, "x6000007", "F"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000001;
})(asm2 || (asm2 = {}));
