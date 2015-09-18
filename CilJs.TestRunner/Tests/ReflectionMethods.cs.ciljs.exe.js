var asm1;(function (asm)
{
    asm.FullName = "ReflectionMethods.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Void A.X()*/
    asm.x6000001 = function X(arg0)
    {
        /* IL_00: nop  */
        /* IL_01: ret  */
        return ;
    };;
    /* System.Void A.Y()*/
    asm.x6000002 = function Y(arg0)
    {
        /* IL_00: nop  */
        /* IL_01: ret  */
        return ;
    };;
    /* System.Void A.Z()*/
    asm.x6000003 = function Z(arg0)
    {
        /* IL_00: nop  */
        /* IL_01: ret  */
        return ;
    };;
    /*  A..ctor()*/
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
        var loc2;
        var loc3;
        var loc4;
        CILJS.init_base_types();
        t0 = asm1.A();
        t1 = (asm0)["System.Object"]();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldtoken A */
                /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_0B: stloc.0  */
                loc0 = asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0));
                /* IL_0C: ldloc.0  */
                /* IL_0D: callvirt MethodInfo[] GetMethods() */
                /* IL_12: stloc.1  */
                loc1 = ((loc0.vtable)["asm0.x6000157"]())(loc0);
                /* IL_13: nop  */
                
                /* IL_14: ldloc.1  */
                /* IL_15: stloc.2  */
                loc2 = loc1;
                /* IL_16: ldc.i4.0  */
                /* IL_17: stloc.3  */
                loc3 = (0|0);
                /* IL_18: br.s IL_36 */
                __pos__ = 0x36;
                continue;
                case 0x1A:
                /* IL_1A: ldloc.2  */
                /* IL_1B: ldloc.3  */
                /* IL_1C: ldelem.ref  */
                /* IL_1D: stloc.s 4 */
                loc4 = CILJS.ldelem_ref(loc2,loc3);
                /* IL_1F: ldloc.s 4 */
                /* IL_21: callvirt String get_Name() */
                /* IL_26: ldc.i4.0  */
                /* IL_27: newarr System.Object */
                /* IL_2C: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(((loc4.vtable)["asm0.x60001a4"]())(loc4),CILJS.new_array(t1,(0|0)));
                /* IL_31: nop  */
                
                /* IL_32: ldloc.3  */
                /* IL_33: ldc.i4.1  */
                /* IL_34: add  */
                /* IL_35: stloc.3  */
                loc3 = (loc3 + (1|0)) | (0|0);
                case 0x36:
                /* IL_36: ldloc.3  */
                /* IL_37: ldloc.2  */
                /* IL_38: ldlen  */
                /* IL_39: conv.i4  */
                /* IL_3A: blt.s IL_1A */
                
                if (loc3 < (loc2.jsarr.length | (0|0))){
                    __pos__ = 0x1A;
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
