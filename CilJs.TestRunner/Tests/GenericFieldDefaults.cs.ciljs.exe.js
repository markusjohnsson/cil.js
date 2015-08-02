var asm2; (function (asm)
{
    asm.FullName = "GenericFieldDefaults.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A`1..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000002_init = function ()
    {
        ((asm2)["A`1"]((asm0)["System.Object"]()).init)();
        ((asm2)["A`1"]((asm0)["System.Int32"]()).init)();
        asm.x6000002 = asm.x6000002_;
    };;
    asm.x6000002 = function ()
    {
        asm.x6000002_init.apply(this,arguments);
        return asm.x6000002_.apply(this,arguments);
    };;
    asm.x6000002_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var loc0;
        var loc1;
        CILJS.init_base_types();
        t0 = (asm0)["System.Object"]();
        t1 = (asm2)["A`1"](t0);
        t2 = (asm0)["System.Int32"]();
        t3 = (asm2)["A`1"](t2);
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = CILJS.newobj(t1,asm2.x6000001,[null]);
        /* IL_06: ldloc.0 */
        /* IL_07: ldfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_0C: call Void Log(System.Object)*/
        asm1.x6000001(loc0.Value);
        /* IL_11: newobj Void .ctor()*/
        /* IL_16: stloc.1 */
        loc1 = CILJS.newobj(t3,asm2.x6000001,[null]);
        /* IL_17: ldloc.1 */
        /* IL_18: ldfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_1D: box System.Int32*/
        /* IL_22: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': loc1.Value,
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_27: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
            CILJS.init_type(this,asm,"A`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            (this.GenericArguments)["asm2.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000002<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.Value = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000002;
})(asm2 || (asm2 = {}));
