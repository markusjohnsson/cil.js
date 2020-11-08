var asm1;(function (asm)
{
    asm.FullName = "GenericInterface2.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* System.Void C.I<A>.Print()*/
    asm.x6000004 = function I_A__Print(arg0)
    {
        var t0;
        t0 = asm0["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldstr A */
        /* IL_06: ldc.i4.0  */
        /* IL_07: newarr System.Object */
        /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
        asm0.x60000a2(CILJS.new_string("A"),CILJS.new_array(t0,0));
        /* IL_11: nop  */
        /* IL_12: ret  */
        return ;
    };;
    /* System.Void C.I<B>.Print()*/
    asm.x6000005 = function I_B__Print(arg0)
    {
        var t0;
        t0 = asm0["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldstr B */
        /* IL_06: ldc.i4.0  */
        /* IL_07: newarr System.Object */
        /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
        asm0.x60000a2(CILJS.new_string("B"),CILJS.new_array(t0,0));
        /* IL_11: nop  */
        /* IL_12: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000007_init = function ()
    {
        (asm1.C().init)();
        asm.x6000007 = asm.x6000007_;
    };;
    asm.x6000007 = function ()
    {
        asm.x6000007_init();
        return asm.x6000007_();
    };;
    asm.x6000007_ = function Main()
    {
        var t0;
        var loc0;
        CILJS.init_base_types();
        t0 = asm1.C();
        /* IL_00: nop  */
        /* IL_01: newobj Void .ctor() */
        /* IL_06: stloc.0  */
        loc0 = CILJS.newobj(t0,asm1.x6000006,[null]);
        /* IL_07: ldloc.0  */
        /* IL_08: call Void PrintA(I`1[A]) */
        asm1.x6000008(loc0);
        /* IL_0D: nop  */
        /* IL_0E: ldloc.0  */
        /* IL_0F: call Void PrintB(I`1[B]) */
        asm1.x6000009(loc0);
        /* IL_14: nop  */
        /* IL_15: ret  */
        return ;
    };
    /* static System.Void Program.PrintA(I`1)*/
    asm.x6000008_init = function (arg0)
    {
        (asm1.A().init)();
        (asm1["I`1"](asm1.A()).init)();
        asm.x6000008 = asm.x6000008_;
    };;
    asm.x6000008 = function (arg0)
    {
        asm.x6000008_init(arg0);
        return asm.x6000008_(arg0);
    };;
    asm.x6000008_ = function PrintA(arg0)
    {
        var t0;
        var t1;
        t0 = asm1.A();
        t1 = asm1["I`1"](t0);
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: callvirt Void Print() */
        (((arg0.ifacemap)[t1])[t0].x6000001)(CILJS.convert_box_to_pointer_as_needed(arg0));
        /* IL_07: nop  */
        /* IL_08: ret  */
        return ;
    };
    /* static System.Void Program.PrintB(I`1)*/
    asm.x6000009_init = function (arg0)
    {
        (asm1.B().init)();
        (asm1["I`1"](asm1.B()).init)();
        asm.x6000009 = asm.x6000009_;
    };;
    asm.x6000009 = function (arg0)
    {
        asm.x6000009_init(arg0);
        return asm.x6000009_(arg0);
    };;
    asm.x6000009_ = function PrintB(arg0)
    {
        var t0;
        var t1;
        t0 = asm1.B();
        t1 = asm1["I`1"](t0);
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: callvirt Void Print() */
        (((arg0.ifacemap)[t1])[t0].x6000001)(CILJS.convert_box_to_pointer_as_needed(arg0));
        /* IL_07: nop  */
        /* IL_08: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    asm["I`1"] = CILJS.declare_type(
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
                    [asm1, "x6000001", "Print"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000002",null);
            (this.GenericArguments)["asm1.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000002<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm1.x6000001","asm1.x6000001");
        },
        "function I_1() { c.init(); }");
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return asm0["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function A() { c.init(); }");
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return asm0["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function B() { c.init(); }");
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return asm0["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm1.x6000004","asm1.x6000004");
            CILJS.declare_virtual(this,"asm1.x6000005","asm1.x6000005");
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
            CILJS.implement_interface(
                this,
                [asm1["I`1"](asm1.A()), asm1.A()],
                [
                    ["x6000001", "asm1.x6000004"]
                ]);
            CILJS.implement_interface(
                this,
                [asm1["I`1"](asm1.B()), asm1.B()],
                [
                    ["x6000001", "asm1.x6000005"]
                ]);
        },
        "function C() { c.init(); }");
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return asm0["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006",null);
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000007;
})(asm1 || (asm1 = {}));
if (typeof module != "undefined"){
    module.exports = asm1;
}
//# sourceMappingURL=GenericInterface2.cs.ciljs.exe.js.map
