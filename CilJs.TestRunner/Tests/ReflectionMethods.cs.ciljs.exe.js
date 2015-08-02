var asm2;(function (asm)
{
    asm.FullName = "ReflectionMethods.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Void A.X()*/
    asm.x6000001 = function X(arg0)
    {
        /* IL_00: ret  */
        return ;
    };;
    /* System.Void A.Y()*/
    asm.x6000002 = function Y(arg0)
    {
        /* IL_00: ret  */
        return ;
    };;
    /* System.Void A.Z()*/
    asm.x6000003 = function Z(arg0)
    {
        /* IL_00: ret  */
        return ;
    };;
    /*  A..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000005_init = function ()
    {
        (asm2.A().init)();
        asm.x6000005 = asm.x6000005_;
    };;
    asm.x6000005 = function ()
    {
        asm.x6000005_init.apply(this,arguments);
        return asm.x6000005_.apply(this,arguments);
    };;
    asm.x6000005_ = function Main()
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc3;
        var loc4;
        var loc2;
        CILJS.init_base_types();
        t0 = asm2.A();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldtoken A */
                /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_0A: stloc.0  */
                loc0 = asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0));
                /* IL_0B: ldloc.0  */
                /* IL_0C: callvirt MethodInfo[] GetMethods() */
                /* IL_11: stloc.1  */
                loc1 = ((loc0.vtable)["asm0.x6000157"]())(loc0);
                /* IL_12: ldloc.1  */
                /* IL_13: stloc.3  */
                loc3 = loc1;
                /* IL_14: ldc.i4.0  */
                /* IL_15: stloc.s 4 */
                loc4 = (0|0);
                /* IL_17: br.s IL_2F */
                __pos__ = 0x2F;
                continue;
                case 0x19:
                /* IL_19: ldloc.3  */
                /* IL_1A: ldloc.s 4 */
                /* IL_1C: ldelem.ref  */
                /* IL_1D: stloc.2  */
                loc2 = CILJS.ldelem_ref(loc3,loc4);
                /* IL_1E: ldloc.2  */
                /* IL_1F: callvirt String get_Name() */
                /* IL_24: call Void Log(System.Object) */
                asm1.x6000001(((loc2.vtable)["asm0.x60001a4"]())(loc2));
                /* IL_29: ldloc.s 4 */
                /* IL_2B: ldc.i4.1  */
                /* IL_2C: add  */
                /* IL_2D: stloc.s 4 */
                loc4 = (loc4 + (1|0)) | (0|0);
                case 0x2F:
                /* IL_2F: ldloc.s 4 */
                /* IL_31: ldloc.3  */
                /* IL_32: ldlen  */
                /* IL_33: conv.i4  */
                /* IL_34: blt.s IL_19 */
                
                if (loc4 < (loc3.jsarr.length | (0|0))){
                    __pos__ = 0x19;
                    continue;
                }
                /* IL_36: ret  */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm2, "x6000001", "X"],
                    [asm2, "x6000002", "Y"],
                    [asm2, "x6000003", "Z"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
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
    asm.entryPoint = asm.x6000005;
})(asm2 || (asm2 = {}));
