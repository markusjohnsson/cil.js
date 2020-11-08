var asm1;(function (asm)
{
    asm.FullName = "GenericMethodOnInterfaceBug.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Void A`1.X<T2>(String)*/
    asm.x6000002 = function (T2)
    {
        return function X(arg0, arg1)
        {
            var t0;
            var t1;
            t0 = T2;
            t1 = asm0["System.Object"]();
            /* IL_00: nop  */
            /* IL_01: ldtoken T2 */
            /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
            /* IL_0B: callvirt String get_FullName() */
            /* IL_10: ldc.i4.0  */
            /* IL_11: newarr System.Object */
            /* IL_16: call Void WriteLine(System.String, System.Object[]) */
            asm0.x60000a2(((asm0.x6000074(CILJS.new_handle(asm0["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x6000073"])(asm0.x6000074(CILJS.new_handle(asm0["System.RuntimeTypeHandle"](),t0))),CILJS.new_array(t1,0));
            /* IL_1B: nop  */
            /* IL_1C: ldarg.1  */
            /* IL_1D: ldc.i4.0  */
            /* IL_1E: newarr System.Object */
            /* IL_23: call Void WriteLine(System.String, System.Object[]) */
            asm0.x60000a2(arg1,CILJS.new_array(t1,0));
            /* IL_28: nop  */
            /* IL_29: ret  */
            return ;
        };
    };;
    /*  A`1..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  X..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  Y..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000006_init = function ()
    {
        (asm1.X().init)();
        (asm1["A`1"](asm1.X()).init)();
        (asm1.Y().init)();
        (asm1["I`1"](asm1.X()).init)();
        asm.x6000006 = asm.x6000006_;
    };;
    asm.x6000006 = function ()
    {
        asm.x6000006_init();
        return asm.x6000006_();
    };;
    asm.x6000006_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var loc0;
        CILJS.init_base_types();
        t0 = asm1.X();
        t1 = asm1["A`1"](t0);
        t2 = asm1.Y();
        t3 = asm1["I`1"](t0);
        /* IL_00: nop  */
        /* IL_01: newobj Void .ctor() */
        /* IL_06: stloc.0  */
        loc0 = CILJS.newobj(t1,asm1.x6000003,[null]);
        /* IL_07: ldloc.0  */
        /* IL_08: ldstr test1 */
        /* IL_0D: callvirt Void X[Y](System.String) */
        ((loc0.vtable)["asm1.x6000002"](asm1.Y()))(loc0,CILJS.new_string("test1"));
        /* IL_12: nop  */
        /* IL_13: ldloc.0  */
        /* IL_14: ldstr test2 */
        /* IL_19: callvirt Void X[Y](System.String) */
        ((((loc0.ifacemap)[t3])[t0].x6000001)(asm1.Y()))(loc0,CILJS.new_string("test2"));
        /* IL_1E: nop  */
        /* IL_1F: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    asm["I`1"] = CILJS.declare_type(
        "I_1",
        ["T1"],
        function (T1)
        {
            return {};
        },
        function (T1)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"I`1",false,false,true,true,false,[],[
                    [asm1, "x6000001", "X"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000002",null);
            (this.GenericArguments)["asm1.t2000002"] = [T1];
            this.GenericTypeMetadataName = ("asm1.t2000002<" + (T1.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm1.x6000001","asm1.x6000001");
        },
        "function I_1() { c.init(); }");
    asm["A`1"] = CILJS.declare_type(
        "A_1",
        ["T"],
        function (T)
        {
            return asm0["System.Object"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A`1",false,false,false,true,false,[],[
                    [asm1, "x6000002", "X"]
                ],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            (this.GenericArguments)["asm1.t2000003"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000003<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm1.x6000002","asm1.x6000002");
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
            CILJS.implement_interface(
                this,
                [asm1["I`1"](T), T],
                [
                    ["x6000001", "asm1.x6000002"]
                ]);
        },
        "function A_1() { c.init(); }");
    asm.X = CILJS.declare_type(
        "X",
        [],
        function ()
        {
            return asm0["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"X",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function X() { c.init(); }");
    asm.Y = CILJS.declare_type(
        "Y",
        [],
        function ()
        {
            return asm0["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Y",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function Y() { c.init(); }");
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
    asm.entryPoint = asm.x6000006;
})(asm1 || (asm1 = {}));
if (typeof module != "undefined"){
    module.exports = asm1;
}
//# sourceMappingURL=GenericMethodOnInterfaceBug.cs.ciljs.exe.js.map
