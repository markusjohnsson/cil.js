var asm1;(function (asm)
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
        (asm1.A().init)();
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
        var t1;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc3;
        var loc4;
        var loc2;
        CILJS.init_base_types();
        t0 = asm1.A();
        t1 = (asm0)["System.Object"]();
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
                /* IL_17: br.s IL_35 */
                __pos__ = 0x35;
                continue;
                case 0x19:
                /* IL_19: ldloc.3  */
                /* IL_1A: ldloc.s 4 */
                /* IL_1C: ldelem.ref  */
                /* IL_1D: stloc.2  */
                loc2 = CILJS.ldelem_ref(loc3,loc4);
                /* IL_1E: ldloc.2  */
                /* IL_1F: callvirt String get_Name() */
                /* IL_24: ldc.i4.0  */
                /* IL_25: newarr System.Object */
                /* IL_2A: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(((loc2.vtable)["asm0.x60001a4"]())(loc2),CILJS.new_array(t1,(0|0)));
                /* IL_2F: ldloc.s 4 */
                /* IL_31: ldc.i4.1  */
                /* IL_32: add  */
                /* IL_33: stloc.s 4 */
                loc4 = (loc4 + (1|0)) | (0|0);
                case 0x35:
                /* IL_35: ldloc.s 4 */
                /* IL_37: ldloc.3  */
                /* IL_38: ldlen  */
                /* IL_39: conv.i4  */
                /* IL_3A: blt.s IL_19 */
                
                if (loc4 < (loc3.jsarr.length | (0|0))){
                    __pos__ = 0x19;
                    continue;
                }
                /* IL_3C: ret  */
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
                    [asm1, "x6000001", "X"],
                    [asm1, "x6000002", "Y"],
                    [asm1, "x6000003", "Z"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
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
    asm.entryPoint = asm.x6000005;
})(asm1 || (asm1 = {}));
