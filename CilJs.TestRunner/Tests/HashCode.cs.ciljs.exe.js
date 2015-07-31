var asm2; (function (asm)
{
    asm.FullName = "HashCode.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
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
        (asm2.A().init)();
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
        var loc0;
        var loc1;
        var loc2;
        CILJS.init_base_types();
        t0 = asm2.A();
        t1 = (asm0)["System.Boolean"]();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = CILJS.newobj(t0,asm2.x6000001,[null]);
        /* IL_06: ldloc.0 */
        /* IL_07: callvirt Int32 GetHashCode()*/
        /* IL_0C: stloc.1 */
        loc1 = ((loc0.vtable)["asm0.x60000f1"]())(loc0);
        /* IL_0D: ldloc.1 */
        /* IL_0E: ldc.i4.0 */
        /* IL_10: ceq */
        /* IL_11: ldc.i4.0 */
        /* IL_13: ceq */
        /* IL_14: box System.Boolean*/
        /* IL_19: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((((loc1 === (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_1E: ldloc.1 */
        /* IL_1F: ldloc.0 */
        /* IL_20: callvirt Int32 GetHashCode()*/
        /* IL_26: ceq */
        /* IL_27: box System.Boolean*/
        /* IL_2C: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((loc1 === ((loc0.vtable)["asm0.x60000f1"]())(loc0)) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_31: newobj Void .ctor()*/
        /* IL_36: stloc.2 */
        loc2 = CILJS.newobj(t0,asm2.x6000001,[null]);
        /* IL_37: ldloc.2 */
        /* IL_38: callvirt Int32 GetHashCode()*/
        /* IL_3D: ldloc.2 */
        /* IL_3E: callvirt Int32 GetHashCode()*/
        /* IL_44: ceq */
        /* IL_45: box System.Boolean*/
        /* IL_4A: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((((loc2.vtable)["asm0.x60000f1"]())(loc2) === ((loc2.vtable)["asm0.x60000f1"]())(loc2)) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_4F: ldloc.2 */
        /* IL_50: callvirt Int32 GetHashCode()*/
        /* IL_55: ldloc.0 */
        /* IL_56: callvirt Int32 GetHashCode()*/
        /* IL_5C: ceq */
        /* IL_5D: ldc.i4.0 */
        /* IL_5F: ceq */
        /* IL_60: box System.Boolean*/
        /* IL_65: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((((((loc2.vtable)["asm0.x60000f1"]())(loc2) === ((loc0.vtable)["asm0.x60000f1"]())(loc0)) ? (1) : (0)) === (0|0)) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_6A: ldstr hello*/
        /* IL_6F: call Void TestString(System.String)*/
        asm2.x6000003(CILJS.new_string("hello"));
        /* IL_74: ret */
        return ;
    };
    /* static System.Void Program.TestString(String)*/
    asm.x6000003 = function TestString(arg0)
    {
        var t0;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Boolean"]();
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr  world*/
        /* IL_06: call String Concat(System.String, System.String)*/
        /* IL_0B: stloc.0 */
        loc0 = asm0.x6000127(arg0,CILJS.new_string(" world"));
        /* IL_0C: ldstr hello world*/
        /* IL_11: stloc.1 */
        loc1 = CILJS.new_string("hello world");
        /* IL_12: ldloc.0 */
        /* IL_13: callvirt Int32 GetHashCode()*/
        /* IL_18: ldloc.1 */
        /* IL_19: callvirt Int32 GetHashCode()*/
        /* IL_1F: ceq */
        /* IL_20: box System.Boolean*/
        /* IL_25: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((((loc0.vtable)["asm0.x60000f1"]())(loc0) === ((loc1.vtable)["asm0.x60000f1"]())(loc1)) ? (1) : (0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_2A: ldloc.0 */
        /* IL_2B: callvirt Int32 GetHashCode()*/
        /* IL_30: ldarg.0 */
        /* IL_31: callvirt Int32 GetHashCode()*/
        /* IL_37: ceq */
        /* IL_38: box System.Boolean*/
        /* IL_3D: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((((loc0.vtable)["asm0.x60000f1"]())(loc0) === ((arg0.vtable)["asm0.x60000f1"]())(arg0)) ? (1) : (0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_42: ret */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
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
