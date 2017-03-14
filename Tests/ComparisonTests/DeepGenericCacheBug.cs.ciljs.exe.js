var asm1;(function (asm)
{
    asm.FullName = "DeepGenericCacheBug.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A`1..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  K`1..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  X..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  Y..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000005_init = function ()
    {
        (asm1.X().init)();
        ((asm1)["K`1"](asm1.X()).init)();
        ((asm1)["A`1"]((asm1)["K`1"](asm1.X())).init)();
        (asm1.Y().init)();
        ((asm1)["K`1"](asm1.Y()).init)();
        ((asm1)["A`1"]((asm1)["K`1"](asm1.Y())).init)();
        asm.x6000005 = asm.x6000005_;
    };;
    asm.x6000005 = function ()
    {
        asm.x6000005_init();
        return asm.x6000005_();
    };;
    asm.x6000005_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        CILJS.init_base_types();
        t0 = asm1.X();
        t1 = (asm1)["K`1"](t0);
        t2 = (asm1)["A`1"](t1);
        t3 = asm1.Y();
        t4 = (asm1)["K`1"](t3);
        t5 = (asm1)["A`1"](t4);
        t6 = (asm0)["System.Boolean"]();
        /* IL_00: nop  */
        /* IL_01: ldtoken A`1[K`1[X]] */
        /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_0B: ldtoken A`1[K`1[Y]] */
        /* IL_10: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_16: ceq  */
        /* IL_17: box System.Boolean */
        /* IL_1C: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(((asm0.x6000129(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t2)) === asm0.x6000129(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t5))) ? 1 : 0),t6));
        /* IL_21: nop  */
        /* IL_22: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    (asm)["A`1"] = CILJS.declare_type(
        "A_1",
        ["T"],
        function (T)
        {
            return (asm0)["System.Object"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            (this.GenericArguments)["asm1.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000002<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function A_1() { c.init(); }");
    (asm)["K`1"] = CILJS.declare_type(
        "K_1",
        ["T"],
        function (T)
        {
            return (asm0)["System.Object"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"K`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            (this.GenericArguments)["asm1.t2000003"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000003<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function K_1() { c.init(); }");
    asm.X = CILJS.declare_type(
        "X",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"X",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function X() { c.init(); }");
    asm.Y = CILJS.declare_type(
        "Y",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Y",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function Y() { c.init(); }");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006",null);
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000005;
})(asm1 || (asm1 = {}));
if (module){
    module.exports = asm1;
}
