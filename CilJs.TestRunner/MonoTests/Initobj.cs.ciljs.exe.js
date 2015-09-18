var asm1;(function (asm)
{
    asm.FullName = "Initobj.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static T Program.CreateDefault<T>()*/
    asm.x6000002 = function (T)
    {
        return function CreateDefault()
        {
            var t0;
            var loc0;
            var loc1;
            t0 = T;
            loc0 = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            /* IL_00: nop  */
            /* IL_01: ldloca.s 0 */
            /* IL_04: initobj T */
            loc0 = ((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null));
            /* IL_09: ldloc.0  */
            /* IL_0A: stloc.1  */
            loc1 = loc0;
            /* IL_0D: ldloc.1  */
            /* IL_0E: ret  */
            return loc1;
        };
    };;
    /* static System.Void Program.Main()*/
    asm.x6000003 = function Main()
    {
        var t0;
        var t1;
        CILJS.init_base_types();
        t0 = (asm0)["System.Int32"]();
        t1 = (asm0)["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldc.i4.0  */
        /* IL_02: box System.Int32 */
        /* IL_07: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (0|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0C: nop  */
        /* IL_0D: ldnull  */
        /* IL_0E: ldc.i4.0  */
        /* IL_0F: newarr System.Object */
        /* IL_14: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(null,CILJS.new_array(t1,(0|0)));
        /* IL_19: nop  */
        /* IL_1A: ldnull  */
        /* IL_1B: call Void WriteLine(System.Object) */
        asm0.x600005a(null);
        /* IL_20: nop  */
        /* IL_21: ret  */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000003;
})(asm1 || (asm1 = {}));
